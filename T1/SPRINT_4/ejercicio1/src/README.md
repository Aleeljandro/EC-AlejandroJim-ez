# EC
Ejercicio 1:

Visualización Avanzada de Miembros:
Tabla de Miembros:
Mostrar todos los miembros del gremio en una tabla dinámica.
Incluir las siguientes columnas:
user_id (integer) (este es único)
username (string)
level (integer)
ilvl (integer)
character_role (enum: TANK, HEALER, DAMAGE, SUPPORT)
guild_role (enum: LIDER, GERENTE SENIOR, GERENTE, GERENTE A2, ALPHA 2, MEMBER)
main_archetype (enum: BARD, CLERIC, FIGHTER, MAGE, RANGER, ROGUE, SUMMONER, TANK)
secondary_archetype (enum: BARD, CLERIC, FIGHTER, MAGE, RANGER, ROGUE, SUMMONER, TANK)
grandmaster_profession_one (enum: FISHING, HERBALISM, HUNTING, LUMBERJACKING, MINING, ALCHEMY, ANIMALHUSBANDRY, COOKING, FARMING, LUMBERMILLING, METALWORKING, STONECUTTING, TANNING, WEAVING, ARCANEENGINEERING, ARMORSMITHING, CARPENTRY, JEWELCUTTING, LEATHERWORKING, SCRIBE, TAILORING, WEAPONSMITHING)
grandmaster_profession_two (enum: FISHING, HERBALISM, HUNTING, LUMBERJACKING, MINING, ALCHEMY, ANIMALHUSBANDRY, COOKING, FARMING, LUMBERMILLING, METALWORKING, STONECUTTING, TANNING, WEAVING, ARCANEENGINEERING, ARMORSMITHING, CARPENTRY, JEWELCUTTING, LEATHERWORKING, SCRIBE, TAILORING, WEAPONSMITHING)


Requisitos:
Añadir una columna con una casilla de verificación para seleccionar miembros.
Cada fila debe tener botones de Editar y Eliminar.


Diseño de la propuesta de solución:
Diseño de la tabla
Cabecera de la tabla:

Añade una columna adicional al principio para las casillas de verificación.
Incluye botones de acción en las últimas columnas.
Estructura de las filas:

Cada fila debe tener:
Una casilla de verificación (checkbox) en la primera celda.
Los datos del miembro en las siguientes celdas.
Botones "Editar" y "Eliminar" en las últimas dos celdas.

Paso a paso:

Selección de miembros:

Maneja la selección de miembros individualmente o de todos con el checkbox de la cabecera.
Utiliza clases para diferenciar las casillas de miembros individuales (selectMember) y el selector general (selectAll).
Eventos para acciones:

Asocia eventos a los botones "Editar" y "Eliminar".

Implementación del diseño propuesto:

El usuario puede seleccionar uno o varios miembros con las casillas.
Puede hacer clic en "Editar" para abrir un modal o formulario.
Puede hacer clic en "Eliminar" para quitar la fila correspondiente.

Estructura básica HTML:

Diseña una tabla con columnas para mostrar información de los miembros.
Agrega una columna al inicio con casillas de verificación y una al final con botones "Editar" y "Eliminar".
Lógica de selección:

Implementa un checkbox en el encabezado para seleccionar/deseleccionar todos los miembros.
Configura eventos que marquen/desmarquen todas las casillas al interactuar con este checkbox.
Botón de edición:

Asocia un evento a cada botón "Editar".
Captura la fila asociada al botón y extrae los datos relevantes.
Muestra un modal o formulario prellenado para editar los datos.
Botón de eliminación:

Asocia un evento a cada botón "Eliminar".
Localiza la fila correspondiente al botón y la elimina de la tabla.
Manejo de eventos:

Usa addEventListener en los elementos interactivos (checkboxes, botones) para gestionar las acciones.
Aplica la delegación de eventos si se crean filas dinámicamente.
Estilo CSS:

Aplica un diseño limpio a la tabla y botones para que sean visualmente claros.
Opcional: Mejora con modales:

Para editar miembros, usa un modal donde los datos actuales se muestren para su modificación.
Al guardar, actualiza la fila correspondiente con los cambios.



Ejercicio 2:

