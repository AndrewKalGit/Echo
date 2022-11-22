import './App.css';
import Banner from './Banner';
import Contact from './Contact';
import { BrowserRouter } from 'react-router-dom' 
import Cards from './Cards';
import CardJenny from './CardJenny';
import Services from './Services';
import CardContain from './CardContain';

function App() {
  return (
    <>
    <BrowserRouter>
      <Banner/>
      <Services/>
      <CardContain/>
      <Contact/>
    </BrowserRouter>
    </>
  );
}

export default App;
