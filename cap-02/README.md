# TECNICAS DE DETECCION 
Cuando el navegador muestra una página web, construye un modelo de objetos del documento (DOM), que es una colección de objetos que representan los elementos HTML de la página. Cada elemento HTML (`<p>`, `<div>`, `<span>`) está representado en el DOM por un objeto único. Además, existen objetos globales como `window` y `document`, que no están vinculados a elementos específicos.

**Códigos:**
- `<p>`
- `<div>`
- `<span>`
- `window`
- `document`

Todos los objetos DOM comparten un conjunto de propiedades comunes, pero algunos tienen propiedades adicionales, especialmente en navegadores que admiten HTML5. Un vistazo al DOM puede indicar qué funciones son compatibles. Existen cuatro técnicas básicas para detectar la compatibilidad de un navegador con una función específica:

1. Comprobar si una propiedad existe en un objeto global como `window` o `navigator`. (Ejemplo: compatibilidad con geolocalización)
2. Crear un elemento y verificar si tiene una propiedad. (Ejemplo: compatibilidad con canvas)
3. Crear un elemento, comprobar si un método existe y verificar su valor de retorno. (Ejemplo: compatibilidad con formatos de vídeo)
4. Crear un elemento, asignar un valor a una propiedad y comprobar si retiene dicho valor. (Ejemplo: compatibilidad con tipos de `<input>`)

**Códigos:**
- `window`
- `navigator`
- `<entrada>`

**Modernizr**

Modernizr es una biblioteca JavaScript de código abierto bajo licencia MIT que detecta compatibilidad con varias características de HTML5 y CSS3. Para usarla, se incluye en la parte superior de la página con una etiqueta `<script>`. Al ejecutarse, crea un objeto global llamado `Modernizr` que contiene propiedades booleanas para cada característica que puede detectar (como `Modernizr.canvas`), permitiendo verificar si una característica es compatible. Dependiendo de esta verificación, se pueden ejecutar distintas acciones.

**Códigos**
- `<script>`
- `<!DOCTYPE html>`
- `<html>`
- `<head>`
- `<meta charset="utf-8">`
- `<title>`
- `<body>`
- `Modernizr`
- `Modernizr.canvas`
- `true`
- `false`
- `if (Modernizr.canvas)`




HTML5 introduce el elemento `<canvas>`, que actúa como un lienzo de mapa de bits en el que se pueden representar gráficos e imágenes mediante JavaScript. La API de lienzo proporciona funciones para dibujar formas, definir rutas y crear efectos visuales. Para verificar la compatibilidad con la API de lienzo, se utiliza una técnica de detección que comprueba si el objeto DOM de un elemento `<canvas>` tiene el método `getContext()`. Si existe, el navegador es compatible; si no, solo tendrá propiedades comunes.

Se presenta una función llamada `supports_canvas()` que crea un elemento `<canvas>` ficticio en memoria y verifica la existencia del método `getContext()`, retornando un valor booleano. Esta función detecta el soporte para varias características de la API de lienzo, pero no para bibliotecas de terceros como explorerCanvas. Alternativamente, se puede usar Modernizr para detectar la compatibilidad con la API de lienzo.

**Códigos:**
- `<canvas>`
- `getContext()`
- `function supports_canvas() { ... }`
- `return !!document.createElement('canvas').getContext;`
- `if (Modernizr.canvas) { ... }`


**LIENZO:**

Aunque un navegador pueda ser compatible con la API de lienzo, no necesariamente lo será con la API de texto de lienzo, ya que las funciones de texto se añadieron posteriormente a la API. Para comprobar la compatibilidad con la API de texto de lienzo, se utiliza una técnica de detección similar a la anterior. Si un navegador soporta la API de lienzo, el objeto DOM para un elemento `<canvas>` tendrá el método `getContext()`. 

Se presenta una función llamada `supports_canvas_text()`, que primero verifica si el navegador es compatible con la API de lienzo utilizando la función `supports_canvas()`. Luego, crea un elemento `<canvas>` ficticio y obtiene su contexto de dibujo. Finalmente, comprueba si el contexto tiene la función `fillText()`, que indica que la API de texto de lienzo está disponible. Alternativamente, se puede usar Modernizr para detectar la compatibilidad con la API de texto de lienzo.

