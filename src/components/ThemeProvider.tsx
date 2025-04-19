"use client";

import { ReactNode } from "react";
import ThemeWrapper from "./ThemeWrapper";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeWrapper>{children}</ThemeWrapper>;
}
