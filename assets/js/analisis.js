function encontrarPersona(personaEnBusqueda){
  return salarios.find(persona => persona.name == personaEnBusqueda)

 /*  const persona = salarios.find((persona)=>{
    return persona.name == personaEnBusqueda;
  })
  return persona; */
}

function medianaPorPersona(nombrePersona){
  const trabajos = encontrarPersona(nombrePersona).trabajos;
  const salario = trabajos.map(salario => salario.salario);
  const medianaTrabajos = PlatziMath.mediana(salario)
  return medianaTrabajos;
}

function proyeccionPorPersona(nombrePersona){
  const trabajos = encontrarPersona(nombrePersona).trabajos;
  let porcentajesCrecimiento = [];

  for(let i = 1; i < trabajos.length; i++){
    const salarioActual = trabajos[i].salario;
    const salarioPasado = trabajos[i - 1].salario;
    const crecimiento = salarioActual - salarioPasado;
    const porcentajeCrecimiento = crecimiento / salarioPasado;
    porcentajesCrecimiento.push(porcentajeCrecimiento)
  }
  const medianaPorcentajes = PlatziMath.mediana(porcentajesCrecimiento);
  const ultimoSalario = trabajos[trabajos.length - 1 ].salario;
  console.log({medianaPorcentajes, ultimoSalario})
  const aumento = ultimoSalario * medianaPorcentajes;
  const nuevoSueldo = ultimoSalario + aumento;
  return nuevoSueldo;
}


const empresas = {};

for(persona of salarios){
  for(trabajo of persona.trabajos){
    if(!empresas[trabajo.empresa]){
      empresas[trabajo.empresa] = {}
    }

    if(!empresas[trabajo.empresa][trabajo.year]){
      empresas[trabajo.empresa][trabajo.year] = []
    }

    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
  }
}


console.log(empresas)


function medianaPorEmpresas(nombreEmpresa,year){
  if(!empresas[nombreEmpresa]){
    console.warn('Esta empresa no existe')
  }else if(!empresas[nombreEmpresa][year]){
    console.warn('Es ano en la empresa no existe')
  }else {
    return PlatziMath.mediana(empresas[nombreEmpresa][year]);
  }
}


function proyeccionPorEmpresa(nombreEmpresa){
  if(!empresas[nombreEmpresa]){
    console.warn('Esta empresa no existe')
  }else{
    const listYears = Object.keys(empresas[nombreEmpresa]);
    
    const listYearMediana = listYears.map((year)=>{
      return medianaPorEmpresas(nombreEmpresa,year);
    })

    let porcentajesCrecimiento = [];

    for(let i = 1; i < listYearMediana.length; i++){
      const salarioActual = listYearMediana[i];
      const salarioPasado = listYearMediana[i - 1];
      const crecimiento = salarioActual - salarioPasado;
      const porcentajeCrecimiento = crecimiento / salarioPasado;
      porcentajesCrecimiento.push(porcentajeCrecimiento)
    }
    const medianaPorcentajes = PlatziMath.mediana(porcentajesCrecimiento);
    const ultimoMediana = listYearMediana[listYearMediana.length - 1 ];
    const aumento = ultimoMediana * medianaPorcentajes;
    const nuevoMediana = ultimoMediana + aumento;
    return nuevoMediana;
  }
}


function medianaGeneral(){
  const listaPersonas = salarios.map(persona => {
   return medianaPorPersona(persona.name)
  });


  const medianaGeneralP = PlatziMath.mediana(listaPersonas);
  return medianaGeneralP;
}

function medianaTop10(){
  const listaPersonas = salarios.map(persona => {
    return medianaPorPersona(persona.name)
   });

   const medianaOrdenada = PlatziMath.ordenarLista(listaPersonas);
   const cantidad = listaPersonas.length / 10;
   const limite = listaPersonas.length - cantidad;
   const top10 = medianaOrdenada.slice(limite, listaPersonas.length);
   const medianaTop10 = PlatziMath.mediana(top10);
   return medianaTop10;
}