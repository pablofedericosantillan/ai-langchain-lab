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
      <div className="flex max-md:flex-col bg-main-background max-md:px-4 h-screen max-md:h-full">
        <Sidebar />
          <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </QueryClientProvider>
  );
};

export default Container;
