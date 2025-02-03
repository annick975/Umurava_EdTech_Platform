import { Work_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "100", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Umurava",
  description: "Build Work Experience through Skills Challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
