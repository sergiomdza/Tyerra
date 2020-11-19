import React, { useState } from 'react';
import '../styles/Slider.scss';
import PropTypes from 'prop-types';

export default function Slider({ imgArray }) {
  const [x, setX] = useState(0);
  const goLeft = () => {
    // eslint-disable-next-line no-unused-expressions
    x === 0 ? setX(-100 * (imgArray.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    // eslint-disable-next-line no-unused-expressions
    x === -100 * (imgArray.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <div className="slider">
      {
        imgArray.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
            <IMGComponent src={item} />
          </div>
        ))
      }
      <button type="button" id="goLeft" onClick={goLeft}>
        <i className="fas fa-chevron-left" />
      </button>
      <button type="button" id="goRight" onClick={goRight}>
        <i className="fas fa-chevron-right" />
      </button>
    </div>
  );
}

function IMGComponent({ src }) {
  return (
    <img src={src} alt="slide-img" className="img" />
  );
}

IMGComponent.propTypes = {
  src: PropTypes.string.isRequired,
};

Slider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  imgArray: PropTypes.array.isRequired,
};
