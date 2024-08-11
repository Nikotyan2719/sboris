import stl from './LeftSide.module.scss';
import { Button } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import { Stage, Layer, Image, Text, Transformer, Circle } from 'react-konva';
import { useContext } from 'react';
import imageContext from '../context/ImageContext';

const LeftSide = () => {
  const stageRef = useRef(null);
  const imageRef = useRef(null);
  const stickerRef = useRef(null);
  const fileInputRef = useRef(null);
  const fileStickerRef = useRef(null);
  const textRef = useRef(null);
  const transformerRef = useRef(null);
  //Изначальный рендер + бг
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [bearImage, setBearImage] = useState(null);
  //Текст
  const [text, setText] = useState({ value: '', x: 0, y: 0 });
  const [selectedText, setSelectedText] = useState(null);
  const [textScale, setTextScale] = useState({ scaleX: 1, scaleY: 1 });
  const [isTextSized, setIsTextSized] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  //Стикер
  const [stickerImage, setStickerImage] = useState(null);
  const [selectedSticker, setSelectedSticker] = useState(null);
  const [stickerScale, setStickerScale] = useState({ scaleX: 1, scaleY: 1 });
  const [isStickerSized, setIsStickerSized] = useState(true);
  const [selectedType, setSelectedType] = useState(null);
  //Очки
  const [eyeWearImg, setEyeWearImg] = useState(null);
  const [eyeWearCoord, setEyeWearCoord] = useState({ x: 0, y: 0 });
  const [eyeWearSize, setEyeWearSize] = useState({ width: 0, height: 0 });
  //Цепи
  const [jewerlyImg, setJewerlyImg] = useState(null);
  const [jewerlyCoord, setJewerlyCoord] = useState({ x: 0, y: 0 });
  const [jewerlySize, setJewerlySize] = useState({ width: 0, height: 0 });
  //Контекст
  const { background, jewerly, eyeWear, backgrounds, eyeWears, jewerlys } =
    useContext(imageContext);

  //Рандомная генерация
  const generateRandomElements = () => {
    const randomBackground =
      backgrounds[Math.floor(Math.random() * backgrounds.length)];
    const randomEyewear = eyeWears[Math.floor(Math.random() * eyeWears.length)];
    const randomJewerlys =
      jewerlys[Math.floor(Math.random() * jewerlys.length)];

    setBackgroundImage(randomBackground.src);

    setEyeWearImg(null);
    setEyeWearCoord({ x: randomEyewear.x, y: randomEyewear.y });
    setEyeWearSize({
      width: randomEyewear.width,
      height: randomEyewear.height,
    });
    const img = new window.Image();
    img.src = randomEyewear.src;
    img.onload = () => {
      setEyeWearImg(img);
    };

    setJewerlyImg(null);
    setJewerlyCoord({ x: randomJewerlys.x, y: randomJewerlys.y });
    setJewerlySize({
      width: randomJewerlys.width,
      height: randomJewerlys.height,
    });
    const img2 = new window.Image();
    img2.src = randomJewerlys.src;
    img2.onload = () => {
      setJewerlyImg(img2);
    };
  };

  //Юзэффект для каждого элемента
  useEffect(() => {
    if (eyeWear === 'del') {
      setEyeWearImg(null);
    } else if (eyeWear) {
      const img = new window.Image();
      img.src = eyeWear.src;
      setEyeWearCoord({ x: eyeWear.x, y: eyeWear.y });
      setEyeWearSize({
        width: eyeWear.width,
        height: eyeWear.height,
      });
      img.onload = () => {
        setEyeWearImg(img);
      };
    }
  }, [eyeWear]);

  useEffect(() => {
    if (jewerly === 'del') {
      setJewerlyImg(null);
    } else if (jewerly) {
      const img = new window.Image();
      img.src = jewerly.src;
      setJewerlyCoord({ x: jewerly.x, y: jewerly.y });
      setJewerlySize({
        width: jewerly.width,
        height: jewerly.height,
      });
      img.onload = () => {
        setJewerlyImg(img);
      };
    }
  }, [jewerly]);
  useEffect(() => {
    if (background === 'del') {
      setBackgroundImage(null);
    } else if (background) {
      setBackgroundImage(background.src);
    }
  }, [background]);

  useEffect(() => {
    if (backgroundImage) {
      const img = new window.Image();
      img.src = backgroundImage;
      img.onload = () => {
        imageRef.current.image(img);
        stageRef.current.batchDraw();
      };
    }
  }, [backgroundImage]);

  const handleStickerChange = (event) => {
    console.log('in sticker');
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setStickerImage(imageUrl);
    }
  };

  useEffect(() => {
    // Загрузка изображения медведя при первом рендере
    const img = new window.Image();
    img.src = './images/logo/bearPicture.png'; // Замените на путь к вашему изображению медведя
    img.onload = () => {
      setBearImage(img);
    };
  }, []);

  useEffect(() => {
    if (stickerImage) {
      const img = new window.Image();
      img.src = stickerImage;
      img.onload = () => {
        stickerRef.current.image(img);
        stageRef.current.batchDraw();
      };
    }
  }, [stickerImage]);

  const handleBackgroundUpload = () => {
    fileInputRef.current.click();
  };
  const handleStickerUpload = () => {
    fileStickerRef.current.click();
  };

  const handleFileChange = (event) => {
    console.log('in background');
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBackgroundImage(imageUrl);
    }
  };

  const handleAddText = () => {
    const value = prompt('Enter the text:');
    if (value) {
      setText({ value, x: 156, y: 180 });
    }
  };

  const handleTransformEnd = () => {
    if (textRef.current) {
      const node = textRef.current;
      const scaleX = node.scaleX();
      const scaleY = node.scaleY();

      setTextScale({ scaleX, scaleY });
    }
  };
  const handleStickerTransformEnd = () => {
    if (stickerRef.current) {
      const node = stickerRef.current;
      const scaleX = node.scaleX();
      const scaleY = node.scaleY();
      const rotation = node.rotation();

      setStickerScale({ scaleX, scaleY, rotation });
    }
  };

  const handleTextClick = (e) => {
    console.log('выбран текст');
    setSelectedText(e.target);
    setIsTextSized(false);
    setShowDeleteButton(true);
    setSelectedType('text');
    setSelectedSticker(null);
  };
  const handleStickerClick = (e) => {
    console.log('выбран стикер');
    setSelectedSticker(e.target);
    setIsStickerSized(false);
    setShowDeleteButton(true);
    setSelectedType('sticker');
    setSelectedText(null);
  };

  //Удаление стикера или текста
  const handleDelete = () => {
    console.log('in delete');
    if (selectedText) {
      selectedText.destroy();
      setSelectedText(null);
      setShowDeleteButton(false);
      setText({ value: '', x: 0, y: 0 });
      stageRef.current.batchDraw();
    } else if (selectedSticker) {
      selectedSticker.destroy();
      setSelectedSticker(null);
      setShowDeleteButton(false);
      setStickerImage(null);
      setStickerScale({ scaleX: 1, scaleY: 1, rotation: 0 });
      setIsStickerSized(false);
      fileStickerRef.current.value = '';
      stageRef.current.batchDraw();
    }
  };

  //Очистка полотна
  const handleReset = () => {
    // Сбросить состояния
    fileInputRef.current.value = '';
    setBackgroundImage(null);
    //
    setText({ value: '', x: 0, y: 0 });
    setSelectedText(null);
    setShowDeleteButton(false);
    setTextScale({ scaleX: 1, scaleY: 1 });
    setIsTextSized(false);
    //
    fileStickerRef.current.value = '';
    setStickerImage(null);
    setSelectedSticker(null);
    setStickerScale({ scaleX: 1, scaleY: 1, rotation: 0 });
    setIsStickerSized(false);
    //
    setEyeWearImg(null);
    setJewerlyImg(null);
  };

  //Сохранение
  const handleSaveImage = () => {
    const stage = stageRef.current;
    const pixelRatio = window.devicePixelRatio || 1; // Получаем коэффициент масштабирования

    // Временно увеличиваем размер канваса
    stage.width(stage.width() * pixelRatio);
    stage.height(stage.height() * pixelRatio);

    const dataURL = stage.toDataURL({ mimeType: 'image/png', quality: 1 });

    // Возвращаем оригинальный размер канваса
    stage.width(stage.width() / pixelRatio);
    stage.height(stage.height() / pixelRatio);

    // Создание ссылки для загрузки изображения
    const link = document.createElement('a');
    link.download = 'BorisMeme.png';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        <Stage
          ref={stageRef}
          className={stl.canvas}
          width={356}
          height={360}
          onClick={(e) => {
            // Проверяем, что клик не был на самом текстовом компоненте или трансформере
            if (
              e.target.className !== 'Text' &&
              e.target.className !== 'Transformer' &&
              e.target !== stickerRef.current
            ) {
              setSelectedSticker(null);
              setIsTextSized(false);
              setSelectedText(null);
              setShowDeleteButton(false);
              setSelectedType(null);
            }
          }}
          onTap={(e) => {
            // Проверяем, что клик не был на самом текстовом компоненте, трансформере или стикере
            if (
              e.target.className !== 'Text' &&
              e.target.className !== 'Transformer' &&
              e.target !== stickerRef.current
            ) {
              setSelectedSticker(null);
              setIsTextSized(false);
              setSelectedText(null);
              setShowDeleteButton(false);
              setSelectedType(null);
            }
          }}
        >
          <Layer>
            {backgroundImage && (
              <Image
                fill={'red'}
                ref={imageRef}
                x={0}
                y={0}
                width={356}
                height={360}
              />
            )}
            {bearImage && (
              <Image
                ref={imageRef}
                image={bearImage}
                x={33}
                y={57}
                width={278}
                height={303}
              />
            )}

            {jewerlyImg && (
              <Image
                image={jewerlyImg}
                x={jewerlyCoord.x}
                y={jewerlyCoord.y}
                width={jewerlySize.width}
                height={jewerlySize.height}
              />
            )}
            {eyeWearImg && (
              <Image
                image={eyeWearImg}
                x={eyeWearCoord.x}
                y={eyeWearCoord.y}
                width={eyeWearSize.width}
                height={eyeWearSize.height}
              />
            )}
            {stickerImage && (
              <Image
                ref={stickerRef}
                x={120} // Установите координату x для стикера
                y={130} // Установите координату y для стикера
                width={100} // Установите ширину стикера
                height={100} // Установите высоту стикера
                draggable
                scaleX={stickerScale.scaleX}
                scaleY={stickerScale.scaleY}
                onDragEnd={(e) => {
                  setStickerImage({
                    ...stickerImage,
                    x: e.target.x(),
                    y: e.target.y(),
                  });
                }}
                onClick={handleStickerClick}
                onTap={handleStickerClick}
              />
            )}
            {selectedSticker && (
              <Transformer
                ref={transformerRef}
                node={selectedSticker}
                boundBoxFunc={(oldBox, newBox) => {
                  if (newBox.width < 20 || newBox.height < 20) {
                    return oldBox;
                  }
                  return newBox;
                }}
                onTransformEnd={handleStickerTransformEnd}
                visible={!isStickerSized}
              />
            )}
            {text.value && (
              <Text
                text={text.value}
                x={text.x}
                y={text.y}
                fontSize={30}
                fill="black"
                stroke="black"
                strokeWidth={2}
                draggable
                scaleX={textScale.scaleX}
                scaleY={textScale.scaleY}
                onDragEnd={(e) => {
                  setText({
                    ...text,
                    x: e.target.x(),
                    y: e.target.y(),
                  });
                }}
                onClick={handleTextClick}
                onTap={handleTextClick}
                ref={textRef}
              />
            )}
            {selectedText && (
              <Transformer
                ref={transformerRef}
                node={selectedText}
                boundBoxFunc={(oldBox, newBox) => {
                  if (newBox.width < 20 || newBox.height < 20) {
                    return oldBox;
                  }
                  return newBox;
                }}
                onTransformEnd={handleTransformEnd}
                visible={!isTextSized}
              />
            )}
          </Layer>
          {showDeleteButton && (
            <Layer>
              <Circle
                x={
                  selectedType === 'text'
                    ? text.x - 17
                    : selectedType === 'sticker'
                      ? selectedSticker.x() - 17
                      : 0
                }
                y={
                  selectedType === 'text'
                    ? text.y - 25
                    : selectedType === 'sticker'
                      ? selectedSticker.y() - 25
                      : 0
                }
                r
                radius={15}
                stroke="black"
                strokeWidth={3}
                fill="red"
                onClick={handleDelete}
                onTap={handleDelete}
                visible={!isStickerSized || !isTextSized}
              />
              <Text
                text="X"
                x={
                  selectedType === 'text'
                    ? text.x - 23
                    : selectedType === 'sticker'
                      ? selectedSticker.x() - 23
                      : 0
                }
                y={
                  selectedType === 'text'
                    ? text.y - 31
                    : selectedType === 'sticker'
                      ? selectedSticker.y() - 31
                      : 0
                }
                fontSize={18}
                fill="#ffffff"
                align="center"
                verticalAlign="middle"
                onClick={handleDelete}
                onTap={handleDelete}
                visible={!isStickerSized || !isTextSized}
              />
            </Layer>
          )}
        </Stage>
      </div>
      <img src="./images/logo/shadow-picture.png" className={stl.shadow}></img>
      <div className={stl.btnList}>
        <Button className={stl.custom} onClick={handleStickerUpload}>
          UPLOAD STICKER
        </Button>
        <input
          type="file"
          accept="image/*"
          onChange={handleStickerChange}
          ref={fileStickerRef}
          style={{ display: 'none' }}
        />
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
        <Button className={stl.custom} onClick={() => handleAddText()}>
          ADD TEXT
        </Button>

        <Button className={stl.custom} onClick={handleReset}>
          RESET
        </Button>
        <Button className={stl.custom} onClick={generateRandomElements}>
          GENERATE RANDOM
        </Button>
        <Button className={stl.custom} onClick={handleSaveImage}>
          SAVE MEME
        </Button>
      </div>
    </div>
  );
};

export default LeftSide;
