import stl from './MainSection.module.scss';
import { Container } from 'react-bootstrap';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
const MainSection = () => {
  return (
    <div className={stl.root}>
      <Container className={stl.container}>
        <LeftSide />
        <RightSide />
      </Container>
    </div>
  );
};

export default MainSection;
