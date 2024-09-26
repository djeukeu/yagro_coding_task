import { FINISHED_PRODUCT, NOTHING, PRODUCT_A, PRODUCT_B } from './Constant';

class Worker {
  hands: string = NOTHING;

  assembleProduct(slot: string) {
    if (this.hands === PRODUCT_A) {
      // If the worker has PRODUCT_A
      if (slot === PRODUCT_A || slot === NOTHING || slot === FINISHED_PRODUCT) {
        return;
      } else {
        this.hands = FINISHED_PRODUCT;
        slot = NOTHING;
      }
    } else if (this.hands === PRODUCT_B) {
      // If the worker has PRODUCT_B

      if (slot === PRODUCT_B || slot === NOTHING || slot === FINISHED_PRODUCT) {
        return;
      } else {
        this.hands = FINISHED_PRODUCT;
        slot = NOTHING;
      }
    } else if (this.hands === NOTHING) {
      // If the worker has NOTHING

      if (slot !== NOTHING) {
        this.hands = slot;
        slot = NOTHING;
      }
    } else if (this.hands === FINISHED_PRODUCT) {
      // If the worker has FINISHED_PRODUCT

      if (slot === NOTHING) {
        this.hands = NOTHING;
        slot = FINISHED_PRODUCT;
      }
    }
  }
}

export default Worker;
