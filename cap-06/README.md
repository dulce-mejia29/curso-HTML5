# LA API DE GEOLOCALIZACIÓN 

La API de geolocalización permite a los navegadores acceder a la ubicación física del usuario mediante el objeto `navigator.geolocation`. Aquí está el resumen clave:

1. **Uso básico**: 
   ```javascript
   function get_location() {
       navigator.geolocation.getCurrentPosition(show_map);
   }
   ```
   Esto obtiene la ubicación, pero sin manejo de errores ni detección de compatibilidad.

2. **Compatibilidad**: Puedes usar Modernizr para verificar si el navegador soporta la API:
   ```javascript
   if (Modernizr.geolocation) {
       navigator.geolocation.getCurrentPosition(show_map);
   } else {
       // Alternativa, como usar Gears
   }
   ```

3. **Privacidad**: El soporte de geolocalización es opcional. Los navegadores solicitan permiso al usuario antes de compartir su ubicación, mostrando una barra de información con opciones para aceptar o rechazar.

4. **Callback para ubicación**: La función `getCurrentPosition` es asíncrona, y devuelve un objeto de posición en su callback:
   ```javascript
   function show_map(position) {
       var latitude = position.coords.latitude;
       var longitude = position.coords.longitude;
       // Hacer algo interesante con la ubicación
   }
   ```

5. **Objeto de posición**: Contiene propiedades clave como:
   - `coords.latitude` y `coords.longitude` (grados decimales)
   - `coords.accuracy` (precisión en metros)
   - Propiedades opcionales: `altitude`, `heading`, `speed`, etc.

6. **Limitaciones y variabilidad**: 
   - No todas las propiedades están garantizadas, dependen del dispositivo y del servidor de posicionamiento.
   - El cálculo de la ubicación puede demorar debido al hardware o la interacción del usuario.

Este enfoque resalta la simplicidad y flexibilidad de la API, mientras respeta la privacidad del usuario.

## MANEJO DE ERRORES 

El manejo de errores en la API de geolocalización permite gestionar situaciones en las que no se puede obtener la ubicación del usuario. Esto se realiza mediante una función de devolución de llamada (callback) para errores que se pasa como segundo argumento a `getCurrentPosition`. 

### Ejemplo de implementación:
```javascript
navigator.geolocation.getCurrentPosition(
  show_map, // Callback de éxito
  handle_error // Callback de error
);
```

### Objeto `PositionError`:
Cuando ocurre un error, la función de manejo recibe un objeto `PositionError` con las siguientes propiedades:
- **`code`**: Indica el tipo de error (valores enumerados).
- **`message`**: Información adicional para depuración (no destinada a usuarios).

### Tipos de errores (`code`):
1. **`PERMISSION_DENIED` (1)**:
   - Ocurre cuando el usuario niega el permiso para compartir su ubicación.
2. **`POSITION_UNAVAILABLE` (2)**:
   - Sucede si no hay acceso a redes o satélites para determinar la ubicación.
3. **`TIMEOUT` (3)**:
   - Se produce cuando el cálculo de la ubicación tarda más de lo permitido (configurable).

### Ejemplo de manejo:
```javascript
function handle_error(err) {
  if (err.code === 1) {
    console.log("El usuario negó el acceso a la ubicación.");
  } else if (err.code === 2) {
    console.log("Ubicación no disponible.");
  } else if (err.code === 3) {
    console.log("Tiempo de espera agotado.");
  }
}
```

El manejo de errores garantiza que tu aplicación pueda responder de manera adecuada, incluso cuando la geolocalización falla, asegurando una mejor experiencia para el usuario.

#### ¡Opciones!

La geolocalización en dispositivos móviles admite diferentes niveles de precisión según el método utilizado y las necesidades de tu aplicación.

---

### **Métodos para determinar la ubicación**:
1. **Triangulación de torres de telefonía móvil**:
   - **Rápido** y no requiere hardware GPS.
   - Ofrece **baja precisión**, con un margen de error que varía entre una cuadra y un kilómetro.
   - Ideal para tareas donde no se necesita alta exactitud, como encontrar negocios cercanos.

2. **GPS dedicado**:
   - Usa satélites GPS para una precisión de unos pocos metros.
   - **Consume más energía** y tarda en inicializarse.
   - Recomendado para aplicaciones como navegación paso a paso.

---

### **Propiedades del objeto `PositionOptions`**:
Puedes configurar estas opciones al llamar a `getCurrentPosition()` o `watchPosition()`:

1. **`enableHighAccuracy`**:
   - **Tipo**: booleano (predeterminado: `false`).
   - Si se establece en `true`, intenta obtener la ubicación más precisa posible, pero podría ser más lento y consumir más batería.

2. **`timeout`**:
   - **Tipo**: milisegundos.
   - Tiempo máximo que la aplicación esperará para obtener la ubicación. Comienza a contar después de que el usuario otorga permiso.

