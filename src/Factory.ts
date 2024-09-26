import _ from 'lodash';

import Belt from './Belt';
import { FINISHED_PRODUCT, NOTHING, PRODUCT_A, PRODUCT_B, SIMULATION_STEPS, WORKER_PER_SLOT } from './Constant';
import Worker from './Worker';

class Factory {
  private conveyorBelt: Belt;
  private workers: Worker[][];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  finalProducts: any = {
    PRODUCT_A: 0,
    PRODUCT_B: 0,
    FINISHED_PRODUCT: 0,
    NOTHING: 0,
  };

  constructor(beltLength: number) {
    this.conveyorBelt = new Belt(beltLength);
    this.workers = Array.from({ length: beltLength }, () =>
      Array.from({ length: WORKER_PER_SLOT }, () => new Worker())
    );
  }

  production() {
    const conveyorBelt = this.conveyorBelt;
    const slots = conveyorBelt.slots;
    const workers = this.workers;

    for (let i = 0; i < SIMULATION_STEPS; i++) {
      slots.forEach((product) => {
        workers.forEach((workerPairs) => {
          const worker_1 = workerPairs[0];
          const worker_2 = workerPairs[1];

          if (worker_1.hands === PRODUCT_A) {
            if (product === PRODUCT_A || product === NOTHING || product === FINISHED_PRODUCT) {
              worker_2.worker_2_turn(i, product);
            } else {
              worker_1.hands = FINISHED_PRODUCT;
              product = NOTHING;
            }
          } else if (worker_1.hands === PRODUCT_B) {
            if (product === PRODUCT_B || product === NOTHING || product === FINISHED_PRODUCT) {
              worker_2.worker_2_turn(i, product);
            } else {
              worker_1.hands = FINISHED_PRODUCT;
              product = NOTHING;
            }
          } else if (worker_1.hands === NOTHING) {
            if (product !== NOTHING) {
              worker_1.hands = product;
              product = NOTHING;
            }
          } else if (worker_1.hands === FINISHED_PRODUCT) {
            if (product === NOTHING) {
              worker_1.hands = NOTHING;
              product = FINISHED_PRODUCT;
            }
          }
        });
        // console.log(product);
        this.finalProducts[product] += 1;
      });
      conveyorBelt.move();
    }
  }

  availableWorker(workers: Worker[]) {
    const availableWorkers = _.forEach(workers, (worker) => {
      if (worker.isAvailable()) {
        return worker;
      }
    });
    if (availableWorkers?.length > 1) {
      return availableWorkers[_.random(0, availableWorkers.length - 1)];
    }
    if (availableWorkers?.length === 1) {
      return availableWorkers[0];
    }
    return;
  }
}

export default Factory;
