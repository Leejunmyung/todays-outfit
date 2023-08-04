import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRef } from 'react';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
      cacheTime: 20 * 1000,
      retry: 2,
      retryDelay: 1000,
      // enabled: false,
      staleTime: 3600000,
      onError: (error: any) => {
        console.log(error);
      },
    },
    mutations: {},
  },
});

interface ReactQueryWrapperProps {
  children: React.ReactNode;
}

const ReactQueryWrapper = ({ children }: ReactQueryWrapperProps) => {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = queryClient;
  }
  return <QueryClientProvider client={queryClientRef.current}>{children}</QueryClientProvider>;
};

export default ReactQueryWrapper;
