
const paddingLeft = require('./in');
describe('Padding', () => {
    test('devolver un string de 6 caracteres', () => {
        expect(paddingLeft("x", 6, "hola")).toBe('holaxx');
    });

    test('devolver un string de 4 caracteres', () => {
        expect(paddingLeft("ee", 4, "aa")).toBe('eeaa');
    });

    test('devolver x', () => {
        expect(paddingLeft("x", 6, "hola mi amigo")).toBe('hola mi amigo');
    });
})
