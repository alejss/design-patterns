const { ProductComponent } = require('./Decorator');
const {
  QuantityDiscountDecorator,
  WeightDiscountDecorator,
} = require('./DiscountsDecorator');

const productInfo = { quantity: 200, weight: 2, price: 200 };

let productComponent = new ProductComponent(productInfo);

// First Decorator
productComponent = new QuantityDiscountDecorator(productComponent);
console.log(productComponent.calculateDiscount());

// Second Decorator
productComponent = new WeightDiscountDecorator(productComponent);
console.log(productComponent.calculateDiscount());
