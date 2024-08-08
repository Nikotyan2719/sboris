import styles from './Header.module.scss';
import { Button, Container } from 'react-bootstrap';
import IconTelegram from '../icons/IconTelegram';

const Header = () => {
  return (
    <header className={styles.root}>
      <Container>
        <h1 className={styles.title}>Test</h1>
        <Button>lorem50</Button>
        <IconTelegram />
      </Container>
    </header>
  );
};
export default Header;
