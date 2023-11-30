import { useLoaderData, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { FaCaretDown } from "react-icons/fa";

export const Products = () => {
  const products = useLoaderData();
  const navigate = useNavigate();
  const [showRules, setShowRules] = useState(false);

  return (
    <section className='pt-16 px-3 mb-10 max-w-7xl mx-auto'>
      <p className='text-center text-3xl font-semibold text-violet-700'>Todos nuestros productos</p>
      
      <section className='max-w-xl mx-auto my-2 rounded-md bg-violet-100'>

        <div className='flex justify-start gap-1 items-center py-1 px-3'>
          <FaCaretDown
            className={`text-xl transition-all duration-300 ${!showRules ? '-rotate-90 ' : 'text-pink-500'}`}
            onClick={() => setShowRules(!showRules)}
          />
          <p className='text-neutral-600 font-bold tracking-wide'>¿Cómo es la venta de nuestros productos?</p>
        </div>

        <section
          className={`w-full bg-violet-200 transition-all duration-700  rounded-br-md rounded-bl-md ${showRules ? 'h-[240px] py-2' : 'h-0'}`}
        >
          <nav className={`${!showRules ? 'scale-y-0' : 'scale-y-100'} transition-all duration-300`}>
            <ul className='w-11/12 mx-auto mt-1 pl-1'>

              <li className='text-sm my-2 list-outside list-disc'>
                Nos especializamos en la venta por mayoreo, ya que nos enfocamos en ventas para locales como pollerias, rosticerias o distribuidores que estén interesados en nuestros productos.
              </li>
              
              <li className='text-sm my-2 list-outside list-disc'>
                Cuando vendemos nuestros productos, estos pueden ir etiquetados con nuestra marca Balam Gourmet. Sin embargo, si tu negocio lo necesita, el producto puede ir sin etiqueta para que puedas utilizar la etiqueta de tu marca.
              </li>

            </ul>            
            <p className='text-xs text-center font-semibold text-violet-800'>Ante cualquier duda no olvides contactarnos</p>         
          </nav> 

        </section>

      </section>

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
            className='basis-72 w-80 h-96 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-2xl cursor-pointer border-2 rounded-lg'
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
              className='bg-violet-400 h-1/6 px-2 rounded-br-lg rounded-bl-lg grid grid-rows-2'
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