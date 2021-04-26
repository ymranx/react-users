import * as utils from "../utils";

const localStorageMock = (function () {
  const store = {};

  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("Utils Tests", () => {
  it("check localstorage", () => {
    utils.setItemToLocalStorage("key", "val");
    const val = utils.getItemFromLocalStorage("key");
    expect(val).toEqual("val");
  });

  it("check save login Token", () => {
    utils.saveToken("abcd");
    const val = utils.getItemFromLocalStorage("token");
    expect(val).toEqual("abcd");
  });

  it("check if LoggedIn", () => {
    const val = utils.isLoggedIn();
    expect(val).toEqual(true);
  });
});
