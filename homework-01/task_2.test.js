import { sumOfChars } from "./script.js";

describe('sumOfChars', () => {

    jest.spyOn(console, 'log');

    afterEach(() => {
        jest.resetAllMocks();
    })

    it('is a function', () => {
        expect(sumOfChars).toBeInstanceOf(Function);
    });

    it('logs sum of chars', () => {
        sumOfChars('Hello', 'World');
        expect(console.log).toHaveBeenCalledWith(10)
    })

    it('works with numbers', () => {
        sumOfChars('1234', '5678');
        expect(console.log).toHaveBeenCalledWith(8)
    })
    it('returns 0 if string are empty', () => {
        sumOfChars('', '');
        expect(console.log).toHaveBeenCalledWith(0)
    })

})