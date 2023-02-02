import React from 'react';
import { documentContext } from '../utils/states';

export const InputText = ({ setText }) => {
  return (
    <>
      <h3>Nuevo Texto</h3>
      <input
        type="text"
        onKeyDown={(ev) => {
          if (ev.key == 'Enter') {
            const text = ev.target.value;
            documentContext.write(text);
            setText(documentContext.content);
            ev.target.value = '';
          }
        }}
      />
    </>
  );
};
