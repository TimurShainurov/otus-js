import { sum, multipl } from './script.js'

describe('sumOfTwoDigits', () => {

    jest.spyOn(console, 'log');

    afterEach(() => {
        jest.resetAllMocks()
    })

    it('is a function', () => {
        expect(sum).toBeInstanceOf(Function);
    });

    it('logs positives integers sum', () => {
        sum(2, 3);
        expect(console.log).toHaveBeenCalledWith(5);
    })

    it('logs negatives integers sum', () => {
        sum(-2, -3);
        expect(console.log).toHaveBeenCalledWith(-5);
    })

    it('logs sum of postive and negative integers', () => {
        sum(-2, 3);
        expect(console.log).toHaveBeenCalledWith(1);
    })

    it('works with 0', () => {
        sum(0, 3);
        expect(console.log).toHaveBeenCalledWith(3);
    })

    it('logs fractions sum', () => {
        sum(0.1, 0.2);
        expect(console.log).toHaveBeenCalledWith(expect.closeTo(0.3));
    })

})

describe('multiplOfTwoDigits', () => {

    jest.spyOn(console, 'log');

    afterEach(() => {
        jest.resetAllMocks()
    })

    it('is a function', () => {
        expect(sum).toBeInstanceOf(Function);
    });

    it('logs positives integers multiplication', () => {
        multipl(2, 3);
        expect(console.log).toHaveBeenCalledWith(6);
    })

    it('logs negatives integers multiplication', () => {
        multipl(-2, -3);
        expect(console.log).toHaveBeenCalledWith(6);
    })

    it('logs multiplication of positive and negative integers', () => {
        multipl(-2, 3);
        expect(console.log).toHaveBeenCalledWith(-6);
    })

    it('works with 0', () => {
        multipl(0, 3);
        expect(console.log).toHaveBeenCalledWith(0);
    })

    it('logs fractions multiplication', () => {
        multipl(0.1, 0.2);
        expect(console.log).toHaveBeenCalledWith(expect.closeTo(0.02));
    })
})