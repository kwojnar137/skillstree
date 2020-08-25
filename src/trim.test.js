import { trim } from './utils'

const sampleString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate gravida neque, lacinia elementum libero feugiat at. Quisque non consequat odio. Suspendisse tortor massa, tincidunt vel metus non, imperdiet malesuada lacus. Nulla facilisi. Suspendisse at viverra dolor. Donec tristique purus mi, et porta sapien laoreet nec. Integer ut sem lectus.'
const trimSize = 120
const expectedString = sampleString.slice(0, trimSize)






test('trim sample string and add \'...\' on the end', () => {
  expect(trim(sampleString, false, trimSize)).toBe(expectedString + '...');
});

test('do not trim sample string', () => {
  expect(trim(sampleString, true, trimSize)).toBe(sampleString);
});

test('trim do default size', () => {
  expect(trim(sampleString, false)).toBe(expectedString + '...');
});




