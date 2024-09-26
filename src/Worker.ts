import { FINISHED_PRODUCT, NOTHING, AVAILABLE, PRODUCT_A, PRODUCT_B, READY, ASSEMBLING } from './Constant';

class Worker {
  hands: string = NOTHING;
  private status = AVAILABLE;

  contructor() {}

  worker_2_turn(_index: number, product: string) {
    if (this.hands === PRODUCT_A) {
      if (product === PRODUCT_A || product === NOTHING || product === FINISHED_PRODUCT) {
        //
      } else {
        this.hands = FINISHED_PRODUCT;
        product = NOTHING;
        this.status = READY;
      }
    } else if (this.hands === PRODUCT_B) {
      if (product === PRODUCT_B || product === NOTHING || product === FINISHED_PRODUCT) {
        //
      } else {
        this.hands = FINISHED_PRODUCT;
        product = NOTHING;
        this.status = READY;
      }
    } else if (this.hands === NOTHING) {
      if (product !== NOTHING) {
        this.hands = product;
        product = NOTHING;
        this.status = ASSEMBLING;
      }
    } else if (this.hands === FINISHED_PRODUCT) {
      if (product === NOTHING) {
        this.hands = NOTHING;
        product = FINISHED_PRODUCT;
        this.status = ASSEMBLING;
      }
    }
  }

  getStatus() {
    return this.status;
  }

  isAvailable() {
    return this.status === AVAILABLE;
  }
}

export default Worker;
