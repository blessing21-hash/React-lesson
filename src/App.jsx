import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DestinationCard from './components/DestinationCard';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className="destination-container">
        <div className="destination-section">
          <DestinationCard name="Paris" image="image1.png" />
          <div className="destination-text">
            <h2>Explore Paris</h2>
            <p>The city of lights, full of art, romance, and charm.</p>
          </div>
        </div>

        <div className="destination-section">
          <DestinationCard name="Tokyo" image="image2.png" />
          <div className="destination-text">
            <h2>Discover Tokyo</h2>
            <p>A vibrant fusion of tradition, technology, and food.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