Objetivo: 
Filtrado y Ordenamiento:
Barra de Filtros que permita filtrar a los miembros por:
Character Role
Guild Role
Main Archetype
Secondary Archetype
Grandmaster Profession (tanto para la 1 como para la 2)
Nivel mínimo y máximo
Item Level mínimo y máximo

Requisitos:
Los filtros deben poder combinarse (por ejemplo, filtrar por Character Role y Level mínimo).
Permite ordenar la tabla por cualquiera de las columnas, tanto ascendente como descendente.


Diseño de la propuesta de solución:

Estructura de la Barra de Filtros
Crea una barra de filtros con inputs y selectores para cada criterio. Usa etiquetas descriptivas para cada filtro.

Filtros específicos:

Character Role, Guild Role, Main Archetype, Secondary Archetype, Grandmaster Profession 1 y 2: Utiliza <select> con opciones predefinidas.
Nivel mínimo y máximo, Item Level mínimo y máximo.
Botón de búsqueda:

Añade un botón "Aplicar Filtros" para que se procesen los filtros seleccionados.

2. Funcionalidad para Aplicar Filtros
Obtención de valores:

Recupera los valores seleccionados en los filtros.
Filtrado de datos:

Usa JavaScript para filtrar dinámicamente las filas de la tabla basándote en los valores de los filtros.
Cada criterio debe ser opcional, permitiendo combinaciones.
Actualización de la tabla:

Muestra solo las filas que cumplen todos los criterios seleccionados.

Ordenamiento
Cabecera interactiva:

Haz que cada columna sea clicable para cambiar el orden.
Usa atributos data-column y data-order para gestionar el orden.
Lógica de ordenamiento:

Implementa una función que ordene las filas según la columna seleccionada en orden ascendente o descendente.


Implementación del diseño propuesto:
Estoy trabajando en una calculadora básica. Necesito dos campos de entrada para números, una lista desplegable para seleccionar la operación (suma, resta, multiplicación, división) y un botón para calcular. 
Quiero que, al hacer clic en 'Calcular', se muestre el resultado de la operación. ¿Podrías ayudarme con el HTML y el JavaScript?



Ejercicio 3:

Objetivo: 
Selección Múltiple y Acciones en Lote

Requisitos:
Selección Múltiple:
Los usuarios pueden seleccionar múltiples miembros utilizando las casillas de verificación.
Añadir una casilla de verificación en el encabezado para seleccionar/deseleccionar todos los miembros visibles.
Acciones en Lote:
Cambiar Guild Role: Permite cambiar el rol del gremio de todos los miembros seleccionados a un rol específico.
Eliminar Miembros: Permite eliminar a todos los miembros seleccionados (requiere confirmación en una alerta).

Diseño de la propuesta de solución:
Selección Múltiple
Casillas de verificación por fila:

Añade una casilla de verificación (checkbox) en cada fila de la tabla.
Estas casillas deben permitir seleccionar/deseleccionar a miembros individualmente.
Casilla de selección en el encabezado:

Coloca una casilla de verificación en la cabecera de la tabla.
Esta casilla debe controlar la selección/deselección de todas las casillas visibles en las filas.
Sincronización de estados:

Cuando la casilla del encabezado se selecciona, todas las casillas de las filas visibles deben reflejar ese estado.
Si alguna casilla de las filas cambia, actualiza el estado de la casilla del encabezado para reflejar si están todas seleccionadas o no.
Acciones en Lote
Cambiar Guild Role
Botón de acción:

Añade un botón o dropdown que permita seleccionar un nuevo rol para los miembros seleccionados.
Validación:

Comprueba si hay miembros seleccionados. Si no hay, muestra un mensaje de advertencia.
Si hay miembros seleccionados, procede a ejecutar la acción.
Lógica de cambio:

Recorre las filas seleccionadas y actualiza la columna del Guild Role con el nuevo valor.
Confirmación visual:

Muestra un mensaje de éxito o algún indicador que confirme que los roles se actualizaron correctamente.
Eliminar Miembros
Botón de acción:

Añade un botón para eliminar a los miembros seleccionados.
Confirmación:

Antes de proceder, muestra una alerta o modal para confirmar la eliminación.
Informa al usuario cuántos miembros se eliminarán.
Lógica de eliminación:

Recorre las filas seleccionadas y elimínalas de la tabla.
Asegúrate de actualizar el estado de la casilla de selección del encabezado si todas las filas visibles se eliminan.
Mensajes de estado:

