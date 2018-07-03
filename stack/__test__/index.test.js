import Stack from "../index";

describe("test Stack", () => {
  let stack = new Stack();

  test("stack push some values", () => {
    stack.push(1, 2, 3, "a", "b", "c");
    expect(stack).toEqual([1, 2, 3, "a", "b", "c"]);
  });
});
