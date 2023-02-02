import React from 'react';
import './index.css';
import { statesMap, documentContext } from '../utils/states';

export const Buttons = ({ setState }) => {
  const setStateText = (state) => {
    const newState = new statesMap[state]();
    documentContext.setState(newState);
  };

  return (
    <div className="buttons-content">
      <button
        className="buttons-content-button"
        onClick={() => setStateText('upperCaseState')}
      >
        Mayúsculas
      </button>
      <button
        className="buttons-content-button"
        onClick={() => setStateText('lowerCaseState')}
      >
        Miniscula
      </button>
      <button
        className="buttons-content-button"
        onClick={() => setStateText('normalState')}
      >
        Texto Normal
      </button>
    </div>
  );
};
