import React, { useState } from 'react';
import Score from './components/Score/Score';
import styles from './App.module.scss';
import Picker from './components/Picker/Picker';

//TODO:
// make bonus site work

function App() {
  const [isBonus, toggleBonus] = useState(false);
  const [userScore, addScore] = useState(0);

  const handleClick = () => {
    toggleBonus(!isBonus);
  };

  return (
    <div className={styles.app}>
      <Score bonus={isBonus} userScore={userScore} />
      <Picker bonus={isBonus} userScore={userScore} addScore={addScore} />
      <button className={styles.button} onClick={handleClick}>
        ?
      </button>
    </div>
  );
}

export default App;
