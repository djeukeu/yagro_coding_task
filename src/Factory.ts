import Belt from './Belt';
import { NOTHING, WORKER_PER_SLOT } from './Constant';
import Worker from './Worker';

class Factory {
  private conveyorBelt: Belt;
  private workers: Worker[][];

  constructor(beltLength: number) {
    this.conveyorBelt = new Belt(beltLength);

    this.workers = Array.from({ length: beltLength }, () =>
      Array.from({ length: WORKER_PER_SLOT }, () => new Worker())
    );
  }

  production() {
    const conveyorBelt = this.conveyorBelt;
    const workers = this.workers;

    conveyorBelt.slots.forEach((_slot, index) => {
      const workerPair = workers[index];
      
      if(conveyorBelt.getProduct() === NOTHING){
        _.random(0, items.length - 1)
      }else{}
    });
  }
}

export default Factory;
