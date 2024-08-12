import { createContext } from 'react';

const ImageContext = createContext({
  hatsAndMasks: [],
  backgrounds: [],
  clotheses: [],
  jewerlys: [],
  eyeWears: [],
  hatAndMask: null,
  eyeWear: null,
  background: null,
  clothes: null,
  jewerly: null,
  handleSlideClick: () => {},
  removeCurrentItem: () => {},
});

export default ImageContext;
