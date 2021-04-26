import { renderHook, act } from "@testing-library/react-hooks";
import useUserHook from "../UserHook";

const mockHistoryPush = jest.fn();
const mockDispatch = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useSelector: () => [],
}));

describe("UserHook Tests", () => {
  it("Should render UserHook", () => {
    const { result } = renderHook(() => useUserHook());

    expect(result.current).toEqual({
      fetchUsers: expect.any(Function),
      handleNewUser: expect.any(Function),
      handleEditUser: expect.any(Function),
      readUserInput: expect.any(Function),
      readSearchInput: expect.any(Function),
      handleSubmitNewUser: expect.any(Function),
      handleSubmitEditUser: expect.any(Function),
      handleSubmitDelUser: expect.any(Function),
      getUserFromState: expect.any(Function),
    });
  });

  it("Should test getUserFromState", () => {
    const { result } = renderHook(() => useUserHook());
    act(() => {
      const res = result.current.getUserFromState();
      expect(res).toEqual({});
    });
  });
  it("Should test handleNewUser", () => {
    const { result } = renderHook(() => useUserHook());
    act(() => {
      const res = result.current.handleNewUser();
      expect(mockHistoryPush).toHaveBeenCalledWith("/newuser");
    });
  });
  it("Should test handleEditUser", () => {
    const { result } = renderHook(() => useUserHook());
    act(() => {
      const res = result.current.handleEditUser(1)(null);
      expect(mockHistoryPush).toHaveBeenCalledWith("/edituser/1");
    });
  });
});
