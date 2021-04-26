import mockAxios from "jest-mock-axios";

import * as httpReq from "../httpRequests";

describe("HttpRequests tests", () => {
  afterEach(() => {
    mockAxios.reset();
  });
  let catchFn = jest.fn(),
    thenFn = jest.fn();
  it("Should login the user", () => {
    const email = "abc@abc.in";
    const pass = "abc";

    httpReq.loginUser(email, pass).then(thenFn).catch(catchFn);

    expect(mockAxios.post).toHaveBeenCalledWith("https://reqres.in/api/login", {
      email: "abc@abc.in",
      password: "abc",
    });

    const responseObj = { data: "abcd" };
    mockAxios.mockResponse(responseObj);

    expect(thenFn).toHaveBeenCalledWith({
      config: {},
      data: "abcd",
      headers: {},
      status: 200,
      statusText: "OK",
    });
  });
  it("Should fetch the users from server", () => {
    httpReq.getUsers().then(thenFn).catch(catchFn);

    expect(mockAxios.get).toHaveBeenCalledWith("https://reqres.in/api/users");

    const responseObj = { data: [1, 2, 3, 4] };
    mockAxios.mockResponse(responseObj);

    expect(thenFn).toHaveBeenCalledWith({
      config: {},
      data: [1, 2, 3, 4],
      headers: {},
      status: 200,
      statusText: "OK",
    });
  });
});
