import { createContext } from 'react';

const ImageContext = createContext({
  images1: [],
  images2: [],
  selectedSlide1: null,
  selectedSlide2: null,
  selectedSlide3: null,
  selectedSlide4: null,
  selectedSlide5: null,
  handleSlideClick: () => {},
});

export default ImageContext;
