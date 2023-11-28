export const TextAndImage = ({firstImage=true, text, image}) => {

  return (
    <article
      className="grid grid-cols-2 max-sm:grid-cols-1 grid-flow-col-dense max-sm:grid-flow-row-dense justify-between place-items-center gap-8 mb-10"
    >
      <img 
        src={image}
        className={`${firstImage ? 'order-1' : 'order-2'} aspect-video object-cover rounded-md max-sm:order-1`}
      />

      <p
        className={`${firstImage ? 'order-2' : 'order-1'} text-xl`}
      >
        {text}
      </p>
    </article>
  );
}