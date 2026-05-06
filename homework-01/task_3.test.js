import { sumOfDigits } from './script';

describe('sumOfDigits', () => {
    it('correctly sums digits', () => {
        expect(sumOfDigits(123)).toBe(6);
        expect(sumOfDigits(405)).toBe(9);
        expect(sumOfDigits(999)).toBe(27);
    });
});

import { runSumOfDigits } from './script';

describe('run', () => {
    let promptSpy;
    let logSpy;

    beforeEach(() => {
        promptSpy = jest.spyOn(window, 'prompt');
        logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('asks for input', () => {
        promptSpy.mockReturnValue('123');

        runSumOfDigits();

        expect(promptSpy).toHaveBeenCalled();
    });

    it('prints correct result', () => {
        promptSpy.mockReturnValue('123');

        runSumOfDigits();

        expect(logSpy).toHaveBeenCalledWith(6);
    });

    it('handles invalid input', () => {
        promptSpy.mockReturnValue('12');

        runSumOfDigits();

        expect(logSpy).toHaveBeenCalledWith('Invalid number');
    });
});