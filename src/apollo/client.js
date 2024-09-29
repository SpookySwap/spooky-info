import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://gateway-arbitrum.network.thegraph.com/api/69161e1b3d98c04eaac0159a71bed889/subgraphs/id/HyhMfT7gehNHMBmFiExqeg3pDtop9UikjvBPfAXT3b21'
    ,
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://gateway-arbitrum.network.thegraph.com/api/69161e1b3d98c04eaac0159a71bed889/subgraphs/id/HyhMfT7gehNHMBmFiExqeg3pDtop9UikjvBPfAXT3b21',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const stakingClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/way2rach/talisman',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.goldsky.com/api/public/project_clss7z2o15cxh010fdvq909x6/subgraphs/blocks/fantom/gn',
  }),
  cache: new InMemoryCache(),
})
