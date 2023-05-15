import React, { useState } from 'react';
import clasess from './ButtonWithIcons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart, faSmile, faThumbsUp, faStar, faSun, faMoon, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ButtonWithIcon = () => {
  const [icon, setIcon] = useState(null);
  const [icons, setIcons] = useState([faCoffee, faHeart, faSmile, faThumbsUp, faStar, faSun, faMoon, faEnvelope]);
  
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * icons.length);
    const randomIcon = icons.splice(randomIndex, 1)[0];
    setIcon(randomIcon);
    if (icons.length === 0) {
      setIcons([faCoffee, faHeart, faSmile, faThumbsUp, faStar, faSun, faMoon, faEnvelope]);
    }
  };
  

  return (
    <div className={clasess.btn}>
      <button className={clasess.gradientutton} onClick={handleClick}>Show random icon</button>
      {icon && <FontAwesomeIcon icon={icon} size="3x" style={{ marginLeft: '10px' }} />}
    </div>
  );
};

export default ButtonWithIcon;