import React, { useEffect } from 'react';
import { useState } from 'react';
import ElementBonus from './Element/ElementBonus';
import ElementStandard from './Element/ElementStandard';

const Picker = (props) => {
  const standard = ['rock', 'paper', 'scissors'];
  const bonus = [...standard, 'lizard', 'spock'];

  const [housePick, chooseHousePick] = useState();

  const pickRandom = () => {
    let currentMode = '';
    if (props.isBonus) {
      currentMode = bonus;
    } else {
      currentMode = standard;
    }

    let random = Math.floor(Math.random() * currentMode.length);
    chooseHousePick(currentMode[random]);
  };
  useEffect(() => {
    pickRandom();
  });
  return (
    <div>
      {props.bonus ? (
        <ElementBonus
          pick={pickRandom}
          housePick={housePick}
          userScore={props.userScore}
        />
      ) : (
        <ElementStandard
          pick={pickRandom}
          housePick={housePick}
          userScore={props.userScore}
          addScore={props.addScore}
        />
      )}
    </div>
  );
};

export default Picker;
