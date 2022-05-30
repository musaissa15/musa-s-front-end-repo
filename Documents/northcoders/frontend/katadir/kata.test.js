const validTriangles = require("./kata");

describe("Valid Triangles", () => {
  test("returns an empty array when passed an array", () => {
    const input = [];
    const actual = validTriangles(input);
    const expected = 0;
    expect(actual).toEqual(expected);
  });

  test("should return 1 if  2 numbers added together are bigger than the last number", () => {
    const input = [[5, 4, 5]];
    const actual = validTriangles(input);
    const expected = 1;
    expect(actual).toBe(expected);
  });

  test("should return 0 if the 2 smallest numbers added together aren't bigger than the last number", () => {
    const input = [[5, 10, 25]];
    const actual = validTriangles(input);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  test("should  iterate through 2 nested arrays and add one for each array that meets the criteria ", () => {
    const input = [
      [5, 10, 25],
      [5, 4, 5],
    ];
    const actual = validTriangles(input);
    const expected = 1;
    expect(actual).toBe(expected);
  });
    test("should  iterate through 2 nested arrays and add one for each array that meets the criteria ", () => {
		const input = [[5, 10, 25], [5, 4, 5], [542, 586, 419]];
		const actual = validTriangles(input);
		const expected = 2;
		expect(actual).toBe(expected);
		});
});

//returns an empty array when passed an array
//
