<h1 style="text-align: center; color: #009DFF;" style="border-bottom: 4px solid #c82828;"> Mapa Delictivo </h1>

### Autores :

- Ernesto Guadalupe Rincón Ortiz 1903481 
- Jair Azael Sánchez Tovar 1918174
- Rafael Barboza Garza 1897498
- Jesús Alexandro Hernández Rivera 1844441
- Aldo Iván Garza González 1913690
- Gerardo Emmanuel Cedillo Montemayor 1894573
- Moises Ivan Davila Garza 1901532


### Requisitos para correr la Aplicación :

-  [Android Studio](https://developer.android.com/studio "Android Studio")
-  [Ionic](https://ionicframework.com/docs/intro/cli "Ionic")
-  [Angular](https://angular.io/guide/setup-local "Angular")
- [Node JS](https://nodejs.org/es/download/ "Node JS")


### Instrucciones para utilizar la aplicación:

Se debe descargar la carpeta de la aplicación desde GitHub, para eso, simplemente se le da clic en recuadro verde que dice “Code” y darle clic en “ descargar ZIP”.

Si se desea ejecutar la aplicación desde un navegador web en una computadora, se deben de escribir algunos comandos desde la terminal de su preferencia en la carpeta raíz del proyecto, los cuales son:

`npm install`

`ionic serve`

De esa forma comenzará a ejecutarse la aplicación, permitiendo abrirse en su navegador predeterminado y así poder empezar a usar la aplicación.

### Deploy

En cambio, si se desea correr la aplicación desde un dispositivo móvil o desde un emulador de android en un computador instalaremos Android Studio.

Si deseas ejecutarlo en tu dispositivo físico tendrás que habilitar el modo desarrollador en tu dispositivo y correr la app desde un IDE como Android Studio o también se puede ejecutar un emulador desde ahí mismo. Sólo tienes que seguir los siguientes pasos:

  
  
  

**Descarga de IDE**

1. Abre Android Studio y da click en AVD Manager

2. Da click en Create Virtual Device

3. Selecciona el dispositivo que desees emular

4. Selecciona y descarga la versión de android que quieras emular

  

Para la aplicación en iOS se requiere una mac y tener instalado XCode. Para hacer los complicados nativos utilizaremos Capacitor, dentro de Node.js command prompt en la carpeta raíz de tu proyecto ejecuta estos comandos:

  

Android:

`ng build`

`ionic capacitor add android`

`ionic capacitor run android`

  

iOS

`ng build`

`ionic capacitor add ios`

`ionic capacitor run ios`

### ¿Cómo se utiliza la aplicación?

Principalmente, se debe registrar el usuario ingresando su correo electrónico, una contraseña y una imagen de perfil, en cuanto a los primeros datos, se necesitarán cada vez que se deseé ingresar a la aplicación.

- Una vez dentro de la aplicación, encontrará tres pestañas, en la primera, se visualizará el mapa delictivo, en el cual los puntos verdes se refieren a ubicaciones en las cuales personas han sido asaltadas o afectadas por la inseguridad, en el caso de que se junten muchos avistamientos el punto se tornará en color de rojo. En el caso de que el usuario se vea en una situación de peligro, encima del mapa deberá de llamar principalmente a emergencias, haciendo clic en el botón de emergencias que lo redireccionará directamente hacia el número dado. Y para denunciar el avistamiento, primero deberá ingresar la gravedad del avistamiento y se marcará el punto en el mapa.

- En la segunda encontrará información acerca de los autores de la aplicación.

- Y en la última, podrá ver información acerca de su cuenta y un botón para salir de la aplicación y volver a la pantalla de inicio de sesión.
