
import { Inter } from 'next/font/google';
import './globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Header from './layout/header/Header';
import { ToastContainer } from 'react-toastify';


const inter = Inter({ subsets: ['latin'] });
import 'react-toastify/dist/ReactToastify.css';
import NextTopLoader from 'nextjs-toploader';
export const metadata = {
  title: 'NMAC',
  description: 'Northshore Medical is a multidisciplinary practice that integrates a full spectrum of healthcare and wellness programs to the people of Bermuda.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <NextTopLoader
          color="#2CA8E0"
          initialPosition={0.08}
          crawlSpeed={300}
          easing="ease-in-out"
          height={3}
          showSpinner={false}
          crawl
        />
        <ToastContainer/>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}

