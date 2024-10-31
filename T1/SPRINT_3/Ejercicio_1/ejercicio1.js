const estudiantes = [
    { nombre: "Ana", ciudad: "Zaragoza", edad: 20, beca: true, calificaciones: { matematicas: 8, fisica: 7, quimica: 6 } },
    { nombre: "Luis", ciudad: "Barcelona", edad: 22, beca: false, calificaciones: { matematicas: 9, fisica: 6, quimica: 8 } },
    { nombre: "Marta", ciudad: "Badajoz", edad: 19, beca: true, calificaciones: { matematicas: 10, fisica: 9, quimica: 9 } },
    { nombre: "Juan", ciudad: "Sevilla", edad: 21, beca: false, calificaciones: { matematicas: 6, fisica: 5, quimica: 7 } },
    { nombre: "Sofia", ciudad: "Santander", edad: 23, beca: true, calificaciones: { matematicas: 7, fisica: 8, quimica: 9 } },
];

// Parte 1: Estudiantes Destacados por Asignatura
function mejoresEstudiantesPorAsignatura(asignatura) {
    return estudiantes
        .filter(est => est.calificaciones[asignatura] !== undefined)
        .sort((a, b) => b.calificaciones[asignatura] - a.calificaciones[asignatura])
        .slice(0, 3);
}

// Parte 2: Asignatura con Menor Rendimiento
function asignaturaConMenorRendimiento() {
    const sumasCalificaciones = {};
    const contadorCalificaciones = {};

    estudiantes.forEach(est => {
        for (const [asignatura, calificacion] of Object.entries(est.calificaciones)) {
            if (!sumasCalificaciones[asignatura]) {
                sumasCalificaciones[asignatura] = 0;
                contadorCalificaciones[asignatura] = 0;
            }
            sumasCalificaciones[asignatura] += calificacion;
            contadorCalificaciones[asignatura] += 1;
        }
    });

    let menorAsignatura = null;
    let menorPromedio = Infinity;

    for (const asignatura in sumasCalificaciones) {
        const promedio = sumasCalificaciones[asignatura] / contadorCalificaciones[asignatura];
        if (promedio < menorPromedio) {
            menorPromedio = promedio;
            menorAsignatura = asignatura;
        }
    }

    return menorAsignatura;
}

// Parte 3: Mejora de Notas para Estudiantes con Beca
function mejoraNotasBecados() {
    estudiantes.forEach(est => {
        if (est.beca) {
            for (const asignatura in est.calificaciones) {
                est.calificaciones[asignatura] = Math.min(est.calificaciones[asignatura] * 1.1, 10);
            }
        }
    });
}

// Parte 4: Filtrado por Ciudad y Asignatura
function filtrarPorCiudadYAsignatura(ciudad, asignatura) {
    return estudiantes
        .filter(est => est.ciudad === ciudad)
        .sort((a, b) => b.calificaciones[asignatura] - a.calificaciones[asignatura]);
}

// Parte 5: Estudiantes Sin Beca por Ciudad
function estudiantesSinBecaPorCiudad(ciudad) {
    return estudiantes.filter(est => est.ciudad === ciudad && !est.beca).length;
}

// Parte 6: Promedio de Edad de Estudiantes con Beca
function promedioEdadBecados() {
    const becados = estudiantes.filter(est => est.beca);
    const sumaEdades = becados.reduce((suma, est) => suma + est.edad, 0);
    return sumaEdades / becados.length;
}

// Parte 7: Mejores Estudiantes en Total
function mejoresEstudiantesEnTotal() {
    return estudiantes
        .map(est => ({
            nombre: est.nombre,
            promedio: Object.values(est.calificaciones).reduce((a, b) => a + b, 0) / Object.keys(est.calificaciones).length
        }))
        .sort((a, b) => b.promedio - a.promedio)
        .slice(0, 2);
}

// Parte 8: Estudiantes con Todas las Materias Aprobadas
function estudiantesConMateriasAprobadas() {
    return estudiantes
        .filter(est => Object.values(est.calificaciones).every(nota => nota >= 5))
        .map(est => est.nombre);
}

// Pruebas
console.log("Parte 1: Estudiantes destacados en matematicas:", mejoresEstudiantesPorAsignatura("matematicas"));
console.log("Parte 2: Asignatura con menor rendimiento:", asignaturaConMenorRendimiento());
mejoraNotasBecados();
console.log("Parte 3: Notas mejoradas para estudiantes con beca:", estudiantes);
console.log("Parte 4: Estudiantes de Madrid por fisica:", filtrarPorCiudadYAsignatura("Madrid", "fisica"));
console.log("Parte 5: Estudiantes sin beca en Madrid:", estudiantesSinBecaPorCiudad("Madrid"));
console.log("Parte 6: Promedio de edad de estudiantes con beca:", promedioEdadBecados());
console.log("Parte 7: Mejores estudiantes en total:", mejoresEstudiantesEnTotal());
console.log("Parte 8: Estudiantes con todas las materias aprobadas:", estudiantesConMateriasAprobadas());
