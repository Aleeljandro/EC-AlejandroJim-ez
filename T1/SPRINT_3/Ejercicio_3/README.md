# EC
Ejercicio 3:

Objetivo: Vas a implementar una funcionalidad CRUD (Create, Read, Update, Delete) para gestionar miembros de una guild en un sistema de administración. Debes crear una interfaz que permita visualizar los miembros actuales en una tabla, añadir nuevos miembros mediante un modal y editar o eliminar miembros existentes.


Requisitos:
Visualización de Miembros:
Crea una tabla que muestre todos los miembros de la guild.
La tabla debe incluir las siguientes columnas:
User ID
Username
Level
Item Level
Character Role (enum: TANK, HEALER, DAMAGE, SUPPORT)
Guild Role (enum: LIDER, GERENTE SENIOR, GERENTE, GERENTE A2, ALPHA 2, MEMBER)
Cada fila debe tener botones de Editar y Eliminar.
Añadir Miembro (Create):
Implementa un botón "Add New Member" que abra un modal.
El modal debe contener un formulario con los siguientes campos obligatorios:
user_id (string)
username (string)
level (integer)
ilvl (integer)
character_role (enum: TANK, HEALER, DAMAGE, SUPPORT)
guild_role (enum: LIDER, GERENTE SENIOR, GERENTE, GERENTE A2, ALPHA 2, MEMBER)
main_archetype (enum: BARD, CLERIC, FIGHTER, MAGE, RANGER, ROGUE, SUMMONER, TANK)
secondary_archetype (enum: BARD, CLERIC, FIGHTER, MAGE, RANGER, ROGUE, SUMMONER, TANK)
grandmaster_profession_one (enum: FISHING, HERBALISM, HUNTING, LUMBERJACKING, MINING, ALCHEMY, ANIMALHUSBANDRY, COOKING, FARMING, LUMBERMILLING, METALWORKING, STONECUTTING, TANNING, WEAVING, ARCANEENGINEERING, ARMORSMITHING, CARPENTRY, JEWELCUTTING, LEATHERWORKING, SCRIBE, TAILORING, WEAPONSMITHING)
grandmaster_profession_two (enum: FISHING, HERBALISM, HUNTING, LUMBERJACKING, MINING, ALCHEMY, ANIMALHUSBANDRY, COOKING, FARMING, LUMBERMILLING, METALWORKING, STONECUTTING, TANNING, WEAVING, ARCANEENGINEERING, ARMORSMITHING, CARPENTRY, JEWELCUTTING, LEATHERWORKING, SCRIBE, TAILORING, WEAPONSMITHING)
email (string)
notify_email (boolean)
Los datos ingresados deben ser enviados a la API para añadir el nuevo miembro utilizando el endpoint  indicado en el YML.
Editar Miembro (Update):
Implementa la funcionalidad de editar un miembro utilizando el botón "Edit" en cada fila de la tabla.
Al hacer click en Editar, se debe abrir el mismo modal que para añadir un nuevo miembro, pero precargando los datos del miembro seleccionado.
Envía los cambios utilizando el endpoint indicado en el YML para actualizar la información.
Eliminar Miembro (Delete):
Implementa la funcionalidad de eliminar un miembro utilizando el botón "Delete" en cada fila de la tabla.
Al hacer click en Eliminar, debe realizarse una confirmación.
Envía la solicitud al endpoint indicado en el YML
Validaciones:
Todos los campos en el modal deben ser obligatorios.
El campo email debe ser validado con un formato de correo electrónico.
user_id debe ser único. Si el user_id ya existe en la guild, no se debe permitir su duplicación.

Diseño de la propuesta de solución:
Entrada de datos: Campo input para los segundos.
Iniciar cuenta regresiva: Botón que detecta el evento click.
Actualización de tiempo: Mostrar los segundos restantes en una zona de texto.
Fin del temporizador: Cuando el temporizador llegue a 0, mostrar el mensaje.

Paso a paso:

El componente principal MemberTable muestra la tabla de miembros.
Al hacer clic en "Add New Member" o "Edit", se abre el MemberModal, con validaciones en el formulario.
En el caso de eliminación, ConfirmDelete confirma antes de llamar al servicio de eliminación.
Los cambios se envían a través de memberService.js hacia los endpoints de la API.



Implementación del diseño propuesto:

