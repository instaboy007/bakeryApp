import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

import NavBar from './components/NavbarComponent';
import HomePage from './components/HomePage';
import Footer from './components/FooterComponent';

export default function Home() {
  return (
    <>
      <NavBar />
      <HomePage />
      <Footer />
    </>
  )
}
