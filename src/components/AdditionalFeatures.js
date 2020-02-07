import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = () => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {AdditionalFeatures.length ? (
        <ol type="1">
          {AdditionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item}  />
          ))}
        </ol> 
      ) : (
        <p>Nice looking car!</p>
        
      )}
    </div>
  );
};

export default AdditionalFeatures;
