const {count} = require('./script')

test('check with numbers', () => {
  expect(count(1, 2)).toBe(3)
})

test('check with strings', () => {
  expect(count('1','2')).toBe(3)
})

test('check with objects', () => {
  expect(count({},{})).toThrow(new Error('these are not numbers'))
})

test('dont pass arguments', () => {
  expect(count()).toThrow(new Error('no arguments were passed'))
})

test('pass one argument', () => {
  expect(count(1)).toThrow(new Error('pass second argument'))
})

test('nulls' ,() => {
  expect(count(null, null)).toThrow(new Error('these are not numbers'))
})