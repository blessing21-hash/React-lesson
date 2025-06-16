import React from 'react';

const DestinationCard = ({ name, image }) => {
  return (
    <div style={{ border: '1px solid #ddd', margin: '10px', borderRadius: '8px', padding: '10px' }}>
      <img src={image} alt={name} style={{ width: '100%', borderRadius: '8px' }} />
      <h3>{name}</h3>
    </div>
  );
};

export default DestinationCard;