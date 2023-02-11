import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';

import data from './data'



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card-container">
        {
          data.map(item=> <Card 
            key={item.id}
            {...item}
            />)
        }
      </div>
      {/* <div className="card-container">
        <Card 
          img= {img1}
          star= {star}
          btn = "Sold Out"
          rating= "5.0"
          reviewCount = "6"
          country = "USA"
          title= "Life lessons with Katie Zaferes"
          price = {136}
        />

        <Card 
          img= {img2}
          star= {star}
          btn = "Online"
          rating= "5.0"
          reviewCount = "30"
          country = "USA"
          title= "Learn wedding photography"
          price = {125}
        />

        <Card 
          img= {img3}
          star= {star}
          rating= "4.8"
          reviewCount = "30"
          country = "USA"
          title= "Group Mountain Biking"
          price = {50}
        />
      </div> */}
    </div>
  );
}

export default App;
