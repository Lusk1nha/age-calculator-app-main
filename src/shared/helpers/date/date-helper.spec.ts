import { getDiffDate } from "./date-helper";

describe("getDiffDate", () => {
  test("should return [null, null, null] if any parameter is null", () => {
    expect(getDiffDate([null, 5, 1990])).toEqual([null, null, null]);
    expect(getDiffDate([15, null, 1990])).toEqual([null, null, null]);
    expect(getDiffDate([15, 5, null])).toEqual([null, null, null]);
  });

  test("should correctly calculate the difference for valid dates", () => {
    const today = new Date();
    const birthDate = new Date(
      today.getFullYear() - 30,
      today.getMonth(),
      today.getDate()
    );
    const expected = [0, 0, 30];
    expect(
      getDiffDate([
        birthDate.getDate(),
        birthDate.getMonth() + 1,
        birthDate.getFullYear(),
      ])
    ).toEqual(expected);
  });

  test("should handle edge cases like leap years correctly", () => {
    expect(getDiffDate([29, 2, 2000])).toEqual([
      expect.any(Number),
      expect.any(Number),
      expect.any(Number),
    ]); // Leap year
    expect(getDiffDate([29, 2, 2001])).toEqual([null, null, null]); // Invalid date
  });

  test("should handle dates in the future", () => {
    const futureDate = new Date();
    futureDate.setFullYear(futureDate.getFullYear() + 1);
    expect(
      getDiffDate([
        futureDate.getDate(),
        futureDate.getMonth() + 1,
        futureDate.getFullYear(),
      ])
    ).toEqual([expect.any(Number), expect.any(Number), expect.any(Number)]);
  });

  test("should handle negative differences properly", () => {
    const futureDate = new Date();
    futureDate.setFullYear(futureDate.getFullYear() + 1);
    const result = getDiffDate([
      futureDate.getDate(),
      futureDate.getMonth() + 1,
      futureDate.getFullYear(),
    ]);
    expect(result[2]).toBeGreaterThanOrEqual(0); // Years
    expect(result[1]).toBeGreaterThanOrEqual(0); // Months
    expect(result[0]).toBeGreaterThanOrEqual(0); // Days
  });
});