guild-management/
├── src/
│   ├── components/
│   │   ├── MemberTable.js            # Tabla de visualización de miembros con botones de acción
│   │   ├── MemberModal.js            # Modal para añadir y editar miembros
│   │   └── ConfirmDelete.js          # Modal de confirmación de eliminación
│   ├── services/
│   │   └── memberService.js          # Servicios para interacción con la API (Create, Read, Update, Delete)
│   ├── App.js                        # Componente principal que integra todo
│   └── utils/
│       └── validations.js            # Validaciones de campos (email, unicidad de user_id)
└── README.md                         # Documentación del proyecto y ejecución


### Demostración

![Cambio de color](/T1/SPRINT_2/Ejercicio_1/ejercicio1.gif)
Rellenar el campo de tiempo con el valor 2 segundos y pulsar el botón "Iniciar", verificando que el temporizador cuenta correctamente y muestra una alerta al terminar los 2 segundos.
![Cambio de color](/T1/SPRINT_2/Ejercicio_1/ejercicio1_2.gif)
Repetir la prueba con el valor 4 segundos, asegurándose de que el temporizador cuenta hasta los 4 segundos y que al finalizar se muestra la alerta correspondiente.



Ejercicio 2:

Objetivo: Crear una calculadora básica que permita realizar operaciones de suma, resta, multiplicación y división. Los usuarios deben poder introducir dos números y seleccionar una operación.
Al hacer clic en "Calcular", se debe mostrar el resultado de la operación seleccionada.
Requisitos:
HTML: Dos campos para introducir los números, una lista de selección (select) para elegir la operación, un botón "Calcular" y un área para mostrar el resultado.
JS: Detectar el evento click en el botón "Calcular", capturar los valores de los campos y realizar la operación matemática seleccionada. Mostrar el resultado en la página.

Diseño de la propuesta de solución:

Entradas: Dos campos input para los números.
Selección de operación: Un menú desplegable (select) para elegir entre suma, resta, multiplicación y división.
Botón de cálculo: Un botón que al hacer clic ejecuta la operación.
Resultados: Un área para mostrar el resultado.
Validaciones: Verificar que los campos no estén vacíos y que no se divida entre cero.

Implementación del diseño propuesto:
Estoy trabajando en una calculadora básica. Necesito dos campos de entrada para números, una lista desplegable para seleccionar la operación (suma, resta, multiplicación, división) y un botón para calcular. 
Quiero que, al hacer clic en 'Calcular', se muestre el resultado de la operación. ¿Podrías ayudarme con el HTML y el JavaScript?



### Demostración

![Cambio de color](/T1/SPRINT_2/Ejercicio_2/ejercicio2.gif)
Probar que la suma de 10 + 12 muestra correctamente el resultado de 22.
![Cambio de color](/T1/SPRINT_2/Ejercicio_2/ejercicio2_2.gif)
Verificar que la resta de 10 - 12 devuelve el valor esperado de -2.
![Cambio de color](/T1/SPRINT_2/Ejercicio_2/ejercicio2_3.gif)
Comprobar que la multiplicación de 5x4 es 20, y que 5x0 devuelve 0.
![Cambio de color](/T1/SPRINT_2/Ejercicio_5/ejercicio2_4.gif)
Probar que la división de 5/4 es 1.25 y que 5/0 devuelve el mensaje "INDEFINIDO".

Ejercicio 3:

Objetivo: Crear una página con una pequeña encuesta donde el usuario puede seleccionar una opción entre varias (por ejemplo: "¿Cuál es tu color favorito?"). Al enviar la respuesta, se deben mostrar los resultados en un gráfico de barras simple que se actualice dinámicamente cada vez que se envía una respuesta.
HTML: Pregunta con varias opciones (utilizando radio buttons), un botón "Enviar", y un área donde se mostrará el gráfico de barras con los resultados.
JS: Detectar el evento click en el botón "Enviar", actualizar las respuestas seleccionadas y generar un gráfico de barras simple manipulando el DOM. El gráfico puede ser construido con divs o tablas que cambian su tamaño en función de los votos.
Requisitos:
Manejo de eventos (click).
Manipulación del DOM para actualizar el gráfico de barras dinámicamente.
Lógica para contar votos y reflejar visualmente.

Diseño de la propuesta de solución:
Encuesta: Utilizar radio buttons para las opciones de respuesta.
Botón de envío: Al hacer clic, se registra la respuesta.
Gráfico de barras: Crear barras visuales con divs que cambien de tamaño en función del número de votos.
Actualización dinámica: Cada vez que se envía una respuesta, se incrementa el conteo y se actualiza el gráfico.

