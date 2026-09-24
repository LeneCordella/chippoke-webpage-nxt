import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import PageContainer from "./components/PageContainer";
import { NextIntlClientProvider } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jucilene's Webpage",
  description:
    "Webpage created by Jucilene using Next.js 13 and React to display personal projects and translations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <NextIntlClientProvider>
          <Navbar />
          <PageContainer>{children}</PageContainer>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
