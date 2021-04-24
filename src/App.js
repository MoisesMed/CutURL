import { BrowserRouter } from 'react-router-dom';

import './App.css';
// import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Routes from './Routes'

export default function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}