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
    <div class="bg-gradient-to-r from-black via-gray-900 to-black">
    <BrowserRouter>
      <Banner/>
      <Services/>
      <CardContain/>
      <Contact/>
    </BrowserRouter>
    </div>
  );
}

export default App;
