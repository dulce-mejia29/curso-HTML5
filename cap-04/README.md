**SUPERFICIE DE DIBUJO**

El elemento `<canvas>` en HTML5 es un lienzo de mapa de bits que permite dibujar gráficos, imágenes o juegos utilizando JavaScript. Es un área rectangular en la página que, por sí misma, no muestra contenido ni bordes visibles. Los navegadores modernos como Firefox, Safari, Chrome, Opera, y dispositivos móviles como iPhone y Android, lo soportan nativamente. En versiones antiguas de Internet Explorer (7 y 8), es necesario usar una biblioteca de terceros llamada "explorercanvas", mientras que IE9 ya ofrece soporte nativo.

**LIENZO INVISIBLE**

-EL MARCADO TIENE EL SIGUIENTE ASPECTO- 

**LIENZO CON BORDE**

Tiene más de un elemento en la misma página.Cada lienzo se mostrará en el DOM y cada lienzo mantiene su propio estado, puedes acceder a ellos como a cualquier elemento. 

`<canvas>`

para incluir un atributo:id

`<canvas id="a" width="300" height="225"></canvas>`

Despues de esto puedes encontrar facilmente el elemento en el DOM.`<canvas>`

var a_canvas = document.getElementById ("a");

**FORMAS SIMPLES**

Cada lienzo comienza en blanco 

la funcion seria :

function draw_b(){
    var b_canvas = document.getElementById("b");
    var b_context = b_canvas.getContext("2d");
    b_context.fillRect(50, 25, 150, 100);
}

Cada lienzo tiene un contexto de dibujo, que es donde suceden todas las cosas divertidas. Una vez que hayas encontrado un elemento en el DOM (mediante el uso de cualquier otro método que desees), llamas a su método. Debe pasar la cadena al método. <canvas>document.getElementById()getContext()"2d"getContext()

En el contexto de dibujo de `<canvas>`, se definen métodos y propiedades para dibujar figuras, especialmente rectángulos. Las propiedades como `fillStyle` y `strokeStyle` determinan el color, patrón o degradado del relleno o borde. `fillRect(x, y, width, height)` dibuja un rectángulo relleno, mientras que `strokeRect(x, y, width, height)` dibuja solo el borde. La propiedad `clearRect(x, y, width, height)` borra el área de un rectángulo específico, eliminando los píxeles dentro de él. Estas propiedades se mantienen mientras la página esté abierta, a menos que se restablezcan.

# COORDENADAS DEL LIENZO 
El lienzo es una cuadrícula bidimensional. La coordenada (0, 0) se encuentra en la esquina superior izquierda del lienzo. A lo largo del eje X, los valores aumentan hacia el borde derecho del lienzo. A lo largo del eje Y, los valores aumentan hacia el borde inferior del lienzo.
Ese diagrama de coordenadas se dibujó con un elemento. Comprende <canvas>

1. Un conjunto de líneas verticales blanquecinas
2. Un conjunto de líneas horizontales de color blanquecino
3. Dos líneas horizontales negras
4. dos pequeñas líneas diagonales negras que forman una flecha
5. Dos líneas verticales negras
dos pequeñas líneas diagonales negras que forman otra flecha
6. La letra "X"
7. La letra "Y"
8. el texto "(0, 0)" cerca de la esquina superior izquierda
9. el texto "(500, 375)" cerca de la esquina inferior derecha
10. un punto en la esquina superior izquierda y otro en la esquina inferior derecha

Primero, necesitamos definir el elemento en sí. El elemento define el y , y el para que podamos encontrarlo más tarde. `<canvas><canvas>`widthheightid
`<canvas id="c" width="500" height="375"></canvas>`
Luego necesitamos un script para encontrar el elemento en el DOM y obtener su contexto de dibujo. `<canvas>`

var c_canvas = document.getElementById("c");
var context = c_canvas.getContext("2d");
Ahora podemos empezar a dibujar líneas.

Cuanto más llames y , más grande será el camino. Estos son métodos de "lápiz": puedes llamarlos tantas veces como quieras, pero no verás nada en el lienzo hasta que llames a uno de los métodos de "tinta". moveTo()lineTo()

