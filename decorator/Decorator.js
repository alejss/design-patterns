class ProductComponent {
  constructor({ quantity, weight, price }) {
    this.quantity = quantity;
    this.weight = weight;
    this.price = price;
  }

  getQuantity() {
    return this.quantity;
  }

  getWeight() {
    return this.weight;
  }

  calculateDiscount() {
    return this.quantity;
  }

  getProductInfo() {
    return { quantity: this.quantity, weight: this.weight, price: this.price };
  }
}

class ProductDecorator {
  constructor(productComponent) {
    this.productComponent = productComponent;
  }

  getQuantity() {
    return this.productComponent.getQuantity();
  }

  getWeight() {
    return this.productComponent.getWeight();
  }

  calculateDiscount() {
    return this.productComponent.calculateDiscounts();
  }
}

module.exports = {
  ProductComponent,
  ProductDecorator,
};
