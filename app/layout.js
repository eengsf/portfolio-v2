import { Sora } from "next/font/google";
import "./globals.css";

const inter = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | eengsf",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}