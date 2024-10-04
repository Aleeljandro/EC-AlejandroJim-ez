# EC
Ejercicio 1:

Objetivo: Crear una página web con un botón que, al hacer clic, cambie el color de fondo de la página a un color aleatorio.
Requisitos:
Un botón etiquetado como "Cambiar color".
Al presionar el botón, el color de fondo cambia a un valor aleatorio de tipo RGB, generado mediante JavaScript.

Diseño de la propuesta de solución:
Explicación:
Objetivo: Esta función genera un color aleatorio en formato RGB (Red, Green, Blue).

Paso a paso:

Math.random() genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo).
Multiplicamos el número aleatorio por 256 para obtener un valor entre 0 y 255 (que es el rango válido para los valores RGB).
Math.floor() redondea ese número hacia abajo para asegurarnos de tener un número entero.

Implementación del diseño propuesto:

El usuario hace clic en el botón.
Se llama a la función que genera un color aleatorio.
El color generado se aplica al fondo del documento (document.body), y la página cambia de color.
Este proceso se repite cada vez que el botón es presionado, con un color diferente generado cada vez.

### Demostración

![Cambio de color](/Ejercicio_1/ejercicio1.gif)


Ejercicio 2:

Objetivo: Crear una página web que permita calcular el área de un rectángulo.
Requisitos:
Dos campos de entrada (input) para que el usuario introduzca el ancho y el alto del rectángulo.
Un botón etiquetado como "Calcular Área" que, al presionarse, calcule el área.
Mostrar el resultado en un elemento <p> dentro de la página.

Diseño de la propuesta de solución:
HTML:

Incluir dos campos de entrada para el ancho y el alto.
Un botón que al hacer clic realice el cálculo del área.
Un elemento <p> donde se muestre el resultado.
JavaScript:

Capturar los valores de los inputs (ancho y alto) al hacer clic en el botón.
Calcular el área utilizando la fórmula:
Área del rectángulo = ancho x alto.
Mostrar el resultado en el elemento <p>.

En el archivo JavaScript, se implementó la lógica para:

Obtener los valores ingresados en los campos de texto.
Validar que los valores sean correctos (es decir, que sean números y mayores que 0).
Calcular el área multiplicando el ancho por el alto.
Mostrar el resultado o un mensaje de error si los valores no son válidos.

### Demostración

![Cambio de color](/Ejercicio_1/ejercicio2.gif)


Ejercicio 3:

Objetivo: Crear una página web que permita agregar elementos a una lista de forma dinámica.
Requisitos:
Un campo de entrada donde el usuario pueda escribir un texto.
Un botón etiquetado como "Añadir a la lista".
Una lista vacía (<ul> o <ol>) donde se agregarán los elementos.
Al hacer clic en el botón, el texto del campo de entrada debe añadirse como un nuevo ítem (<li>) a la lista.
Diseño de la propuesta de solución:
HTML:

Un campo de entrada para que el usuario escriba.
Un botón que, al hacer clic, agregue el texto a la lista.
Una lista vacía que irá mostrando los nuevos ítems añadidos.
JavaScript:

Capturar el texto del campo de entrada cuando se haga clic en el botón.
Crear un nuevo elemento <li> con el texto capturado.
Añadir este nuevo elemento a la lista.
Vaciar el campo de entrada después de cada inserción.

He implementado un código para un Listado Dinámico que consiste en una página con un campo de entrada, un botón y una lista vacía. Cuando el usuario introduce un texto en el campo y presiona el botón "Añadir a la lista", se captura el valor del campo, se crea un nuevo elemento de lista (<li>) con el texto ingresado y se añade a la lista. Si el campo de entrada está vacío, aparece una alerta pidiendo un texto válido. Después de agregar el ítem, el campo de entrada se limpia para que el usuario pueda ingresar un nuevo valor.

### Demostración

![Cambio de color](/Ejercicio_1/ejercicio3.gif)

Ejercicio 4:

Objetivo: Crear una página web con varios elementos div que cambian de estilo al pasar el ratón sobre ellos y restauran su estilo original al quitar el ratón.
Requisitos:
Varios elementos div con textos diferentes.
Al pasar el ratón sobre un div, su color de fondo debe cambiar a azul y el texto a blanco.
Al mover el ratón fuera del div, los estilos deben restaurarse a su estado original.
Diseño de la propuesta de solución:
HTML:

Crear varios elementos div con texto distinto.
CSS:

Definir los estilos originales de los div (fondo y color de texto).
JavaScript:

Usar los eventos mouseover y mouseout para cambiar los estilos cuando el ratón entra y sale de cada div.
Al hacer mouseover, el fondo cambia a azul y el texto a blanco.
Al hacer mouseout, los estilos se restauran a su configuración inicial.

Le pregunté a chatgpt: "Quiero usar eventos como mouseover y mouseout para lograrlo.
¿Me podrías ayudar con el HTML, CSS y JavaScript para este ejercicio?". Y me dio ese resultado.

### Demostración

![Cambio de color](/Ejercicio_1/ejercicio4.gif)

Ejercicio 5:

Objetivo: Desarrollar una página web que, al hacer clic en cualquier elemento, muestre su XPath único.
Requisitos:
Detectar clics en cualquier parte de la página.
Identificar el elemento exacto que fue clicado.
Generar el XPath del elemento.
Mostrar el XPath en un cuadro de alerta o en una sección de la página.

No he podido realizarlo ya que el html no hay que cambiarlo y chatgpt me insiste en cambiarlo.

### Demostración

![Cambio de color](/Ejercicio_1/ejercicio5.gif)


