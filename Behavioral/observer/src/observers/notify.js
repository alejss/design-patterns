import cpuSubject from './index';

export const notifyCPU = () => {
  const randomValue = Math.floor(Math.random() * 11);
  cpuSubject.notify(randomValue);
};
