import stl from './Footer.module.scss';
import { Container } from 'react-bootstrap';
const Footer = () => {
  return (
    <footer className={stl.root}>
      <Container>
        <div className={stl.footerInner}>
          ® 2024 BY BORIS. ALL RIGHTS RESERVED
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
