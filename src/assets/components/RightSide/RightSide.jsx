import stl from './RightSide.module.scss';
import SwiperComponent from '../Swiper/Swiper';
import ImageContext from '../context/ImageContext';
import { useContext } from 'react';

const RightSide = () => {
  const { images1, images2, handleSlideClick } = useContext(ImageContext);
  const imageGroups = [
    { id: 1, images: images1, swiperName: 'HAT-MASK' },
    { id: 2, images: images2, swiperName: 'EYEWEAR' },
    { id: 3, images: images1, swiperName: 'BACKGROUND' },
    { id: 4, images: images2, swiperName: 'CLOTHES' },
    { id: 5, images: images2, swiperName: 'JEWERLY' },
  ];

  return (
    <div className={stl.root}>
      <div className={stl.title}>CLICK TO ADD STICKER</div>
      <div className={stl.sliders}>
        {imageGroups.map((group) => (
          <SwiperComponent
            swiperName={group.swiperName}
            key={group.id}
            images={group.images}
            handleSlideClick={handleSlideClick}
            swiperId={group.id}
          />
        ))}
      </div>
    </div>
  );
};
export default RightSide;
