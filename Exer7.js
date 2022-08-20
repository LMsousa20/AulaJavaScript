let resultado = 0;
let ftComum = parseInt(prompt("Numero de 1 a 10"));
if (ftComum >= 1 && ftComum <= 10) {
      for (let i = 1; i <= 10; i++) {
            resultado = ftComum * i;
            document.writeln(`${ftComum} multiplicado por ${i} é ${resultado}|`);
            console.log(resultado);
      }
} else {
      alert('Valor invalido');
}