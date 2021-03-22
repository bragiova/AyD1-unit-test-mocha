const numeroMayor = (num1, num2) => {
    if (num1 > num2) {
        return (`El número ${num1} es mayor`);
    } else if (num2 > num1) {
        return (`El número ${num2} es mayor`);
    } else {
        return ('Los números son iguales');
    }
}

const palindromo = (cadena) => {
    cadena = cadena.toLowerCase().replace(/\s/g, "");
    cadenaReversa = cadena.split("").reverse().toString();

    for (let i = 0; i < ((cadenaReversa.length) - 1); i++) {
        cadenaReversa = cadenaReversa.replace(",", "");
    };

    if (cadena == cadenaReversa) {
        return true;
    }

    return false;
}

const calcularEdad = (fecha) => {
    let hoy = new Date();
    let fechanac = new Date(fecha);
    let edad = hoy.getFullYear() - fechanac.getFullYear();
    let mes = hoy.getMonth() - fechanac.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechanac.getDate())) {
        edad--;
    }

    return edad;
}

const multiplo = (numero, mul) => {
    if (numero % mul == 0) {
        return true;
    }

    return false;
}

const calcularAceleracion = (velinicial, velfinal, distancia) => {
    let velinicialcuadrado = Math.pow(velinicial, 2);
    let velfinalcuadrado = Math.pow(velfinal, 2);

    const acel = (velfinalcuadrado - velinicialcuadrado) / (2 * distancia);

    return acel;
}

module.exports = {
    numeroMayor,
    palindromo,
    calcularEdad,
    multiplo,
    calcularAceleracion
}