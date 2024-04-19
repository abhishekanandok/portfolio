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
  title: {
    default: "Abhishek Anand - MERN Stack Developer Portfolio",
    template: "%s - Abhishek Anand"
  },
  description: "Welcome to the portfolio of Abhishek Anand, a proficient MERN Stack Developer specializing in JavaScript, MongoDB, Express.js, Reactjs, Nextjs, and Node.js. Explore my projects and services now.",
  keywords: ['Web Developer(MERN)', 'Reactjs Developer', 'Nextjs Developer', 'Software Developer'],
  twitter: {
    card: "summary_large_image"
  },
  publisher: 'Abhishek Anand',
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
