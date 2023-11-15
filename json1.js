var data=[
    {nombre: "a1", especie: "a2", raza: 1},
    {nombre: "b1", especie: "b2", raza: 2},
    {nombre: "c1", especie: "c2", raza: 3},
    {nombre: "d1", especie: "d2", raza: 4},
    {nombre: "e1", especie: "e2", raza: 5},
    {nombre: "f1", especie: "f2", raza: 6},
    {nombre: "g1", especie: "g2", raza: 7},
    {nombre: "h1", especie: "h2", raza: 8},
    {nombre: "i1", especie: "i2", raza: 9},
    {nombre: "j1", especie: "j2", raza: 10},
]
var suma=0;
for (i=0;i<=data.lenght-1;i++){
suma=suma+data[i].raza

}
console.log(suma)
