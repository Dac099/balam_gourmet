export const ProductCard = ({image, text}) => {
  return (
    <article
      className="border-2 rounded-lg w-1/4 max-sm:w-3/4 hover:border-pink-600 h-96"
    >
      <img 
        src={image} 
        alt="Comida o salsa mexicana" 
        className="rounded-tl-md rounded-tr-md w-full h-5/6 object-cover"
      />
      <p
        className="h-1/6 p-2 grid place-content-center text-xl bg-pink-400 rounded-bl-lg rounded-br-lg font-semibold text-white"
      >
        {text}
      </p>
    </article>
  );
}