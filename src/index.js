import Calculator from './calculator';
import Unsplash from './unsplash';
import './index.scss';

const calc = new Calculator();
calc.sum(1, 2);

Unsplash('Mountain').then((res) => {
  console.log('res', res);
});
