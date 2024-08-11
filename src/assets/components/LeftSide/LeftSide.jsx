import stl from './LeftSide.module.scss';
import { Button } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import { Stage, Layer, Image, Text, Transformer, Circle } from 'react-konva';

const LeftSide = () => {
  const stageRef = useRef(null);
  const imageRef = useRef(null);
  const fileInputRef = useRef(null);
  const textRef = useRef(null);
  const transformerRef = useRef(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [bearImage, setBearImage] = useState(null);
  const [selectedText, setSelectedText] = useState(null);
  const [text, setText] = useState({ value: '', x: 0, y: 0 });
  const [textScale, setTextScale] = useState({ scaleX: 1, scaleY: 1 });
  const [isTextSized, setIsTextSized] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleTextClick = (e) => {
    setSelectedText(e.target);
    setIsTextSized(false);
    setShowDeleteButton(true);
  };

  const handleDeleteText = () => {
    if (textRef.current) {
      textRef.current.destroy();
      setSelectedText(null);
      setShowDeleteButton(false);
      setText({ value: '', x: 0, y: 0 });
      stageRef.current.batchDraw();
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
    if (backgroundImage) {
      const img = new window.Image();
      img.src = backgroundImage;
      img.onload = () => {
        imageRef.current.image(img);
        stageRef.current.batchDraw();
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
      setIsTextSized(true);
    }
  };
  const handleReset = () => {
    // Сбросить состояния
    fileInputRef.current.value = '';
    setBackgroundImage(null);
    setText({ value: '', x: 0, y: 0 });
    setSelectedText(null);
    setShowDeleteButton(false);
    setTextScale({ scaleX: 1, scaleY: 1 });
    setIsTextSized(false);
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
              e.target.className !== 'Transformer'
            ) {
              setSelectedText(null);
              setShowDeleteButton(false);
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
                cornerRadius={50}
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
                cornerRadius={[0, 0, 0, 9]}
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
                x={text.x - 17}
                y={text.y - 25}
                radius={15}
                stroke="black"
                strokeWidth={3}
                fill="red"
                onClick={handleDeleteText}
                visible={!isTextSized}
              />
              <Text
                text="X"
                x={text.x - 23}
                y={text.y - 31}
                fontSize={18}
                fill="#ffffff"
                align="center"
                verticalAlign="middle"
                onClick={handleDeleteText}
                visible={!isTextSized}
              />
            </Layer>
          )}
        </Stage>
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
        <Button className={stl.custom} onClick={() => handleAddText()}>
          ADD TEXT
        </Button>

        <Button className={stl.custom} onClick={handleReset}>
          RESET
        </Button>
        <Button className={stl.custom}>GENERATE RANDOM</Button>
        <Button className={stl.custom}>SAVE MEME</Button>
      </div>
    </div>
  );
};

export default LeftSide;
