# Netflix Old Ruben Viosquez Beades

Este proyecto es un proyecto sobre alquiler de peliculas del antiguo netflix. A continuación explicare los pasos para poder probar y ejecutar a aplicacion y probarla.

## Descargar repositorio

Lo primero que hay que hacer es decargar el repositorio y abrirlo con un editor de codigo, por ejempo Visual Studio Code.

## Ejecutar la aplicacion

Para ejecutar la aplicacion. Hay que usar tambien el repositio de BackEnd, a que esta puesto para que desde el proyecto raiz donde se deberia de encontrar los dos, con solo ejecutar el comando: npm start, se ejectarian los dos a la vez, se lanzarian los dos puertos, 3000 para el back y 4200 para en front.

## Pasos para poder ver los datos

1.- Desde robo crear una base de datos con el mimso que la aplicacion, e ir creado colecciones segun se vaya necesitando y con los esquemas de los modelos que hemos creado en el back.

2.- Se puede probar los endpoints desde el postman para ver si realmente lo esta leyendo de la base de datos.

3.- Una vez creada las colecciones en la base de datos de mongoDB (robo), y añadido algunos datos respectando las restrigciones de la aplicacion, ya podemos probar el front navegando por la aplicacion y probandola.

## Crear Usuario, pedido, ..., desde el front

Para probar el la creacion de datos desde el front. Podemos proceder a registrar un usuario para despues acceder a su perfil.
Tambien se puede intentar crear un pedido, pero para ello, primero hay que iniciar sesion con el usuario registrado ya que si no se inicia la sesion, los botones para filtrar peliculas, y en este caso alguilar una de ellas, no estaria visible.

Una vez estamos iniciados, vamos a una pelicula e intentamos realizar un pedido

Una vez realizado el pedido, volvemos al perfil, al apartado ver pedidos, y ahi apareceran los pedidos realizados por ese Usuario.
