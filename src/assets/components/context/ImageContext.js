import { createContext } from 'react';

const ImageContext = createContext({
  images1: [],
  images2: [],
  hatAndMask: null,
  eyeWear: null,
  background: null,
  clothes: null,
  jewerly: null,
  handleSlideClick: () => {},
});

export default ImageContext;
