import { useState } from "react";
import yoda1 from '../../../assets/image/yoda1.webp';

const ContainersImage = ({ src, alt, className = '' }) => {
  const [numberOfErrors, setNumberOfErrors] = useState(0);

  const handleLoadImg = (e) => {
    e.target.style.animation = 'none';
  };

  const handleErrorImg = (e) => {
    if (numberOfErrors === 0) {
      setNumberOfErrors(1);
      e.target.src = logoEAKON;
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`section__image ${className}`}
      loading="lazy"
      onLoad={handleLoadImg}
      onError={handleErrorImg}
      width="256"
      height="256"
    />
  );
};

export default ContainersImage;