Muestra un mensaje que confirme la eliminación exitosa o informe de algún error si ocurre.
Interacción del Usuario
Flujo de selección:

El usuario selecciona uno o varios miembros utilizando las casillas.
Puede seleccionar todos los miembros visibles con la casilla del encabezado.
Ejecución de acciones:

Selecciona la acción deseada (cambiar rol o eliminar).
Completa la acción y recibe confirmación visual.
Compatibilidad con filtros:

Las casillas y las acciones deben respetar los filtros aplicados; solo se deben afectar los miembros visibles.
Aspectos Adicionales
Accesibilidad:
Asegúrate de que los elementos sean navegables con teclado y que las descripciones sean claras para lectores de pantalla.
Confirmaciones y mensajes:
Utiliza alertas modales o notificaciones para confirmar acciones importantes.
Feedback visual:
Añade indicadores visuales (como deshabilitar botones) cuando no haya selección.
Optimización:
Realiza todas las operaciones en el DOM actual y asegúrate de que el rendimiento sea fluido incluso con tablas grandes.

Implementación del diseño propuesto:

Estructura HTML y Diseño Visual
Añade una columna en la tabla para las casillas de verificación.
Coloca una casilla de verificación en el encabezado que permita seleccionar/deseleccionar todas las casillas de las filas.
Incluye botones o menús para las acciones en lote (cambiar Guild Role y eliminar miembros) sobre la tabla.
Diseña las casillas de verificación y los botones para que sean visualmente accesibles y claros.
Selección Múltiple
Configurar eventos de selección:

Detecta cuando un usuario selecciona/deselecciona una casilla en una fila.
Actualiza el estado de la casilla del encabezado dependiendo de si todas las filas están seleccionadas o no.
Sincronización de estados:

Si la casilla del encabezado se selecciona, marca todas las casillas visibles en las filas.
Si alguna casilla de las filas se desmarca, desmarca automáticamente la casilla del encabezado.
Acciones en Lote
Cambiar Guild Role:
Detección de selección:

Verifica cuántos miembros están seleccionados antes de habilitar la acción.
Si no hay seleccionados, muestra un mensaje de advertencia al usuario.
Interfaz para elegir el rol:

Muestra un selector con las opciones disponibles para Guild Role.
Confirma la selección del nuevo rol antes de aplicarlo.
Aplicación del cambio:

Actualiza el Guild Role de los miembros seleccionados en la tabla.
Muestra un mensaje de confirmación de que el cambio fue exitoso.
Eliminar Miembros:
Detección de selección:

Verifica cuántos miembros están seleccionados antes de habilitar la acción.
Si no hay seleccionados, muestra un mensaje de advertencia.
Confirmación del usuario:

Muestra un mensaje con el número de miembros seleccionados para eliminar.
Solicita confirmación explícita antes de proceder.
Aplicación de la eliminación:

Elimina las filas correspondientes a los miembros seleccionados.
Actualiza la casilla del encabezado si todas las filas visibles han sido eliminadas.
Muestra un mensaje que confirme la eliminación.
Feedback Visual
Habilitación/deshabilitación de acciones:

Deshabilita los botones de acciones en lote si no hay casillas seleccionadas.
Habilita los botones cuando al menos una casilla está seleccionada.
Indicadores de progreso:

Si la acción de cambiar roles o eliminar miembros toma tiempo, muestra un indicador visual (como un spinner o mensaje de "procesando").
Integración con Filtros
Compatibilidad con selección parcial:

Las casillas de verificación deben actuar solo sobre las filas visibles después de aplicar filtros.
El estado de la casilla del encabezado debe reflejar únicamente las filas visibles.
Persistencia de selección:

Decide si las selecciones se reinician o se conservan al cambiar los filtros. Si se conservan, implementa una manera de gestionar el estado de las filas ocultas.

Ejercicio 4:

Objetivo: 
Renderización Eficiente:
Implementar técnicas para evitar renderizaciones innecesarias, mejorando el rendimiento con grandes cantidades de datos.
Utilizar `React.memo`, `useMemo`, y `useCallback` cuando sea apropiado.


Requisitos:
Paginación:
Implementar paginación de la lista para manejar eficientemente listas con muchos miembros. 


Diseño de la propuesta de solución:

