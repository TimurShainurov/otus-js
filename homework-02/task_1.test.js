
import { greaterNum } from "./script";

describe("greater number", () => {
  const logSpy = jest.spyOn(console, "log");

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("is a function", () => {
    expect(greaterNum).toBeInstanceOf(Function);
  });

  it("logs a greater number", () => {
    greaterNum(2, 10);
    expect(logSpy).toHaveBeenCalledWith(10);
  });

  it("works with a negative numbers", () => {
    greaterNum(-22, -10);
    expect(logSpy).toHaveBeenCalledWith(-10);
  });

  it("works with a fractions", () => {
    greaterNum(-0.445, -0.444);
    expect(logSpy).toHaveBeenCalledWith(-0.444);
  });
});
