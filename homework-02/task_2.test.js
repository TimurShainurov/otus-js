import {printMonths, runPrintMonths} from './script.js'

describe('Print months', () => {
    it('throw a error if arguments are invalid', () => {
        expect(() => printMonths(13)).toThrow()
        expect(() => printMonths(0)).toThrow()
    })

    it('returns correct months', () => {
        expect(printMonths(1)).toEqual('January')
        expect(printMonths(12)).toEqual('December')
    })
})


describe('Logger of print months', () => {
    let promptSpy;
    let logSpy;

    beforeEach(() => {
        promptSpy = jest.spyOn(window, 'prompt')
        logSpy = jest.spyOn(console, 'log')
    })

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('asks for input', () => {
        promptSpy.mockReturnValue('12');
        runPrintMonths();
        expect(promptSpy).toHaveBeenCalled();
    });

    it('prints correct result', () => {
        promptSpy.mockReturnValue('4');
        runPrintMonths();
        expect(logSpy).toHaveBeenCalledWith('April');
    });
})