import logo from './logo.svg';
import './App.css';
import { Navbar } from './somponents/Navbar/Navbar';
import Hero from './somponents/hero/Hero';
import Companies from './somponents/companies/Companies';
import Recidencies from './somponents/Recidencies/Recidencies';
import Value from './somponents/value/Value';
import Contact from './somponents/contact/Contact';
import GetStarted from './somponents/getstarted/GetStarted';
import Footer from './somponents/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <div className='white-gradient' />
        <Navbar />
        <Hero />
        <Companies />
        <Recidencies />
        <Value />
        <Contact />
        <GetStarted />
        <Footer />
      </div>
    </div>
  );
}

export default App;
