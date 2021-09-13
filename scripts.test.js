const {count} = require('./script')

test('check with numbers', () => {
  expect(count(1, 2)).toBe(3)
})

test('check with strings', () => {
  expect(count('1','2')).toBe(3)
})

test('check with objects', () => {
  expect(count({},{})).toThrow(Error('these are not numbers'))
})

test('dont pass arguments', () => {
  expect(count()).toThrow(Error('no arguments were passed'))
})

test('pass one argument', () => {
  expect(count(1)).toThrow(Error('pass second argument'))
})

test('nulls' ,() => {
  expect(count(null, null).toThrow(Error('these are not numbers')))
})