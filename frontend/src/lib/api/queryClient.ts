import { QueryClient, defaultShouldDehydrateQuery, isServer } from '@tanstack/react-query'

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
      dehydrate: {
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) || query.state.status === 'pending',
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined = undefined

const globalForServer = globalThis as unknown as {
  __queryClient?: QueryClient
}

export function getQueryClient(): QueryClient {
  if (!isServer) {
    if (!browserQueryClient) {
      browserQueryClient = makeQueryClient()
    }
    return browserQueryClient
  }

  if (!globalForServer.__queryClient) {
    globalForServer.__queryClient = makeQueryClient()
  }

  return globalForServer.__queryClient
}
