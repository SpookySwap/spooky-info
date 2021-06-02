export const FACTORY_ADDRESS = '0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  HALF_YEAR: '6 months',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://www.coingecko.com/tokens_list/uniswap/defi_100/v_0_0_0.json',
]

// hide from overview list
export const TOKEN_BLACKLIST = [
  '0xdea0102f2d45a944a720a1cdef87ec8366ea04f5',
  '0x3c393ed453c1017315d4401f6097ea4b944c06ac',
  '0x6e0aa9718c56ef5d19ccf57955284c7cd95737be',
  '0x4c89b40ea5408786e158b60c2711c8d28e7ad32d',
  '0xe4ef5a727ef598722bddc8c6ec33a31258d6a42f',
  '0xfd3b077dc97915ab3a49db1b1021c13ad55751dc',
  '0x0bbf5349d884d135a907040187e0f4e04d05129c',
  '0x3d5f8fb7e5de6bf2c1944d24c94ef48b84ad13c6',
  '0x556ae63bfb80c608589a5c78b456b2fa9145a0a3',
  '0xf3a61c7d53442ac00a3a99761c5839f9109f2193',
  '0x7df4eaa13fba3aa7ec3b77b412566e5204e1539a'

]

// pair blacklist
export const PAIR_BLACKLIST = [
  '0x8c1c4da6754cfbc37e09620ef2774fe59e7bba88'
]

// warnings to display if page contains info about blocked token
export const BLOCKED_WARNINGS = {
}

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = []

export const UNTRACKED_COPY = 'Derived USD values may be inaccurate without liquid stablecoin or FTM pairings.'

// tokens that should be tracked but arent due to lag in subgraph
export const TRACKED_OVERRIDES = [

]
/*
  '0xfdb9ab8b9513ad9e419cf19530fee49d412c3ee3', // ftm-btc
  '0x623ee4a7f290d11c11315994db70fb148b13021d', // ftm-ice
  '0xebf374bb21d83cf010cc7363918776adf6ff2bf6', // ftm-aave
  '0x1c94665fd3ecfa969feda7ed01e35522e6982022', // ftm-badger
  '0x91b39d5584e2a7dc829f696235742cc293f2e8cf', // ftm-band
  '0x5dc7848bf215f1d99f2af3d2bf78fcdf238ee34b', // ftm-cover
  '0xb471ac6ef617e952b84c6a9ff5de65a9da96c93b', // crv-ftm
  '0xe120ffbda0d14f3bb6d6053e90e63c572a66a428', // ftm-dai
  '0x5965e53aa80a0bcf1cd6dbdd72e6a9b2aa047410', // fusdt-ftm
  '0x89d9bc2f2d091cfbfc31e333d6dc555ddbc2fd29', // ftm-link
  '0x01424c64c4744769299019be64f3d82898ff28f3', // ftm-sfi
  '0x06d173628be105fe81f1c82c9979ba79ebcafcb7', // ftm-snx
  '0xf84e313b36e86315af7a06ff26c8b20e9eb443c3', // ftm-sushi
  '0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c', // usdc-ftm
  '0xf0702249f4d3a25cd3ded7859a165693685ab577', // ftm-weth
  '0xbf4d61d4cec3a9dff7452d8987e1cc2943e2eb4c', // ftm-yfi
  '0xb77b223490e1f5951ec79a8d09db9eab2adcb934' // ftm-cream
  */