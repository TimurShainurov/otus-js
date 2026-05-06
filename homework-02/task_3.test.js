
import { doesCircleFitToSquare } from "./script";

describe("will a circle fit into a square", () => {
  it("doesn't work with negative arguments", () => {
    expect(() => doesCircleFitToSquare(2, -5)).toThrow();
  });

  it("returns false if circle doesn'fit to square", () => {
    expect(doesCircleFitToSquare(45, 3)).toBe(false);
  });

  it("returns true if circle fits to square", () => {
    expect(doesCircleFitToSquare(3, 45)).toBe(true);
  });

  it("works when diameter = side of square", () => {
    expect(doesCircleFitToSquare(1 * Math.PI, 4)).toBe(true);
    expect(doesCircleFitToSquare(4 * Math.PI, 16)).toBe(true);
  });

});
