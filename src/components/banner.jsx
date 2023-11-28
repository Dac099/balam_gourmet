import image_1 from '/banner_1.jpeg';
import image_2 from '/banner_2.jpeg';
import image_3 from '/banner_3.jpeg';
import image_4 from '/banner_4.jpeg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


export const Banner = ({images}) => {
  const backupImages = [image_1, image_2, image_3, image_4];

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: false,
    autoplay: true, 
    arrows: false
  };

  return (
    <article>
      <section  className='w-full relative'>
        <div 
          className='absolute top-0 left-0 z-10 w-full h-full bg-neutral-700/75 flex items-center rounded-xl'
        >
          <p
            className='text-white font-bold text-5xl w-3/4 ml-4 max-sm:text-3xl max-sm:w-full'
          >
            De la tierra a tu paladar, <span className='text-indigo-400'>Balam Gourmet</span>, el arte de las salsas mexicanas
          </p>
        </div>
        <Slider {...settings}>
          {images.length > 0 
            ?
              images.map(image => (
                <img 
                  key={image}
                  src={image}
                  className='max-h-[600px] object-cover rounded-xl'
                />
              ))
            :
              backupImages.map(image => (
                <img 
                  key={image}
                  src={image}
                  className='max-h-[600px] object-cover rounded-xl'
                />
              ))
          }
        </Slider>
      </section>
    </article>
  );
}