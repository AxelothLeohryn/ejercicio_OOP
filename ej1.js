//Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  obtenerDetalles() {
    console.log(`Nombre: ${this.nombre}
        Edad: ${this.edad}
        Género: ${this.genero}`);
  }
}
// let persona = new Persona("Alex", 25, "Masculino")

//Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.
class Estudiante extends Persona {
  constructor(nombre, edad, genero, curso, grupo) {
    super(nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
  }
  registrar() {
    console.log(`
    Nombre: ${this.nombre}
    Edad: ${this.edad}
    Género: ${this.genero}
    Curso: ${this.curso}
    Grupo: ${this.grupo}`);
  }
}
// let estudiante = new Estudiante("Alex", 25, "Masculino", 3, "B");

// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.
class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel
    }
    asignar() {
        console.log(`
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        Género: ${this.genero}
        Asignatura: ${this.asignatura}
        Nivel: ${this.nivel}`)
    }
}
// let profesor = new Profesor("Juan", 38, "Masculino", "Química", "Avanzado")
