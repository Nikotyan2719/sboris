import stl from './RightSide.module.scss';
import SwiperComponent from '../Swiper/Swiper';

const RightSide = () => {
  return (
    <div className={stl.root}>
      <div className={stl.title}>CLICK TO ADD STICKER</div>
      <div className={stl.sliders}>
        <SwiperComponent />
      </div>
    </div>
  );
};
export default RightSide;
