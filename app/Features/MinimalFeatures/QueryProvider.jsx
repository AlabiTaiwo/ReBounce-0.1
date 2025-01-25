"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function QueryProviders({ children }) {
  const Client = new QueryClient();
  return <QueryClientProvider client={Client}>{children}</QueryClientProvider>;
}
