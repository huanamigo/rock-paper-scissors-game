import React, { useState } from 'react';
import Score from './components/Score/Score';
import styles from './App.module.scss';
import Picker from './components/Picker/Picker';

function App() {
  const [bonus, isBonus] = useState(false);

  const handleClick = () => {
    isBonus(!bonus);
  };

  return (
    <div className={styles.app}>
      <Score bonus={bonus} />
      <Picker bonus={bonus} />
      <button className={styles.button} onClick={handleClick}>
        ?
      </button>
    </div>
  );
}

export default App;
