// EXERCICIOS 2
let h1 = [189, 140, 120, 135, 122, 156, 133, 168, 199, 202, 212, 145, 123, 142, 159]
let hMaior = 0;
let hMenor = 0;

for (let m = 0; m < h1.length; m++) {
    let Altura = h1[m];

    if (hMenor > Altura || hMenor == 0) {
        hMenor = Altura;
    }
    if (Altura > hMaior) {
        hMaior = Altura;
    }
    document.writeln(`CHINEZIN Altura ${Altura} | Menor ${hMenor} | Maior ${hMaior} | -`)
    if (m === 14) {
        document.writeln(`O Valor Final da menor altura é ${hMenor} |`);
        document.writeln(`O Valor Final da maior altura é ${hMaior} |`);
    }

}

