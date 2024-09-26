import { FINISHED_PRODUCT, NOTHING, PRODUCT_A, PRODUCT_B } from './Constant';

class Worker {
  hands: string = NOTHING;

  assembleProduct(slot: string) {
    if (this.hands === PRODUCT_A) {
      if (slot === PRODUCT_A || slot === NOTHING || slot === FINISHED_PRODUCT) {
        //
      } else {
        this.hands = FINISHED_PRODUCT;
        slot = NOTHING;
      }
    } else if (this.hands === PRODUCT_B) {
      if (slot === PRODUCT_B || slot === NOTHING || slot === FINISHED_PRODUCT) {
        //
      } else {
        this.hands = FINISHED_PRODUCT;
        slot = NOTHING;
      }
    } else if (this.hands === NOTHING) {
      if (slot !== NOTHING) {
        this.hands = slot;
        slot = NOTHING;
      }
    } else if (this.hands === FINISHED_PRODUCT) {
      if (slot === NOTHING) {
        this.hands = NOTHING;
        slot = FINISHED_PRODUCT;
      }
    }
  }
}

export default Worker;
