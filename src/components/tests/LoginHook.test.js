import { renderHook, act } from "@testing-library/react-hooks";
import useLoginHook from "../LoginHook";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("LoginHook Tests", () => {
  it("Should render LoginHook", () => {
    const { result } = renderHook(() => useLoginHook());

    expect(result.current).toEqual({
      checkLogin: expect.any(Function),
      email: "eve.holt@reqres.in",
      password: "cityslicka",
      performLogin: expect.any(Function),
      readEmail: expect.any(Function),
      readPassword: expect.any(Function),
    });
  });

  it("Should test checkLogin", () => {
    const { result } = renderHook(() => useLoginHook());
    act(() => {
      const res = result.current.checkLogin();
      expect(res).toEqual(undefined);
    });
  });
});
