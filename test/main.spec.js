import Calculator from '../src/calculator';

describe('sum', function() {
  let calc = null;
  beforeEach(() => {
    calc = new Calculator();
  });

  it('adds 1 + 2 to equal 3', function() {
    expect(calc.sum(1, 2)).toBe(3);
  });

  it('sub 1 + 2 to equal -1', function() {
    expect(calc.sub(1, 2)).toBe(-1);
  });
});
