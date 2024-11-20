# ALMACENAMIENTO LOCAL PARA APLICACIONES WEB  

**hacks de almacenamiento local antes de HTML5**

El desarrollo del almacenamiento en navegadores web ha pasado por varias etapas marcadas por soluciones específicas y complementos de terceros antes de llegar a una solución estandarizada con HTML5:

1. **Internet Explorer y userData (1990s)**: Microsoft introdujo *userData*, que permitía almacenar hasta 64 KB de datos por dominio en estructuras XML. No requería permisos del usuario ni ofrecía flexibilidad en el almacenamiento.

2. **Cookies Flash (2002)**: Adobe Flash 6 implementó los *Objetos Compartidos Locales* (LSOs), que permitían almacenar 100 KB por dominio. Más allá de esa cantidad, se solicitaba permiso al usuario para aumentos significativos de almacenamiento.

3. **Gears (2007)**: Google desarrolló Gears, un complemento que proporcionaba una base de datos SQL embebida basada en SQLite para almacenar grandes cantidades de datos tras un único permiso del usuario.

4. **dojox.storage (2006-2009)**: Brad Neuberg lideró la creación de una biblioteca para unificar el acceso a diferentes soluciones (Flash, Gears, etc.) mediante una interfaz estándar. Aunque útil, dependía de tecnologías específicas y plugins.

### **El Problema**
Todas estas soluciones eran propietarias, dependientes de un navegador o requerían complementos de terceros. Además, ofrecían experiencias de usuario inconsistentes y APIs diferentes.

### **HTML5: La Solución**
HTML5 introdujo una API estandarizada de almacenamiento web, implementada nativamente en todos los navegadores modernos, eliminando la necesidad de soluciones dependientes de plugins y proporcionando una experiencia unificada y confiable.

## ALMACENAMINTO HTML-5 

El **Almacenamiento HTML5** (o *Web Storage*) es una tecnología que permite a las páginas web guardar datos de pares clave/valor directamente en el navegador del cliente. A diferencia de las cookies:

- Los datos **persisten localmente** en el navegador, incluso después de cerrar pestañas o el navegador.
- **No se transmiten automáticamente al servidor remoto**, a menos que se envíen explícitamente.

### Ventajas
1. **Nativo en los navegadores modernos**: No requiere complementos.
2. **Compatibilidad**: Funciona en las versiones recientes de casi todos los navegadores:
   - IE 8+, Firefox 3.5+, Safari 4.0+, Chrome 4.0+, Opera 10.5+, iPhone 2.0+, Android 2.0+.

### Verificación de Compatibilidad
Antes de usar el almacenamiento HTML5, verifica su disponibilidad mediante una función como esta:

```javascript
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}
```

Alternativamente, puedes usar herramientas como **Modernizr** para simplificar la detección:

```javascript
if (Modernizr.localstorage) {
  // Compatible con almacenamiento HTML5
} else {
  // Usa una solución alternativa, como dojox.storage
}
```

### Conclusión
El almacenamiento HTML5 ofrece una solución estándar, eficiente y segura para almacenar datos persistentes localmente en el navegador, convirtiéndose en una alternativa robusta a las cookies y métodos anteriores.

### USO DEL ALMACENAMIENTO 

El **Almacenamiento HTML5** utiliza un modelo basado en pares clave-valor para almacenar datos localmente en el navegador, sin necesidad de plugins. Los datos persisten incluso después de cerrar el navegador y no se envían automáticamente al servidor.

---

### Funciones principales

1. **Pares clave-valor:**
   - Las claves y valores son cadenas.
   - Otros tipos de datos (booleanos, enteros, flotantes) deben convertirse manualmente al recuperarlos usando funciones como `parseInt()` o `parseFloat()`.

2. **Métodos básicos del API `localStorage`:**
   - **Guardar datos:** `setItem(key, value)`.
   - **Obtener datos:** `getItem(key)`.
   - **Eliminar datos:** `removeItem(key)`.
   - **Borrar todo:** `clear()`.

3. **Propiedades útiles:**
   - `length`: Número de claves almacenadas.
   - `key(index)`: Recupera la clave en un índice específico.

4. **Sintaxis alternativa:**
   - Puedes usar corchetes para tratar a `localStorage` como una matriz asociativa:
     ```javascript
     localStorage["key"] = "value";
     var value = localStorage["key"];
     ```

---

### Seguimiento de cambios: Evento `storage`
El evento `storage` se dispara cuando los datos cambian (agregados, modificados o eliminados). Este evento:
- Es global y se puede escuchar con `addEventListener` o `attachEvent` (en IE8).
- No se dispara si los datos no cambian efectivamente.

