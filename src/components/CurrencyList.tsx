import React, { useState, useEffect } from 'react';
import { 
  View, Text, FlatList, ActivityIndicator, 
  StyleSheet, TextInput, SafeAreaView } from 'react-native';
import useCurrencyStore from '../stores/useCurrencyStore';
import currencyToCountryMap from '../services/currencyToCountryMap';
import currencySymbols from '../services/currencySymbols';
import CountryFlag from 'react-native-country-flag';

interface CurrencyRate {
  country: string;
  currency: string;
  conversionRate: number;
  lastUpdated: Date | null | undefined;
}

const CurrencyList: React.FC = () => {
  const { rates, fetchRates } = useCurrencyStore();

  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRates, setFilteredRates] = useState(rates);  

  useEffect(() => {
    const fetchData = async () => {
      await fetchRates();
      setLoading(false);
    };

    fetchData();
    const interval = setInterval(() => {
      fetchRates();
    }, 10000); // Fetch every 10 seconds

    return () => clearInterval(interval);
  }, [fetchRates]);

  useEffect(() => {
    if (searchQuery === '') {
      // Default to Highest Conversion Rate First
      setFilteredRates(sortedRates);
    } else {    
      // Filter rates based on search query (by currency or country name)
      setFilteredRates(
        rates.filter((rate) => 
          rate.currency.toLowerCase().includes(searchQuery.toLowerCase()) || 
          rate.country.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, rates]);  

  // Highest Conversion Rate First
  const sortedRates = [...rates].sort((a, b) => b.conversionRate - a.conversionRate);

  const logMissingMappings = (currencyCode: string) => {
    console.warn(`Missing currency mapping for: ${currencyCode}`);
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Fetching currency rates, please wait...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search by currency or country"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />    
      <FlatList
        data={filteredRates}
        keyExtractor={(item: CurrencyRate) => item.currency || Math.random().toString()}
        renderItem={({ item }: { item: CurrencyRate }) => {
          const isoCode = item.currency && currencyToCountryMap[item.currency] ? currencyToCountryMap[item.currency] : null;

          return (
            <View style={styles.row}>
              <View style={styles.flagContainer}>
                {isoCode ? (
                  <CountryFlag isoCode={isoCode} size={25} style={styles.flagContainer} />
                ) : (
                  <View style={styles.placeholderFlag} />
                )}
              </View>

              <View style={styles.currencyInfo}>
                <Text style={styles.currencyText}>{item.currency}</Text>
                <Text style={styles.countryText}>{item.country}</Text>
              </View>

              <View style={styles.rateInfo}>
                <Text style={styles.rateText}>
                 {currencySymbols[item.currency] || '$'}
                  {' '}
                  {item.conversionRate !== undefined && item.conversionRate !== null
                    ? item.conversionRate.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })
                    : 'N/A'}
                </Text>
                <Text style={styles.lastUpdatedText}>
                  {item.lastUpdated ? new Date(item.lastUpdated).toLocaleString() : 'N/A'}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    paddingLeft: 10,
  },    
  row: {
    flexDirection: 'row',
    padding: 10,
    borderColor: '#ccc',
    borderTopWidth: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'space-between', // Spread columns evenly
  },
  flagContainer: {
    width: 30,
    height: 30,
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderFlag: {
    width: 50,
    height: 50,
    backgroundColor: '#ddd',
    borderRadius: 25,
  },
  currencyInfo: {
    flex: 1,
    marginLeft: 10,
  },
  currencyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  countryText: {
    fontSize: 14,
    color: '#555',
  },
  rateInfo: {
    alignItems: 'flex-end',
  },
  rateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastUpdatedText: {
    fontSize: 12,
    color: '#555',
  },
  loading: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },  
});

export default CurrencyList;
