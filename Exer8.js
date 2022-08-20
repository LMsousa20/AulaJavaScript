let r = 2;
let a = 5;
let resultado = 0;
for (let i = 1; i <= 10; i++) {
    if (i == 1) {
        resultado = resultado + a;
    } else {
        resultado = resultado + r;
    }
    document.writeln(resultado)
}

