export const ProductCard = ({image, text}) => {
  return (
    <article
      className="border-2 rounded-lg w-1/4 max-sm:w-3/4 cursor-pointer hover:border-pink-600"
    >
      <img 
        src={image} 
        alt="Comida o salsa mexicana" 
        className="rounded-tl-md rounded-tr-md"
      />
      <p
        className="p-2 text-center bg-pink-400 rounded-bl-lg rounded-br-lg font-semibold text-white"
      >
        {text}
      </p>
    </article>
  );
}