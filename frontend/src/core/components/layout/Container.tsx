"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../query-client/queryClient";
import Sidebar from "./Sidebar";

const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-screen bg-(--bg) text-(--text) max-md:h-full max-md:flex-col">
        <Sidebar />
        <main className="flex min-w-0 flex-1 flex-col">{children}</main>
      </div>
    </QueryClientProvider>
  );
};

export default Container;