3. **`maximumAge`**:
   - **Tipo**: milisegundos (predeterminado: `0`).
   - Permite reutilizar una ubicación almacenada en caché si es reciente. Útil para reducir la necesidad de cálculos repetitivos.

**Ejemplo**:
```javascript
navigator.geolocation.getCurrentPosition(
  success_callback, 
  error_callback, 
  {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 60000
  }
);
```

---

### **Uso de `watchPosition()` para rastreo continuo**:
- Similar a `getCurrentPosition()`, pero sigue detectando cambios en la ubicación y llama al callback de éxito cada vez que esta cambia.
- Devuelve un ID que puede ser usado con `clearWatch()` para detener el rastreo.

**Ejemplo**:
```javascript
let watchId = navigator.geolocation.watchPosition(
  success_callback, 
  error_callback, 
  { enableHighAccuracy: true }
);

// Para detener el rastreo:
navigator.geolocation.clearWatch(watchId);
```

---

### **Cuándo usar cada opción**:
1. **`getCurrentPosition()`**:
   - Para obtener la ubicación una sola vez, como al buscar servicios cercanos.
   
2. **`watchPosition()`**:
   - Para actualizaciones continuas, como seguimiento en tiempo real en un mapa.

---

Al configurar estas opciones, considera la precisión que necesitas, el impacto en la batería y la experiencia del usuario. Esto optimizará la funcionalidad y reducirá el uso innecesario de recursos.C

##### ¿QUE PASA CON IE?

Antes de la versión 9, **Internet Explorer** no era compatible con la API de geolocalización del W3C. Sin embargo, existían alternativas para proporcionar esta funcionalidad en navegadores o dispositivos más antiguos.

---

### **Alternativa principal: Gears**  
- **Desarrollador**: Google.  
- **Compatibilidad**: Funcionaba en Windows, Mac, Linux, Windows Mobile y Android.  
- **Propósito**: Complementar navegadores antiguos proporcionando una API de geolocalización.  
- **Diferencias**: Aunque no era idéntica a la API del W3C, cumplía el mismo propósito.

---

### **Otras plataformas con APIs específicas**  
En dispositivos móviles más antiguos, diferentes fabricantes ofrecían sus propias soluciones de geolocalización:
1. **BlackBerry**  
2. **Nokia**  
3. **Palm**  
4. **OMTP BONDI**

---

### **Desafío en plataformas heredadas**  
Cada API funcionaba de manera distinta, lo que complicaba la creación de aplicaciones web compatibles en múltiples dispositivos. Esto subrayó la importancia de un estándar como la API de geolocalización del W3C para simplificar el desarrollo y asegurar la interoperabilidad. 

Hoy en día, estas alternativas han quedado obsoletas con el avance en soporte nativo de geolocalización en navegadores modernos.

###### GEO.JS AL RESCATE 

**geo.js** es una biblioteca de JavaScript de código abierto (licencia MIT) diseñada para unificar y simplificar el uso de diferentes APIs de geolocalización, como la API del W3C, Gears, y APIs específicas de dispositivos móviles.

---

### **Cómo integrar geo.js**:
1. Incluye los siguientes scripts al final del archivo HTML:
   ```html
   <script src="gears_init.js"></script>
   <script src="geo.js"></script>
   ```
   Esto inicializa Gears (si está instalado) y habilita geo.js.

2. Inicializa geo.js:
   ```javascript
   if (geo_position_js.init()) {
       geo_position_js.getCurrentPosition(geo_success, geo_error);
   }
   ```
   - **`geo_position_js.init()`**: Verifica si hay una API de geolocalización compatible disponible. Retorna `true` si es posible usarla.
   - **`geo_position_js.getCurrentPosition()`**: Solicita la ubicación del usuario y requiere dos callbacks:
     - **Éxito**: Se llama si la ubicación se obtiene con éxito.
     - **Error**: Se llama si la ubicación no puede determinarse.

---

### **Ejemplo de implementación**:

**Devolución de llamada de éxito**:
Si la ubicación se encuentra, se muestra la latitud y longitud:
```javascript
function geo_success(p) {
    alert("Found you at latitude " + p.coords.latitude +
          ", longitude " + p.coords.longitude);
}
```

**Devolución de llamada de error**:
Si no se puede determinar la ubicación, se muestra un mensaje de error:
```javascript
function geo_error() {
    alert("Could not find you!");
}
```

---

### **Limitaciones**:
- geo.js no soporta **`watchPosition()`**, que permite rastrear continuamente los cambios de ubicación. Si necesitas esta funcionalidad, tendrás que implementar un sistema de sondeo manual utilizando `getCurrentPosition()` de forma periódica.

---

### **Ventajas de geo.js**:
- Simplifica el manejo de múltiples APIs de geolocalización, brindando una solución unificada para navegadores y dispositivos más antiguos.
- Ofrece una forma accesible de implementar geolocalización en proyectos que requieren compatibilidad amplia.
