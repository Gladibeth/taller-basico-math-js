const PlatziMath = {}

const listPro = [
  200,400,600,700,800
]

PlatziMath.calcProm = function calcProm(arr){
  /* let promedio;
  let sum = 0; */

  /* for */
   /* for(let item of arr){
    sum += item;
   } */

    /* reduce */
   const promedioReduceTotal = arr.reduce((total, item)=>{
    return total + item;
    })

  /*  promedio = sum / lenghtArr; */
  let promedioReduce = promedioReduceTotal / arr.length;
   /* console.log(`con for ${promedio}`) */
   /* console.log(`con reduce ${promedioReduce}`) */
   return promedioReduce;
}

/* calcProm(listPro); */

const list = [1,5,3,88,7,60];

PlatziMath.isPar = function isPar(list){
  return !(list.length % 2);
}
PlatziMath.isImpar = function isImpar(list){
  return list.length % 2;
}

PlatziMath.ordenarLista =  function ordenarLista(listaDesordenada){
  function ordenarListSort(a,b){
    return a - b
  }
  const lista = listaDesordenada.sort(ordenarListSort);
  return lista;
}
PlatziMath.mediana = function mediana (list){
  const listpar = PlatziMath.isPar(list);
  const listOr = PlatziMath.ordenarLista(list)
 /*  console.log(listOr) */
  if(listpar){
    const indexMitadPart1 = (list.length / 2) - 1;
    const indexMitadPart2 = (list.length / 2);

    const listTwo = [listOr[indexMitadPart1],listOr[indexMitadPart2]];
    /* console.log(listTwo) */
    const prom = PlatziMath.calcProm(listTwo);
    return prom;
  }else{
    const indexMitadImpar = Math.floor(list.length / 2);
    const medianaImpar = listOr[indexMitadImpar];
    /* console.log(indexMitadImpar)
    console.log(`La mitad del ${listOr} es ${medianaImpar}`) */
    return medianaImpar;
  }
}
/* mediana(list) */

const modalist = [1,4,5,5,8,2,1,4,1];
PlatziMath.conseguirModa = function conseguirModa(list){
  const listCount = {};
  for(let item of list){
    if(listCount[item]){
      listCount[item] += 1;
    }else{
      listCount[item] = 1;
    }
  }
  const listArray = Object.entries(listCount);
  const listOrdenada = ordenarListaBidi(listArray,1);
  const listaMaxIndex = listOrdenada[listOrdenada.length - 1];
  const moda = listaMaxIndex[0];
  console.log({
    list,
    listCount,
    listArray,
    listOrdenada,
    listaMaxIndex,
    moda
  })
}


PlatziMath.ordenarListaBidi = function ordenarListaBidi(listaDesordenada,i){
  function ordenarListSort(a,b){
    return a[i] - b[i]
  }
  const lista = listaDesordenada.sort(ordenarListSort);
  return lista;
}

/* conseguirModa(modalist) */


function solution(obj) {
  const listArray = Object.entries(obj);
  const objEnd = [];
  for(let item of listArray){
    objEnd.push({
      id: item[0],
      name: item[1]
    })
  }
  return objEnd;
}


const obj = {
  123: 'Juanito Alcachofa',
  456: 'Juanita Alcaparra',
};

solution(obj);



const notes = [
  {
      course: "Educación Física",
      note: 10,
      credit: 2,
  },
  {
      course: "Programación",
      note: 8,
      credit: 5,
  },
  {
      course: "Finanzas personales",
      note: 7,
      credit: 5,
  },
];

const notasyCredito = notes.map((value) => {
  return value.note * value.credit;
})

const sumaNotasyCredito = notasyCredito.reduce((sum = 0, acum)=>{
  return sum + acum;
})

const creditos = notes.map((value)=>{
  return value.credit;
})

const sumaCreditos =  creditos.reduce((sum=0, acum)=>{
  return sum + acum;
})

const divisionNotasCreditos = sumaNotasyCredito / sumaCreditos;
/* console.log({
  notes,
  notasyCredito,
  sumaNotasyCredito,
  creditos,
  sumaCreditos,
  divisionNotasCreditos,
})

console.log(`El promedio podenrado de las notas es ${divisionNotasCreditos}`) */


