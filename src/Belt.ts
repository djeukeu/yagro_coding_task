import _ from 'lodash';

import { NOTHING, PRODUCT_A, PRODUCT_B } from './Constant';

class Belt {
  slots: Array<string>;

  constructor(beltLength: number) {
    // Create an array of empty slots
    this.slots = _.fill(Array(beltLength), NOTHING);
  }

  move() {
    // Removes the last product and inserts a new one
    const lastProduct = this.slots.pop();
    this.slots.unshift(this.pickRandomProduct());
    return lastProduct;
  }

  private pickRandomProduct() {
    // Randomly select a product
    const items = [PRODUCT_A, PRODUCT_B, NOTHING];
    const item = items[_.random(0, items.length - 1)];
    return item;
  }

  replaceProduct = (index: number, product: string) => {
    // Replace the product
    this.slots[index] = product;
  };
}

export default Belt;
