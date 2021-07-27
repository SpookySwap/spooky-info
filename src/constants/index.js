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
  '0x7df4eaa13fba3aa7ec3b77b412566e5204e1539a',
  '0x0fd72ba4e27ba45da0a2a1b45b395a2994751e96',
  '0xaa348cde30eca12ac31d21c3007f06d4c8e577ce',
  '0xd7d5d35883d46d77592d3bff7f1d2414eae01602'
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
  '0xf6c7197eaff13002a7b2a2e835a7bb6969a4b026'
]
