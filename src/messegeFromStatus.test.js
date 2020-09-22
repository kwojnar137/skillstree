import { messageFromStatus } from "./utils";

// 1. Informational responses (100–199), OK
// 2. Successful responses (200–299), OK
// 3. Redirects (300–399), OK
// 4. Client errors (400–499), Client error
// 5. and Server errors (500–599). Server error

test("Messege is OK for status code 0 - 399", () => {
  for (let i = 0; i < 400; i++) {
    expect(messageFromStatus(i)).toEqual({ message: "OK", variant: "info" });
  }
});

test("For status code 400", () => {
  expect(messageFromStatus(400)).toEqual({
    message: "Client error: bad request. Try again",
    variant: "warning",
  });
});

test("For status code 401", () => {
  expect(messageFromStatus(401)).toEqual({
    message: "Client error: You are unathorized",
    variant: "warning",
  });
});

test("For status code 404", () => {
  expect(messageFromStatus(404)).toEqual({
    message: "Client error: Server couldn't find what you want",
    variant: "warning",
  });
});

test("For status code 408", () => {
  expect(messageFromStatus(408)).toEqual({
    message: "Client error: Request timeout",
    variant: "danger",
  });
});

test("For status code 429", () => {
  expect(messageFromStatus(429)).toEqual({
    message: "Client error: Too many requests",
    variant: "danger",
  });
});

test("Status code is greater then 429 and less than 500", () => {
  for (let i = 430; i < 499; i++) {
    expect(messageFromStatus(i)).toEqual({
      message: "Unidentified client error. Conntact with our support",
      variant: "warning",
    });
  }
});

test("For status code 500", () => {
  expect(messageFromStatus(500)).toEqual({
    message: "Internal Server Error. Try again later",
    variant: "danger",
  });
});

test("For status code 503", () => {
  expect(messageFromStatus(503)).toEqual({
    message:
      "Internal Server Error. Server is down or overloaded. Try again later",
    variant: "warning",
  });
});

test("Status code is greater then 504 and less than 600", () => {
  for (let i = 504; i < 599; i++) {
    expect(messageFromStatus(i)).toEqual({
      message: "Unidentified server error. Conntact with our support",
      variant: "warning",
    });
  }
});
