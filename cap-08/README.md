# El manifiesto de caché

Una aplicación web sin conexión utiliza un archivo de manifiesto de caché, que es una lista de los recursos necesarios para que la aplicación funcione incluso sin conexión a la red. Para usar este archivo, se debe apuntar a él en el HTML mediante el atributo `manifest`, como en `<html manifest="/cache.appcache">`. Este archivo puede ubicarse en cualquier parte del servidor, pero debe servirse con el tipo de contenido adecuado (`text/cache-manifest`). Si se usa un servidor Apache, se puede agregar una directiva `AddType` en el archivo `.htaccess` para definir este tipo de contenido. Además, el archivo de manifiesto debe tener la extensión `.appcache`.

El archivo de manifiesto de caché en una aplicación web sin conexión comienza con la línea `CACHE MANIFEST` y luego se divide en tres secciones: "explícita", "alternativa" y "lista blanca en línea". Si no se especifican encabezados para las secciones, todos los recursos se incluyen en la sección "explícita" por defecto. Los recursos en esta sección son descargados y almacenados en caché para su uso sin conexión.

Por ejemplo, un archivo de manifiesto válido podría contener lo siguiente:

```
CACHE MANIFEST
/clock.css
/clock.js
/clock-face.jpg
```

En este caso, el archivo de manifiesto no tiene encabezados de sección, por lo que los archivos listados se consideran parte de la sección "explícita". Al cargar el archivo de manifiesto, el navegador descargará los recursos (CSS, JavaScript e imagen) y los almacenará en caché localmente. Incluso si la red se desconecta, esos recursos estarán disponibles para la aplicación sin conexión.

**Secciones de la red**

En un caso más avanzado, si una aplicación necesita evitar que ciertos recursos, como un script de seguimiento (`tracking.cgi`), se almacenen en caché (para que no esté disponible sin conexión), se puede usar la sección `NETWORK` en el archivo de manifiesto de caché. Los recursos en la sección `NETWORK` nunca se almacenan en caché, y si se intenta acceder a ellos sin conexión, se producirá un error.

Por ejemplo, el archivo de manifiesto podría verse así:

```
CACHE MANIFEST
NETWORK:
  /tracking.cgi
CACHE:
  /clock.css
  /clock.js
  /clock-face.jpg
```

- **Sección `NETWORK`**: Cualquier recurso listado en esta sección, como `/tracking.cgi`, no se almacenará en caché y no estará disponible sin conexión.
- **Sección `CACHE`**: Los recursos aquí, como `/clock.css`, `/clock.js` y `/clock-face.jpg`, se almacenarán en caché y estarán disponibles sin conexión.

Este archivo de manifiesto de caché garantiza que el recurso de seguimiento no se guarde localmente, mientras que los otros archivos serán accesibles incluso sin conexión.

**Secciones de reserva**

En un caso más avanzado, si una aplicación necesita evitar que ciertos recursos, como un script de seguimiento (`tracking.cgi`), se almacenen en caché (para que no esté disponible sin conexión), se puede usar la sección `NETWORK` en el archivo de manifiesto de caché. Los recursos en la sección `NETWORK` nunca se almacenan en caché, y si se intenta acceder a ellos sin conexión, se producirá un error.

Por ejemplo, el archivo de manifiesto podría verse así:

```
CACHE MANIFEST
NETWORK:
  /tracking.cgi
CACHE:
  /clock.css
  /clock.js
  /clock-face.jpg
```

- **Sección `NETWORK`**: Cualquier recurso listado en esta sección, como `/tracking.cgi`, no se almacenará en caché y no estará disponible sin conexión.
- **Sección `CACHE`**: Los recursos aquí, como `/clock.css`, `/clock.js` y `/clock-face.jpg`, se almacenarán en caché y estarán disponibles sin conexión.

Este archivo de manifiesto de caché garantiza que el recurso de seguimiento no se guarde localmente, mientras que los otros archivos serán accesibles incluso sin conexión.

## Flujo de acontecimientos  

En el proceso de funcionamiento de las aplicaciones web sin conexión, el navegador interactúa con el manifiesto de caché a través de una serie de eventos DOM (Document Object Model) que permiten la descarga y almacenamiento de recursos. Aquí te explico el flujo básico de estos eventos:

1. **Detección del manifiesto de caché**: Cuando el navegador detecta que una página HTML apunta a un manifiesto de caché (`<html manifest="/cache.appcache">`), dispara un evento de **`checking`**. Este evento ocurre cada vez que se visita la página, independientemente de si es la primera vez o si el navegador ya conoce ese manifiesto.

2. **Primer acceso al manifiesto**: Si el navegador nunca ha visto el manifiesto de caché antes:
   - Se activa un evento de **`downloading`**.
   - El navegador comienza a descargar los recursos listados en el manifiesto.
   - Durante la descarga, se disparan eventos de **`progress`** que informan sobre el avance de la descarga.
   - Una vez descargados todos los recursos, se dispara el evento **`cached`**, indicando que la aplicación web está completamente almacenada en caché y lista para usarse sin conexión.

3. **Accesos posteriores al manifiesto**: Si el navegador ya ha visitado previamente la página o cualquier otra página que apunte al mismo manifiesto:
   - Si el manifiesto no ha cambiado desde la última visita, se dispara el evento **`noupdate`** (sin actualización), indicando que no es necesario hacer nada.
   - Si el manifiesto ha cambiado, el navegador dispara el evento **`downloading`** nuevamente y comienza a descargar los recursos actualizados.
   - Durante la descarga, se activan eventos de **`progress`** y, al finalizar, se dispara el evento **`updateready`**, indicando que la nueva versión de la aplicación está almacenada en caché y lista para usarse sin conexión. Para que la nueva versión se active sin que el usuario tenga que recargar la página, se puede utilizar **`window.applicationCache.swapCache()`**.

