import _ from 'lodash';

import { NOTHING, PRODUCT_A, PRODUCT_B } from './Constant';

class Belt {
  slots: Array<string>;
  private product: string;

  constructor(beltLength: number) {
    this.slots = _.fill(Array(beltLength), NOTHING);
    this.product = this.pickRandomProduct();
  }

  private pickRandomProduct() {
    const items = [PRODUCT_A, PRODUCT_B, NOTHING];
    const item = items[_.random(0, items.length - 1)];
    return item;
  }

  getProduct() {
    return this.product;
  }
}

export default Belt;
