import { useLoaderData, useNavigate, Link } from 'react-router-dom';

export const Products = () => {
  const products = useLoaderData();
  const navigate = useNavigate();

  return (
    <section className='h-screen pb-24 pt-16 px-3 relative overflow-y-auto'>
      <p className='text-center text-3xl font-semibold text-violet-700'>Todos nuestros productos</p>
      <Link 
        className='mb-10 p-2 rounded-md block mt-2 underline underline-offset-4 text-pink-500 hover:bg-pink-200 w-max mx-auto transition-all duration-300'
        to={'/contacto'}
      >
        ¿Estas interado en nuestros productos?
      </Link>

      <section
        className='flex flex-wrap gap-3 justify-center'
      >
        {products.map(product => (
          <article
            key={product.id}
            className='basis-72 w-80 h-96 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-2xl cursor-pointer'
            onClick={() => {
              navigate(`/productos/${product.id}`);
            }}
          >
            <img 
              src={product.url_img}
              alt={product.name}
              className='w-full h-5/6 object-cover rounded-tr-lg rounded-tl-lg'
            />

            <section
              className='bg-violet-400 h-1/6 px-2 rounded-br-lg rounded-bl-lg grid grid-rows-2 border-2 border-violet-900'
            >
              <p className='text-violet-100 font-bold text-xl'>{product.name}</p>
              <p 
                className='text-right font-semibold text-lg text-violet-900'

              >
                ${product.price} 
                <span className='text-xs text-pink-200'> MXN</span>
              </p>
            </section>
          </article>
        ))}
      </section>
    </section>
  );
}