# Gato
Juego de gato implementado en React-Native

Tic tac toe - App Native
Preámbulo
En este proyecto vamos a construir un simple videojuego de 3 en raya, también conocido como Gato o tic tac toe en inglés, para celulares y tabletas.

Para construir el juego vamos a usar React Native, Vue Native, NativeScript ó cualquier herramienta que sea de tu elección que nos permita construir aplicaciones nativas ( NO híbridas) que se puedan instalar y ejecutar en dispositivos Android e iOS, y todo ello usando JavaScript y La herramienta que elijas para componer nuestra interfaz.

Nuestro público objetivo en este caso son niños en edad pre-escolar, así que el juego debe ser simple, intuitivo, con botones grandes, poco o nada de texto, ...

Introducción
Como desarrolladores web, sabemos que podemos contruir PWAs (Progressive Web Apps) dirigidas a todo tipo de dispositivos, incluyendo celulares y tabletas, pero hay ciertas situaciones donde podemos preferir una app nativa, como cuando necesitamos acceso al hardware del dispositivo, UI nativa, código nativo (Java, Objective C, ...) o que se pueda instalar a través de un App Store o Google Play.

Exisen muchas herramientas y plataformas para construir aplicaciones para dispositivos móviles, con soluciones que van desde PWA, hasta 100% nativo, pasando por soluciones híbridas (como Phonegap). A diferencia de las soluciones híbridas, que han sido populares con desarrolladores web en el pasado, React Native nos permite construir aplicaciones realmente nativas, pero usando JavaScript y la herramienta elegida. Esto significa mejor performance y acceso directo al sistema en vez de estar confinado a una vista web.

Objetivos
El objetivo principal de aprendizaje es tener una primera experiencia en desarrollo de aplicaciones NATIVAS.

En este proyecto tendrás que construir una aplicación Nativa y Expo, y así publicarla en tu cuenta de Expo, para que se pueda instalar en cualquier dispositivo Android o iOS.

Para completar el proyecto tendrás que familiarizarte con conceptos como View, Text o TouchableOpacity, además del flujo de desarrollo propio de apps nativas.

Consideraciones generales
La lógica del proyecto debe estar implementada completamente en JavaScript (ES6) y la librería o framework que sea de tu elección.

Este proyecto no incluye un boilerplate per se. En vez de un boilerplate te ofrecemos una serie de instrucciones (ver sección "Primeros pasos" más abajo) para que inicialices tu proyecto desde cero.

Parte obligatoria
UI
Una imagen vale más que mil palabras:

tictactoe

La interfaz debe permitir jugar el juego de 3 en raya como se muestra en la animación de arriba. Eso sí, a nivel de estilos (colores, tipografía, ...) tienes total libertad de proponer lo que consideres.

Hacker edition
Grilla (grid) configurable (3x3, 4x4, ...)
Entrega
Como entregables, al final del proyeto debes presentar:

Link a repositorio en GitHub con tu código fuente
Link a tu aplicación desplegada en tu perfil en el website de Expo.
Evaluación
Te aconsejamos revisar la rúbrica para ver la descripción detallada de cada habilidad y cada nivel.

Tech
Habilidad	Nivel esperado
JavaScript	
Estilo	5
Nomenclatura/semántica	3
Funciones/modularidad	3
Estructuras de datos	2
Tests	4
SCM	
Git	3
GitHub	3
CS	
Lógica	3
Arquitectura	3
Primeros pasos
Dependencias
Expo
La manera más fácil de empezar un nuevo proyecto de React Native es usando Expo, que es un conjunto de herramientas, librerįas y servicios que nos permiten construir aplicaciones Android e iOS nativas escribiendo JavaScript.

Instalemos la herramienta de línea de comando de expo:

# Instala la herramienta de línea de comando `expo` de forma global.
npm install -g expo-cli
Una vez insalada, deberías poder ejecutar el comando expo en tu terminal:

$ expo -V
2.2.0
Emulador / Dispositivo
En este proyecto, al tratarse de una aplicación nativa, no podemos ver nuestra aplicación en el navegador, sino que necesitamos un dispositivo real o un emulador de Android y/o iOS.

