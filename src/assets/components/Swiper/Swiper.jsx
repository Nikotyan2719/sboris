import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import stl from './Swiper.module.scss';
import { PrevBtn } from './SwiperNavBtns/PrevBtn';
import { NextBtn } from './SwiperNavBtns/NextBtn';
const SwiperComponent = () => {
  return (
    <div className={stl.root}>
      <Swiper
        spaceBetween={14}
        slidesPerView={10}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
      >
        <PrevBtn />
        <SwiperSlide>
          <div className={stl.slideBox}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={stl.slideBox}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={stl.slideBox}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={stl.slideBox}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={stl.slideBox}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={stl.slideBox}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={stl.slideBox}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={stl.slideBox}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={stl.slideBox}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={stl.slideBox}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={stl.slideBox}></div>
        </SwiperSlide>
      </Swiper>
      <NextBtn />
    </div>
  );
};

export default SwiperComponent;