**Códigos:**
- `<canvas>`
- `function supports_canvas_text() { ... }`
- `if (!supports_canvas()) { return false; }`
- `var dummy_canvas = document.createElement('canvas');`
- `var context = dummy_canvas.getContext('2d');`
- `return typeof context.fillText == 'function';`
- `if (Modernizr.canvastext) { ... }`


**VIDEO:**

HTML5 introduce el elemento `<video>` para incrustar videos en páginas web, lo cual antes requería complementos como Apple QuickTime o Adobe Flash. El elemento `<video>` puede utilizarse sin scripts de detección y permite especificar varios archivos de video; los navegadores que soportan HTML5 seleccionarán el formato compatible. Los navegadores que no lo admiten ignorarán el elemento, pero se pueden usar soluciones como "Video for Everybody!", que utiliza video HTML5 donde está disponible y recurre a QuickTime o Flash en navegadores más antiguos, todo sin JavaScript.

Para verificar si el navegador es compatible con video HTML5, se utiliza la técnica de detección #2. Si es compatible, el objeto DOM del elemento `<video>` tendrá el método `canPlayType()`. Se presenta la función `supports_video()` para comprobar esta compatibilidad. Alternativamente, se puede usar Modernizr para la detección.

**Códigos:**
- `<video>`
- `function supports_video() { return !!document.createElement('video').canPlayType; }`
- `if (Modernizr.video) { ... }`

**FORMATOS DE VIDEO:**

Los formatos de video son como lenguajes escritos; un navegador debe entender el "idioma" (códec) de un video para reproducirlo. Actualmente, no hay consenso entre los navegadores sobre un solo códec, aunque hay dos principales: uno de pago que es compatible con Safari y el iPhone, y otro gratuito que funciona en navegadores de código abierto como Chromium y Firefox. 

Para verificar la compatibilidad de un formato de video, se utiliza la técnica de detección #3. Si el navegador es compatible con video HTML5, el objeto DOM correspondiente tendrá el método `canPlayType()`. Se presenta la función `supports_h264_baseline_video()` para comprobar la compatibilidad con H.264 y la función `supports_ogg_theora_video()` para Ogg Theora. También se menciona la función `supports_webm_video()` para el códec WebM, que es de código abierto. Para evitar la implementación manual, se puede usar Modernizr para detectar la compatibilidad con diferentes formatos de video HTML5.

**Códigos:**
- `function supports_h264_baseline_video() { ... }`
- `function supports_ogg_theora_video() { ... }`
- `function supports_webm_video() { ... }`
- `if (Modernizr.video) { ... }`

**LOCAL**

El almacenamiento local de HTML5 permite que los sitios web almacenen grandes cantidades de información en la computadora del usuario y la recuperen posteriormente. A diferencia de las cookies, que tienen un tamaño limitado y son enviadas al servidor cada vez que se solicita una nueva página, el almacenamiento local permanece en el equipo y puede ser accedido por JavaScript tras la carga de la página.

Aunque el almacenamiento local es parte de HTML5, se separó en una especificación distinta debido a que la especificación principal era considerada demasiado extensa. Para comprobar la compatibilidad del almacenamiento local, se utiliza la técnica de detección #1. Si el navegador es compatible, existe una propiedad `localStorage` en el objeto global; de lo contrario, será indefinida. La función `supports_local_storage()` verifica esta compatibilidad y está envuelta en un bloque `try..catch` para manejar un error específico en versiones anteriores de Firefox.

Modernizr puede usarse para detectar la compatibilidad con el almacenamiento local, y es importante recordar que JavaScript es sensible a mayúsculas y minúsculas al referirse a las propiedades. En cuanto a la seguridad, cualquier persona con acceso físico a la computadora podría potencialmente ver o modificar la base de datos de almacenamiento local, aunque los sitios web solo pueden acceder a sus propios datos debido a la restricción del mismo origen.

**Códigos:**
- `function supports_local_storage() { ... }`
- `if (Modernizr.localstorage) { ... }`

**APLICACIONES WEB SIN CONEXION:**

Los **Trabajadores Web** permiten a los navegadores ejecutar JavaScript en segundo plano, generando "subprocesos" que pueden realizar tareas simultáneamente, como cálculos complejos o solicitudes de red, sin afectar la respuesta de la página principal a la interacción del usuario. Para verificar la compatibilidad de los trabajadores web, se utiliza la técnica de detección #1. Si el navegador soporta la API de Web Worker, habrá una propiedad `Worker` en el objeto global; si no, esta propiedad será indefinida. La función `supports_web_workers()` puede usarse para comprobar esta compatibilidad, y Modernizr puede facilitar esta detección.

