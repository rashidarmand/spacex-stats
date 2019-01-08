import React from 'react';

export default function ImageThumb({ url, alt, selectThumb, isHighlighted }) {
  const selectedThumbHandler = (e) => {
    const src = e.target.src;

    return selectThumb(src);
  };

  return (
    <div className="text-center">
      <img 
        className="img-thumbnail"
        src={ url } 
        alt={ alt }
        style={{ width: "85%", cursor: 'pointer', border: isHighlighted(url) }}
        onClick={ selectedThumbHandler }
      />
    </div>
  )
}
