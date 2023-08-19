import Footer from "@/BodyComponents/Views/Footer/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NavBar from "@/BodyComponents/Views/NavBar";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TimeTrove",
  description: "Best Online Shopping store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
