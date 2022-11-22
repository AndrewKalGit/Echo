import './App.css';
import Banner from './Banner';
import Contact from './Contact';
import { BrowserRouter } from 'react-router-dom' 
import Cards from './Cards';
import CardJenny from './CardJenny';
import Services from './Services';

function App() {
  return (
    <>
    <BrowserRouter>
      <Banner/>
      <Services/>
       <Cards/>
       <CardJenny/>
      <Contact/>
    </BrowserRouter>
    </>
  );
}

export default App;
