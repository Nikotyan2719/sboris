import { useSwiper } from 'swiper/react';

export const NextBtn = () => {
  const swiper = useSwiper();

  return (
    <div>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
};
