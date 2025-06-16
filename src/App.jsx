import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DestinationCard from './components/DestinationCard';

const App = () => {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <DestinationCard name="Paris" image="https://via.placeholder.com/200" />
        <DestinationCard name="Tokyo" image="https://via.placeholder.com/200" />
      </div>
      <Footer />
    </div>
  );
};

export default App;