**Ejemplo:**
```javascript
window.addEventListener("storage", function(e) {
  console.log("Key changed:", e.key);
  console.log("Old value:", e.oldValue);
  console.log("New value:", e.newValue);
  console.log("Originating page:", e.url || e.uri);
});
```

---

### Limitaciones
1. **Tamaño máximo:**
   - **5 MB por origen** (sugerido por la especificación; algunos navegadores permiten configuraciones personalizadas por el usuario).
   - Todo se almacena como texto, lo que puede aumentar el uso de espacio si se trabaja con números.

2. **Errores:**
   - **`QUOTA_EXCEEDED_ERR`**: Ocurre si se supera el límite de almacenamiento.

3. **No hay forma de pedir más espacio:**
   - Los navegadores no permiten solicitar almacenamiento adicional. Solo algunos, como Opera, permiten configuraciones personalizadas a discreción del usuario.

---

### Conclusión
El Almacenamiento HTML5 es una solución estándar, eficiente y segura para guardar datos localmente en el navegador. Aunque tiene limitaciones de tamaño y no soporta solicitudes de ampliación, sigue siendo una alternativa robusta a las cookies y métodos de almacenamiento más antiguos.

#### ALMACENAMIENTO EN ACCIÓN 

El almacenamiento HTML5 puede usarse para guardar el progreso del juego de Halma en el navegador, evitando la pérdida de datos si se cierra la pestaña o el navegador. Esto incluye el estado actual del tablero, las piezas y el conteo de movimientos.

---

### Cómo funciona

#### **Guardado del estado del juego**
1. Cada vez que ocurre un cambio en el juego, se ejecuta la función `saveGameState()`.
2. Utiliza el objeto `localStorage` para almacenar:
   - Si hay un juego en progreso (`gGameInProgress`, booleano).
   - La posición de cada pieza en el tablero (`gPieces`, filas y columnas).
   - Qué pieza está seleccionada (`gSelectedPieceIndex`, entero).
   - Si la pieza seleccionada ya ha sido movida (`gSelectedPieceHasMoved`, booleano).
   - El conteo de movimientos realizados (`gMoveCount`, entero).

**Ejemplo de código para guardar datos:**
```javascript
function saveGameState() {
    if (!supportsLocalStorage()) { return false; }
    localStorage["halma.game.in.progress"] = gGameInProgress;
    for (var i = 0; i < kNumPieces; i++) {
        localStorage["halma.piece." + i + ".row"] = gPieces[i].row;
        localStorage["halma.piece." + i + ".column"] = gPieces[i].column;
    }
    localStorage["halma.selectedpiece"] = gSelectedPieceIndex;
    localStorage["halma.selectedpiecehasmoved"] = gSelectedPieceHasMoved;
    localStorage["halma.movecount"] = gMoveCount;
    return true;
}
```

---

#### **Recuperación del estado del juego**
1. Cuando se carga la página, la función `resumeGame()` verifica si hay un estado guardado en `localStorage`.
2. Si existe, recupera los valores almacenados y los usa para restaurar el juego:
   - Convierte los datos a su tipo original si no son cadenas (por ejemplo, números o booleanos).
   - Dibuja nuevamente el tablero de juego usando los datos restaurados.

**Ejemplo de código para restaurar datos:**
```javascript
function resumeGame() {
    if (!supportsLocalStorage()) { return false; }
    gGameInProgress = (localStorage["halma.game.in.progress"] == "true");
    if (!gGameInProgress) { return false; }
    gPieces = new Array(kNumPieces);
    for (var i = 0; i < kNumPieces; i++) {
        var row = parseInt(localStorage["halma.piece." + i + ".row"]);
        var column = parseInt(localStorage["halma.piece." + i + ".column"]);
        gPieces[i] = new Cell(row, column);
    }
    gSelectedPieceIndex = parseInt(localStorage["halma.selectedpiece"]);
    gSelectedPieceHasMoved = (localStorage["halma.selectedpiecehasmoved"] == "true");
    gMoveCount = parseInt(localStorage["halma.movecount"]);
    drawBoard();
    return true;
}
```

---

### Consideraciones importantes
1. **Datos como cadenas:** 
   - Todos los valores almacenados en `localStorage` son cadenas.
   - Al recuperar datos no textuales (por ejemplo, números o booleanos), deben convertirse manualmente:
     - Booleanos: Comparar con `"true"`.
     - Enteros: Usar `parseInt()`.

