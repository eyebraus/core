import index from './index';

describe('index', () => {
    it('should export "Hello world!" as default', () => {
        expect(index).toBe('Hello world!');
    });
});

