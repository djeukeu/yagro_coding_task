import { BELT_LENGTH, SIMULATION_STEPS } from './Constant';
import Factory from './Factory';

const factory = new Factory(BELT_LENGTH);
// const factory = new Factory(BELT_LENGTH + 1);

const app = () => {
  for (let i = 0; i < SIMULATION_STEPS; i++) {
    factory.production();
  }
};

app();
