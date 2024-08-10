import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import stl from './Swiper.module.scss';
import '../../styles/custom/SwiperCustom.css';

const SwiperComponent = ({
  swiperName,
  images,
  handleSlideClick,
  swiperId,
}) => {
  return (
    <div className={stl.root}>
      <div className={stl.title}>{swiperName}</div>
      <div className={stl.swiper}>
        <Swiper
          spaceBetween={14}
          slidesPerView={images.length >= 11 ? 11 : images.length}
          navigation
          modules={[Navigation]}
        >
          {images.map((image) => (
            <SwiperSlide
              key={image.id}
              onClick={() => handleSlideClick(image, swiperId)}
            >
              <div className={stl.slideBox}>
                <img src={image.src} alt={image.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;
