import React from 'react';
import styles from './ElementBonus.module.scss';

import IconPaper from './images/icon-paper.svg';
import IconScissors from './images/icon-scissors.svg';
import IconRock from './images/icon-rock.svg';
import IconSpock from './images/icon-spock.svg';
import IconLizard from './images/icon-lizard.svg';
import BackgroundTriangle from './images/bg-pentagon.svg';

const ElementBonus = () => {
  return (
    <div className={styles.triangle}>
      <img className={styles.bgTriangle} src={BackgroundTriangle} alt="" />
      <div className={`${styles.border} ${styles.blue}`}>
        <div className={styles.background}>
          <img src={IconPaper} alt="" />
        </div>
      </div>

      <div className={`${styles.border} ${styles.yellow}`}>
        <div className={styles.background}>
          <img src={IconScissors} alt="" />
        </div>
      </div>

      <div className={`${styles.border} ${styles.red}`}>
        <div className={styles.background}>
          <img src={IconRock} alt="" />
        </div>
      </div>

      <div className={`${styles.border} ${styles.cyan}`}>
        <div className={styles.background}>
          <img src={IconSpock} alt="" />
        </div>
      </div>

      <div className={`${styles.border} ${styles.violet}`}>
        <div className={styles.background}>
          <img src={IconLizard} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ElementBonus;
