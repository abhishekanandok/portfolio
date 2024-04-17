import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

//components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

//themeProvider
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Abhishek Anand",
  description: "Abhishek Anand is a Full Stack (MERN) Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
