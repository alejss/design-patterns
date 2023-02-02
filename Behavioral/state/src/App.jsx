import { useState } from 'react';

import { InputText } from './components/InputText';
import { DocumentText } from './components/DocumentText';
import { Buttons } from './components/Buttons';

function App() {
  const [text, setText] = useState('');

  return (
    <>
      <InputText setText={setText} />
      <DocumentText text={text} />
      <Buttons></Buttons>
    </>
  );
}

export default App;
