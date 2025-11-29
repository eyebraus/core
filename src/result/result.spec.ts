import { content, Failure, isFailure, isSuccess, Success } from './result';

describe('content', () => {
    it('should get the content of a Failure with content', () => {
        expect(content(Failure('foo'))).toBe('foo');
    });

    it('should get the content of a Success with content', () => {
        expect(content(Success('foo'))).toBe('foo');
    });
});

describe('Failure', () => {
    it('should create a failure without content when not given an argument', () => {
        expect(Failure()).toEqual({ ok: false });
    });

    it('should create a failure with content when given an argument', () => {
        expect(Failure('foo')).toEqual({ content: 'foo', ok: false });
    });
});

describe('isFailure', () => {
    it('should return true for a Failure without content', () => {
        expect(isFailure(Failure())).toBe(true);
    });

    it('should return true for a Failure with content', () => {
        expect(isFailure(Failure('foo'))).toBe(true);
    });

    it('should return false for a Success without content', () => {
        expect(isFailure(Success())).toBe(false);
    });

    it('should return false for a Success with content', () => {
        expect(isFailure(Success('foo'))).toBe(false);
    });
});

describe('isSuccess', () => {
    it('should return false for a Failure without content', () => {
        expect(isSuccess(Failure())).toBe(false);
    });

    it('should return false for a Failure with content', () => {
        expect(isSuccess(Failure('foo'))).toBe(false);
    });

    it('should return true for a Success without content', () => {
        expect(isSuccess(Success())).toBe(true);
    });

    it('should return true for a Success with content', () => {
        expect(isSuccess(Success('foo'))).toBe(true);
    });
});

describe('Success', () => {
    it('should create a failure without content when not given an argument', () => {
        expect(Success()).toEqual({ ok: true });
    });

    it('should create a failure with content when given an argument', () => {
        expect(Success('foo')).toEqual({ content: 'foo', ok: true });
    });
});
