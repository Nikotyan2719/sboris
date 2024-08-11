import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import stl from './Swiper.module.scss';
import '../../styles/custom/SwiperCustom.scss';

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
          spaceBetween={12}
          slidesPerView="auto"
          navigation={{
            nextEl: `#${swiperName}-next`,
            prevEl: `#${swiperName}-prev`,
          }}
          modules={[Navigation]}
          breakpoints={{
            576: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 7,
            },
            990: {
              slidesPerView: 10,
            },
            1200: {
              slidesPerView: 11,
            },
          }}
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
      <div
        className={`swiper-button-prev ${stl.customPrev}`}
        id={swiperName + '-prev'}
      ></div>
      <div
        className={`swiper-button-next ${stl.customNext}`}
        id={swiperName + '-next'}
      ></div>
    </div>
  );
};

export default SwiperComponent;
