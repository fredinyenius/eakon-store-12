import { useState } from "react";
import yoda1 from '../../../assets/image/yoda1.webp'

const ContainersImage =( { src, alt, className =''}) => {

    const [numberOfErrors, setNumberOfError] = useState();

    const handleLoadImg =(e) => {
        console.log('load');
        e.target.style.animation ='none';

    };

    const handleErrorImg =(e) => {
        console.log('error');
    if(numberOfErrors ===0){
        setNumberOfError(1);
        e.target.src = yoda1;
    }
    };


    return (
        <img
        src={src}
        alt={alt}
        className={`section ${className}`}
        loading="lazi"
        onLoad = {handleLoadImg} 
        onError = {handleErrorImg}
        width ="256"
        height="256"
        />

    );
}

export default ContainersImage;