console.group('Cuadrado');

let ladosCuadrados = 5;
let perimetroCuadrado = ladosCuadrados * 4;
let areaCuadrado = ladosCuadrados * ladosCuadrados

console.log({
  ladosCuadrados,
  perimetroCuadrado,
  areaCuadrado
})

function calcularCuadrado(lados){
  return{
    perimetro: lados * 4,
    area: lados * lados
  }
}

console.groupEnd('Cuadrado');

console.group('Triangulo');

let ladosTriangulo1 = 6;
let ladosTriangulo2 = 6;
let ladosTrianguloBase = 4;
let alturaTriangulo = 5.5;
let perimetroTriangulo = ladosTriangulo1 + ladosTriangulo2 + ladosTrianguloBase
let areaTriangulo = (ladosCuadrados * alturaTriangulo) / 2;

console.log({
  ladosTriangulo1,
  ladosTriangulo2,
  ladosTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo
})

function calcularTriangulo(lado1, lado2,base, altura){
  return{
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2
  }
}

console.groupEnd('Triangulo');


console.group('Circulo');

let radio = 5;
let diametro = radio * 2;
const PI = 3.1415;
let circunsferenciaCirculo = diametro * PI;
let areaCirculo = (radio ** 2) * PI;

console.log({
  radio,
  diametro,
  circunsferenciaCirculo,
  areaCirculo
})

function calcularCirculo(radio){
  let diametro = radio * 2;
  let radioCuadrado = Math.pow(radio,2);

  return{
    circunsferencia: diametro * Math.PI,
    area: radioCuadrado * Math.PI
  }
}
console.groupEnd('Circulo');

console.group('Triangulo isoseles')

function calcularAlturaTriangulo(lado, base){
  let height;
  if(lado == base){
    console.warn('No es un triangulo isoceles')
  }else{
    // h = raizcuadrada (lado1**2 (lado2**2)/4)
    height = Math.sqrt(lado**2 - (lado**2) / 4);
  }
  return height;
}

console.groupEnd('Triangulo isoseles');

console.group('Triangulo Escaleno')

function calcularAlturaTrianguloEscaleno(lado1,lado2, base){
  let height;
  if(lado1 == base || lado1 == lado2 || lado2 == base){
    console.warn('No es un triangulo escaleno')
  }else{
    // h = raizcuadrada (lado2 - (al cuadrado (lado2 - lado1 + b**2)/2b))
    height = Math.sqrt(lado2 - (Math.powÍ((lado2 - lado1 + base**2) / 2 * base) ))
  }
  return height;
}

function calcularAlturaTrianguloEscaleno(a,b,c){
  if(a == b && a == c && b == c){
    console.warn('no es un triangulo escaleno')
  }else{
    // h = raizcuadrada (c**2 - ((a**2 - b**2 + c**2) / (2 * a) ** 2))
    let part1 = (a**2 - b**2 + c**2) / (2 * a);
    let part2 = c**2 - part1 ** 2;
    let height =  Math.sqrt(part2);
    return Math.round(height)
  }
} 

console.groupEnd('Triangulo Escaleno');