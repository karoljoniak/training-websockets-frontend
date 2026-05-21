import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { Providers } from "@/providers/providers";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Logowanie",
  description: "Logowanie do aplikacji",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={cn("dark font-sans", geist.variable)}>
      <body className="min-h-svh antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