Renderización Eficiente
Minimizar Renderizaciones Innecesarias
Identificación de componentes dinámicos:

Divide los componentes en partes estáticas (que rara vez cambian) y dinámicas (que cambian con frecuencia, como filas de la tabla).
Optimiza los componentes dinámicos para que solo se actualicen cuando sea estrictamente necesario.
Evitar renders completos:

Implementa técnicas para evitar que todo el componente de la tabla se vuelva a renderizar si cambian solo algunas filas o un pequeño estado.
Técnicas de React
React.memo:

Utiliza React.memo para evitar renderizaciones innecesarias de componentes hijos si sus props no cambian.
useMemo:

Identifica cálculos costosos, como el filtrado o la clasificación de la lista de miembros, y memoriza estos resultados para reutilizarlos sin recalcular en cada render.
useCallback:

Memoriza funciones que se pasan como props para evitar que los componentes hijos dependientes se vuelvan a renderizar cuando no es necesario.
Monitoreo del rendimiento
React Developer Tools:
Utiliza herramientas de análisis de rendimiento para identificar cuellos de botella en la renderización.
Revisa qué partes de la aplicación se renderizan innecesariamente y optimízalas.
Paginación
Diseño de la Paginación
Selector de cantidad por página:

Coloca un selector (dropdown o lista) que permita elegir entre 10, 20 o 50 elementos por página.
Asegúrate de que esta selección se guarde y afecte únicamente a la vista actual.
Navegación entre páginas:

Añade controles para ir a la primera, anterior, siguiente y última página.
Muestra el número total de páginas y el número actual para una mejor orientación del usuario.
División de Datos
Cálculo de datos por página:

Divide la lista completa de miembros en porciones según la cantidad seleccionada en el selector (10, 20 o 50).
Gestión del estado actual:

Almacena en el estado actual la página seleccionada y la cantidad de miembros por página para que los datos se carguen dinámicamente.
Filtros y paginación combinados:

Aplica los filtros a toda la lista antes de dividir los datos por página, asegurando que la paginación solo afecte los resultados filtrados.
Optimización de Interfaz
Cargando datos:

Implementa un indicador de carga si el cambio de página o de cantidad de datos seleccionados requiere tiempo para procesarse.
Persistencia de estado:

Conserva el estado de la paginación al aplicar filtros o al recargar la página, para evitar que el usuario pierda su contexto.
Accesibilidad:

Asegúrate de que los controles de paginación sean navegables con teclado y accesibles para lectores de pantalla.

Implementación del diseño propuesto:
El usuario selecciona cuántos miembros desea ver por página (10, 20 o 50) usando el selector.
Utiliza los controles de paginación para navegar entre páginas.
La lista se actualiza dinámicamente según los filtros y la paginación aplicados.
El rendimiento mejora gracias a la renderización optimizada, incluso con grandes volúmenes de datos.

Ejercicio 5:

Objetivo: 
Detalles de Miembro y Edición:
Detalle de Miembro:
Al hacer clic en el Username de un miembro, se abre un Modal con detalles completos del miembro.

Requisitos:
Edición Mejorada:
El Modal de edición debe permitir actualizar todos los campos del miembro excepto el user_id
Implementar validaciones avanzadas:
Asegurar que los niveles (Level e ilvl) sean números enteros positivos.
Evitar duplicados en user_id.


Diseño de la propuesta de solución:
Detalle de Miembro
Interacción de Usuario:

El Username de cada miembro en la tabla será un enlace interactivo o botón.
Al hacer clic en el Username, se abrirá un Modal que muestra los detalles completos del miembro.
Contenido del Modal:

Información presentada en un formato claro y estructurado, incluyendo:
Datos básicos: Username, Guild Role, Character Role.
Arquetipos: Main Archetype, Secondary Archetype.
Profesiones: Grandmaster Profession 1 y 2.
Niveles: Level e Item Level (ilvl).
Un botón de "Cerrar" para cerrar el Modal.
Optimización de la Carga:

La información del Modal debe cargarse dinámicamente según el Username seleccionado, evitando procesar todos los datos de antemano.
Edición Mejorada
Interacción de Usuario:

Desde el Modal de Detalle, un botón "Editar" permitirá acceder al Modal de Edición.
Diseño del Modal de Edición:

