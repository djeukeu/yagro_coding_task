import { BELT_LENGTH } from './Constant';
import Factory from './Factory';

const factory = new Factory(BELT_LENGTH);

factory.production();

console.log(factory.finalProducts);
