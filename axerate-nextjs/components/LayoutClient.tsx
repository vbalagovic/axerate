"use client";

import { ThemeProvider } from "./ThemeProvider";
import Header from "./Header";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Header />
      {children}
    </ThemeProvider>
  );
}
