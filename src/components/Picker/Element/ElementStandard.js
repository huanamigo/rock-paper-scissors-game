import React, { useState } from 'react';
import styles from './Element.module.scss';

import IconPaper from './images/icon-paper.svg';
import IconScissors from './images/icon-scissors.svg';
import IconRock from './images/icon-rock.svg';
import BackgroundTriangle from './images/bg-triangle.svg';

// I'm really sorry about these classes

const ElementStandard = (props) => {
  const [chosen, choose] = useState('');
  const [hide, toHide] = useState(false);
  const [houseStyle, changeHouseStyle] = useState([null, null]);
  const [winMessage, changeMessage] = useState('');

  const asd = (id) => {
    if (chosen) return;
    choose(id);
    props.pick();
    toHide(true);
    winCheck(id);
    setHouseBorderImg(props.housePick);
  };

  const winCheck = (id) => {
    const win = () => {
      props.addScore(props.userScore + 1);
      changeMessage('YOU WON');
    };
    const loose = () => {
      props.addScore(props.userScore - 1);
      changeMessage('YOU LOST');
    };

    const tie = () => {
      changeMessage('TIE');
    };

    if (id === props.housePick) {
      tie();
      return;
    }
    if (id === 'rock') {
      if (props.housePick === 'scissors') {
        win();
      } else {
        loose();
      }
    }

    if (id === 'paper') {
      if (props.housePick === 'rock') {
        win();
      } else {
        loose();
      }
    }

    if (id === 'scissors') {
      if (props.housePick === 'paper') {
        win();
      } else {
        loose();
      }
    }
  };

  const setHouseBorderImg = (pick) => {
    if (pick === 'rock') {
      changeHouseStyle([styles.red, IconRock]);
    } else if (pick === 'paper') {
      changeHouseStyle([styles.blue, IconPaper]);
    } else if (pick === 'scissors') {
      changeHouseStyle([styles.yellow, IconScissors]);
    }
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
        <div
          className={`${styles.activeHouse} ${
            chosen !== '' && hide ? null : styles.hidden
          } ${styles.container}`}
        >
          <div className={`${styles.border} ${houseStyle[0]}`}>
            <div className={styles.background}>
              <img src={houseStyle[1]} alt="" />
            </div>
          </div>
        </div>
      </div>

      <p
        className={`${styles.p} ${styles.userPick} ${
          chosen !== '' && hide ? null : styles.hidden
        }`}
      >
        You picked:
      </p>
      <p
        className={`${styles.p} ${styles.housePick} ${
          chosen !== '' && hide ? null : styles.hidden
        }`}
      >
        House picked:
      </p>

      <div
        className={`${styles.playAgain} ${
          chosen !== '' && hide ? null : styles.hidden
        }`}
      >
        <p>{winMessage}</p>
        <button
          onClick={() => {
            choose('');
            toHide(false);
          }}
          className={`${styles.playAgainBtn} ${
            chosen !== '' && hide ? null : styles.hidden
          }`}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default ElementStandard;
