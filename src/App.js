import './App.css';
import Header from './Components/Header';
import Objects from './Components/Objects';
import Card from './Components/Cards.js';
import { useState } from 'react';

function App() {
  const reviews = [...Objects]
  const [activeReview, setActiveActive] = useState(0);
  return (
    <>
   <Header/>
   <Card review={reviews} active={activeReview} setActiveActive={setActiveActive}/>
   </>
  );
}

export default App;