Comencemos dibujando la cuadrícula en blanco roto.

for (var x = 0.5; x < 500; x += 10) {
  context.moveTo(x, 0);
  context.lineTo(x, 375);
}

**Dibujar líneas verticales**

for (var y = 0.5; y < 375; y += 10) {
  context.moveTo(0, y);
  context.lineTo(500, y);
}
**Dibujar líneas horizontales**

Todos esos eran métodos de "lápiz". Todavía no se ha dibujado nada en el lienzo. Necesitamos un método de "tinta" para que sea permanente.

context.strokeStyle = "#eee";
context.stroke();
stroke() es uno de los métodos de "tinta". Toma el camino complejo que definiste con todas esas llamadas, y realmente lo dibuja en el lienzo. Controla el color de las líneas. Este es el resultado:moveTo()lineTo()strokeStyle
    
**Un nuevo camino**

context.beginPath();
context.moveTo(0, 40);
context.lineTo(240, 40);
context.moveTo(260, 40);
context.lineTo(500, 40);
context.moveTo(495, 35);
context.lineTo(500, 40);
context.lineTo(495, 45);

La flecha vertical tiene un aspecto muy similar. Dado que la flecha vertical es del mismo color que la flecha horizontal, no necesitamos comenzar otro nuevo camino. Las dos flechas formarán parte del mismo camino.

**No es un camino nuevo**

context.moveTo(60, 0);
context.lineTo(60, 153);
context.moveTo(60, 173);
context.lineTo(60, 375);
context.moveTo(65, 370);
context.lineTo(60, 375);
context.lineTo(55, 370);

Dije que estas flechas iban a ser negras, pero sigue siendo de color blanquecino. (El y no se restablece cuando se inicia una nueva ruta). No pasa nada, porque acabamos de ejecutar una serie de métodos de "lápiz". Pero antes de dibujarlo de verdad, en "tinta", tenemos que ponerlo en negro. De lo contrario, estas dos flechas serán blanquecinas y apenas podremos verlas. Las siguientes líneas cambian el color a negro y dibujan las líneas en el lienzo: strokeStylefillStylestrokeStylestrokeStyle

context.strokeStyle = "#000";
context.stroke();

# MENSAJE DE TEXTO 

Al dibujar texto en un lienzo, a diferencia del texto en una página web, no se cuenta con el modelo de caja ni las propiedades de diseño de CSS como márgenes o ajuste de palabras. Puedes establecer algunos atributos para la fuente, elegir un punto y dibujar el texto allí.

Los atributos de fuente incluyen:
- **font**: similar a CSS, admite estilo, variante, peso, tamaño de fuente, altura de línea y familia.
- **textAlign**: controla la alineación del texto (valores: start, end, left, right, center).
- **textBaseline**: define la posición del texto en relación con el punto de inicio, con opciones como top, hanging, middle, alphabetic, ideographic y bottom. Estas opciones permiten alinear el texto según diversas líneas de base, que dependen de las características específicas de los caracteres Unicode y su idioma.

**CAMBIAR EL ESTILO DE FUENTE**

`context.font = "bold 12px sans-serif";`
`context.fillText("x", 248, 43);`
`context.fillText("y", 58, 165);`

El método dibuja el texto real.fillText()

`context.font = "bold 12px sans-serif";`
`context.fillText("x", 248, 43);`
`context.fillText("y", 58, 165);`

Para posicionar texto en un lienzo sin calcular su ancho o altura:

1. **Esquina superior izquierda**: Si deseas que la parte superior del texto esté en una coordenada específica, puedes configurar `textBaseline` en `"top"` y luego usar las coordenadas como el borde superior izquierdo del texto.

   ```javascript
   context.textBaseline = "top";
   context.fillText("( 0 , 0 )", 8, 5);
   ```

