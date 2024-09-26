import _ from 'lodash';

import { NOTHING, PRODUCT_A, PRODUCT_B } from './Constant';

class Belt {
  slots: Array<string>;

  constructor(beltLength: number) {
    this.slots = _.fill(Array(beltLength), NOTHING);
  }

  move() {
    const lastProduct = this.slots.pop();
    this.slots.unshift(this.pickRandomProduct());
    return lastProduct;
  }

  private pickRandomProduct() {
    const items = [PRODUCT_A, PRODUCT_B, NOTHING];
    const item = items[_.random(0, items.length - 1)];
    return item;
  }

  replaceProduct = (index: number, product: string) => {
    this.slots[index] = product;
  };
}

export default Belt;
