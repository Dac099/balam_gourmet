import { useLoaderData } from 'react-router-dom';

export const Product = () => {
  const product = useLoaderData();

  return (
    <section className="w-full h-screen mt-10 pt-2 flex flex-wrap justify-around gap-4 max-sm:justify-center max-sm:gap-1 max-sm:gap-y-1">
      <img 
        src={product.url_img} 
        alt={product.name} 
        className='w-[500px] h-[600px] object-cover rounded-sm basis-72'
      />

      <section
        className='bg-violet-100 h-[600px] max-sm:h-44 w-96 max-sm:w-full p-1 rounded-sm grid grid-rows-3'
      >
        <p
          className='font-bold text-2xl text-pink-500'
        >
          {product.name}
        </p>

        <p 
          className='text-center text-sm overflow-auto max-h-20 text-violet-950'
        >
          {product.description}
        </p>

        <p
          className='font-semibold text-right self-end text-xl text-violet-950'
        >
          ${product.price}
          <span className='text-sm text-pink-300'>MXN</span>
        </p>
      </section>
    </section>
  );
}