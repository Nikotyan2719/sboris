import styles from './Header.module.scss';
import { Container } from 'react-bootstrap';
import IconTelegram from '../icons/IconTelegram';
import IconX from '../icons/IconX';
import Links from '../Links/Links';
import IconEagle from '../icons/IconEagle';
import IconDex from '../icons/IconDex';

const Header = () => {
  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.headerMenu}>
          <div className={styles.firstCol}>
            <img src="/Images/logo/logo.png" alt="" className={styles.logo} />

            <h1 className={styles.title}>$BORIS</h1>
          </div>
          <div>
            <a className={styles.title}>MEME GENERATOR</a>
            <a className={`${styles.title} text-decoration-none`}>WEBSITE</a>
          </div>
          <div className={styles.links}>
            <Links backgroundColor="rgb(49, 167, 220)" Icon={IconTelegram} />
            <Links backgroundColor="rgb(0, 0, 0)" Icon={IconX} />
            <Links backgroundColor="rgb(0, 0, 0)" Icon={IconEagle} />
            <Links backgroundColor="rgb(255, 255, 255)" Icon={IconDex} />
            <Links />
          </div>
        </div>
      </Container>
      <IconTelegram />
    </header>
  );
};
export default Header;
