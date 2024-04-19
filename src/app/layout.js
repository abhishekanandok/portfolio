import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import ogImage from './opengraph-image.png'
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
  publisher: 'Abhishek Anand',

  metadataBase: new URL("https://abhishekanandok.vercel.app"),
  openGraph: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height
      },
    ],
  },
  twitter: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height
      },
    ],
    card: "summary_large_image",
  },
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
