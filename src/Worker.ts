import { FINISHED_PRODUCT, NOTHING } from './Constant';

class Worker {
  hands: string = NOTHING;

  contructor() {}

  assembleProduct(worker: Worker, slot: number, belt: Array<string>) {
    if (belt[slot] !== NOTHING && worker.hands !== belt[slot] && worker.hands !== FINISHED_PRODUCT) {
      belt[slot] = NOTHING;
      worker.hands = FINISHED_PRODUCT;
    } else if (belt[slot] !== NOTHING && worker.hands === NOTHING) {
      belt[slot] = NOTHING;
      worker.hands = belt[slot];
    } else {
      //
    }
  }
}

export default Worker;
