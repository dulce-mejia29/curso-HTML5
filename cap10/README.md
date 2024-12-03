# CAP 10 
---
## ¿Qué son los microdatos?
Los microdatos permiten agregar vocabularios personalizados a las páginas web, lo que te permite definir nuevas propiedades para representar información como personas o eventos. Funcionan con pares de nombre/valor, donde cada propiedad tiene un nombre y un valor específico. Estos datos se integran en la estructura jerárquica del DOM (Document Object Model), lo que permite anidar vocabularios y reutilizar esa estructura. Los microdatos añaden semántica a los datos ya visibles en la página, complementando el HTML y mejorando su expresividad. Son útiles cuando el vocabulario HTML estándar no es suficiente para describir datos de manera precisa.

---
## El modelo de datos de microdatos
Definir un vocabulario de microdatos es sencillo. Primero, necesitas un espacio de nombres, que es una URL, idealmente de un dominio que controles. Por ejemplo, para crear un vocabulario sobre personas, puedes usar una URL como `http://data-vocabulary.org/Person`. Luego, debes definir propiedades, como `name` (nombre), `photo` (foto) y `url` (enlace asociado). Estas propiedades se asignan a elementos HTML existentes, como un encabezado para el nombre, una imagen para la foto, y un enlace para la URL.

Los valores de estas propiedades provienen de atributos HTML (como `src` en `<img>` o `href` en `<a>`) o del contenido del texto de los elementos. Para agregar microdatos, debes declarar el vocabulario con el atributo `itemscope` y especificar el tipo con `itemtype` en el elemento contenedor. Luego, dentro de este contenedor, usas el atributo `itemprop` para asociar cada propiedad con el valor correspondiente.

Aunque es más fácil añadir microdatos a un HTML bien estructurado, incluso con código menos limpio o más antiguo (como tablas mal formadas), aún se pueden agregar, aunque con un poco más de creatividad, como envolver los elementos en un contenedor para asignarles propiedades correctamente.
## Marcando a las personas
Este texto trata sobre cómo agregar microdatos a una página web personal, específicamente en una sección "Acerca de", utilizando el vocabulario de microdatos de HTML5 para marcar la información de una persona, como su nombre, foto, dirección, y redes sociales. 

1. **Declaración de microdatos**: Para agregar microdatos, debes declarar el vocabulario y el alcance de las propiedades dentro de un contenedor principal (por ejemplo, un `<section>`), añadiendo los atributos `itemscope` y `itemtype`.

2. **Propiedades y valores**: Cada propiedad de microdatos (como el nombre o la foto de una persona) se define con el atributo `itemprop`. Los valores para esas propiedades suelen ser los atributos de los elementos HTML, como el `src` de una imagen.

3. **Etiquetas de elementos**: No todos los elementos necesitan ser marcados como microdatos. Los encabezados, por ejemplo, simplemente describen el contexto sin ser propiedades de microdatos. Las propiedades en sí se colocan en los elementos adecuados, como los `<dd>`.

4. **Fragmentos complejos**: Para información que se encuentra en una sola cadena de texto, como el cargo y la empresa de una persona, se puede dividir en elementos pequeños (por ejemplo, `<span>`) para aplicar microdatos a cada parte separada.

5. **Direcciones**: El vocabulario de direcciones tiene propiedades como `street-address`, `locality`, `region`, etc. Para marcar una dirección, también se debe usar un contenedor adicional con los atributos `itemscope` y `itemtype` dentro del `itemprop="address"`.

6. **URLs**: Las URLs relacionadas con una persona (por ejemplo, redes sociales o blogs) también se marcan con `itemprop="url"`.

7. **Uso en motores de búsqueda**: Los motores de búsqueda, como Google, pueden usar los microdatos para mostrar información más detallada en los resultados de búsqueda, como el nombre, la foto y la dirección de una persona, mejorando la visibilidad y la estructura de la información en la web.

El uso de microdatos facilita que los motores de búsqueda comprendan mejor el contenido y presenten una vista más rica de la página, como una ficha detallada de la persona en los resultados. Además, se pueden agregar múltiples propiedades y tipos de información, lo que mejora la accesibilidad y la estructura semántica del contenido.
### Marcando organizaciones
Este fragmento describe cómo marcar información sobre una organización o empresa en HTML usando microdatos, siguiendo el vocabulario específico para "Organization" del estándar HTML5. Aquí te detallo los pasos que se mencionan:

1. **Estructura Básica**
La página muestra cómo marcar una página de empresa con microdatos, empezando con un bloque `<article>` que contiene información sobre la organización, como su nombre, dirección, número de teléfono y enlace a la página web.

2. **Marcado con Microdatos**
El primer paso es envolver el contenido de la organización dentro de un `<article>` con los atributos `itemscope` y `itemtype="http://data-vocabulary.org/Organization"`, lo que indica que la información dentro del bloque pertenece al vocabulario de microdatos de "Organization".

3. **Propiedades de la Organización**
Algunas de las propiedades que se pueden marcar para una organización son:
- **name**: El nombre de la organización.
- **url**: Enlace a la página de inicio.
- **address**: La dirección, con subpropiedades como `street-address`, `locality`, `region`, `postal-code`, y `country-name`.
- **tel**: El número de teléfono.
- **geo**: Coordenadas geográficas (latitud y longitud).

