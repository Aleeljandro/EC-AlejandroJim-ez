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

![Cambio de color](/T1/SPRINT_3/Ejercicio_3/ejercicio3.gif)
Prueba 1: Visualización de Miembros.


![Cambio de color](/T1/SPRINT_3/Ejercicio_3/ejercicio3_1.gif)
Prueba 2: Añadir Nuevo Miembro.


![Cambio de color](/T1/SPRINT_3/Ejercicio_3/ejercicio3_2.gif)
Prueba 3: Valoraciones erróneas de Añadir Miembro.


![Cambio de color](/T1/SPRINT_3/Ejercicio_3/ejercicio3_3.gif)
Prueba 4: Editar Miembro.


![Cambio de color](/T1/SPRINT_3/Ejercicio_3/ejercicio3_4.gif)
Prueba 5: Eliminar Miembro.


![Cambio de color](/T1/SPRINT_3/Ejercicio_3/ejercicio3_5.gif)
Prueba 6: Comportamiento del Modal.



