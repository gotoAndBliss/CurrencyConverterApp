const currencyToCountryMap: { [key: string]: string } = {
  USD: 'US', // United States
  EUR: 'EU', // European Union
  JPY: 'JP', // Japan
  GBP: 'GB', // United Kingdom
  AUD: 'AU', // Australia
  CAD: 'CA', // Canada
  CNY: 'CN', // China
  HKD: 'HK', // Hong Kong
  IDR: 'ID', // Indonesia
  INR: 'IN', // India
  KRW: 'KR', // South Korea
  MYR: 'MY', // Malaysia
  NZD: 'NZ', // New Zealand
  PHP: 'PH', // Philippines
  SGD: 'SG', // Singapore
  THB: 'TH', // Thailand
  TWD: 'TW', // Taiwan
  VND: 'VN', // Vietnam
  BGN: 'BG', // Bulgaria
  BRL: 'BR', // Brazil
  CHF: 'CH', // Switzerland
  CLP: 'CL', // Chile
  CZK: 'CZ', // Czech Republic
  DKK: 'DK', // Denmark
  HUF: 'HU', // Hungary
  ILS: 'IL', // Israel
  ISK: 'IS', // Iceland
  MXN: 'MX', // Mexico
  NOK: 'NO', // Norway
  PLN: 'PL', // Poland
  RON: 'RO', // Romania
  SEK: 'SE', // Sweden
  TRY: 'TR', // Turkey
  UAH: 'UA', // Ukraine
  ZAR: 'ZA', // South Africa
  AED: 'AE', // United Arab Emirates
  EGP: 'EG', // Egypt
  MDL: 'MD', // Moldova
  RSD: 'RS', // Serbia
  RUB: 'RU', // Russia
  AMD: 'AM', // Armenia
  AZN: 'AZ', // Azerbaijan
  BDT: 'BD', // Bangladesh
  DOP: 'DO', // Dominican Republic
  DZD: 'DZ', // Algeria
  GEL: 'GE', // Georgia
  IQD: 'IQ', // Iraq
  KGS: 'KG', // Kyrgyzstan
  KZT: 'KZ', // Kazakhstan
  LYD: 'LY', // Libya
  MAD: 'MA', // Morocco
  PKR: 'PK', // Pakistan
  SAR: 'SA', // Saudi Arabia
  TJS: 'TJ', // Tajikistan
  TMT: 'TM', // Turkmenistan
  TND: 'TN', // Tunisia
  UZS: 'UZ', // Uzbekistan
  XAF: 'CM', // Central African CFA franc (Cameroon)
  XOF: 'SN', // West African CFA franc (Senegal)
  BYN: 'BY', // Belarus
  VES: 'VE', // Venezuela
  ARS: 'AR', // Argentina
  BOB: 'BO', // Bolivia
  COP: 'CO', // Colombia
  CRC: 'CR', // Costa Rica
  HTG: 'HT', // Haiti
  PAB: 'PA', // Panama
  PEN: 'PE', // Peru
  PYG: 'PY', // Paraguay
  UYU: 'UY', // Uruguay
  NGN: 'NG', // Nigeria
  AFN: 'AF', // Afghanistan
  ALL: 'AL', // Albania
  ANG: 'AN', // Netherlands Antilles
  AOA: 'AO', // Angola
  AWG: 'AW', // Aruba
  BAM: 'BA', // Bosnia and Herzegovina
  BBD: 'BB', // Barbados
  BHD: 'BH', // Bahrain
  BIF: 'BI', // Burundi
  BND: 'BN', // Brunei
  BSD: 'BS', // Bahamas
  BWP: 'BW', // Botswana
  BZD: 'BZ', // Belize
  CDF: 'CD', // Democratic Republic of the Congo
  CUP: 'CU', // Cuba
  CVE: 'CV', // Cape Verde
  DJF: 'DJ', // Djibouti
  ERN: 'ER', // Eritrea
  ETB: 'ET', // Ethiopia
  FJD: 'FJ', // Fiji
  GHS: 'GH', // Ghana
  GIP: 'GI', // Gibraltar
  GMD: 'GM', // Gambia
  GNF: 'GN', // Guinea
  GTQ: 'GT', // Guatemala
  GYD: 'GY', // Guyana
  HNL: 'HN', // Honduras
  IRR: 'IR', // Iran
  JMD: 'JM', // Jamaica
  JOD: 'JO', // Jordan
  KES: 'KE', // Kenya
  KHR: 'KH', // Cambodia
  KMF: 'KM', // Comoros
  KWD: 'KW', // Kuwait
  LAK: 'LA', // Laos
  LBP: 'LB', // Lebanon
  LKR: 'LK', // Sri Lanka
  LRD: 'LR', // Liberia
  LSL: 'LS', // Lesotho
  MGA: 'MG', // Madagascar
  MKD: 'MK', // North Macedonia
  MMK: 'MM', // Myanmar
  MNT: 'MN', // Mongolia
  MOP: 'MO', // Macau
  MRU: 'MR', // Mauritania
  MUR: 'MU', // Mauritius
  MVR: 'MV', // Maldives
  MWK: 'MW', // Malawi
  MZN: 'MZ', // Mozambique
  NAD: 'NA', // Namibia
  NIO: 'NI', // Nicaragua
  NPR: 'NP', // Nepal
  OMR: 'OM', // Oman
  PGK: 'PG', // Papua New Guinea
  QAR: 'QA', // Qatar
  RWF: 'RW', // Rwanda
  SBD: 'SB', // Solomon Islands
  SCR: 'SC', // Seychelles
  SDG: 'SD', // Sudan
  SOS: 'SO', // Somalia
  SRD: 'SR', // Suriname
  SSP: 'SS', // South Sudan
  STN: 'ST', // São Tomé and Príncipe
  SVC: 'SV', // El Salvador
  SYP: 'SY', // Syria
  SZL: 'SZ', // Eswatini (Swaziland)
  TOP: 'TO', // Tonga
  TTD: 'TT', // Trinidad and Tobago
  TZS: 'TZ', // Tanzania
  UGX: 'UG', // Uganda
  VUV: 'VU', // Vanuatu
  WST: 'WS', // Samoa
  XCD: 'AG', // East Caribbean dollar (Antigua and Barbuda)
  XPF: 'PF', // CFP franc (French Polynesia)
  YER: 'YE', // Yemen
  ZMW: 'ZM', // Zambia
};

export default currencyToCountryMap