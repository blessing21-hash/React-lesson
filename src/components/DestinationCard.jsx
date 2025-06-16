import React from 'react';

const DestinationCard = ({ name, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
    </div>
  );
};

export default DestinationCard;