Contendrá campos editables para todos los atributos del miembro excepto user_id.
Los campos estarán pre-rellenados con la información actual del miembro.
Botones para "Guardar Cambios" y "Cancelar":
Guardar Cambios: Valida la entrada del usuario antes de confirmar.
Cancelar: Descarta cualquier cambio y cierra el Modal.
Actualización Dinámica:

Los cambios realizados en el Modal deben reflejarse automáticamente en la tabla principal, sin necesidad de recargar la página.
Validaciones Avanzadas
Validación de Niveles (Level e ilvl):

Ambos campos deben aceptar únicamente números enteros positivos.
Muestra un mensaje de error si:
El usuario introduce un valor no numérico.
El valor es negativo o fraccionado.
Validación de user_id:

Antes de guardar, verifica que el user_id no esté duplicado en el sistema.
Si ocurre un conflicto, muestra un mensaje de error claro indicando el problema.
Validaciones en Tiempo Real:

Asegúrate de que los errores sean visibles al usuario en tiempo real, antes de intentar guardar.
Utiliza mensajes de error contextuales cerca de los campos correspondientes.


Feedback Visual y Experiencia del Usuario
Mensajes de Confirmación:

Al guardar cambios correctamente, muestra un mensaje que confirme el éxito de la operación.
Si ocurre un error, muestra un mensaje descriptivo sobre qué debe corregirse.
Indicadores Visuales:

Usa animaciones suaves para abrir y cerrar el Modal.
Muestra un indicador de carga si los datos necesitan tiempo para procesarse (por ejemplo, al verificar duplicados en el servidor).
Interacciones del Usuario
El usuario hace clic en el Username de un miembro en la tabla.
Se abre un Modal con los detalles completos del miembro.
Desde el Modal, el usuario selecciona "Editar" para modificar los datos.
Completa los cambios, asegurándose de que las validaciones no generen errores.
Guarda los cambios, y los datos actualizados se reflejan en la tabla.
Escenarios de Prueba
Ver Modal de Detalles:

Comprobar que se abre con la información correcta para cada miembro.
Validar Campos Editables:

Asegurar que los campos de Level e ilvl solo acepten números enteros positivos.
Verificar que el user_id no pueda ser modificado.
Errores y Mensajes:

Probar escenarios de error (valores no válidos, duplicados) y confirmar que los mensajes sean claros.
Persistencia de Cambios:

Confirmar que los cambios guardados se reflejan correctamente en la tabla y en futuras ediciones.


Implementación del diseño propuesto:

Detalle de Miembro
Preparación de Datos:

Configura un mecanismo para identificar y cargar los datos del miembro específico cuando se haga clic en el Username.
Utiliza el user_id como identificador único para recuperar los detalles desde la fuente de datos.
Renderizado del Modal:

Diseña un Modal reutilizable que se active al hacer clic en el Username.
Carga los datos dinámicamente en el Modal para mostrar:
Información básica (Username, roles, arquetipos).
Detalles numéricos (niveles, profesiones).
Asegúrate de que el Modal incluya un botón de "Cerrar" para regresar a la tabla principal.
Gestión del Estado:

Implementa un estado centralizado o local para manejar:
Qué miembro está seleccionado.
Si el Modal está visible o no.
Experiencia de Usuario:

Añade transiciones suaves al abrir y cerrar el Modal.
Asegúrate de que la tabla principal quede atenuada mientras el Modal está abierto.

Edición Mejorada
Acceso a Edición:

Desde el Modal de Detalle, incluye un botón "Editar" que permita al usuario abrir un Modal secundario con campos editables.
Diseño del Modal de Edición:

Pre-rellena todos los campos con los datos actuales del miembro.
Excluye el campo user_id de la edición.
Diseña botones claros para "Guardar Cambios" y "Cancelar".
Validación y Guardado:

Implementa una validación en tiempo real para:
Asegurar que los niveles sean números enteros positivos.
Prevenir la duplicación de user_id en la base de datos antes de confirmar los cambios.
Si la validación es exitosa, actualiza los datos del miembro.
Cierra el Modal de Edición y actualiza automáticamente la tabla principal.
Gestión del Estado:

Mantén un estado local para los campos editables y los mensajes de error.
Propaga los cambios al estado global de la tabla después de una edición exitosa.

Validaciones Avanzadas
Validación en Tiempo Real:

