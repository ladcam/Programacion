var data = [
    {nombre:"carlos", salario:300},
    {nombre:"juan", salario:200},
    {nombre:"pedro", salario:100},
]

var suma=0
for (i=0;i<=data.length-1;i++){
suma=suma+data[i].salario;
}
console.log(suma)