const { ProductDecorator } = require('./Decorator');

class QuantityDiscountDecorator extends ProductDecorator {
  constructor(productComponent) {
    super(productComponent);
  }

  calculateDiscount() {
    const quantity = this.productComponent.getQuantity();
    const discount = quantity * 0.3;

    return this.productComponent.price - discount;
  }
}

class WeightDiscountDecorator extends ProductDecorator {
  constructor(productComponent) {
    super(productComponent);
  }

  calculateDiscount() {
    const weight = this.productComponent.getWeight();
    if (weight >= 2) return this.productComponent.calculateDiscount() - 20;
    return this.productComponent.price;
  }
}

module.exports = {
  QuantityDiscountDecorator,
  WeightDiscountDecorator,
};