Añade lógica para:
Mostrar un mensaje de error si los niveles no son números enteros positivos.
Prevenir caracteres no válidos en los campos numéricos.
Verificación de Duplicados:

Al intentar guardar los cambios, verifica que el user_id no esté en uso en los datos existentes.
Si hay duplicados, muestra un mensaje claro e impide que el Modal se cierre.
Mensajes de Feedback:

Diseña mensajes de error junto a cada campo con problemas.
Muestra un mensaje de éxito claro al guardar los cambios.

Feedback Visual y Experiencia del Usuario
Confirmación de Cambios:

Al guardar, muestra un mensaje temporal que confirme que los cambios se aplicaron correctamente.
Indicador de Progreso:

Añade un indicador visual si el guardado requiere tiempo adicional (por ejemplo, validación en el servidor).
Gestión de Errores:

Asegúrate de que los errores no bloqueen la interacción innecesariamente y que los mensajes sean claros.


Ejercicio 6:

Objetivo: 
Validaciones y Manejo de Errores:
Validaciones en Tiempo Real:
Mostrar mensajes de error mientras el usuario completa los formularios si los datos no son válidos.


Requisitos:
Deshabilitar el botón de enviar hasta que el formulario sea válido.


Diseño de la propuesta de solución:
Validaciones en Tiempo Real
Comportamiento del Formulario:

Monitorear constantemente los datos ingresados en los campos del formulario.
Detectar errores automáticamente y en tiempo real, mientras el usuario escribe o selecciona valores.
Indicadores de Validación:

Cada campo tendrá un estado de validación asociado:
Estado válido: Mostrar visualmente que el campo está correcto (por ejemplo, un borde verde o un ícono de verificación).
Estado no válido: Mostrar un mensaje de error cerca del campo y un estilo visual que destaque el problema (por ejemplo, un borde rojo).
Mensajes de error claros y específicos:
Por ejemplo, "El nivel debe ser un número entero positivo" o "Este campo es obligatorio".
Actualización de Validaciones:

Las validaciones deben ejecutarse:
Al escribir en un campo (onChange o equivalente).
Al perder el foco en el campo (onBlur o equivalente).
Antes de intentar enviar el formulario.
Deshabilitar el Botón de Enviar
Estado del Botón:

El botón de enviar estará deshabilitado de forma predeterminada.
Se habilitará automáticamente solo cuando:
Todos los campos requeridos sean válidos.
No existan errores activos en el formulario.
Comportamiento del Usuario:

Si el usuario intenta enviar datos sin completar correctamente los campos, el botón permanecerá deshabilitado.
Proporcionar feedback claro para guiar al usuario hacia la corrección de los errores:
Resaltar los campos con errores.
Mostrar un mensaje global como "Corrige los errores marcados antes de enviar".
Gestión de Errores y Experiencia del Usuario
Errores Globales:

Para errores que no están asociados a un campo específico (por ejemplo, un fallo en la comunicación con el servidor):
Mostrar un mensaje en la parte superior o inferior del formulario.
Mantener el botón de enviar deshabilitado hasta que el error se resuelva.
Mensajes de Éxito:

Una vez que todos los campos son válidos y el formulario se envía correctamente:
Mostrar un mensaje visual que confirme que el envío fue exitoso.
Optimización de la Interacción:

Minimizar la frustración del usuario:
Asegurarse de que los errores sean fáciles de identificar y corregir.
Evitar que el formulario se "rompa" si el usuario corrige datos en un orden diferente al esperado.
Flujo de Validación
El usuario comienza a rellenar el formulario.
El sistema valida cada entrada en tiempo real.
Si hay errores:
Se muestran mensajes junto a los campos problemáticos.
El botón de enviar permanece deshabilitado.
Si todos los campos son válidos:
Se habilita el botón de enviar.
El usuario puede enviar el formulario exitosamente.


Implementación del diseño propuesto:
Validaciones en Tiempo Real
Monitoreo de Campos:

El formulario debe estar configurado para observar todos los campos y reaccionar a los cambios en tiempo real. Esto significa que, cada vez que el usuario escriba en un campo o lo modifique, el sistema debe realizar una validación de los datos ingresados.
Mensajes de Error:

Para cada campo con errores, debe aparecer un mensaje específico cerca del mismo (por ejemplo, debajo o al lado del campo) que indique el problema (por ejemplo, "El campo debe ser un número entero positivo").
Los mensajes deben ser breves, claros y específicos, para facilitar la corrección por parte del usuario.
Feedback Visual:

