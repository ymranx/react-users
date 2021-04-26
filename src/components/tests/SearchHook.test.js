import { renderHook, act } from "@testing-library/react-hooks";
import useSearchHook from "../SearchHook";

let mockUsers = [];
const mockData = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
  },
];
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useSelector: () => mockUsers,
}));

describe("SearchHook Tests", () => {
  it("Should render UserHook", () => {
    const { result } = renderHook(() => useSearchHook(""));

    expect(result.current).toEqual([]);
  });
  it("Should filter user list using keyword", () => {
    mockUsers = mockData;
    const { result } = renderHook(() => useSearchHook("Mich"));
    expect(result.current.length).toEqual(1);
  });
});