4. **Errores**: Si algo sale mal durante el proceso, como un error HTTP 404 (no encontrado) o 410 (desaparecido permanentemente), o si algún recurso no puede descargarse, se dispara un evento de **`error`** y el proceso se detiene.

Este flujo asegura que el navegador descargue y actualice los recursos de una aplicación web sin conexión según sea necesario, y maneja posibles fallos o cambios en el manifiesto de caché.

### Caché

En el proceso de almacenamiento en caché para aplicaciones web sin conexión, hay dos puntos importantes que pueden causar confusión o problemas durante el desarrollo:

1. **Problemas con la descarga de recursos**: Si uno de los recursos listados en el archivo de manifiesto de caché no se descarga correctamente, todo el proceso de almacenamiento en caché falla. El navegador activará un evento de **`error`**, pero no dará detalles específicos sobre cuál fue el problema, lo que puede dificultar la depuración de las aplicaciones sin conexión.

2. **Cómo el navegador verifica si un manifiesto de caché ha cambiado**: Cuando un navegador verifica si el archivo de manifiesto de caché ha cambiado, sigue un proceso de tres fases:
   - **Comprobación de caducidad**: El navegador consulta si el manifiesto de caché ha caducado, usando los encabezados HTTP `Expires` o `Cache-Control` que indican cuánto tiempo debe almacenarse en caché un archivo.
   - **Comprobación de modificaciones**: Si el manifiesto ha caducado, el navegador envía una solicitud al servidor con la fecha de la última modificación. Si el servidor responde con un estado `304 (Not Modified)`, el navegador no descarga el archivo nuevamente.
   - **Descarga de nueva versión**: Si el servidor determina que el manifiesto ha cambiado, devuelve un nuevo archivo con un código `200 (OK)` y actualiza los encabezados.

El problema surge cuando, tras cambiar el archivo de manifiesto, el navegador no lo detecta como actualizado debido a la configuración de almacenamiento en caché del servidor web. Si el servidor está configurado para almacenar archivos en caché durante un largo período (por ejemplo, con el encabezado `Cache-Control`), el navegador no volverá a consultar al servidor y no detectará la nueva versión del manifiesto. Esto puede generar confusión, ya que parece que el navegador no está actualizando el archivo aunque haya sido modificado.

Para solucionar esto, se recomienda deshabilitar el almacenamiento en caché del archivo de manifiesto de caché mediante configuraciones específicas en el servidor, como:

```apache
ExpiresActive On
ExpiresDefault "access"
```

Sin embargo, esto solo afecta al archivo de manifiesto. Cuando cambias uno de los recursos en caché (como un archivo JS o CSS), el navegador no detectará automáticamente que ha cambiado, a menos que también cambies el archivo de manifiesto. Una técnica común es agregar un número de revisión en un comentario dentro del manifiesto, como:

```plaintext
CACHE MANIFEST
# rev 43
clock.js
clock.css
```

De esta forma, al cambiar el número de revisión, el navegador detectará que el manifiesto ha cambiado y descargará nuevamente los recursos, lo que garantiza que la aplicación web sin conexión se actualice correctamente.

#### Construyamos uno 

Para hacer que el juego de **Halma** funcione sin conexión, se necesita configurar un **manifiesto de caché** que enumere todos los recursos necesarios para el juego. En este caso, el juego consiste en una página HTML, un archivo JavaScript y ningún recurso adicional como imágenes, ya que todo se dibuja mediante programación con la API de lienzo. Los estilos CSS están directamente en la página HTML.

El manifiesto de caché para este juego podría lucir así:

```plaintext
CACHE MANIFEST
halma.html
../halma-localstorage.js
```

En este caso:
- El archivo HTML **halma.html** se encuentra en un subdirectorio (por ejemplo, `/offline/`), y se incluye en el manifiesto sin ningún prefijo de ruta adicional.
- El archivo JavaScript **halma-localstorage.js** está en el directorio principal, por lo que se usa una ruta relativa (`../halma-localstorage.js`) para referenciarlo desde el subdirectorio.

La estructura de archivos sería algo así:

```
/examples/
  halma-localstorage.js
  /offline/
    halma.appcache
    halma.html
```

El archivo **halma.appcache** contiene la referencia a los recursos necesarios y se coloca dentro del subdirectorio **/offline/**. El archivo **halma.html** es la versión habilitada para trabajar sin conexión, y se usa el atributo `manifest` en el HTML para enlazarlo con el manifiesto de caché:

```html
<!DOCTYPE html>
<html lang="en" manifest="halma.appcache">
<!-- El contenido del juego Halma va aquí -->
</html>
```

Cuando un navegador con soporte para aplicaciones sin conexión carga por primera vez la página HTML, descarga el archivo de manifiesto de caché y comienza a almacenar los recursos mencionados (la página HTML y el archivo JavaScript). Después de esto, cada vez que se visita la página, el navegador utilizará los recursos almacenados en caché para cargar la aplicación sin conexión.

De este modo, el juego **Halma** puede jugarse sin conexión, y como el estado del juego se guarda localmente mediante almacenamiento local, los jugadores pueden salir y volver a ingresar al juego en cualquier momento sin perder el progreso.
