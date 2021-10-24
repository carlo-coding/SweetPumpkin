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




*/