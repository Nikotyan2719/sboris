import stl from './MainSection.module.scss';
import { Container } from 'react-bootstrap';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
import { useState } from 'react';
import ImageContext from '../context/ImageContext';
const MainSection = () => {
  const [hatAndMask, setHatAndMask] = useState(null);
  const [eyeWear, setEyeWear] = useState(null);
  const [background, setBackground] = useState(null);
  const [clothes, setClothes] = useState(null);
  const [jewerly, setJewerly] = useState(null);
  const images1 = [
    {
      id: 1,
      src: '/images/logo/logo.png',
      title: 'Image 1',
    },
    {
      id: 2,
      src: '/images/logo/logo.png',
      title: 'Image 2',
    },
    {
      id: 3,
      src: '/images/logo/logo.png',
      title: 'Image 3',
    },
  ];
  const images2 = [
    {
      id: 1,
      src: '/images/logo/next.png',
      title: 'Image 1',
    },
    {
      id: 2,
      src: '/images/logo/next.png',
      title: 'Image 2',
    },
    {
      id: 3,
      src: '/images/logo/next.png',
      title: 'Image 3',
    },
  ];

  const handleSlideClick = (image, swiperId) => {
    console.log(swiperId);
    switch (swiperId) {
      case 1:
        console.log(`Clicked on slide HatAndMask: ${image.title}`);
        setHatAndMask(image);
        break;
      case 2:
        console.log(`Clicked on slide EyeWear: ${image.title}`);
        setEyeWear(image);
        break;
      case 3:
        console.log(`Clicked on slide Background: ${image.title}`);
        setBackground(image);
        break;
      case 4:
        console.log(`Clicked on slide Clothes: ${image.title}`);
        setClothes(image);
        break;
      case 5:
        console.log(`Clicked on slide Jewerly: ${image.title}`);
        setJewerly(image);
        break;
      default:
        break;
    }
  };
  return (
    <div className={stl.root}>
      <Container className={stl.container}>
        <ImageContext.Provider
          value={{
            images1,
            images2,
            hatAndMask,
            eyeWear,
            background,
            clothes,
            jewerly,
            handleSlideClick,
          }}
        >
          <LeftSide />
          <RightSide />
        </ImageContext.Provider>
      </Container>
    </div>
  );
};

export default MainSection;
