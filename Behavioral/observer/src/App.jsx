import { useState, useEffect } from 'react';
import cpuSubject from './observers/index';
import { notifyCPU } from './observers/notify';
import './App.css';

function App() {
  const [cpu, setCPU] = useState(0);

  const onCPUUpdate = (cpuValue) => {
    setCPU(cpuValue);
  };

  const updateValue = () => {
    notifyCPU();
  };

  useEffect(() => {
    cpuSubject.subscribe(onCPUUpdate);
  }, []);

  return (
    <div className="App">
      <div className="card">{cpu}%</div>
      <div className="card">
        <button onClick={updateValue}>Update CPU</button>
      </div>
      {cpu >= 8 ? <div className="cpuAlert">Sobrecarga de CPU</div> : ''}
    </div>
  );
}

export default App;
