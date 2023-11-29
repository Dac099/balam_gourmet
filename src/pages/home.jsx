import mision from '/mision.jpeg';
import vision from '/vision.jpeg';
import { Banner } from "../components/banner";
import { TextAndImage } from "../components/textAndImage";
import { ProductCard } from '../components/productCard';
import { useLoaderData } from 'react-router-dom';

export const Home = () => {
  const { bannerUrls, empresaUrls, cards } = useLoaderData();

  return (
    <section className='mb-32 p-2'>
      <section className="min-h-screen pt-9">
        <Banner images={bannerUrls}/>
        <p
          className="text-center text-xl mt-20"
        >
          En Balam Gourmet nos dedicamos a realizar las mejores salsas mexicanas y acompañamiento para tu negocio o cocina. Nos enfocamos en realizar productos de calidad, llenos de sabor y que despierten tu amor por la cocina.
        </p>
      </section>

      <section>
        <h2 className="text-center font-bold text-5xl max-sm:text-4xl text-violet-600 mb-10">Lo que somos</h2>
        <TextAndImage
          firstImage={false}
          text={'En Balam Gourmet, nos dedicamos a crear salsas mexicanas auténticas que despiertan la pasión por la cocina, ofreciendo a nuestros clientes experiencias culinarias únicas y memorables'}
          image={empresaUrls[0] || mision}
        />
        
        <TextAndImage
          firstImage={true}
          text={'Buscamos ser reconocidos como la elección indiscutible de salsas mexicanas de alta calidad, llevando los auténticos sabores de México a hogares y mesas en todo el mundo'}
          image={empresaUrls[1] || vision}
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
            image={cards[0].url_image}
            text={cards[0].name}
          />
          <ProductCard 
            image={cards[1].url_image}
            text={cards[1].name}
          />
          <ProductCard 
            image={cards[2].url_image}
            text={cards[2].name}
          />
        </section>
      </section>
    </section>
  );
}