2. **Soporte de almacenamiento:** 
   - Se debe verificar si el navegador admite `localStorage` con una función como `supportsLocalStorage()` antes de intentar guardar o restaurar datos.

---

### Ventajas
- Permite guardar el progreso sin depender de servidores externos.
- Mejora la experiencia del usuario al retomar el juego en el mismo estado en que lo dejó.
  
### Limitaciones
- Los datos almacenados están sujetos al límite de 5 MB por origen.
- Es necesario manejar manualmente la conversión de tipos no textuales al guardar y recuperar datos.

##### MÁS ALLÁ DE LOS PARES CLAVE-VALOR CON NOMBRE: VISIONES CONTRAPUESTAS

En el mundo del desarrollo web, el almacenamiento local ha evolucionado significativamente. HTML5 ha estandarizado una API para almacenamiento local basado en pares clave-valor, pero existen enfoques más avanzados y con mayor capacidad para manejar grandes volúmenes de datos: **Web SQL Database** e **IndexedDB**. A continuación, se describen ambas tecnologías y sus ventajas y desventajas.

---

### Web SQL Database
Web SQL Database, inicialmente desarrollada por Google a través de **Gears** en 2007, permite el almacenamiento de datos usando una base de datos SQL integrada (SQLite) dentro del navegador. Esto permite ejecutar consultas SQL desde JavaScript, incluyendo operaciones como `SELECT`, `INSERT`, `UPDATE`, y `DELETE`.

**Código de ejemplo de Web SQL Database:**
```javascript
openDatabase('documents', '1.0', 'Local document storage', 5*1024*1024, function (db) {
  db.changeVersion('', '1.0', function (t) {
    t.executeSql('CREATE TABLE docids (id, name)');
  }, error);
});
```

**Ventajas:**
- Usabilidad de SQL directamente en el navegador.
- Permite realizar operaciones complejas de bases de datos como lo harías en servidores backend.

**Compatibilidad:**
Web SQL Database fue implementado en varios navegadores, incluyendo Safari, Chrome y Opera, pero fue abandonado por Mozilla y Microsoft.

**Desventajas:**
- **Callejón sin salida**: La especificación de Web SQL Database quedó estancada. Esto se debe a que la mayoría de las implementaciones se basaban en SQLite, lo cual no es adecuado para un estándar web generalizado.
- Los desarrolladores web no pueden confiar en la persistencia a largo plazo de esta tecnología.

---

### IndexedDB
IndexedDB es una API más avanzada para el almacenamiento local. A diferencia de Web SQL Database, IndexedDB no utiliza SQL y está basado en el concepto de un **almacén de objetos**. Cada objeto almacenado en IndexedDB puede ser consultado mediante un **cursor** y manipulado a través de transacciones.

**Principales conceptos:**
- **Bases de datos**: Contienen registros.
- **Registros**: Tienen "campos" con tipos de datos específicos.
- **Cursors**: Permiten enumerar y filtrar registros.
- **Transacciones**: Controlan los cambios realizados en la base de datos.

**Ventajas de IndexedDB:**
- Almacena datos de manera eficiente y permite realizar consultas más complejas sin necesidad de usar SQL.
- Compatible con navegadores modernos como Firefox, Chrome y Edge, y considerado el futuro del almacenamiento web.

**Desventajas:**
- No tiene un lenguaje de consulta estructurado como SQL, lo que hace que su uso sea más complejo en comparación con Web SQL Database.
- A pesar de que es compatible con varios navegadores, su implementación ha sido más lenta en algunos, como Microsoft.

---

### Comparativa y Futuro del Almacenamiento Local
1. **Web SQL Database**: Aunque inicialmente era una solución poderosa, está estancada y no se espera que se adopte ampliamente. Actualmente, su implementación depende de SQLite, lo cual limita su adopción como estándar.
2. **IndexedDB**: Aunque es más compleja y no usa SQL, ofrece más flexibilidad y control en el manejo de grandes volúmenes de datos. Es la tecnología que se perfila como el futuro del almacenamiento local en aplicaciones web.

### Recomendación
Para los desarrolladores web que buscan soluciones de almacenamiento robustas y escalables en el futuro, **IndexedDB** parece ser la mejor opción. Actualmente está en fase de adopción y expansión, por lo que se recomienda mantenerse informado sobre su progreso y aprender a utilizarla. 

**Lecturas adicionales**:
- Hay recursos y tutoriales disponibles que explican cómo comenzar a trabajar con IndexedDB, proporcionando ejemplos prácticos y comparaciones con Web SQL Database.
