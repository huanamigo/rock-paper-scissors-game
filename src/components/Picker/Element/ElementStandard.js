import React, { useState } from 'react';
import styles from './Element.module.scss';

import IconPaper from './images/icon-paper.svg';
import IconScissors from './images/icon-scissors.svg';
import IconRock from './images/icon-rock.svg';
import BackgroundTriangle from './images/bg-triangle.svg';

// I'm really sorry about these classes

const ElementStandard = () => {
  const [chosen, choose] = useState('');
  const [hide, toHide] = useState(false);

  const asd = (id) => {
    choose(id);
    toHide(true);
  };

  return (
    <div className={styles.triangle}>
      <img
        className={`${hide ? styles.hidden : null} ${styles.bgTriangle}`}
        src={BackgroundTriangle}
        alt=""
      />
      <div className={styles.top}>
        <div
          onClick={() => asd('paper')}
          className={`${chosen === 'paper' ? styles.activeP : null} ${
            chosen !== 'paper' && hide ? styles.hidden : null
          } ${styles.container}`}
        >
          <div className={`${styles.border} ${styles.blue}`}>
            <div className={styles.background}>
              <img src={IconPaper} alt="" />
            </div>
          </div>
        </div>
        <div
          onClick={() => asd('scissors')}
          className={`${chosen === 'scissors' ? styles.activeSC : null} ${
            chosen !== 'scissors' && hide ? styles.hidden : null
          } ${styles.container}`}
        >
          <div className={`${styles.border} ${styles.yellow}`}>
            <div className={styles.background}>
              <img src={IconScissors} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div
          onClick={() => asd('rock')}
          className={`${chosen === 'rock' ? styles.activeR : null} ${
            chosen !== 'rock' && hide ? styles.hidden : null
          } ${styles.container}`}
        >
          <div className={`${styles.border} ${styles.red}`}>
            <div className={styles.background}>
              <img src={IconRock} alt="" />
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          choose('');
          toHide(false);
        }}
      >
        asdas
      </button>
    </div>
  );
};

export default ElementStandard;
