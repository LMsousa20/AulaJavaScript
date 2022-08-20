
let cImpar=0;
for(let c =0;c <=500; c++){
    console.log(c)
   
    if(c % 3 == 0){
       
        cImpar = cImpar + c;
    }
    
    if (c == 500){
        document.writeln(cImpar);
        }
}

