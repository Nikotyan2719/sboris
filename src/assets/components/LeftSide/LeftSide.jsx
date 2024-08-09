import stl from './LeftSide.module.scss';
import { Button } from 'react-bootstrap';
const LeftSide = () => {
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
        <div className={stl.canvas}></div>
        <img src="/images/logo/shadow-picture.png" className={stl.shadow}></img>
      </div>
      <div className={stl.btnList}>
        <Button className={stl.btn}>UPLOAD STICKER</Button>
        <Button className={stl.btn}>UPLOAD BACKGROUND</Button>
        <Button className={stl.btn}>ADD TEXT</Button>
        <Button className={stl.btn}>RESET</Button>
        <Button className={stl.btn}>GENERATE RANDOM</Button>
        <Button className={stl.btn}>SAVE MEME</Button>
      </div>
    </div>
  );
};
export default LeftSide;
