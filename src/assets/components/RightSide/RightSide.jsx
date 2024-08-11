import stl from './RightSide.module.scss';
import SwiperComponent from '../Swiper/Swiper';
import ImageContext from '../context/ImageContext';
import { useContext } from 'react';

const RightSide = () => {
  const {
    hatsAndMasks,
    backgrounds,
    images2,
    jewerlys,
    eyeWears,
    handleSlideClick,
    removeCurrentItem,
  } = useContext(ImageContext);
  const imageGroups = [
    { id: 1, images: hatsAndMasks, swiperName: 'HAT-MASK' },
    { id: 2, images: eyeWears, swiperName: 'EYEWEAR' },
    { id: 3, images: backgrounds, swiperName: 'BACKGROUND' },
    { id: 4, images: images2, swiperName: 'CLOTHES' },
    { id: 5, images: jewerlys, swiperName: 'JEWERLY' },
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
            removeCurrentItem={removeCurrentItem}
            swiperId={group.id}
          />
        ))}
      </div>
    </div>
  );
};
export default RightSide;
