//NOTAS:
//SPREAD OPERAROR:
let array = [2, 3, 4, 5];
let uno = 1;
let newArray = [uno, ...array]; // [1, 2, 3, 4, 5]
console.log(newArray);


//Propiedades dinámicas
//Podemos agregar  key desde fuera del objeto a placer, eso lo hace dinámico
const campo = 'persona';
const humano = {
  nombre: 'Alfre',
  apellido: 'Sánchez',
  ['id_' + campo]: '1a2b3c'
};
//Imprimirá:  humano = {nombre: 'Alfre', apellido: 'Sánchez', id_persona: '1a2b3c'} 
console.log(humano);


//Destructuring (aplica también para arrays)
const animal= {
    name: 'Botitas',
    edad: 5,
    
  }
  //const {name = name} = animal; //El primer name es la variable que estoy definiendo, el segundo name es el valor que estoy extrayendo al objeto animal
  const {name} = animal //Cuando la variable se llama igual a la propiedad JS nos permite escribirlo sólo una vez
  console.log(name) // Botitas
  
  //DEEPMATCHING
//Camibio de nombre a la variable
  const {name: nombre_mascota} = animal
  console.log(nombre_mascota) // 'Botitas'

  //Se puede definir un campo por defecto, cuando no esté definido será undefined y se le define en línea 41.
  const trabajador = {
    nombre_trabajador: 'Felipe',
    apellido: 'López'
  };
  
  const {nombre_trabajador, apellido, email = 'f@gmail.com'} = trabajador;
  console.log(email); //f@gmail