2. **Esquina inferior derecha**: Para que el texto se alinee en la esquina inferior derecha sin calcular el ancho o la altura, establece `textAlign` en `"right"` y `textBaseline` en `"bottom"`. Luego, usa las coordenadas de la esquina inferior derecha del texto.

   ```javascript
   context.textAlign = "right";
   context.textBaseline = "bottom";
   context.fillText("( 500 , 375 )", 492, 370);
   ```

   # GRADIENTES

   Anteriormente en este capítulo, aprendió a dibujar un rectángulo relleno con un color sólido y, a continuación, una línea trazada con un color sólido. Pero las formas y las líneas no se limitan a los colores sólidos. Puedes hacer todo tipo de magia con degradados. Veamos un ejemplo.

Para aplicar un degradado en un lienzo HTML:

1. **Definir el lienzo**:
   ```html
   <canvas id="d" width="300" height="225"></canvas>
   ```

2. **Obtener el contexto de dibujo**:
   ```javascript
   var d_canvas = document.getElementById("d");
   var context = d_canvas.getContext("2d");
   ```

3. **Crear un degradado lineal**:
   Utiliza `createLinearGradient(x0, y0, x1, y1)`, donde `(x0, y0)` es el inicio y `(x1, y1)` es el final. En este caso, se crea un degradado de 300 píxeles de ancho de izquierda a derecha.

   ```javascript
   var my_gradient = context.createLinearGradient(0, 0, 300, 0);
   ```

4. **Definir los colores del degradado**:
   Añade las paradas de color. Aquí el degradado va de negro (posición `0`) a blanco (posición `1`).

   ```javascript
   my_gradient.addColorStop(0, "black");
   my_gradient.addColorStop(1, "white");
   ```

5. **Aplicar y dibujar el degradado**:
   Usa el degradado como `fillStyle` y luego dibuja un rectángulo que cubra el área del lienzo.

   ```javascript
   context.fillStyle = my_gradient;
   context.fillRect(0, 0, 300, 225);
   ```

Esto genera un fondo de degradado suave de negro a blanco de izquierda a derecha.

## IMAGENES 

Para dibujar una imagen en un lienzo HTML, el método `drawImage()` permite especificar varias opciones de posición, escala y recorte:

1. **Dibujar una imagen en una posición específica**:
   ```javascript
   drawImage(image, dx, dy);
   ```
   - **image**: la imagen que se va a dibujar.
   - **dx, dy**: coordenadas en el lienzo donde se colocará la esquina superior izquierda de la imagen (por ejemplo, `(0, 0)` la dibuja en la esquina superior izquierda del lienzo).

2. **Escalar y dibujar la imagen**:
   ```javascript
   drawImage(image, dx, dy, dw, dh);
   ```
   - **dw, dh**: dimensiones de la imagen en el lienzo, lo que permite escalarla a ese ancho y alto antes de dibujarla.

3. **Recortar, escalar y dibujar una sección de la imagen**:
   ```javascript
   drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
   ```
   - **sx, sy, sw, sh**: definen un rectángulo de origen en la imagen de partida, donde `(sx, sy)` es la esquina superior izquierda y `sw`, `sh` son el ancho y el alto del recorte.
   - **dx, dy, dw, dh**: posición y dimensiones de la imagen en el lienzo, lo que permite colocar el recorte y escalarlo en el lienzo.

### Resumen de Rectángulos
- **Rectángulo de origen**: Se selecciona dentro de la imagen original en `(sx, sy)` con dimensiones `(sw, sh)`.
- **Rectángulo de destino**: Define dónde y cómo se dibujará en el lienzo en `(dx, dy)` con dimensiones `(dw, dh)`. 

Esta flexibilidad permite ajustar la imagen al tamaño y posición que necesites en el lienzo.

Para dibujar una imagen en un lienzo, puedes usar una imagen existente en HTML o crear una en JavaScript. En ambos casos, debes asegurarte de que la imagen esté completamente cargada antes de dibujarla.

### Usando un elemento `<img>` existente
Si tienes una imagen en HTML, puedes dibujarla en el lienzo cuando la ventana termine de cargarse usando el evento `window.onload`.

