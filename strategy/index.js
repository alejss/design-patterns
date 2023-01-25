const { walkStrategy, trainStrategy, bycicleStrategy } = require('./strategys');

class StrategyContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  calculate(km) {
    return this.strategy(km);
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }
}

const minutes = new StrategyContext(walkStrategy);
console.log(minutes.calculate(1)); // 18

minutes.setStrategy(bycicleStrategy);
minutes.calculate(1); // 10

minutes.setStrategy(trainStrategy);
minutes.calculate(1); // 5
minutes.calculate(4); // 20
