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
          <a href="#" className={styles.headerTitle}>
            <img src="./images/logo/logo.png" alt="" className={styles.logo} />
            <span className={styles.title}>$BORIS</span>
          </a>
          <div className={styles.headerNav}>
            <a className={`${styles.title}`}>MEME GENERATOR</a>

            <a
              href="https://borisbear.space"
              className={`${styles.title}  ${styles.smallHover} `}
            >
              WEBSITE
            </a>
          </div>
          <div className={styles.links}>
            <Links
              backgroundColor="rgb(49, 167, 220)"
              Icon={IconTelegram}
              Link="https://t.me/boris_cto"
            />
            <Links
              backgroundColor="rgb(0, 0, 0)"
              Icon={IconX}
              Link="https://x.com/boris_cto"
            />
            <Links
              backgroundColor="rgb(0, 0, 0)"
              Icon={IconEagle}
              Link="https://dexscreener.com/ton/eqdvbfekdjbqz3dac5wbhsms1iffqvkyygh8du2mbakqxtx7"
            />
            <Links
              backgroundColor="rgb(255, 255, 255)"
              Icon={IconDex}
              Link="https://www.dextools.io/app/ru/ton/pair-explorer/EQDvBFeKDjBqz3DAc5wbHsMs1IFfQVKYYGH8Du2MbAkqXtx7?t=1720715394035"
            />
            <Links
              backgroundColor="rgb(47, 56, 71)"
              Icon={IconCube}
              Link="https://dedust.io/swap/TON/EQC_Br9_cFIywrKoAGR3C5EBnrMrWueU0zqQ-0OsldqoADyW"
            />
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
