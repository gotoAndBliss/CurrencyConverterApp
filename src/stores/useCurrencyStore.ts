import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, PersistStorage } from 'zustand/middleware';
import { fetchCurrencyRates } from './../services/api';

interface CurrencyRate {
  country: string;
  currency: string;
  conversionRate: number;
  lastUpdated: Date;
}

interface CurrencyStore {
  rates: CurrencyRate[];
  fetchRates: () => Promise<void>;
}

const storage: PersistStorage<CurrencyStore> = {
  getItem: async (name: string) => {
    const value = await AsyncStorage.getItem(name);
    return value ? JSON.parse(value) : null;
  },
  setItem: async (name: string, value) => {
    await AsyncStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: async (name: string) => {
    await AsyncStorage.removeItem(name);
  },
};

const useCurrencyStore = create<CurrencyStore>()(
  persist(
    (set) => ({
      rates: [],
      fetchRates: async () => {
        const rates = await fetchCurrencyRates();
        set({ rates });
      },
    }),
    {
      name: 'currency-store',
      storage: storage,
    }
  )
);

export default useCurrencyStore;
