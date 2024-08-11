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

  const backgrounds = [
    {
      id: 1,
      src: './images/backgrounds/background1.png',
      title: 'Image 1',
    },
    {
      id: 2,
      src: './images/backgrounds/background2.png',
      title: 'Image 2',
    },
    {
      id: 3,
      src: './images/backgrounds/background3.png',
      title: 'Image 3',
    },
    {
      id: 4,
      src: './images/backgrounds/background4.png',
      title: 'Image 4',
    },
    {
      id: 5,
      src: './images/backgrounds/background5.png',
      title: 'Image 5',
    },
    {
      id: 6,
      src: './images/backgrounds/background6.png',
      title: 'Image 6',
    },
    {
      id: 7,
      src: './images/backgrounds/background7.png',
      title: 'Image 7',
    },
    {
      id: 8,
      src: './images/backgrounds/background8.png',
      title: 'Image 8',
    },
    {
      id: 9,
      src: './images/backgrounds/background9.png',
      title: 'Image 9',
    },
    {
      id: 10,
      src: './images/backgrounds/background10.png',
      title: 'Image 10',
    },
    {
      id: 11,
      src: './images/backgrounds/background11.png',
      title: 'Image 11',
    },
  ];
  const jewerlys = [
    {
      id: 1,
      src: './images/jewerly/jewerly1.png',
      title: 'Image 1',
    },
    {
      id: 2,
      src: './images/jewerly/jewerly2.png',
      title: 'Image 2',
    },
  ];

  const images2 = [
    {
      id: 1,
      src: './images/logo/next.png',
      title: 'Image 1',
    },
    {
      id: 2,
      src: './images/logo/next.png',
      title: 'Image 2',
    },
    {
      id: 3,
      src: './images/logo/next.png',
      title: 'Image 3',
    },
    {
      id: 4,
      src: './images/logo/next.png',
      title: 'Image 1',
    },
    {
      id: 5,
      src: './images/logo/next.png',
      title: 'Image 2',
    },
    {
      id: 6,
      src: './images/logo/next.png',
      title: 'Image 3',
    },
    {
      id: 7,
      src: './images/logo/next.png',
      title: 'Image 1',
    },
    {
      id: 8,
      src: './images/logo/next.png',
      title: 'Image 2',
    },
    {
      id: 9,
      src: './images/logo/next.png',
      title: 'Image 3',
    },
    {
      id: 10,
      src: './images/logo/next.png',
      title: 'Image 1',
    },
    {
      id: 11,
      src: './images/logo/next.png',
      title: 'Image 2',
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
        console.log(`Clicked on slide Background: ${image.src}`);
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
  const removeCurrentItem = (swiperId) => {
    switch (swiperId) {
      case 1:
        console.log(`Clicked on delete HatAndMask`);
        setHatAndMask(null);
        break;
      case 2:
        console.log(`Clicked on delete EyeWear`);
        setEyeWear(null);
        break;
      case 3:
        console.log(`Clicked on delete Background`);
        setBackground('del');
        break;
      case 4:
        console.log(`Clicked on delete Clothes`);
        setClothes(null);
        break;
      case 5:
        console.log(`Clicked on delete Jewerly`);
        setJewerly(null);
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
            backgrounds,
            images2,
            jewerlys,
            hatAndMask,
            eyeWear,
            background,
            clothes,
            jewerly,
            handleSlideClick,
            removeCurrentItem,
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
