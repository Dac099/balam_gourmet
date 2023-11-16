import image_1 from '/banner_1.jpeg';
import image_2 from '/banner_2.jpeg';
import image_3 from '/banner_3.jpeg';
import image_4 from '/banner_4.jpeg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


export const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    autoplay: true, 
    arrows: false
  };

  return (
    <article
      className='w-full'
    >
      <Slider {...settings}>
        <img src={image_1} className='max-h-[600px] object-cover rounded-xl'/>
        <img src={image_2} className='max-h-[600px] object-cover rounded-xl'/>
        <img src={image_3} className='max-h-[600px] object-cover rounded-xl'/>
        <img src={image_4} className='max-h-[600px] object-cover rounded-xl'/>
      </Slider>
    </article>
  );
}