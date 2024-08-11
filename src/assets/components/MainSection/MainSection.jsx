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

  const hatsAndMasks = [
    {
      id: 1,
      src: './images/had/1.png',
      x: 187,
      y: 215,
      width: 83,
      height: 60,
    },
    {
      id: 2,
      src: './images/had/2.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 3,
      src: './images/had/3.png',
      x: 187,
      y: 215,
      width: 83,
      height: 60,
    },
    {
      id: 4,
      src: './images/had/4.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 5,
      src: './images/had/5.png',
      x: 187,
      y: 215,
      width: 83,
      height: 60,
    },
    {
      id: 6,
      src: './images/had/6.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 7,
      src: './images/had/7.png',
      x: 187,
      y: 215,
      width: 83,
      height: 60,
    },
    {
      id: 8,
      src: './images/had/8.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 9,
      src: './images/had/9.png',
      x: 187,
      y: 215,
      width: 83,
      height: 60,
    },
    {
      id: 10,
      src: './images/had/10.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 11,
      src: './images/had/11.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 12,
      src: './images/had/12.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 13,
      src: './images/had/13.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 14,
      src: './images/had/14.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 15,
      src: './images/had/15.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 16,
      src: './images/had/16.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 17,
      src: './images/had/17.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 18,
      src: './images/had/18.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 19,
      src: './images/had/19.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 20,
      src: './images/had/20.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 21,
      src: './images/had/21.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 22,
      src: './images/had/22.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 23,
      src: './images/had/23.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 24,
      src: './images/had/24.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 25,
      src: './images/had/25.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 26,
      src: './images/had/26.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 27,
      src: './images/had/27.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 28,
      src: './images/had/28.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 29,
      src: './images/had/29.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 30,
      src: './images/had/30.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 31,
      src: './images/had/31.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 32,
      src: './images/had/32.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 33,
      src: './images/had/33.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
    {
      id: 34,
      src: './images/had/34.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
  ];
  const backgrounds = [
    {
      id: 1,
      src: './images/backgrounds/background1.png',
    },
    {
      id: 2,
      src: './images/backgrounds/background2.png',
    },
    {
      id: 3,
      src: './images/backgrounds/background3.png',
    },
    {
      id: 4,
      src: './images/backgrounds/background4.png',
    },
    {
      id: 5,
      src: './images/backgrounds/background5.png',
    },
    {
      id: 6,
      src: './images/backgrounds/background6.png',
    },
    {
      id: 7,
      src: './images/backgrounds/background7.png',
    },
    {
      id: 8,
      src: './images/backgrounds/background8.png',
    },
    {
      id: 9,
      src: './images/backgrounds/background9.png',
    },
    {
      id: 10,
      src: './images/backgrounds/background10.png',
    },
    {
      id: 11,
      src: './images/backgrounds/background11.png',
    },
  ];
  const jewerlys = [
    {
      id: 1,
      src: './images/jewerly/jewerly1.png',
      x: 187,
      y: 215,
      width: 83,
      height: 60,
    },
    {
      id: 2,
      src: './images/jewerly/jewerly2.png',
      x: 175,
      y: 185,
      width: 107,
      height: 89,
    },
  ];

  const eyeWears = [
    {
      id: 1,
      src: './images/eyewear/eyewear1.png',
      x: 170,
      y: 106,
      width: 124,
      height: 41,
    },
    {
      id: 2,
      src: './images/eyewear/eyewear2.png',
      x: 139,
      y: 96,
      width: 78,
      height: 41,
    },
    {
      id: 3,
      src: './images/eyewear/eyewear3.png',
      x: 161,
      y: 80,
      width: 143,
      height: 73,
    },
    {
      id: 4,
      src: './images/eyewear/eyewear4.png',
      x: 170,
      y: 109,
      width: 122,
      height: 41,
    },
    {
      id: 5,
      src: './images/eyewear/eyewear5.png',
      x: 169,
      y: 103,
      width: 123,
      height: 49,
    },
    {
      id: 6,
      src: './images/eyewear/eyewear6.png',
      x: 148,
      y: 94,
      width: 165,
      height: 63,
    },
    {
      id: 7,
      src: './images/eyewear/eyewear7.png',
      x: 179,
      y: 103,
      width: 106,
      height: 42,
    },
    {
      id: 8,
      src: './images/eyewear/eyewear8.png',
      x: 151,
      y: 86,
      width: 151,
      height: 67,
    },
    {
      id: 9,
      src: './images/eyewear/eyewear9.png',
      x: 126,
      y: 27,
      width: 187,
      height: 211,
    },
    {
      id: 10,
      src: './images/eyewear/eyewear10.png',
      x: 156,
      y: 98,
      width: 150,
      height: 54,
    },
    {
      id: 11,
      src: './images/eyewear/eyewear11.png',
      x: 130,
      y: 82,
      width: 203,
      height: 86,
    },
    {
      id: 12,
      src: './images/eyewear/eyewear12.png',
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
            hatsAndMasks,
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
