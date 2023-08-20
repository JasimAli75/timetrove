import Footer from "@/BodyComponents/Views/Footer/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import NavBar from "@/BodyComponents/Views/NavBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
  variable: "--font-montserrat",
});

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
    <html lang="en" className="{`${poppins.variable} ${montserrat.variable}`}">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
