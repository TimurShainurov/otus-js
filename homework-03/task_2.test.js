import { multiplTable } from './script'

describe('mupliplication table for 7', () => {

    let logSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

    beforeEach(() => {
        jest.resetAllMocks();
      });

    it('logs values', () => {
        multiplTable()
        expect(logSpy).toHaveBeenCalled()
    })

    it('logs exactly 9 times', () => {
        multiplTable()
        expect(logSpy).toHaveBeenCalledTimes(9)
    })

    describe('correct results', () => {
    it('prints correct results', () => {
        multiplTable()
        expect(logSpy.mock.calls).toEqual([ [7], [14], [21], [28], [35], [42], [49], [56], [63]])
    })

    it('prints 7 in #1', () => {
        multiplTable()
        expect(logSpy).toHaveBeenNthCalledWith(7,49)
    })
    })
})

