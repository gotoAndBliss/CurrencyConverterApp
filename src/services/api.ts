import axios from 'axios';

interface RawCurrencyRate {
  name: string;
  code: string;
  rate: number;
  date: string;
}

interface CurrencyRate {
  country: string;
  currency: string;
  conversionRate: number;
  lastUpdated: Date | null;
}

export const fetchCurrencyRates = async (): Promise<CurrencyRate[]> => {
  try {
    const response = await axios.get<Record<string, RawCurrencyRate>>('https://www.floatrates.com/daily/usd.json');

    if (typeof response.data !== 'object') {
      console.error('Invalid data format received from API');
      return [];
    }

    return Object.values(response.data).map((rate: RawCurrencyRate) => ({
      country: rate.name,
      currency: rate.code,
      conversionRate: rate.rate,
      lastUpdated: rate.date ? new Date(rate.date) : null,
    }));
  } catch (error) {
    console.error('Error fetching currency rates', error);
    return [];
  }
};
