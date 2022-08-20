let a = 8;
let resultado = 0;
for (let d = a; d >= 1; d--) {
    if (d == a) {
        resultado = resultado + a;
    } else {
        resultado = resultado * d;
    }
    if (d == 1) {
        document.writeln(d);
        document.writeln(`= ${resultado}`);
    } else {
        document.writeln(d, '*');
    }
};