Expo App en dispositivos reales
Para ejecutar la aplicación en dispositivos reales tendrás que instalar la app de Expo (disponible en Google Play y Apple App Store).

Expo App en emuladores
Para ejecutar la aplicación en un emulador, te recomendamos instalar las herramientas para desarrolladores de Android y/o iOS (ambas incluyen el emulador correspondiente).

Android Studio
Xcode
Inicializar proyecto
Ahora que ya tenemos todas las herramientas listas, haz un fork de este repositorio y clónalo en tu computadora. Dentro de la carpeta del proyecto ejecutamos el siguiente comando para inicializar nuestro proyecto con Expo:

# inicializa proyecto con expo en directorio actual
expo init ./
Al invocar este comando, nos preguntará que plantilla (template) queremos usar. Elige blank.

? Choose a template: (Use arrow keys)
❯ blank
  The Blank project template includes the minimum dependencies to run and an empty root component.
  tabs
  The Tab Navigation project template includes several example screens.
Esto creará una serie de archivos y carpetas, incluyendo un archivo package.json, así como un app.json , nuestro componente principal App.js y otros archivos de configuración y dependencias. La carpeta del proyecto debería contener los siguientes archivos:

$ tree . -L 1 -a
.
├── App.js
├── app.json
├── assets
├── .babelrc
├── .git
├── .gitignore
├── node_modules
├── package.json
├── README.md
└── .watchmanconfig

3 directories, 6 files
Si abrimos el archivo App.js, veremos que éste exporta un componente de React. Este componente es el punto de partida de nuestra aplicación. La mayor diferencia con React para la web, es que en React Native veremos que no hay DOM, sino que usamos componentes que usan APIs nativas propias de dispositivos móviles, como View, Text o TouchableOpacity y los estilos los vamos a manejar con una utilidad llamada StyleSheet que es parte de React Native. De esta forma, podemos usar los mismos patrones de diseño que usaríamos en cualquier otra interfaz contruida con React.

En este archivo podríamos importar otros componetes que implementemos así como cualquier otro módulo de JavaScript.

Ejecutar aplicación en modo de desarrollo
Llegado a este punto ya estamos listos para ver nuestra aplicación en un dispositivo (real o emulado). Para ello, expo nos ofrece un comando que arrancará la aplicación y automáticamente la reconstruirá cada vez que hagamos cambios (hot reloading).

expo start
Al ejecutar el comando anterior deberías ver algo como esto:

screenshot from 2018-10-15 18-34-34

Si has instalado la aplicación cliente de Expo en tu dispositivo, puedes escanear el código QR para abrir la app, o alternativamente, si has instalado un emulador, puedes también abrir la app en dicho emulador (ver las opciones que nos muestra debjo del código de barras).

El comando expo start también debería abrir una pestaña en tu navegador apuntando a http://localhost:19002/. En esta página podrás ver una interfaz parecida a la que vimos en la línea de comando, pero esta vez en versión gráfica, como una página web.

screenshot from 2018-10-15 18-38-31

Despliegue
Como paso final, para publicar tu aplicación en la plataforma de Expo puedes usar la interfaz mostrada en el paso enterior (hay un link que dice Publish or republish project...) o a través de la línea de comando:

expo publish
Tips / Pistas
React Native
Vue Native
Ionic
Expo
Desarrollo Más Fácil React Native con Expo - Evato Tuts+
Android Studio
Android Emulator
Xcode
Checklist
UI
 Muestra grilla (grid) de 3x3
 Muestra jugador al que le toca su turno
 Permite marcar cajita vacía
 Cambia el turno después de marcar cajita
 No permite marcar cajita ya marcada
 Permite reiniciar la partida
 Detecta jugadas ganadoras en eje x
 Detecta jugadas ganadoras en eje y
 Detecta jugadas ganadoras en diagonales
 Muestra jugador ganador cuando gana
 Muestra jugada ganadora cuando hay ganador
 Muestra empate cuando nadie gana y no quedan cajitas que marcar
 Permire volver a empezar cuando termina una partida (alguien ganó o empate)