Los campos con datos válidos deben mostrarse de una manera que indique su validez (por ejemplo, un borde verde o un ícono de verificación).
Los campos con errores deben resaltarse con un borde rojo o un ícono de advertencia, de modo que el usuario pueda identificar rápidamente los campos que necesitan corrección.
Validación en Tiempo Real:

La validación debe ejecutarse automáticamente cuando el usuario termine de escribir en un campo o cuando pierda el foco del campo (por ejemplo, cuando hace clic en otro campo o sale del formulario).
Prevención de Errores Comunes:

Los campos deben validarse de acuerdo a reglas predefinidas: asegurarse de que los valores sean numéricos, positivos, o que los campos obligatorios no estén vacíos. Si se introduce un valor no válido, debe mostrar un mensaje y evitar que el formulario sea enviado.
Deshabilitar el Botón de Enviar
Estado del Botón de Enviar:

De forma predeterminada, el botón de envío del formulario debe estar deshabilitado.
El sistema debería revisar constantemente el estado de validación de todos los campos. Solo cuando todos los campos sean válidos el botón de envío se habilitará para que el usuario lo presione.
Interacción con el Usuario:

Si el usuario intenta presionar el botón de envío cuando el formulario no es válido (por ejemplo, hay campos vacíos o con errores), el botón debe permanecer deshabilitado.
Además, si el formulario es válido, el botón de envío debe estar claramente visible y habilitado, permitiendo al usuario completar el proceso.
Indicador Visual de Estado del Botón:

El botón de envío puede cambiar su estilo (por ejemplo, el color o el ícono) para reflejar que está deshabilitado cuando el formulario contiene errores.
Cuando el formulario es válido, el estilo del botón de envío debe cambiar, mostrando que ahora es interactivo (por ejemplo, con un color brillante o un cambio de sombra).

Gestión de Errores y Experiencia del Usuario
Mensajes de Error:

Los mensajes de error deben ser contextuales y estar ubicados cerca del campo correspondiente para que el usuario pueda identificar fácilmente qué está mal y cómo corregirlo.
Si el error es general (por ejemplo, un error de servidor al enviar el formulario), debe aparecer un mensaje en la parte superior del formulario, claro y comprensible.
Errores Globales:

Si el formulario tiene errores que afectan a varios campos o un error global (como un problema en el servidor), debe mostrarse un mensaje general para alertar al usuario de la situación.
Esto también debe prevenir que el formulario sea enviado hasta que se resuelvan los problemas.
Mensajes de Éxito:

Cuando el formulario se envíe correctamente, debe aparecer un mensaje de confirmación en la parte superior o inferior del formulario, indicando que la información fue procesada con éxito.
El formulario debe restablecerse o cerrarse automáticamente después de la confirmación, dependiendo de la acción esperada.

Flujo de Validación y Envío
Ingreso de Datos:

El usuario comienza a llenar el formulario y la validación se ejecuta en tiempo real.
Si se detectan errores en cualquier campo, estos se resaltan visualmente y el botón de enviar permanece deshabilitado.
Corrección de Errores:

El usuario corrige los errores, y los mensajes de error desaparecen conforme se resuelven los problemas en cada campo.
Envío del Formulario:

Una vez que todos los campos son válidos, el botón de enviar se habilita.
El usuario presiona el botón de enviar y, si el formulario es procesado correctamente, se muestra un mensaje de éxito.
Escenarios de Prueba
Validación en Tiempo Real:

Verificar que los errores de los campos se muestren correctamente y que se resalten los campos incorrectos.
Asegurarse de que los mensajes sean claros y precisos.
Habilitación del Botón de Enviar:

Comprobar que el botón de enviar permanezca deshabilitado hasta que todos los campos sean válidos.
Confirmar que el botón se habilite solo cuando el formulario esté completo y no haya errores.
Feedback Visual:

Asegurarse de que los campos se resalten visualmente según su estado (válido o no válido).
Verificar que el botón de envío cambie su apariencia cuando se habilita o deshabilita.
Manejo de Errores Globales:

Confirmar que los mensajes de error globales aparezcan correctamente y prevengan el envío del formulario en caso de errores generales (por ejemplo, errores del servidor).


