var data= [
    {nombre: "juan", salario: 300},
    {nombre: "pedro", salario: 500},
    {nombre: "ana", salario: 400},
    ]
function sumarnomina(){
var suma = 0;
for(i=0;i<=data.length-1;i++){
suma=suma+data[i].salario;
console.log("total nomina",suma);
}
}
sumarnomina();
