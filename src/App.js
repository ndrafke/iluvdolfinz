import React, {useState, useEffect} from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation.js';
import MountEffect from './components/MountEffect.js';
import Home from './sections/Home.js';
import Listen from './sections/Listen.js';
import Gallery from './sections/Gallery.js';
import About from './sections/About.js';

export default function App() {
    //For mountEffect:
    const [isLoading, setIsLoading] = useState(true);

    //Mount Effect Only Loads at first mount:
    useEffect(() => {
        let timer = setTimeout(() => setIsLoading(false), 1500);
         return() => {
             clearTimeout(timer);
         }
 
    }, []); 

    return (
        isLoading ? <MountEffect/> :
        <div>
          <Navigation />
          <Home />
          <Listen />
          <Gallery />
          <About />  
        </div>
    )
}
