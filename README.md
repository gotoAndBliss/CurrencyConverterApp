# 🌍 Currency Converter App

This is a **cross-platform** mobile app built using **React Native**, **Expo**, and **Zustand**. It displays a list of currency conversion rates for various currencies relative to USD, fetched from the Floatrates API. The app features real-time updates, persistent data storage, search functionality, and a beautifully styled UI.

---

## 📋 Must Haves

This project fulfills the following requirements:

### 1. **Single Screen** 📱
- The app consists of a **single screen** showing a list of currency conversion rates.

### 2. **List Information** 📄
Each list item displays:
- 🌎 **Country Name**: The name of the country for the currency.
- 💵 **Currency Name**: The official currency name (e.g., USD, GBP, etc.).
- 💱 **Conversion Rate**: The conversion rate from USD to the selected currency.
- ⏳ **Last Update**: Date and time of the last conversion rate update.

### 3. **Real-Time Fetching** ⏰
- The app fetches **real-time currency data** from the Floatrates API every **10 seconds**.
- Data is **persisted** using a Zustand store for state management, ensuring the list is always up-to-date.

### 4. **Sorting by Rates** 🔢
- The list automatically sorts the currencies with the **highest and lowest conversion rates** at the top of the list.

---

## 🎯 Features

### 🌐 **Flag Symbols**
- Each currency is displayed alongside its corresponding **country flag**, offering a visual indicator for easy identification.

### 💲 **Currency Symbols**
- The app also displays the **currency symbol** for each currency (e.g., $, €, ¥) with proper formatting and spacing between the symbol and conversion rate.

### 🔍 **Search Functionality**
- Users can easily **search** by currency code or country name via the search bar at the top of the screen.

---

## 🛠️ How It Works

### ⚙️ **Functionality and Robustness**
- The app ensures smooth, real-time updates of currency rates, with a persistent store powered by **Zustand**.
- **Data fetching** happens every 10 seconds, ensuring accurate and up-to-date conversion rates.

### 📝 **Code Quality**
- The project follows **best practices** with clear variable naming, efficient state management, and modularized components for reusability.
- Styled using **native** elements, keeping the UI clean, simple, and easy to read.

### 📂 **Version Control and Maintenance**
- Git is used for version control, with **well-documented commits** tracking the progress of the project from start to finish.

### 🎨 **User Interface Quality**
- The app leverages **tailored styling**, featuring:
  - A clean and modern **UI design**.
  - A **centered layout** that makes the list easy to read.
  - Smooth transitions and **rounded icons** for currency flags.

---

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/CurrencyConverterApp.git
   ```
2. **Install Dependencies:**
   ```bash
   cd CurrencyConverterApp
    npm install
   ```
3. **Run the App:**
   ```bash
   cd CurrencyConverterApp
   npm install
   ```

## ✨ Technologies Used

- **React Native**
- **Expo**
- **Zustand** for state management
- **Axios** for API calls
- **react-native-country-flag** for flag icons
- **Floatrates API** for currency conversion rates

---

## 🚀 Future Improvements

- Pagination for handling larger sets of currency data.
- User-selected base currency for conversions other than USD. Why not!
---