**Código para los trabajadores web:**
```javascript
function supports_web_workers() {
  return !!window.Worker;
}

if (Modernizr.webworkers) {
  // window.Worker is available!
} else {
  // no native support for web workers :(
}
```

Por otro lado, las **aplicaciones web sin conexión** permiten el funcionamiento de aplicaciones web como Gmail o Google Docs sin conexión a Internet. Al visitar un sitio habilitado para trabajar sin conexión, el servidor indica al navegador qué archivos se necesitan, que luego se descargan para su uso posterior. La verificación de compatibilidad para aplicaciones web sin conexión también se realiza mediante la técnica de detección #1, buscando la propiedad `applicationCache` en el objeto global.

**Código para comprobar soporte de aplicaciones web sin conexión:**
```javascript
function supports_offline() {
  return !!window.applicationCache;
}

if (Modernizr.applicationcache) {
  // window.applicationCache is available!
} else {
  // no native support for offline :(
}
```

Es importante recordar que JavaScript es sensible a mayúsculas y minúsculas al referirse a las propiedades de Modernizr y al objeto DOM.

**GEOLOCALIZACION**

La **geolocalización** permite determinar tu ubicación mediante diversos métodos como la dirección IP, la red Wi-Fi, las torres de telefonía móvil o un GPS. Aunque no es parte directa de HTML5, su implementación en los navegadores se está desarrollando junto con otras funciones de HTML5.

Para comprobar si tu navegador soporta la **API de geolocalización**, se utiliza la técnica de detección #1. Si el navegador es compatible, tendrá una propiedad `geolocation` en el objeto global `navigator`. Si no lo es, esta propiedad será indefinida.

**Código para comprobar la compatibilidad con geolocalización:**
```javascript
function supports_geolocation() {
  return !!navigator.geolocation;
}

if (Modernizr.geolocation) {
  // let's find out where you are!
} else {
  // no native geolocation support available :(
}
```

Si un navegador no soporta geolocalización nativa, se pueden usar complementos como **Google Gears**, que ofrece soporte en navegadores más antiguos. Además, hay APIs de geolocalización específicas para dispositivos móviles más antiguos como BlackBerry, Nokia y Palm.

**TIPOS DE ENTRADA**

HTML5 ha introducido más de una docena de nuevos **tipos de entrada** para mejorar la experiencia de los formularios web, facilitando la captura de información más específica. Algunos de los nuevos tipos de entrada incluyen:

- `<input type="search">`: cuadro de búsqueda.
- `<input type="number">`: caja de números.
- `<input type="range">`: controles deslizantes.
- `<input type="color">`: selector de color.
- `<input type="tel">`: números de teléfono.
- `<input type="url">`: direcciones web.
- `<input type="email">`: correos electrónicos.
- `<input type="date">`: selector de fecha del calendario.
- `<input type="month">`, `<input type="week">`, `<input type="time">`, `<input type="datetime">`, `<input type="datetime-local">`: para seleccionar meses, semanas, tiempos y fechas con horas.

Para **comprobar la compatibilidad** con estos nuevos tipos de entrada, se utiliza un enfoque basado en la creación de un elemento ficticio `<input>` en memoria. Si el navegador admite el tipo de entrada, la propiedad `type` reflejará el valor asignado; de lo contrario, conservará el valor predeterminado "text".

**Ejemplo de detección de compatibilidad de tipo de entrada:**
```javascript
var i = document.createElement("input");
i.setAttribute("type", "color");
return i.type !== "text";
```

En lugar de verificar cada tipo manualmente, puedes utilizar **Modernizr**, que detecta todos los nuevos tipos de entrada y genera un objeto con claves booleanas indicando si son compatibles.

**Ejemplo de detección con Modernizr:**
```javascript
if (!Modernizr.inputtypes.date) {
  // No native support for <input type="date">
  // Maybe use a library like Dojo or jQueryUI
}
```

**TEXTO DE MARCADOR DE POSICION**

