# EC
Ejercicio 2:

Objetivo: 
Parte 1: Información Básica del Pokémon
Realizar una petición a la PokeAPI para obtener información básica de un Pokémon por su nombre.
Mostrar el nombre, id, tipos, y una imagen del Pokémon.
Gestionar errores de manera adecuada si el Pokémon no existe.

Parte 2: Comparativa de Pokémon
Obtener datos de dos Pokémon elegidos por el usuario.
Comparar sus estadísticas base (stats) y determinar cuál de ellos tiene mejores estadísticas generales.
Presentar los resultados en una tabla comparativa de fácil lectura.

Parte 3: Evoluciones y Habilidades
Dado un Pokémon específico, buscar su cadena de evolución completa.
Listar cada una de las formas evolutivas y sus habilidades.
Incluir un botón que permita al usuario ver más detalles de cualquier habilidad (usando un modal o una nueva vista).




Requisitos:
function obtenerInfoBasicaPokemon(nombrePokemon)
function compararPokemon(pokemon1, pokemon2)
function obtenerCadenaEvolutiva(pokemon)


Diseño de la propuesta de solución:

El archivo index.js llama a las funciones de pokemonService.js para obtener y procesar los datos de Pokémon.
Las funciones de pokemonService.js se apoyan en apiClient.js para realizar las solicitudes API, permitiendo que toda la lógica de conexión esté aislada en un único módulo.
El flujo completo permite que el código sea escalable y permite la introducción de nuevas funcionalidades o actualizaciones sin afectar el diseño general.

Implementación del diseño propuesto:

src/
├── services/
│   ├── apiClient.js           # Cliente API para realizar solicitudes a la PokeAPI
│   └── pokemonService.js       # Funciones específicas para obtener y manipular datos de Pokémon
├── utils/
│   └── formatUtils.js          # Utilidades para formatear y comparar datos
└── index.js                    # Archivo principal para ejecutar y probar las funciones



### Demostración

![Cambio de color](/T1/SPRINT_2/Ejercicio_1/ejercicio1.gif)
Rellenar el campo de tiempo con el valor 2 segundos y pulsar el botón "Iniciar", verificando que el temporizador cuenta correctamente y muestra una alerta al terminar los 2 segundos.
![Cambio de color](/T1/SPRINT_2/Ejercicio_1/ejercicio1_2.gif)
Repetir la prueba con el valor 4 segundos, asegurándose de que el temporizador cuenta hasta los 4 segundos y que al finalizar se muestra la alerta correspondiente.



