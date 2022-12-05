import React from 'react';
import styles from './Score.module.scss';

import scoreText from '../Picker/Element/images/logo.svg';
import scoreTextBonus from '../Picker/Element/images/logo-bonus.svg';

const Score = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <img
          className={styles.img}
          src={props.bonus ? scoreTextBonus : scoreText}
          alt=""
        />
        <div className={styles.score}>
          <p>SCORE</p>
          <p className={styles.userScore}>{props.userScore}</p>
        </div>
      </div>
    </div>
  );
};

export default Score;
