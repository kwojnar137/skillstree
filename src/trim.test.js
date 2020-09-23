import { trim } from './utils'

const sampleString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate gravida neque, lacinia elementum libero feugiat at. Quisque non consequat odio. Suspendisse tortor massa, tincidunt vel metus non, imperdiet malesuada lacus. Nulla facilisi. Suspendisse at viverra dolor. Donec tristique purus mi, et porta sapien laoreet nec. Integer ut sem lectus.'


test('trim sample string to 160 characters and add \'...\' on the end', () => {
  expect(trim(sampleString, { size: 140 })).toBe(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate gravida neque, lacinia elementum libero feugiat at. Quisque non con..."
  );
});


test('trim do default size', () => {
  expect(trim(sampleString, {})).toBe(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate gravida neque, lacinia elementum libero feugiat..."
  );
});




