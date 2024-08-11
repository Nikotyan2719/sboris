import { createContext } from 'react';

const ImageContext = createContext({
  backgrounds: [],
  images2: [],
  jewerlys: [],
  hatAndMask: null,
  eyeWear: null,
  background: null,
  clothes: null,
  jewerly: null,
  handleSlideClick: () => {},
  removeCurrentItem: () => {},
});

export default ImageContext;
