import React from 'react';
import ElementBonus from './Element/ElementBonus';
import ElementStandard from './Element/ElementStandard';

const Picker = (props) => {
  return <div>{props.bonus ? <ElementBonus /> : <ElementStandard />}</div>;
};

export default Picker;