```html
<img id="cat" src="images/cat.png" alt="sleeping cat" width="177" height="113">
<canvas id="e" width="177" height="113"></canvas>
<script>
window.onload = function() {
  var canvas = document.getElementById("e");
  var context = canvas.getContext("2d");
  var cat = document.getElementById("cat");
  context.drawImage(cat, 0, 0);
};
</script>
```

### Creando la imagen en JavaScript
Si quieres crear la imagen usando JavaScript, utiliza el objeto `Image()` y carga la imagen. Dibuja la imagen en el lienzo cuando esté completamente cargada usando `Image.onload`.

```html
<canvas id="e" width="177" height="113"></canvas>
<script>
  var canvas = document.getElementById("e");
  var context = canvas.getContext("2d");
  var cat = new Image();
  cat.src = "images/cat.png";
  cat.onload = function() {
    context.drawImage(cat, 0, 0);
  };
</script>
```

### Escalado de la imagen
El método `drawImage()` permite escalar la imagen. Los parámetros opcionales de ancho y alto (tercer y cuarto) controlan el escalado. Así puedes dibujar la imagen a la mitad de su tamaño:

```javascript
context.drawImage(cat, 0, 0, cat.width / 2, cat.height / 2);
```

Esto permite dibujar la imagen con un tamaño ajustado dentro del lienzo.

Este script crea un "efecto multicat", dibujando múltiples imágenes de un gato escalado en diferentes posiciones dentro del lienzo.

### Código para el efecto "multicat"

```javascript
cat.onload = function() {
  for (var x = 0, y = 0; x < 500 && y < 375; x += 50, y += 37) {
    context.drawImage(cat, x, y, 88, 56);
  }
};
```

### Explicación
Este código dibuja la imagen del gato repetidamente en el lienzo. Cada vez que la imagen se dibuja, aumenta las coordenadas `x` y `y` para crear una cuadrícula, escalando cada imagen a 88x56 píxeles.

### ¿Por qué usar un lienzo en lugar de varios elementos `<img>`?
Aunque el efecto "multicat" podría replicarse con varios elementos `<img>`, el lienzo permite una mayor flexibilidad y control. Al usar `drawImage()`, puedes:
- Integrar imágenes en un diagrama que combine texto, formas y gráficos.
- Crear efectos complejos, como animaciones, mezclando imágenes con elementos interactivos.
  
En resumen, el lienzo permite combinar imágenes con otros elementos gráficos en una sola obra compleja.

### ¿Qué pasa con IE?

Las versiones anteriores de Internet Explorer (antes de la 9.0) no admiten la API de lienzo nativa. En cambio, Microsoft utilizaba VML, una tecnología que permitía gráficos básicos similares. Para facilitar el uso de la API de lienzo en estas versiones de IE, nació *excanvas.js*.

### ExplorerCanvas (excanvas.js)
ExplorerCanvas es una biblioteca de JavaScript de código abierto que implementa la API de lienzo en Internet Explorer 7 y 8. Para usarla, solo necesitas incluir el script en tu página HTML dentro de un comentario condicional para que solo se ejecute en esas versiones de IE:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Dive Into HTML5</title>
  <!--[if lt IE 9]>
    <script src="excanvas.js"></script>
  <![endif]-->
</head>
<body>
  ...
