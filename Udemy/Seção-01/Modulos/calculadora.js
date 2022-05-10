var nome = "minha calculadora v1";

function soma(A, B) {
    return A + B;
}

function mult(A, B) {
    return A * B;
}

function sub(A, B) {
    return A - B;
}

function div(A, B) {
    return A / B;
}


module.exports = {
    soma,
    mult,
    sub,
    div,
    nome,
};