let h1 = [189, 140, -120, 135, 122, -156, 133, 168, 199, 202, 212, 145, -123, 142, 159];
let ttl = 0;
let numeros;
let positivo = 0;
let negativo = 0;
for (let n = 0; n < h1.length; n++) {
   numeros = parseFloat(h1[n])
   console.log(numeros)
   ttl = ttl + numeros;
   media = ttl / h1.length;

   if (numeros > 0) {
      positivo++;
   }
   if (numeros < 0) {
      negativo++;
   }
   if (n == h1.length - 1) {
      console.log('media é', media);
      console.log(positivo, ' numeros positivos');
      console.log(negativo, ' numeros negativos');
      porcPos = (100 * positivo) / h1.length;
      porcNeg = (100 * negativo) / h1.length;
      console.log(porcPos, ' Porcentagem positiva');
      console.log(porcNeg, 'Porcentagem negativa');
      console.log(h1.length);
   }

}
