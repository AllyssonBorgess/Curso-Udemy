function calcularAreaRectangulo(l, a) {
    if(typeof l !== 'number' || typeof a !== 'number') {
        throw new Error('CalcularAreaRetangulo aceita dois parametros do tipo number');
    }
    return l * a;

}

function calcularAreaTriangulo(b, h) {
    if(typeof b !== 'number' || typeof a !== 'number') {
        throw new Error('CalcularAreaTriangulo aceita dois parametros do tipo number');
    }
    return (b * a) / 2;
}

function calcularAreaCirculo(r) {
    if(typeof r !== 'number') {
        throw new Error('CalcularAreaCirculo aceita um parametro do tipo number');
    }

    return Math.PI * r * r;
}