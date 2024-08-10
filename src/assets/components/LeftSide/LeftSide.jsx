import stl from './LeftSide.module.scss';
import { Button } from 'react-bootstrap';
import { useContext, useEffect, useRef, useState } from 'react';
import ImageContext from '../context/ImageContext';

const LeftSide = () => {
  const canvasRef = useRef(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const fileInputRef = useRef(null);
  const { selectedSlide1, selectedSlide2 } = useContext(ImageContext);

  if (selectedSlide1) {
    console.log(selectedSlide1.title);
  }
  if (selectedSlide2) {
    console.log(selectedSlide2.title);
  }
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Рисуем фоновое изображение, если оно есть
    if (backgroundImage) {
      const backgroundImg = new Image();
      backgroundImg.src = backgroundImage;
      backgroundImg.onload = () => {
        ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);

        // Теперь рисуем мишку поверх фона
        const bearImage = new Image();
        bearImage.src = '/Images/logo/bearPicture.png';
        bearImage.onload = () => {
          ctx.drawImage(bearImage, 20, 20, 150, 150);
        };
      };
    } else {
      // Если фонового изображения нет, рисуем только мишку
      const bearImage = new Image();
      bearImage.src = '/Images/logo/bearPicture.png';
      bearImage.onload = () => {
        ctx.drawImage(bearImage, 20, 20, 150, 150);
      };
    }
  }, [backgroundImage]);

  const handleBackgroundUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBackgroundImage(imageUrl);
    }
  };

  return (
    <div className={stl.root}>
      <div className={stl.title}>
        <h1>
          <div>BORIS</div>
          <div>MEME</div>
          <div>GENERATION</div>
        </h1>
      </div>
      <div className={stl.canvasBlock}>
        <canvas ref={canvasRef} className={stl.canvas}></canvas>
        <img src="/Images/logo/shadow-picture.png" className={stl.shadow}></img>
      </div>
      <div className={stl.btnList}>
        <Button className={stl.custom}>UPLOAD STICKER</Button>
        <Button className={stl.custom} onClick={handleBackgroundUpload}>
          UPLOAD BACKGROUND
        </Button>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        <Button className={stl.custom}>ADD TEXT</Button>
        <Button className={stl.custom}>RESET</Button>
        <Button className={stl.custom}>GENERATE RANDOM</Button>
        <Button className={stl.custom}>SAVE MEME</Button>
      </div>
    </div>
  );
};

export default LeftSide;
