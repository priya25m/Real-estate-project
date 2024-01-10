import Companies from './components/Companies/Companies';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header'
import { Hero } from './components/Hero/Hero';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Values/Value';
import GetStarted from './components/GetStarted/GetStarted';



function App() {
  return (
   <div className="App">
   <div>
    <div className='white-gradient'/>
    <Header/>
    <Hero/>
   </div>
   <Companies/>
   <Residencies/>
   <Value/>
   <Contact/>
   <GetStarted/>
   <Footer/>
   </div>
  );
}

export default App;