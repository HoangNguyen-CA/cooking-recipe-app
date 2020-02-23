import React from 'react';

export default function Recipe({ label, image, source, url }) {
  return (
    <div className='bg-success m-3'>
      <p className='lead'>{label}</p>
      <img src={image} alt={label}></img>
      <a href={url} target='_blank'>
        source: {source}
      </a>
    </div>
  );
}
