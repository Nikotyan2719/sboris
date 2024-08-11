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
      x: 187,
      y: 215,
      width: 83,
      height: 60,
    },
    {
      id: 2,
      src: './images/jewerly/jewerly2.png',
      title: 'Image 2',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 3,
      src: './images/jewerly/jewerly1.png',
      title: 'Image 1',
    },
    {
      id: 4,
      src: './images/jewerly/jewerly2.png',
      title: 'Image 2',
    },
    {
      id: 5,
      src: './images/jewerly/jewerly1.png',
      title: 'Image 1',
    },
    {
      id: 6,
      src: './images/jewerly/jewerly2.png',
      title: 'Image 2',
    },
    {
      id: 7,
      src: './images/jewerly/jewerly1.png',
      title: 'Image 1',
    },
    {
      id: 8,
      src: './images/jewerly/jewerly2.png',
      title: 'Image 2',
    },
    {
      id: 9,
      src: './images/jewerly/jewerly1.png',
      title: 'Image 1',
    },
    {
      id: 10,
      src: './images/jewerly/jewerly2.png',
      title: 'Image 2',
    },
  ];

  const eyeWears = [
    {
      id: 1,
      src: './images/eyewear/eyewear1.png',
      title: 'Image 1',
      x: 170,
      y: 106,
      width: 124,
      height: 41,
    },
    {
      id: 2,
      src: './images/eyewear/eyewear2.png',
      title: 'Image 2',
      x: 139,
      y: 96,
      width: 78,
      height: 41,
    },
    {
      id: 3,
      src: './images/eyewear/eyewear3.png',
      title: 'Image 3',
      x: 161,
      y: 80,
      width: 143,
      height: 73,
    },
    {
      id: 4,
      src: './images/eyewear/eyewear4.png',
      title: 'Image 1',
      x: 170,
      y: 109,
      width: 122,
      height: 41,
    },
    {
      id: 5,
      src: './images/eyewear/eyewear5.png',
      title: 'Image 2',
      x: 169,
      y: 103,
      width: 123,
      height: 49,
    },
    {
      id: 6,
      src: './images/eyewear/eyewear6.png',
      title: 'Image 3',
      x: 148,
      y: 94,
      width: 165,
      height: 63,
    },
    {
      id: 7,
      src: './images/eyewear/eyewear7.png',
      title: 'Image 1',
      x: 179,
      y: 103,
      width: 106,
      height: 42,
      rotation: 0,
    },
    {
      id: 8,
      src: './images/eyewear/eyewear8.png',
      title: 'Image 2',
      x: 151,
      y: 86,
      width: 151,
      height: 67,
      rotation: 0,
    },
    {
      id: 9,
      src: './images/eyewear/eyewear9.png',
      title: 'Image 3',
      x: 126,
      y: 27,
      width: 187,
      height: 211,
    },
    {
      id: 10,
      src: './images/eyewear/eyewear10.png',
      title: 'Image 1',
      x: 156,
      y: 98,
      width: 150,
      height: 54,
    },
    {
      id: 11,
      src: './images/eyewear/eyewear11.png',
      title: 'Image 2',
      x: 130,
      y: 82,
      width: 203,
      height: 86,
    },
    {
      id: 12,
      src: './images/eyewear/eyewear12.png',
      title: 'Image 2',
      x: 171,
      y: 100,
      width: 124,
      height: 53,
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
        console.log(`Clicked on slide HatAndMask: ${image.src}`);
        setHatAndMask(image);
        break;
      case 2:
        console.log(`Clicked on slide EyeWear: ${image.src}`);
        setEyeWear(image);
        break;
      case 3:
        console.log(`Clicked on slide Background: ${image.src}`);
        setBackground(image);
        break;
      case 4:
        console.log(`Clicked on slide Clothes: ${image.src}`);
        setClothes(image);
        break;
      case 5:
        console.log(`Clicked on slide Jewerly: ${image.src}`);
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
        setHatAndMask('del');
        break;
      case 2:
        console.log(`Clicked on delete EyeWear`);
        setEyeWear('del');
        break;
      case 3:
        console.log(`Clicked on delete Background`);
        setBackground('del');
        break;
      case 4:
        console.log(`Clicked on delete Clothes`);
        setClothes('del');
        break;
      case 5:
        console.log(`Clicked on delete Jewerly`);
        setJewerly('del');
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
            eyeWears,
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
