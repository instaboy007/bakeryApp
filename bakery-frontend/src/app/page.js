import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

import NavBar from './components/NavbarComponent';
import HomePage from './components/HomePage';

export default function Home() {
  return (
    <>
      <NavBar />
      <HomePage />
    </>
  )
}
