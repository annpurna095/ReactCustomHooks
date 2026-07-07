// import React from 'react';
import useFetch from './useFetch';
import './PhotoGallery.css';

const PhotoGallery = () => {

  //useFetch is used to get the data from the API
  const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');
  
  //shows loading message while data is being fetched
  if (loading) {
    return <div className="loader">Loading...</div>;
  }
  
  //show error message like while internet is off
  if (error) {
    return <div className="error">Error: {error}</div>;
  }
  return (
    <div className="gallery">

      {/*displaying products */}
      {data.map((item) => (
        <div key={item.id} className="photo-card">

          {/*displaying image of the product*/}
          <img src={item.images[0]} alt={item.title} />

          {/*displaying product title */}
          <h3>{item.title}</h3>

          {/*displaying product price */}
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;