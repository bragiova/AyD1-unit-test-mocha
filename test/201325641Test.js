const assert = require('chai').assert;
const app = require('../201325641');

describe('201325641 - Brayan Rivas', function() {

    describe('numeroMayor(num1, num2)', function() {
        it('numeroMayor deberia devolver un tipo string', function() {
            let mayor = app.numeroMayor(15, 5);
            assert.typeOf(mayor, 'string');
        });

        it('numeroMayor deberia devolver que números son iguales', function() {
            let mayor = app.numeroMayor(20, 20);
            assert.equal(mayor, 'Los números son iguales');
        });
    });

    describe('palindromo(cadena)', function() {
        it('palindromo debería devolver un tipo boolean', function() {
            let esPalindromo = app.palindromo('anna');
            assert.typeOf(esPalindromo, 'boolean');
        });
    });

    describe('calcularEdad(fecha)', function() {
        it('calcularEdad debería devolver un tipo número', function() {
            let edad = app.calcularEdad('1995-05-20');
            assert.typeOf(edad, 'number');
        });

        it('calcularEdad debería devolver una edad igual a 27', function() {
            let edad = app.calcularEdad('1993-12-22');
            assert.equal(edad, 27);
        });
    });

    describe('multiplo(num, mul)', function() {
        it('multiplo debería devolver un tipo boolean', function() {
            let esMultiplo = app.multiplo(10, 3);
            assert.typeOf(esMultiplo, 'boolean');
        });
    });

    describe('calcularAceleracion(velinicial, velfinal, distancia)', function() {
        it('calcularAceleracion debería devolver un tipo número', function() {
            let aceleracion = app.calcularAceleracion(7, 15, 20);
            assert.typeOf(aceleracion, 'number');
        });

        it('calcularAceleracion debería devolver una aceleración mayor a 1.7 m/s^2', function() {
            let aceleracion = app.calcularAceleracion(5, 10, 20);
            assert.isAbove(aceleracion, 1.7);
        });
    });

});