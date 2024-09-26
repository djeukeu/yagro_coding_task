import Belt from './Belt';
import { FINISHED_PRODUCT, NOTHING, PRODUCT_A, PRODUCT_B, SIMULATION_STEPS, WORKER_PER_SLOT } from './Constant';
import Worker from './Worker';

class Factory {
  private conveyorBelt: Belt;
  private workers: Worker[][];
  private finalProducts: Array<string>;

  constructor(beltLength: number) {
    this.conveyorBelt = new Belt(beltLength);
    this.workers = Array.from({ length: beltLength }, () =>
      Array.from({ length: WORKER_PER_SLOT }, () => new Worker())
    );
    this.finalProducts = [];
  }

  production() {
    const conveyorBelt = this.conveyorBelt;
    const workers = this.workers;

    for (let i = 0; i < SIMULATION_STEPS; i++) {
      conveyorBelt.slots.forEach((slot, index) => {
        workers.forEach((workerPairs) => {
          const worker_1 = workerPairs[0];
          const worker_2 = workerPairs[1];

          if (worker_1.hands === PRODUCT_A) {
            if (slot === PRODUCT_A || slot === NOTHING || slot === FINISHED_PRODUCT) {
              worker_2.assembleProduct(slot);
            } else {
              worker_1.hands = FINISHED_PRODUCT;
              slot = NOTHING;
            }
          } else if (worker_1.hands === PRODUCT_B) {
            if (slot === PRODUCT_B || slot === NOTHING || slot === FINISHED_PRODUCT) {
              worker_2.assembleProduct(slot);
            } else {
              worker_1.hands = FINISHED_PRODUCT;
              slot = NOTHING;
            }
          } else if (worker_1.hands === NOTHING) {
            if (slot !== NOTHING) {
              worker_1.hands = slot;
              slot = NOTHING;
            }
          } else if (worker_1.hands === FINISHED_PRODUCT) {
            if (slot === NOTHING) {
              worker_1.hands = NOTHING;
              slot = FINISHED_PRODUCT;
            }
          }
        });
        conveyorBelt.replaceProduct(index, slot);
      });
      const lastProduct = conveyorBelt.move();
      this.finalProducts.push(lastProduct!);
    }
  }

  computeFinalProducts() {
    const productA = this.finalProducts.filter((p) => p === PRODUCT_A);
    const productB = this.finalProducts.filter((p) => p === PRODUCT_B);
    const finishProduct = this.finalProducts.filter((p) => p === FINISHED_PRODUCT);
    return {
      PRODUCT_A: productA.length,
      PRODUCT_B: productB.length,
      FINISHED_PRODUCT: finishProduct.length,
    };
  }
}

export default Factory;
