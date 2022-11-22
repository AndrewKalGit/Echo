import './App.css';
import Banner from './Banner';
import Contact from './Contact';
import { BrowserRouter } from 'react-router-dom' 
import Cards from './Cards';
import CardJenny from './CardJenny';

function App() {
  return (
    <>
    <BrowserRouter>
      <Banner/>
       <Cards/>
       <CardJenny/>
      <Contact/>
    </BrowserRouter>
    </>
  );
}

export default App;
