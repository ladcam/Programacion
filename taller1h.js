const data=[
    {nombre:"juan", edad:18, sexo:"M", acceso:null},
    {nombre:"pedro", edad:10, sexo:"M", acceso:null},
    {nombre:"ana", edad:25, sexo:"F", acceso:null},
    {nombre:"luis", edad:12, sexo:"M", acceso:null},
    {nombre:"maria", edad:22, sexo:"F", acceso:null},
    {nombre:"carlos", edad:28, sexo:"M", acceso:null},
]
function verificaringreso(limite){
for(i=0;i<=data.length-1;i++){
    if(data[i].edad>=limite){
        data[i].acceso="ingreso";
    }
    }
}
    console.log(verificaringreso(21))