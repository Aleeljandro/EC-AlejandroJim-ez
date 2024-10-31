# EC
Ejercicio 1:

Objetivo: 
Dado un conjunto de datos en forma de array con información sobre estudiantes, sus calificaciones en diferentes asignaturas y detalles adicionales, implementa funciones para analizar, filtrar y transformar estos datos.
Parte 1: Estudiantes Destacados por Asignatura
Crea una función que, dada una asignatura, retorne los 3 estudiantes con las mejores notas en esa asignatura.
Parte 2: Asignatura con Menor Rendimiento
Diseña una función que identifique la asignatura en la que los estudiantes tienen, en promedio, la menor calificación.
Parte 3: Mejora de Notas para Estudiantes con Beca
Escribe una función que aumente todas las notas de los estudiantes con beca en un 10% (sin superar el máximo de 10).
Parte 4: Filtrado por Ciudad y Asignatura
Crea una función que, dada una ciudad y una asignatura, retorna la lista de estudiantes de esa ciudad ordenados descendentemente por la nota de la asignatura dada.
Parte 5: Estudiantes Sin Beca por Ciudad
Escribe una función que, dada una ciudad, retorne la cantidad de estudiantes que no tienen beca en esa ciudad.
Parte 6: Promedio de Edad de Estudiantes con Beca
Diseña una función que calcule el promedio de edad de los estudiantes que tienen beca.
Parte 7: Mejores Estudiantes en Total
Crea una función que devuelva un array con los 2 estudiantes que tengan el mayor promedio general entre todas las asignaturas.


Parte 8: Estudiantes con Todas las Materias Aprobadas
Diseña una función que retorne un array con los nombres de los estudiantes que hayan aprobado todas las materias (considera aprobado con una calificación mayor o igual a 5).


Requisitos:
Parte 1: Estudiantes Destacados por Asignatura
console.log(estudiantesDestacadosPorAsignatura(estudiantes, 'matematicas'));
// Esperado: [{ nombre: "Carmen", ... }, { nombre: "Alejandro", ... }, { nombre: "Ana", ... }]
Parte 2: Asignatura con Menor Rendimiento
console.log(asignaturaMenorRendimiento(estudiantes));
// Esperado: 'matematicas' (promedio más bajo entre todas las asignaturas).
Parte 3: Mejora de Notas para Estudiantes con Beca
console.log(mejoraNotasBeca(estudiantes));
// Esperado: Las notas de estudiantes con beca aumentan un 10%, ejemplo: { nombre: "Ana", matematicas: 9.9, fisica: 6.6, historia: 8.8 } sin superar 10.
Parte 4: Filtrado por Ciudad y Asignatura
console.log(filtrarPorCiudadYAsignatura(estudiantes, 'Madrid', 'fisica'));
// Esperado: [{ nombre: "Juan", ... }, { nombre: "Jose", ... }, { nombre: "Sara", ... }] ordenados de mayor a menor en 'fisica'.
Parte 5: Estudiantes Sin Beca por Ciudad
console.log(estudiantesSinBecaPorCiudad(estudiantes, 'Madrid'));
// Esperado: 4 (Juan, Pedro, Jose y Roberto no tienen beca en Madrid).
Parte 6: Promedio de Edad de Estudiantes con Beca
console.log(promedioEdadEstudiantesConBeca(estudiantes));
// Esperado: 21 (promedio de la edad de los estudiantes con beca).
Parte 7: Mejores Estudiantes en Total
console.log(mejoresEstudiantes(estudiantes));
// Esperado: [{ nombre: "Carmen", ... }, { nombre: "Alejandro", ... }] (mejores promedios generales).
Parte 8: Estudiantes con Todas las Materias Aprobadas
console.log(estudiantesAprobados(estudiantes));
// Esperado: ["Juan", "Ana", "Maria", "Jose", "Isabel", "David", "Laura", "Miguel", "Sara", "Daniela", "Alberto", "Gabriel", "Carmen", "Carolina", "Alejandro", "Lucia", "Marina"] (estudiantes que aprobaron todas las materias).


Diseño de la propuesta de solución:

Cada parte del ejercicio puede implementarse como una función separada en un módulo. Esto hace que cada función sea reutilizable y mantenible.

Implementación del diseño propuesto:

src/
├── data/
│   └── estudiantes.js       # Archivo donde se define el array de estudiantes
├── analysis/
│   ├── destacados.js        # Función para obtener estudiantes destacados por asignatura
│   ├── menorRendimiento.js  # Función para asignatura con menor rendimiento
│   ├── mejoraBecarios.js    # Función para mejorar notas de estudiantes con beca
│   ├── filtroCiudad.js      # Función para filtrar estudiantes por ciudad y asignatura
│   ├── sinBeca.js           # Función para contar estudiantes sin beca por ciudad
│   ├── promedioEdad.js      # Función para promedio de edad de becarios
│   ├── mejoresEstudiantes.js # Función para los mejores estudiantes en general
│   └── todasAprobadas.js    # Función para estudiantes con todas las materias aprobadas
└── index.js                 # Archivo principal para ejecutar el análisis


### Demostración

![Cambio de color](/T1/SPRINT_3/Ejercicio_1/ejercicio1.gif)



