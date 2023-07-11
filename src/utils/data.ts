interface BasicData {
  token0?: {
    id: string
    name: string
    symbol: string
  }
  token1?: {
    id: string
    name: string
    symbol: string
  }
}

// Override data return from graph - usually because proxy token has changed
// names since entitiy was created in subgraph
// keys are lowercase token addresses <--------
const TOKEN_OVERRIDES: { [address: string]: { name: string; symbol: string } } = {
  '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83': {
    name: 'Fantom (Wrapped)',
    symbol: 'FTM',
  },
  '0x28a92dde19d9989f39a49905d7c9c2fac7799bdf': {
    name: 'LayerZero USDC',
    symbol: 'lzUSDC',
  },
  '0x695921034f0387eac4e11620ee91b1b15a6a09fe': {
    name: 'LayerZero WETH',
    symbol: 'lzWETH',
  },
  '0xf1648C50d2863f780c57849D812b4B7686031A3D': {
    name: 'LayerZero BTC',
    symbol: 'lzUSDC',
  },
  '0x04068da6c83afcfa0e13ba15a6696662335d5b75': {
    name: 'Multichain (Anyswap) USDC',
    symbol: 'multiUSDC',
  },
  '0x74b23882a30290451a17c44f4f05243b6b58c76d': {
    name: 'Multichain (Anyswap) WETH',
    symbol: 'multiWETH',
  },
  '0x321162cd933e2be498cd2267a90534a804051b11': {
    name: 'Multichain (Anyswap) BTC',
    symbol: 'multiBTC',
  },
  '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e': {
    name: 'Multichain (Anyswap) DAI',
    symbol: 'multiDAI',
  },
}

// override tokens with incorrect symbol or names
export function updateNameData(data: BasicData): BasicData | undefined {
  if (data?.token0?.id && Object.keys(TOKEN_OVERRIDES).includes(data.token0.id)) {
    data.token0.name = TOKEN_OVERRIDES[data.token0.id].name
    data.token0.symbol = TOKEN_OVERRIDES[data.token0.id].symbol
  }

  if (data?.token1?.id && Object.keys(TOKEN_OVERRIDES).includes(data.token1.id)) {
    data.token1.name = TOKEN_OVERRIDES[data.token1.id].name
    data.token1.symbol = TOKEN_OVERRIDES[data.token1.id].symbol
  }

  return data
}
