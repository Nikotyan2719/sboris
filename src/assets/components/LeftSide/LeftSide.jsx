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
        <img src="/Images/logo/shadow-picture.png" className={stl.shadow}></img>
      </div>
      <div className={stl.btnList}>
        <Button>UPLOAD STICKER</Button>
        <Button>UPLOAD BACKGROUND</Button>
        <Button>ADD TEXT</Button>
        <Button>RESET</Button>
        <Button>GENERATE RANDOM</Button>
        <Button>SAVE MEME</Button>
      </div>
    </div>
  );
};
export default LeftSide;
