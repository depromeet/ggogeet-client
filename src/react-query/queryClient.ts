import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: (error: unknown) =>
        error instanceof Error ? error.message : 'error connecting to server',
    },
  },
})