</body>
</html>
```

Este bloque asegura que solo IE7 e IE8 descarguen y ejecuten *excanvas.js*, mientras que otros navegadores lo ignoran, optimizando la carga.

### Consideraciones al usar ExplorerCanvas
- **Degradados**: Solo se admiten degradados lineales, no los radiales.
- **Patrones**: Los patrones deben repetirse en ambas direcciones.
- **Recorte y escalado**: No admite regiones de recorte, y la escala no uniforme no escala bien los trazos.
- **Rendimiento**: Puede ser lento en operaciones complejas, ya que la conversión de comandos a VML con JavaScript en IE es menos eficiente.

### Problemas y Solución de Sincronización
ExplorerCanvas inicializa automáticamente la interfaz de lienzo falso al cargar el script, pero IE podría no estar listo de inmediato para su uso, provocando un error como `"object doesn’t support this property or method"`. La solución recomendada es ejecutar cualquier manipulación de lienzo dentro del evento `window.onload`, asegurando que la página esté completamente cargada antes de interactuar con el lienzo.

El juego *Halma* presentado aquí es una versión en solitario en la que el objetivo es mover nueve piezas de una esquina a otra en un tablero de 9 × 9. Cada pieza comienza en una cuadrícula de 3 × 3 en la esquina inferior izquierda, y el jugador debe moverlas a una cuadrícula idéntica en la esquina superior derecha.

### Movimientos en Halma
- **Movimiento a una casilla adyacente**: Cada pieza puede moverse a una casilla vacía que esté en cualquier dirección inmediata (norte, sur, este, oeste, o en diagonal).
- **Salto**: Una pieza puede saltar sobre una adyacente y, si es posible, encadenar múltiples saltos en una sola jugada. La clave es formar secuencias de piezas escalonadas para permitir saltos largos.

### Código para el Juego
El juego utiliza un lienzo HTML (`<canvas>`) para el tablero. A continuación, se destacan algunos componentes clave del código.

#### Inicialización del Lienzo
Durante la carga de la página, se configuran las dimensiones y se obtiene el contexto de dibujo:
```javascript
gCanvasElement.width = kPixelWidth;
gCanvasElement.height = kPixelHeight;
gDrawingContext = gCanvasElement.getContext("2d");
```

Luego, se agrega un controlador de eventos para detectar clics:
```javascript
gCanvasElement.addEventListener("click", halmaOnClick, false);
```

#### Detección de Clics y Posición
La función `halmaOnClick()` maneja el clic del usuario, identificando la posición de la pieza o celda vacía donde se hizo clic:
```javascript
function halmaOnClick(e) {
    var cell = getCursorPosition(e);
    for (var i = 0; i < gNumPieces; i++) {
        if ((gPieces[i].row == cell.row) && (gPieces[i].column == cell.column)) {
            clickOnPiece(i);
            return;
        }
    }
    clickOnEmptyCell(cell);
}
```
La función `getCursorPosition()` convierte las coordenadas del clic en el documento en coordenadas del lienzo, ajustando los valores con `offsetLeft` y `offsetTop`.

#### Dibujo del Tablero y Piezas
Para redibujar el tablero, se utiliza `clearRect()` para borrar y actualizar el lienzo cada vez que hay un cambio:
```javascript
gDrawingContext.clearRect(0, 0, kPixelWidth, kPixelHeight);
```
Luego, se trazan las líneas del tablero:
```javascript
for (var x = 0; x <= kPixelWidth; x += kPieceWidth) {
    gDrawingContext.moveTo(0.5 + x, 0);
    gDrawingContext.lineTo(0.5 + x, kPixelHeight);
}
// Líneas horizontales
for (var y = 0; y <= kPixelHeight; y += kPieceHeight) {
    gDrawingContext.moveTo(0, 0.5 + y);
    gDrawingContext.lineTo(kPixelWidth, 0.5 +  y);
}
gDrawingContext.strokeStyle = "#ccc";
gDrawingContext.stroke();
```

#### Dibujo de las Piezas
Para dibujar cada pieza como un círculo:
```javascript
function drawPiece(p, selected) {
    var x = (p.column * kPieceWidth) + (kPieceWidth / 2);
    var y = (p.row * kPieceHeight) + (kPieceHeight / 2);
    var radius = (kPieceWidth / 2) - (kPieceWidth / 10);
    
    gDrawingContext.beginPath();
    gDrawingContext.arc(x, y, radius, 0, Math.PI * 2, false);
    gDrawingContext.closePath();
    gDrawingContext.strokeStyle = "#000";
    gDrawingContext.stroke();
    
    if (selected) {
        gDrawingContext.fillStyle = "#000";
        gDrawingContext.fill();
    }
}
```

### Resto del Juego
El resto del código es la lógica específica de Halma: validar movimientos, contabilizar saltos y verificar la condición de victoria. Con este código, el juego completo de Halma funciona en un lienzo HTML mediante algunos círculos y líneas, junto con el manejo de eventos y cálculos de posiciones para la interacción del jugador.
