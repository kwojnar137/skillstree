import { messegeFromStatus } from './utils'


// 1. Informational responses (100–199), OK
// 2. Successful responses (200–299), OK 
// 3. Redirects (300–399), OK
// 4. Client errors (400–499), Client error
// 5. and Server errors (500–599). Server error


test('Messege is OK for status code 0 - 399', () => {
  for (let i = 0; i < 400; i++) {
    expect(messegeFromStatus(i)).toEqual("OK");
  }
});

test('For status code 400', () => {
  expect(messegeFromStatus(400)).toEqual("Client error: bad request. Try again");
});

test('For status code 401', () => {
  expect(messegeFromStatus(401)).toEqual("Client error: You are unathorized");
});

test('For status code 404', () => {
  expect(messegeFromStatus(404)).toEqual("Client error: Server couldn't find what you want");
});

test('For status code 408', () => {
  expect(messegeFromStatus(408)).toEqual("Client error: Request timeout");
});


test('For status code 429', () => {
  expect(messegeFromStatus(429)).toEqual("Client error: Too many requests");
});

test('For status code 430', () => {
  expect(messegeFromStatus(430)).toEqual("Unidentified client error. Conntact with our support");
});

test('Status code is greater then 429 and less than 500', () => {
  for (let i = 430; i < 499; i++) {
    expect(messegeFromStatus(i)).toEqual("Unidentified client error. Conntact with our support");
  }
});

test('For status code 500', () => {
  expect(messegeFromStatus(500)).toEqual("Internal Server Error. Try again later");
});


test('For status code 503', () => {
  expect(messegeFromStatus(503)).toEqual("Internal Server Error. Server is down or overloaded. Try again later");
});


test('Status code is greater then 504 and less than 600', () => {
  for (let i = 504; i < 599; i++) {
    expect(messegeFromStatus(i)).toEqual("Unidentified server error. Conntact with our support");
  }
});
