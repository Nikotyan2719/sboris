import { useSwiper } from 'swiper/react';

export const PrevBtn = () => {
  const swiper = useSwiper();

  return (
    <div>
      <button onClick={() => swiper.slidePrev()}>Prev</button>
    </div>
  );
};
