import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({image, text}) => {
  const [ zoomIn, setZoomIn ] = useState(false);

  const navigate = useNavigate();
  return (

    <article
      className="border-2 rounded-lg w-1/4 max-sm:w-3/4 hover:border-pink-600 h-96"
      onClick={() => navigate('/productos')}
    >
      <img 
        src={image} 
        alt="Comida o salsa mexicana" 
        className={`rounded-tl-md rounded-tr-md w-full h-5/6 object-cover transition-all duration-500 hover:scale-105`}
      />
      
      <p
        className="h-1/6 p-2 grid place-content-center text-xl bg-pink-400 rounded-bl-lg rounded-br-lg font-semibold text-white"
      >
        {text}
      </p>
    </article>
  );
}