import { sum } from './script'

describe('sum of numbers form 50 to 100', () => {

  let logSpy = jest.spyOn(console, 'log')

  it('returns correct result', () => {
    sum()
    expect(logSpy).toHaveBeenCalledWith((50 + 100) * 51 / 2)
  })

  logSpy.mockRestore()
})