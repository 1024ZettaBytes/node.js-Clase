try {
    var d = division(4, 1);
    console.log(d);
} catch (e) {
    console.log(e);
}

function division(a, b) {
    if (b === 0) {
        throw "Error al dividir entre 0!";
    } else
        return a / b;
}