HTML:
Pregunta y opciones: Utilicé un formulario simple con varios radio buttons para permitir que el usuario seleccione una de las opciones. Cada opción tiene un valor que corresponde al color seleccionado.
Botón "Enviar": Añadí un botón que permitirá al usuario enviar su respuesta. El botón detectará el clic para registrar el voto.
Gráfico de barras: Para mostrar los resultados, utilicé varios divs que representarán barras de color. Cada div empieza con un ancho de 0%, y se actualizará dinámicamente en función de la cantidad de votos. Cada barra tiene un color específico y su texto inicial muestra el color y los votos (0 al inicio).

JS:
Almacenar los votos: Creamos un objeto votes para almacenar la cantidad de votos para cada color. Esto permitirá que los votos se acumulen y se actualicen a medida que el usuario selecciona diferentes opciones.
Capturar el clic en "Enviar": Usé un addEventListener para detectar el clic en el botón "Enviar". Al hacer clic, se comprueba qué opción está seleccionada mediante document.querySelector('input[name="color"]:checked'). Si el usuario ha seleccionado una opción, se actualiza el conteo de votos en el objeto votes y se llama a la función para actualizar el gráfico.
Actualizar el gráfico: La función updateGraph() se encarga de recorrer las claves del objeto votes y actualizar el ancho de cada div en función del número de votos. Utilicé bar.style.width = voteCount * 10 + '%' para que cada voto incremente el tamaño de la barra proporcionalmente. También actualicé el texto dentro de cada barra para reflejar el número de votos.

### Demostración

![Cambio de color](/T1/SPRINT_2/Ejercicio_3/ejercicio3.gif)
Verificar que al seleccionar una opción y hacer clic en "Enviar", se actualicen correctamente los votos en el gráfico.
![Cambio de color](/T1/SPRINT_2/Ejercicio_3/ejercicio3_2.gif)
Comprobar que el gráfico de barras se actualiza dinámicamente después de cada nueva votación.
![Cambio de color](/T1/SPRINT_2/Ejercicio_3/ejercicio3_3.gif)
Probar que el sistema gestiona correctamente intentos de envío sin seleccionar ninguna opción.
![Cambio de color](/T1/SPRINT_2/Ejercicio_3/ejercicio3_4.gif)
Verificar que las votaciones previas se mantienen después de varias interacciones.

Ejercicio 4:

Objetivo: Descripción: Crear un cronómetro que permita al usuario iniciarlo, pausarlo y reiniciarlo. El cronómetro debe actualizarse cada segundo y mostrar el tiempo en minutos y segundos.
HTML: Botones para "Iniciar", "Pausar" y "Reiniciar", y un área para mostrar el tiempo.
JS: Detectar los eventos click en los botones para iniciar el cronómetro, detenerlo y reiniciarlo. Usar setInterval para actualizar el cronómetro cada segundo.

Requisitos:
Uso avanzado de eventos (click en múltiples botones).
Métodos como setInterval, clearInterval.
Manipulación continua del DOM (actualización del tiempo).

Diseño de la propuesta de solución:

HTML:
Visualización del tiempo: Creé un div con el id timeDisplay donde se mostrará el tiempo en minutos y segundos. Inicialmente está en "00:00".

Botones de control: Agregué tres botones: "Iniciar", "Pausar" y "Reiniciar". Cada botón tiene un id específico para que JavaScript pueda detectar los clics y ejecutar la funcionalidad correspondiente.

JavaScript:
Variables para controlar el tiempo:

seconds: Almacena el tiempo total transcurrido en segundos.
interval: Almacena el ID del temporizador creado por setInterval para poder detenerlo con clearInterval.

Función para actualizar la pantalla: Esta función convierte los segundos en minutos y segundos. Usa Math.floor para obtener los minutos y el operador % (módulo) para los segundos restantes. También se asegura de que siempre haya dos dígitos (con padStart), y luego actualiza el contenido del div que muestra el tiempo.

Funcionalidad del botón "Iniciar": Al hacer clic en "Iniciar", si no hay un intervalo activo (es decir, si interval es null), se crea un nuevo intervalo con setInterval. Este intervalo ejecuta una función cada segundo que incrementa la variable seconds y actualiza el cronómetro en pantalla.

Funcionalidad del botón "Pausar": Este botón detiene el cronómetro al eliminar el intervalo activo mediante clearInterval, y luego establece interval en null para que el cronómetro no siga corriendo.

