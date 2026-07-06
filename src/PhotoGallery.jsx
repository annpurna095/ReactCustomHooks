// import React from 'react';
import useFetch from './useFetch';
import './PhotoGallery.css';

const PhotoGallery = () => {
  const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="gallery">
      {data?.slice(0, 12).map((item) => (
        <div key={item.id} className="photo-card">
          <img src={item.images[0]} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;