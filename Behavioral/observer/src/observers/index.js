class CPUSubject {
  observers = [];
  constructor() {}

  subscribe(observers) {
    this.observers.push(observers);
  }

  unsubscribe(subject) {}

  notify(notifyValue) {
    this.observers.map((observer) => observer(notifyValue));
  }

  monitorCPU() {
    this.intervalID = setInterval(() => {
      const cpuStatus = Math.floor(Math.random() * 11);
      this.notify(cpuStatus);
    }, 5000);
  }
}

const cpuSubject = new CPUSubject();
cpuSubject.monitorCPU();

export default cpuSubject;
