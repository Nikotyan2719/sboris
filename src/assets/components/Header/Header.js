import styles from './Header.module.scss';
import { Container } from 'react-bootstrap';
import IconTelegram from '../Icons/IconTelegram';
import IconX from '../Icons/IconX';
import Links from '../Links/Links';
import IconEagle from '../Icons/IconEagle';
import IconDex from '../Icons/IconDex';
import IconCube from '../Icons/IconCube';

const Header = () => {
  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.headerMenu}>
          <div className={styles.headerTitle}>
            <img src="/images/logo/logo.png" alt="" className={styles.logo} />
            <span className={styles.title}>$BORIS</span>
          </div>
          <div className={styles.headerNav}>
            <a className={styles.title}>MEME GENERATOR</a>
            <a className={`${styles.title} text-decoration-none`}>WEBSITE</a>
          </div>
          <div className={styles.links}>
            <Links backgroundColor="rgb(49, 167, 220)" Icon={IconTelegram} />
            <Links backgroundColor="rgb(0, 0, 0)" Icon={IconX} />
            <Links backgroundColor="rgb(0, 0, 0)" Icon={IconEagle} />
            <Links backgroundColor="rgb(255, 255, 255)" Icon={IconDex} />
            <Links backgroundColor="rgb(47, 56, 71)" Icon={IconCube} />
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
