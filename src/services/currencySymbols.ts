const currencySymbols: { [key: string]: string } = {
  USD: '$',     // United States Dollar
  EUR: '€',     // Euro
  JPY: '¥',     // Japanese Yen
  GBP: '£',     // British Pound
  AUD: 'A$',    // Australian Dollar
  CAD: 'C$',    // Canadian Dollar
  CNY: '¥',     // Chinese Yuan
  HKD: 'HK$',   // Hong Kong Dollar
  IDR: 'Rp',    // Indonesian Rupiah
  INR: '₹',     // Indian Rupee
  KRW: '₩',     // South Korean Won
  MYR: 'RM',    // Malaysian Ringgit
  NZD: 'NZ$',   // New Zealand Dollar
  PHP: '₱',     // Philippine Peso
  SGD: 'S$',    // Singapore Dollar
  THB: '฿',     // Thai Baht
  TWD: 'NT$',   // New Taiwan Dollar
  VND: '₫',     // Vietnamese Dong
  BGN: 'лв',    // Bulgarian Lev
  BRL: 'R$',    // Brazilian Real
  CHF: 'CHF',   // Swiss Franc
  CLP: 'CLP$',  // Chilean Peso
  CZK: 'Kč',    // Czech Koruna
  DKK: 'kr',    // Danish Krone
  HUF: 'Ft',    // Hungarian Forint
  ILS: '₪',     // Israeli New Shekel
  ISK: 'kr',    // Icelandic Krona
  MXN: 'Mex$',  // Mexican Peso
  NOK: 'kr',    // Norwegian Krone
  PLN: 'zł',    // Polish Zloty
  RON: 'lei',   // Romanian Leu
  SEK: 'kr',    // Swedish Krona
  TRY: '₺',     // Turkish Lira
  UAH: '₴',     // Ukrainian Hryvnia
  ZAR: 'R',     // South African Rand
  AED: 'د.إ',   // UAE Dirham
  EGP: 'E£',    // Egyptian Pound
  MDL: 'L',     // Moldovan Leu
  RSD: 'din',   // Serbian Dinar
  RUB: '₽',     // Russian Ruble
  AMD: '֏',     // Armenian Dram
  AZN: '₼',     // Azerbaijani Manat
  BDT: '৳',     // Bangladeshi Taka
  DOP: 'RD$',   // Dominican Peso
  DZD: 'د.ج',   // Algerian Dinar
  GEL: '₾',     // Georgian Lari
  IQD: 'ع.د',   // Iraqi Dinar
  KGS: 'с',     // Kyrgyzstani Som
  KZT: '₸',     // Kazakhstani Tenge
  LYD: 'ل.د',   // Libyan Dinar
  MAD: 'د.م.',  // Moroccan Dirham
  PKR: '₨',     // Pakistani Rupee
  SAR: 'ر.س',   // Saudi Riyal
  TJS: 'ЅМ',    // Tajikistani Somoni
  TMT: 'm',     // Turkmenistani Manat
  TND: 'د.ت',   // Tunisian Dinar
  UZS: 'сўм',   // Uzbekistani Som
  XAF: 'CFA',   // Central African CFA Franc
  XOF: 'CFA',   // West African CFA Franc
  BYN: 'Br',    // Belarusian Ruble
  VES: 'Bs.S',  // Venezuelan Bolivar
  ARS: 'AR$',   // Argentine Peso
  BOB: 'Bs.',   // Bolivian Boliviano
  COP: 'COL$',  // Colombian Peso
  CRC: '₡',     // Costa Rican Colón
  HTG: 'G',     // Haitian Gourde
  PAB: 'B/.',   // Panamanian Balboa
  PEN: 'S/',    // Peruvian Nuevo Sol
  PYG: '₲',     // Paraguayan Guaraní
  UYU: '$U',    // Uruguayan Peso
  NGN: '₦',     // Nigerian Naira
  AFN: '؋',     // Afghan Afghani
  ALL: 'L',     // Albanian Lek
  ANG: 'ƒ',     // Netherlands Antillean Guilder
  AOA: 'Kz',    // Angolan Kwanza
  AWG: 'ƒ',     // Aruban Florin
  BAM: 'KM',    // Bosnian Convertible Mark
  BBD: 'Bds$',  // Barbadian Dollar
  BHD: 'BD',    // Bahraini Dinar
  BIF: 'FBu',   // Burundian Franc
  BND: 'B$',    // Brunei Dollar
  BSD: 'B$',    // Bahamian Dollar
  BWP: 'P',     // Botswana Pula
  BZD: 'BZ$',   // Belize Dollar
  CDF: 'FC',    // Congolese Franc
  CUP: '₱',     // Cuban Peso
  CVE: 'Esc',   // Cape Verdean Escudo
  DJF: 'Fdj',   // Djiboutian Franc
  ERN: 'Nfk',   // Eritrean Nakfa
  ETB: 'Br',    // Ethiopian Birr
  FJD: 'FJ$',   // Fijian Dollar
  GHS: 'GH₵',   // Ghanaian Cedi
  GIP: '£',     // Gibraltar Pound
  GMD: 'D',     // Gambian Dalasi
  GNF: 'FG',    // Guinean Franc
  GTQ: 'Q',     // Guatemalan Quetzal
  GYD: 'G$',    // Guyanese Dollar
  HNL: 'L',     // Honduran Lempira
  IRR: '﷼',     // Iranian Rial
  JMD: 'J$',    // Jamaican Dollar
  JOD: 'د.ا',   // Jordanian Dinar
  KES: 'KSh',   // Kenyan Shilling
  KHR: '៛',     // Cambodian Riel
  KMF: 'CF',    // Comorian Franc
  KWD: 'KD',    // Kuwaiti Dinar
  LAK: '₭',     // Lao Kip
  LBP: 'ل.ل',   // Lebanese Pound
  LKR: 'Rs',    // Sri Lankan Rupee
  LRD: 'L$',    // Liberian Dollar
  LSL: 'L',     // Lesotho Loti
  MGA: 'Ar',    // Malagasy Ariary
  MKD: 'ден',   // Macedonian Denar
  MMK: 'K',     // Myanmar Kyat
  MNT: '₮',     // Mongolian Tögrög
  MOP: 'MOP$',  // Macanese Pataca
  MRU: 'UM',    // Mauritanian Ouguiya
  MUR: '₨',     // Mauritian Rupee
  MVR: 'Rf',    // Maldivian Rufiyaa
  MWK: 'MK',    // Malawian Kwacha
  MZN: 'MT',    // Mozambican Metical
  NAD: 'N$',    // Namibian Dollar
  NIO: 'C$',    // Nicaraguan Córdoba
  NPR: '₨',     // Nepalese Rupee
  OMR: '﷼',     // Omani Rial
  PGK: 'K',     // Papua New Guinean Kina
  QAR: 'ر.ق',   // Qatari Riyal
  RWF: 'FRw',   // Rwandan Franc
  SBD: 'SI$',   // Solomon Islands Dollar
  SCR: '₨',     // Seychellois Rupee
  SDG: 'ج.س.',  // Sudanese Pound
  SOS: 'Sh',    // Somali Shilling
  SRD: '$',     // Surinamese Dollar
  SSP: '£',     // South Sudanese Pound
  STN: 'Db',    // São Tomé and Príncipe Dobra
  SVC: '$',     // Salvadoran Colón
  SYP: '£S',    // Syrian Pound
  SZL: 'L',     // Swazi Lilangeni
  TOP: 'T$',    // Tongan Paʻanga
  TTD: 'TT$',   // Trinidad and Tobago Dollar
  TZS: 'TSh',   // Tanzanian Shilling
  UGX: 'USh',   // Ugandan Shilling
  VUV: 'VT',    // Vanuatu Vatu
  WST: 'WS$',   // Samoan Tala
  XCD: 'EC$',   // East Caribbean Dollar
  XPF: '₣',     // CFP Franc
  YER: '﷼',     // Yemeni Rial
  ZMW: 'ZK',    // Zambian Kwacha
};

export default currencySymbols;