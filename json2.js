var data= [
{nombre: "juan", salario: 300},
{nombre: "pedro", salario: 500},
{nombre: "ana", salario: 400},
]

for(i=0;i<=data.length-1;i++){
data[i].salario=data[i].salario*1.12
console.log(data[i]);
}

