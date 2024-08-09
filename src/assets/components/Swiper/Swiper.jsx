import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import stl from './Swiper.module.scss';
import '../../styles/custom/SwiperCustom.css';
const SwiperComponent = () => {
  return (
    <div className={stl.root}>
      <Swiper
        spaceBetween={14}
        slidesPerView={12}
        navigation
        modules={[Navigation]}
      >
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
    </div>
  );
};

export default SwiperComponent;
