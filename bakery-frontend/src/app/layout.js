import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Inter } from 'next/font/google'

import NavBar from './components/NavbarComponent'
import Footer from './components/FooterComponent';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RK Bakes',
  description: 'Delight in Every Bite, Exclusively from RK Bakes!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
