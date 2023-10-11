const { sayHello } = require('../utils')

describe('sayHello', () => {
  it('should be a function', () => {
    expect(typeof sayHello).toBe('function');
  });

  it('should take an argument and return a greeting', () => {
    expect(sayHello('futureproof')).toContain('Hello, futureproof!');
  })
});
