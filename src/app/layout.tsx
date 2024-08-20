import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({ 
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Contact Form",
  description: "Contact Form - Next, TS, Tailwind, React hook form, zod",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={karla.className}>{children}</body>
    </html>
  );
}
