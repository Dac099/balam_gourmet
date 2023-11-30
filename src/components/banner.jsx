import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export const Banner = ({images}) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: false,
    autoplay: true, 
    arrows: false
  };

  return (
    <article>
      <section className='w-full relative'>
        <div 
          className='absolute top-0 left-0 z-10 w-full h-full bg-neutral-700/75 flex items-center rounded-xl'
        >
          <p
            className={`text-white font-bold text-5xl w-3/4 ml-4 max-sm:text-3xl max-sm:w-full`}
          >
            De la tierra a tu paladar, <span className='text-indigo-400'>Balam Gourmet</span>, el arte de las salsas mexicanas
          </p>
        </div>

        <Slider {...settings}>
          {
            images.map(image => (
              <img 
                key={image}
                src={image}
                className='max-h-[600px] min-h-[450px] object-cover rounded-xl'
              />
            ))
          }
        </Slider>
        
      </section>
    </article>
  );
}