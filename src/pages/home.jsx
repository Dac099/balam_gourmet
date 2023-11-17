import mision from '/mision.jpeg';
import vision from '/vision.jpeg';
import { Banner } from "../components/banner";
import { TextAndImage } from "../components/textAndImage";
import { ProductCard } from '../components/productCard';
import product from '/product.jpeg';

export const Home = () => {
  return (
    <section className='mb-32'>
      <section className="min-h-screen pt-9">
        <Banner />
        <p
          className="text-center text-xl mt-20"
        >
          En los campos de México, donde el sol acaricia la tierra, nació Balam Gourmet. Sus salsas, como guardianes de la tradición, capturan la esencia del país en cada gota. Cada vaso cuenta la historia de sabores ancestrales.
        </p>
      </section>

      <section>
        <h2 className="text-center font-bold text-5xl max-sm:text-4xl text-violet-600 mb-10">Lo que somos</h2>
        <TextAndImage
          firstImage={false}
          text={'En Balam Gourmet, nos dedicamos a crear salsas mexicanas auténticas que despiertan la pasión por la cocina, ofreciendo a nuestros clientes experiencias culinarias únicas y memorables'}
          image={mision}
        />
        
        <TextAndImage
          firstImage={true}
          text={'Buscamos ser reconocidos como la elección indiscutible de salsas mexicanas de alta calidad, llevando los auténticos sabores de México a hogares y mesas en todo el mundo'}
          image={vision}
        />
      </section>

      <section>
        <h2 
          className="text-center font-bold text-5xl max-sm:text-4xl text-violet-600 mb-10"
        >
          Nuestros productos estrella
        </h2>
        <section
          className='flex gap-10 flex-wrap justify-center'
        >
          <ProductCard 
            image={product}
            text={'Salsa habanero'}
          />
          <ProductCard 
            image={product}
            text={'Salsa habanero'}
          />
          <ProductCard 
            image={product}
            text={'Salsa habanero'}
          />
        </section>
      </section>
    </section>
  );
}