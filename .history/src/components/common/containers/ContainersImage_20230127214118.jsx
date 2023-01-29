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
      e.target.src = yoda1;
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`section__img ${className}`}
      loading="lazy"
      onLoad={handleLoadImg}
      onError={handleErrorImg}
      width="40"
      height="50"
    />
  );
};

export default ContainersImage;