El **texto de marcador de posición** es una mejora en HTML5 que permite mostrar texto temporal dentro de un campo de entrada vacío hasta que el usuario interactúa con él. Este texto desaparece cuando el campo recibe el foco (cuando el usuario hace clic o usa tabulación para entrar en él).

Para comprobar si un navegador **soporta el texto de marcador de posición**, se puede crear un elemento `<input>` ficticio en la memoria y verificar si tiene la propiedad `placeholder`. Si el navegador es compatible, dicha propiedad existirá.

**Ejemplo de comprobación de compatibilidad:**
```javascript
function supports_input_placeholder() {
  var i = document.createElement('input');
  return 'placeholder' in i;
}
```

Para simplificar la detección de compatibilidad, puedes usar **Modernizr**, que también permite saber si el navegador admite o no esta característica.

**Ejemplo con Modernizr:**
```javascript
if (Modernizr.input.placeholder) {
  // El texto de marcador de posición ya debería ser visible.
} else {
  // No hay soporte para el marcador de posición.
  // Implementa una solución alternativa con JavaScript.
}
```

**enfoque automático de formularios**

El **enfoque automático de formularios** es una característica que permite que los sitios web muevan automáticamente el foco al primer campo de entrada de un formulario sin que el usuario tenga que hacer clic en él. Esto es útil, pero puede ser molesto para usuarios avanzados o con necesidades especiales, ya que podría interferir con la navegación de la página.

**HTML5** introduce el atributo `autofocus`, que permite asignar el foco a un campo de forma consistente y sin la necesidad de JavaScript. Además, los navegadores o extensiones podrían ofrecer una opción para deshabilitar este comportamiento si es necesario.

Para comprobar si el navegador es compatible con el enfoque automático, se puede crear un elemento `<input>` y verificar si tiene la propiedad `autofocus`:

**Ejemplo de detección:**
```javascript
function supports_input_autofocus() {
  var i = document.createElement('input');
  return 'autofocus' in i;
}
```

También se puede usar **Modernizr** para comprobar de forma sencilla si un navegador admite el atributo `autofocus`:

**Ejemplo con Modernizr:**
```javascript
if (Modernizr.input.autofocus) {
  // ¡El enfoque automático funciona!
} else {
  // No hay soporte para el enfoque automático.
  // Implementa una solución alternativa con JavaScript.
}
```

**MICRODATOS**

Los **microdatos** son una forma estandarizada en HTML5 para añadir semántica adicional a las páginas web, permitiendo que motores de búsqueda, navegadores y extensiones interpreten mejor el contenido. Un ejemplo es utilizar microdatos para especificar que una imagen tiene una licencia Creative Commons o para marcar una página "Acerca de mí". Los microdatos pueden ser convertidos en formatos estándar como **vCard** para compartir información de contacto.

El marcado de microdatos es simplemente la adición de atributos en el HTML, que no afectarán a navegadores o motores de búsqueda que no los entienden, ya que simplemente los ignorarán.

Sin embargo, si necesitas manipular microdatos desde el DOM, se debe verificar si el navegador es compatible con la **API de microdatos**. Para ello, puedes usar una función de detección que comprueba si el método `getItems()` está presente en el objeto `document`:

**Ejemplo de detección:**
```javascript
function supports_microdata_api() {
  return !!document.getItems;
}
```

A diferencia de otras características de HTML5, **Modernizr** aún no incluye la detección de microdatos, por lo que es necesario implementar manualmente la comprobación de compatibilidad con la API del DOM.

**HISTORIAL**

La **API de historial** de HTML5 permite manipular el historial del navegador mediante scripts. Aunque la navegación por el historial ya estaba disponible en versiones anteriores, HTML5 introduce la capacidad de **agregar entradas al historial** del navegador sin recargar la página. Esto es útil en aplicaciones web con mucho scripting, ya que permite actualizar la URL sin cambiar de página, manteniendo la URL como identificador único del recurso actual.

La API permite gestionar cambios de URL y responder a la navegación del usuario, como cuando se presiona el botón "Atrás" del navegador.

Para verificar la compatibilidad con la API de historial, se puede usar la siguiente función:

```javascript
function supports_history_api() {
  return !!(window.history && history.pushState);
}
```

Además, **Modernizr** (desde la versión 1.6) puede detectar esta compatibilidad de manera automática. Si el navegador no soporta la API, se puede recurrir a soluciones alternativas como **History.js**.
