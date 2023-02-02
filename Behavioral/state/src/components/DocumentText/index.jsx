import React from 'react';
import './index.css';

export const DocumentText = ({ text }) => {
  return (
    <div className="documentText-container">
      <p className="documentText-container-text">{text}</p>
    </div>
  );
};
