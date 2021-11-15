/*
Crear una buena arquitectura.

Primero va una carpeta en donde se encapsula la lógica de negocio como una api usando redux (application).
Esta tiene las carpetas:
    - actions (acciones que serán capturadas por los reducers y disparadas por el dispatch)
    - middlewares (con como reducers pero estos se comunican con la api y disparan otras acciones)
    - reducers ()
    y un archivo llamado store en donde se exporta una funcion que recibe los servicios 
    para pasarselos a los middlewares y ta,bién recibe los reduces para crear la store

En una carpeta hermana va el código react para la interacción con el usuario (views).
    - En esta se hace uso de useDispatch para disparar acciones
    - Para acceder a los estados se hace uso de useSelector al que se le pasa un callback con el estado

En otra carpeta se guarda la conexion con la base de datos (infraestructure).
    - En esta se hacen las operaciones de bases de datos con funciones y se exporta un objeto

Finalmente un index.js para juntar todas estas capas usando 

COSAS POR ARREGLAR ANTES DE COMENZAR LA FASE 2.

1.- Mejorar la edición de informacion del usuario.  ✔
2.- Añadir el campo de edad.                        ✔
3.- Mejorar la api de manejo de usuarios            ✔
4.- Mejorar los estilos                             ✔
5.- Añadir boton de cambio de contraseña.           ✔
6.- Añadir mecanismos de verificacion de email.     ✔


//https://www.npmjs.com/package/react-tooltip

fase 2: 
    solicitudes de amistad ✔

fase 3:
    publicaciones.  ✔

fase 4:
    chat en tiempo real.

fase 5:
    crear grupos con amigos.

fase 6:
    responsive.


*/