4. **Marcado de Propiedades Específicas**
   - **Nombre de la Organización**: Se marca el nombre dentro de un `<h1>` con el atributo `itemprop="name"`.
   - **Dirección**: La dirección de la organización se marca dentro de un elemento `<p>` con `itemprop="address"`, y cada parte de la dirección, como la calle, localidad y país, se envuelve en un `<span>` con sus respectivas propiedades de microdatos (`street-address`, `locality`, etc.).
   - **Número de Teléfono**: Se marca el número dentro de un `<p>` con `itemprop="tel"`.
   - **URL**: El enlace a la página web se marca dentro de un `<a>` con `itemprop="url"`.

5. **Geolocalización**
La geolocalización se marca utilizando un bloque `<span>` con `itemprop="geo"` y las coordenadas de latitud y longitud dentro de un elemento `<meta>` con los atributos `itemprop="latitude"` y `itemprop="longitude"`. Esto se hace de manera invisible para los usuarios, pero accesible para las máquinas.

6. **Datos Invisibles**
Los datos como la latitud y longitud no son visibles en la página web, pero se pueden incluir en elementos `<meta>` para que los motores de búsqueda y otras aplicaciones los puedan leer. Estos datos se colocan en el bloque de microdatos de la organización, y es importante asegurarse de que estos datos invisibles siempre estén sincronizados con el contenido visible.
### Marcado de eventos
Este texto describe el proceso de marcar eventos en una página web utilizando microdatos en HTML5, especialmente con el vocabulario de eventos. El objetivo de este tipo de marcado es proporcionar información estructurada que los motores de búsqueda, como Google, puedan usar para enriquecer los resultados de búsqueda, como mostrar detalles de eventos en un formato amigable.

A continuación, se resume el proceso explicado en el texto:

1. **Elemento `article` para eventos**: El evento se marca dentro de un `<article>` con los atributos `itemscope` y `itemtype` para indicar que el contenido es un evento. Luego, se le añaden propiedades específicas utilizando el atributo `itemprop`, como el nombre del evento (`summary`), su URL (`url`), su ubicación (`location`), la descripción (`description`), y las fechas de inicio y fin (`startDate` y `endDate`).

2. **Uso de `time` para fechas y horas**: Las fechas y horas de los eventos se marcan utilizando el elemento `<time>` con el atributo `datetime` en formato ISO 8601, que es compatible con el vocabulario de microdatos. El atributo `itemprop` se usa para asociar estos elementos con las propiedades `startDate` y `endDate`.

3. **Ubicación del evento**: La ubicación se marca utilizando el vocabulario de Organización (`Organization`) y Dirección (`Address`). El nombre del lugar del evento se marca con `itemprop="name"`, y la dirección se divide en varias propiedades, como `street-address`, `postal-code`, `locality`, y `country-name`.

4. **Coordenadas geográficas**: Si se desea especificar la ubicación geográfica exacta, se puede usar el vocabulario `Geo` para marcar las coordenadas de latitud y longitud del evento.

5. **Fragmentos enriquecidos de Google**: Después de agregar los microdatos, los motores de búsqueda como Google pueden presentar la información de manera enriquecida en los resultados, como mostrar el nombre del evento, las fechas y la ubicación de manera resumida.

**Por ejemplo**

En los resultados de búsqueda de Google, el evento puede aparecer con una tabla que muestra la fecha, la hora, la ubicación y el enlace al evento, basándose en los datos estructurados que se han marcado en el HTML.
### Marcar las reseñas
Este texto explica cómo mejorar una página web mediante el uso de **microdatos** para enriquecer las reseñas de productos o servicios, como una pizzería en este caso. Se utiliza un vocabulario específico llamado **"Review"** (reseña) para marcar de forma semántica los distintos elementos de la reseña, lo que ayuda a los motores de búsqueda a comprender y presentar mejor la información en los resultados de búsqueda.

Aquí están los aspectos clave que aborda el texto:

1. **Marcar la reseña**: Se emplea el atributo `itemscope` para definir el contenido de la reseña como un objeto de tipo "Review". Dentro de este, se utilizan otros atributos para describir el producto o servicio reseñado, como `itemprop="itemreviewed"` para el nombre del lugar (en este caso, "Anna’s Pizzeria").

2. **Propiedades de la reseña**:
   - `itemreviewed`: Es el nombre del elemento que se reseña (pizzería en este caso).
   - `rating`: Es la calificación, que en este caso se muestra con estrellas y puede adaptarse a una escala personalizada.
   - `reviewer`: El nombre de la persona que escribió la reseña.
   - `dtreviewed`: La fecha en que se realizó la reseña.
   - `summary` y `description`: Un breve resumen y una descripción más detallada de la reseña, respectivamente.
   - `location` y `geo`: La ubicación física del negocio y las coordenadas geográficas, lo que mejora la accesibilidad y visibilidad en los motores de búsqueda.

3. **Uso de microdatos para la calificación**: Se muestra cómo marcar la calificación utilizando el sistema de estrellas, donde el valor de la calificación se indica en un contenedor con el atributo `itemprop="rating"`, y también se puede usar una escala personalizada con valores mínimos y máximos.

4. **Impacto en los resultados de búsqueda**: La implementación de estos microdatos puede hacer que la reseña sea entendida y mostrada de manera más rica en los resultados de búsqueda, lo que puede mejorar la visibilidad del sitio en los motores de búsqueda.

Este enfoque mejora la accesibilidad y facilita que los motores de búsqueda como Google presenten un "fragmento enriquecido" en los resultados, mostrando detalles adicionales de la reseña, como la calificación, el nombre del reseñador y la fecha, lo cual puede atraer más clics.
 
---