Funcionalidad del botón "Reiniciar": Este botón detiene el cronómetro (si está corriendo), pone la variable seconds a 0 y actualiza la visualización a "00:00".

javascript

### Demostración

![Cambio de color](/T1/SPRINT_2/Ejercicio_4/ejercicio4.gif)
Probar que el cronómetro comienza a contar correctamente al hacer clic en "Iniciar".
![Cambio de color](/T1/SPRINT_2/Ejercicio_4/ejercicio4_2.gif)
Comprobar que al pausar el cronómetro se detiene en el tiempo actual y no continúa avanzando.
![Cambio de color](/T1/SPRINT_2/Ejercicio_4/ejercicio4_3.gif)
Verificar que al hacer clic en "Reiniciar", el cronómetro vuelve a cero.
![Cambio de color](/T1/SPRINT_2/Ejercicio_4/ejercicio4_4.gif)
Probar que el cronómetro maneja correctamente largos períodos de tiempo sin errores.

Ejercicio 5:

Objetivo: Crear un juego de memoria donde el usuario debe hacer clic en dos cartas para ver si coinciden. Si las cartas coinciden, permanecen boca arriba, si no, se voltean nuevamente después de un breve intervalo. El objetivo es encontrar todas las parejas de cartas.
HTML: Crear una cuadrícula de cartas (pueden ser imágenes o solo texto, como números o letras).
JS: Detectar el evento click en cada carta. Usar lógica para manejar la comparación de cartas seleccionadas, y un temporizador para voltearlas si no coinciden. Al final, mostrar un mensaje cuando el jugador haya encontrado a todas las parejas.

Requisitos:
Uso avanzado de eventos (click en elementos dinámicos).
Uso de métodos de temporización como setTimeout para la lógica de volteo.
Lógica condicional compleja para comparar cartas y gestionar el estado del juego.
Manipulación dinámica del DOM (mostrar/ocultar cartas y actualización del estado del juego).

Diseño de la propuesta de solución:
Cuadrícula de cartas: Se utilizará una cuadrícula de cartas con pares que el usuario debe descubrir.
Manejo de eventos: Se detectarán los clics en cada carta.
Lógica de coincidencia:
Se permiten voltear dos cartas a la vez.
Si coinciden, permanecen visibles; si no, se voltean de nuevo después de un breve retraso.
Condición de victoria: El juego termina cuando todas las cartas han sido emparejadas.

Implementación del diseño propuesto:

Necesito un html y un js para hacer este ejercicio Ejercicio 5: Juego de memoria con cartas
Descripción: Crear un juego de memoria donde el usuario debe hacer clic en dos cartas para ver si coinciden. Si las cartas coinciden, permanecen boca arriba, si no, se voltean nuevamente después de un breve intervalo. El objetivo es encontrar todas las parejas de cartas.
HTML: Crear una cuadrícula de cartas (pueden ser imágenes o solo texto, como números o letras).
JS: Detectar el evento click en cada carta. Usar lógica para manejar la comparación de cartas seleccionadas, y un temporizador para voltearlas si no coinciden. Al final, mostrar un mensaje cuando el jugador haya encontrado a todas las parejas.
Objetivos:
Uso avanzado de eventos (click en elementos dinámicos).
Uso de métodos de temporización como setTimeout para la lógica de volteo.
Lógica condicional compleja para comparar cartas y gestionar el estado del juego.
Manipulación dinámica del DOM (mostrar/ocultar cartas y actualización del estado del juego).
Y ademas que guarde en cache las cartas parejas y que no halla numero de intentos.

### Demostración

![Cambio de color](/T1/SPRINT_2/Ejercicio_5/ejercicio5.gif)
Verificar que las cartas se voltean al hacer clic y se quedan volteadas si coinciden.
![Cambio de color](/T1/SPRINT_2/Ejercicio_5/ejercicio5_2.gif)
Comprobar que dos cartas no coincidentes se voltean de nuevo después de un breve intervalo.
![Cambio de color](/T1/SPRINT_2/Ejercicio_5/ejercicio5_3.gif)
Probar que el juego detecta cuando se han encontrado todas las parejas y muestra un mensaje de finalización.
![Cambio de color](/T1/SPRINT_2/Ejercicio_5/ejercicio5_4.gif)
Verificar que el juego puede reiniciarse correctamente barajando las cartas de nuevo.


