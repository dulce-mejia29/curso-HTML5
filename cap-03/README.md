# RESUMEN CAPITULO 3


**doctype**

El **doctype** es una declaración que le indica al navegador cómo debe renderizar una página web. Surgió para solucionar un problema con las primeras versiones de Internet Explorer (IE5/Mac), que, al mejorar la compatibilidad con estándares, rompía páginas creadas en base a las peculiaridades de navegadores antiguos.

Existen tres modos principales de renderización según el doctype:
- **Modo peculiar:** Se utiliza para páginas antiguas que dependen de comportamientos no estándares.
- **Modo estándar:** Los navegadores siguen las especificaciones actuales de los estándares web.
- **Modo casi estándar:** Implementa peculiaridades limitadas, principalmente en el manejo de celdas de tablas.

El doctype de HTML5 es simple y activa el modo estándar en todos los navegadores modernos:

```html
<!DOCTYPE html>
``` 

Este formato es más corto y fácil de usar que los antiguos, como el de XHTML.

## RAIZ

En HTML, el **elemento raíz** es el contenedor más externo de la página, y se representa con la etiqueta `<html>`. Es el "padre" de todos los demás elementos y estructura la página como un árbol con nodos padres, hijos y hojas. En versiones anteriores como XHTML, el elemento raíz incluía atributos como `xmlns` para definir el espacio de nombres y `xml:lang` para indicar el idioma. Sin embargo, en **HTML5**, estos atributos ya no son necesarios.

El marcado básico de un elemento raíz en HTML5 se simplifica a:

```html
<html lang="en">
```

Esto es suficiente para definir el idioma de la página. Puedes eliminar el atributo `xmlns` y también el atributo `xml:lang`, ya que el primero es redundante en HTML5 y el segundo solo es relevante en XHTML.

**ELEMENTO <head>**
El siguiente elemento que aparece justo después del elemento raíz `<html>` es el elemento `<head>`, que contiene **metadatos** sobre la página web. Los metadatos son información sobre la página misma, como su codificación de caracteres, enlaces a archivos CSS, favicons y otros recursos. Aunque el elemento `<head>` en sí no ha cambiado mucho en HTML5, los elementos que contiene son cruciales.

Aquí tienes un ejemplo típico de lo que podría contener el elemento `<head>` en HTML5:

```html
<head>
  <meta charset="utf-8">
  <title>My Weblog</title>
  <link rel="stylesheet" href="style-original.css">
  <link rel="alternate" type="application/atom+xml" title="My Weblog feed" href="/feed/">
  <link rel="search" type="application/opensearchdescription+xml" title="My Weblog search" href="opensearch.xml">
  <link rel="shortcut icon" href="/favicon.ico">
</head>
```

### Desglose de los elementos dentro de `<head>`:

1. **`<meta charset="utf-8">`**: 
   - Este elemento define la codificación de caracteres de la página, que en este caso es UTF-8. En HTML5, esta es la forma simplificada de declarar la codificación de la página, reemplazando la forma más antigua y verbosa:
     ```html
     <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
     ```

2. **`<title>`**:
   - Define el título de la página, que se muestra en la pestaña del navegador y se usa en los resultados de los motores de búsqueda. 
   ```html
   <title>My Weblog</title>
   ```

3. **`<link rel="stylesheet">`**:
   - Vincula una hoja de estilos CSS externa que define la presentación visual de la página.
   ```html
   <link rel="stylesheet" href="style-original.css">
   ```

4. **`<link rel="alternate">`**:
   - Proporciona un enlace alternativo, como un feed Atom o RSS. Este ejemplo enlaza el feed del blog:
   ```html
   <link rel="alternate" type="application/atom+xml" title="My Weblog feed" href="/feed/">
   ```

5. **`<link rel="search">`**:
   - Indica un archivo de descripción de búsqueda para navegadores o aplicaciones que soporten OpenSearch.
   ```html
   <link rel="search" type="application/opensearchdescription+xml" title="My Weblog search" href="opensearch.xml">
   ```

6. **`<link rel="shortcut icon">`**:
   - Establece el favicon, el pequeño ícono que aparece en la pestaña del navegador.
   ```html
   <link rel="shortcut icon" href="/favicon.ico">
   ```

En resumen, el **elemento `<head>`** actúa como el contenedor de estos metadatos importantes, que definen aspectos técnicos de la página, como su estilo, codificación y recursos adicionales necesarios.

**CODIFICACION DE CARACTERES**
La **codificación de caracteres** es fundamental para que las computadoras representen texto en una forma que los humanos puedan entender. Mientras que para los humanos el "texto" es una colección de letras y símbolos que vemos en la pantalla, para las computadoras, el texto es una secuencia de bits y bytes que necesitan ser interpretados de acuerdo con una codificación específica.

### ¿Qué es la codificación de caracteres?

La **codificación de caracteres** proporciona una correspondencia entre los caracteres visibles (como letras, números y símbolos) y las secuencias de bytes que las computadoras almacenan y procesan. Existen diferentes codificaciones de caracteres optimizadas para varios idiomas o conjuntos de caracteres. Ejemplos incluyen codificaciones específicas para el ruso, el chino o el inglés, así como codificaciones más universales como **UTF-8** que pueden manejar varios idiomas y símbolos.

Cada codificación puede representar los mismos caracteres, pero puede usar diferentes secuencias de bytes para hacerlo. En este sentido, la codificación es como una "clave de descifrado" para convertir bytes en texto visible.

### Cómo determinan los navegadores la codificación

Los navegadores web necesitan saber en qué codificación está escrita una página web para poder mostrarla correctamente. Esto puede hacerse de varias formas:

1. **Encabezado HTTP**:
   - El servidor puede enviar un encabezado que indique la codificación del contenido, por ejemplo:
     ```
     Content-Type: text/html; charset="utf-8"
     ```
   - Esto le dice al navegador que el contenido que está recibiendo es HTML y que está codificado en **UTF-8**, una codificación que puede representar prácticamente cualquier carácter de cualquier idioma.

2. **Declaración dentro del HTML**:
   - No siempre se tiene control sobre los encabezados HTTP, especialmente en plataformas como Blogger, donde los servidores están gestionados por terceros. Por lo tanto, HTML permite declarar la codificación dentro del propio documento con una etiqueta `<meta>`. Esto era común en HTML4:
     ```html
     <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
     ```
   - Esta etiqueta le indica al navegador la codificación del documento, en este caso también **UTF-8**.

3. **Método más sencillo en HTML5**:
   - HTML5 introdujo una versión más simple de la declaración de codificación:
     ```html
     <meta charset="utf-8">
     ```
   - Este formato abreviado es más fácil de usar y funciona en todos los navegadores modernos. El propósito sigue siendo el mismo: decirle al navegador que el documento usa la codificación **UTF-8**.

### ¿Por qué es importante especificar la codificación?

Especificar la codificación de caracteres en cada página web es esencial por varias razones:
- **Compatibilidad global**: Permite que el documento se vea correctamente en diferentes navegadores y sistemas operativos.
- **Seguridad**: La falta de una declaración de codificación puede abrir la puerta a ciertos tipos de vulnerabilidades de seguridad.
- **Estabilidad**: Sin una declaración adecuada, los caracteres pueden interpretarse incorrectamente, lo que resulta en texto ilegible o corrupto.

### ¿Siempre es necesario declarar la codificación?

**Sí**, siempre se debe declarar la codificación, incluso si no se están usando "caracteres especiales". No hacerlo puede generar problemas en la representación del texto o abrir la posibilidad de ataques de seguridad.

### EN CONCLUSION:
La **codificación de caracteres** es compleja y es esencial para que las páginas web funcionen correctamente. Siempre debes especificar una codificación, ya sea a través de un encabezado HTTP o con una declaración `<meta>`. La forma más simple y moderna de hacerlo es usando el formato de HTML5:

```html
<meta charset="utf-8">
``` 

Esto garantizará que tu página web sea interpretada correctamente por los navegadores y que todo el texto, incluidos los caracteres especiales o multilingües, se muestre como debería.

**RELACIONES DE HTML**

En HTML, los enlaces no solo apuntan a otras páginas web, sino que también pueden describir **relaciones** que ofrecen información adicional sobre el propósito del enlace. Esto se expresa a través del atributo `rel`. Las relaciones de enlaces ayudan a completar la frase: *"Estoy apuntando a esta página porque..."*. Estas relaciones permiten que los navegadores y motores de búsqueda interpreten mejor el significado o el propósito de un enlace, facilitando una navegación y funcionalidad más clara.

### Tipos de enlaces y relaciones

HTML5 divide las relaciones de enlaces en dos categorías principales:

1. **Enlaces a recursos externos**: Estos enlaces apuntan a recursos externos que se utilizan para mejorar el documento actual. Ejemplo típico: hojas de estilo CSS.
   
2. **Hipervínculos a otros documentos**: Son los enlaces tradicionales que apuntan a otras páginas web o documentos. No son esenciales para el funcionamiento de la página actual.

#### Ejemplos comunes de relaciones de enlace:

- **rel="stylesheet"**: 
   - Se utiliza para enlazar a una hoja de estilo CSS externa que contiene reglas de estilo que el navegador aplicará al documento.
   ```html
   <link rel="stylesheet" href="style.css">
   ```

- **rel="alternate"**:
   - Esta relación indica que el enlace lleva a una versión alternativa del documento actual. Un ejemplo típico sería un feed RSS o una versión en otro formato, como PDF.
   ```html
   <link rel="alternate" type="application/rss+xml" href="/feed/rss.xml" />
   ```

- **rel="icon"**:
   - Asocia un pequeño icono (favicon) con la página, que suele mostrarse en la barra de direcciones del navegador o en las pestañas.
   ```html
   <link rel="icon" href="/favicon.ico" />
   ```

- **rel="author"**:
   - Indica información sobre el autor del documento. Puede ser un enlace a una página "sobre el autor" o a un correo electrónico.
   ```html
   <link rel="author" href="/about-author.html">
   ```

- **rel="nofollow"**:
   - Este valor se usa principalmente en enlaces para señalar que no se debe transmitir la autoridad del enlace al destino (importante en SEO). Esto es útil para enlaces generados por usuarios, como en los comentarios, para evitar spam.
   ```html
   <a href="https://example.com" rel="nofollow">Link</a>
   ```

- **rel="prefetch"**:
   - Indica que es probable que el recurso especificado sea necesario en el futuro, lo que permite a los navegadores almacenarlo en caché de antemano.
   ```html
   <link rel="prefetch" href="next-page.html" />
   ```

- **rel="search"**:
   - Apunta a un documento de OpenSearch que proporciona un servicio de búsqueda relacionado con el documento actual.
   ```html
   <link rel="search" href="/opensearch.xml" />
   ```

### Uso de `rel` en HTML

Los atributos `rel` se utilizan tanto en elementos `<link>` como en hipervínculos (`<a>`), aunque las relaciones de enlaces son más comunes en los elementos `<link>` dentro del `<head>` del documento, que se utilizan para conectar recursos externos.

#### Enlaces de hipervínculo con relaciones:

Un enlace regular (`<a href="...">`) también puede incluir relaciones de enlace en su atributo `rel`:

- **rel="external"**: Indica que el enlace lleva a un sitio externo.
   ```html
   <a href="https://example.com" rel="external">External Link</a>
   ```

- **rel="tag"**: Se utiliza para definir que un enlace es una "etiqueta" o "categoría" relacionada con el documento actual. Común en blogs y sitios de marcado.
   ```html
   <a href="/tags/technology" rel="tag">Technology</a>
   ```

### Creación de relaciones personalizadas

El atributo `rel` está estandarizado para evitar que los desarrolladores inventen valores sin sentido. Sin embargo, el proceso para proponer nuevas relaciones está gestionado por el **WHATWG**, que mantiene un registro de valores propuestos.

### En conclusion 

El uso de relaciones en los enlaces (`rel`) en HTML es una manera de proporcionar un contexto adicional sobre por qué se está enlazando a un recurso o documento específico. Las relaciones comunes como `rel="stylesheet"`, `rel="alternate"`, `rel="icon"`, y `rel="nofollow"` ofrecen funcionalidades útiles que mejoran la navegación, SEO, y la experiencia del usuario, mientras que otros valores más avanzados permiten mejorar la gestión de recursos y la organización de sitios web complejos.

**NUEVOS ELEMENTOS DE HTML-5**

HTML5 introdujo varios elementos semánticos diseñados para estructurar el contenido de manera más clara y comprensible tanto para los humanos como para los navegadores y motores de búsqueda. Estos elementos permiten organizar el contenido según su significado, lo que mejora la accesibilidad, SEO y la mantenibilidad del código.

A continuación, se describen algunos de los nuevos elementos semánticos más importantes en HTML5:

#### `<section>`
El elemento `<section>` representa una sección genérica de un documento o aplicación, generalmente agrupada temáticamente y acompañada de un encabezado. Es ideal para dividir contenido en partes significativas, como capítulos de un libro o secciones numeradas de una tesis. 

**Ejemplo de uso:**
```html
<section>
  <h2>Introducción</h2>
  <p>Esta es la introducción a la página.</p>
</section>
```

#### `<nav>`
El elemento `<nav>` se utiliza para representar una sección de navegación que contiene enlaces a otras páginas o a secciones dentro de la misma página. No todos los conjuntos de enlaces deben estar dentro de un `<nav>`, solo aquellos que son bloques principales de navegación.

**Ejemplo de uso:**
```html
<nav>
  <ul>
    <li><a href="/home">Inicio</a></li>
    <li><a href="/about">Acerca de</a></li>
    <li><a href="/contact">Contacto</a></li>
  </ul>
</nav>
```

#### `<article>`
El elemento `<article>` se usa para representar un bloque de contenido autónomo y reutilizable, como una publicación de blog, un artículo de una revista, un comentario de un foro o cualquier otro contenido que pueda existir de manera independiente.

**Ejemplo de uso:**
```html
<article>
  <h2>Título del artículo</h2>
  <p>Este es el contenido de un artículo.</p>
</article>
```

#### `<aside>`
El elemento `<aside>` representa contenido tangencial al principal, como una barra lateral o información adicional. A menudo se usa para mostrar contenido relacionado que puede considerarse independiente del flujo principal, como anuncios, citas o listas de recursos.

**Ejemplo de uso:**
```html
<aside>
  <h3>Datos adicionales</h3>
  <p>Esta información es relevante pero no parte del contenido principal.</p>
</aside>
```

#### `<hgroup>`
El elemento `<hgroup>` agrupa múltiples niveles de encabezados cuando hay más de uno en una sección, como cuando hay un título y un subtítulo juntos. Sin embargo, este elemento ha sido poco utilizado y en gran parte es considerado innecesario.

**Ejemplo de uso:**
```html
<hgroup>
  <h1>Título principal</h1>
  <h2>Subtítulo del artículo</h2>
</hgroup>
```

#### `<header>`
El elemento `<header>` representa el encabezado de una sección o página. Puede contener títulos, logotipos, tablas de contenido, formularios de búsqueda, o cualquier elemento introductorio relacionado con la navegación o estructura de la página.

**Ejemplo de uso:**
```html
<header>
  <h1>Encabezado de la página</h1>
  <nav>
    <a href="#seccion1">Sección 1</a>
    <a href="#seccion2">Sección 2</a>
  </nav>
</header>
```

#### `<footer>`
El elemento `<footer>` se usa para marcar el pie de una sección o documento. A menudo contiene información de derechos de autor, enlaces relacionados, y datos de contacto, aunque puede aparecer en cualquier lugar dentro del contenido.

**Ejemplo de uso:**
```html
<footer>
  <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
</footer>
```

#### `<time>`
El elemento `<time>` representa una fecha o una hora. Permite marcar fechas o tiempos específicos de manera estructurada, incluyendo la zona horaria si es necesario.

**Ejemplo de uso:**
```html
<time datetime="2024-10-21">21 de octubre de 2024</time>
```

#### `<mark>`
El elemento `<mark>` se utiliza para resaltar partes del texto con algún propósito de referencia o relevancia en un contexto determinado. Se usa para resaltar información importante en un documento.

**Ejemplo de uso:**
```html
<p>El evento <mark>JavaScript Conference 2024</mark> tendrá lugar el próximo mes.</p>
```

### Beneficios de los elementos semánticos

1. **Mejora la accesibilidad**: Los lectores de pantalla y otros dispositivos de asistencia entienden mejor el contenido cuando está estructurado semánticamente.
2. **Mejor SEO**: Los motores de búsqueda pueden interpretar el contenido de manera más precisa, lo que mejora el posicionamiento en los resultados de búsqueda.
3. **Código más limpio y mantenible**: Los desarrolladores pueden organizar y estructurar el código de manera más lógica y coherente.

### Conclusión
El uso de los nuevos elementos semánticos de HTML5 facilita la creación de documentos bien estructurados, accesibles y optimizados para motores de búsqueda, proporcionando una experiencia de usuario más clara y coherente.

**COMO LOS NAVEGADORES MANEJAN ELEMENTOS DESCONOCIDOS**

HTML5 introdujo varios elementos semánticos diseñados para estructurar el contenido de manera más clara y comprensible tanto para los humanos como para los navegadores y motores de búsqueda. Estos elementos permiten organizar el contenido según su significado, lo que mejora la accesibilidad, SEO y la mantenibilidad del código.

A continuación, se describen algunos de los nuevos elementos semánticos más importantes en HTML5:

#### `<section>`
El elemento `<section>` representa una sección genérica de un documento o aplicación, generalmente agrupada temáticamente y acompañada de un encabezado. Es ideal para dividir contenido en partes significativas, como capítulos de un libro o secciones numeradas de una tesis. 

**Ejemplo de uso:**
```html
<section>
  <h2>Introducción</h2>
  <p>Esta es la introducción a la página.</p>
</section>
```

#### `<nav>`
El elemento `<nav>` se utiliza para representar una sección de navegación que contiene enlaces a otras páginas o a secciones dentro de la misma página. No todos los conjuntos de enlaces deben estar dentro de un `<nav>`, solo aquellos que son bloques principales de navegación.

**Ejemplo de uso:**
```html
<nav>
  <ul>
    <li><a href="/home">Inicio</a></li>
    <li><a href="/about">Acerca de</a></li>
    <li><a href="/contact">Contacto</a></li>
  </ul>
</nav>
```

#### `<article>`
El elemento `<article>` se usa para representar un bloque de contenido autónomo y reutilizable, como una publicación de blog, un artículo de una revista, un comentario de un foro o cualquier otro contenido que pueda existir de manera independiente.

**Ejemplo de uso:**
```html
<article>
  <h2>Título del artículo</h2>
  <p>Este es el contenido de un artículo.</p>
</article>
```

#### `<aside>`
El elemento `<aside>` representa contenido tangencial al principal, como una barra lateral o información adicional. A menudo se usa para mostrar contenido relacionado que puede considerarse independiente del flujo principal, como anuncios, citas o listas de recursos.

**Ejemplo de uso:**
```html
<aside>
  <h3>Datos adicionales</h3>
  <p>Esta información es relevante pero no parte del contenido principal.</p>
</aside>
```

#### `<hgroup>`
El elemento `<hgroup>` agrupa múltiples niveles de encabezados cuando hay más de uno en una sección, como cuando hay un título y un subtítulo juntos. Sin embargo, este elemento ha sido poco utilizado y en gran parte es considerado innecesario.

**Ejemplo de uso:**
```html
<hgroup>
  <h1>Título principal</h1>
  <h2>Subtítulo del artículo</h2>
</hgroup>
```

#### `<header>`
El elemento `<header>` representa el encabezado de una sección o página. Puede contener títulos, logotipos, tablas de contenido, formularios de búsqueda, o cualquier elemento introductorio relacionado con la navegación o estructura de la página.

**Ejemplo de uso:**
```html
<header>
  <h1>Encabezado de la página</h1>
  <nav>
    <a href="#seccion1">Sección 1</a>
    <a href="#seccion2">Sección 2</a>
  </nav>
</header>
```

#### `<footer>`
El elemento `<footer>` se usa para marcar el pie de una sección o documento. A menudo contiene información de derechos de autor, enlaces relacionados, y datos de contacto, aunque puede aparecer en cualquier lugar dentro del contenido.

**Ejemplo de uso:**
```html
<footer>
  <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
</footer>
```

#### `<time>`
El elemento `<time>` representa una fecha o una hora. Permite marcar fechas o tiempos específicos de manera estructurada, incluyendo la zona horaria si es necesario.

**Ejemplo de uso:**
```html
<time datetime="2024-10-21">21 de octubre de 2024</time>
```

#### `<mark>`
El elemento `<mark>` se utiliza para resaltar partes del texto con algún propósito de referencia o relevancia en un contexto determinado. Se usa para resaltar información importante en un documento.

**Ejemplo de uso:**
```html
<p>El evento <mark>JavaScript Conference 2024</mark> tendrá lugar el próximo mes.</p>
```

### Beneficios de los elementos semánticos

1. **Mejora la accesibilidad**: Los lectores de pantalla y otros dispositivos de asistencia entienden mejor el contenido cuando está estructurado semánticamente.
2. **Mejor SEO**: Los motores de búsqueda pueden interpretar el contenido de manera más precisa, lo que mejora el posicionamiento en los resultados de búsqueda.
3. **Código más limpio y mantenible**: Los desarrolladores pueden organizar y estructurar el código de manera más lógica y coherente.

### Conclusión
El uso de los nuevos elementos semánticos de HTML5 facilita la creación de documentos bien estructurados, accesibles y optimizados para motores de búsqueda, proporcionando una experiencia de usuario más clara y coherente.

**ENCABEZADOS**

En HTML5, los encabezados y la estructura de documentos han sido mejorados con nuevos elementos semánticos para hacer más claro el significado del contenido. Vamos a ver cómo algunos de estos conceptos pueden aplicarse en tu ejemplo.

En el marcado original:

```html
<div id="header">
  <h1>My Weblog</h1>
  <p class="tagline">A lot of effort went into making this effortless.</p>
</div>

<div class="entry">
  <h2>Travel day</h2>
</div>

<div class="entry">
  <h2>I'm going to Prague!</h2>
</div>
```

Este código es válido en HTML5, pero tiene algunas áreas que podrían beneficiarse de los nuevos elementos semánticos. En lugar de utilizar un `div` genérico con el `id="header"`, puedes reemplazarlo con un elemento `<header>`. Además, el eslogan que acompaña al título principal puede ser marcado con un `<hgroup>`, que permite agrupar encabezados relacionados sin crear nodos adicionales innecesarios en el esquema del documento.

### Optimización con HTML5

Aquí está el marcado actualizado con los nuevos elementos semánticos de HTML5:

```html
<header>
  <hgroup>
    <h1>My Weblog</h1>
    <h2>A lot of effort went into making this effortless.</h2>
  </hgroup>
</header>

<div class="entry">
  <h2>Travel day</h2>
</div>

<div class="entry">
  <h2>I'm going to Prague!</h2>
</div>
```

### Ventajas de usar `<header>` y `<hgroup>`

1. **Claridad semántica**: El elemento `<header>` indica claramente que el contenido contiene información introductoria o de encabezado. Los navegadores y motores de búsqueda entienden mejor la estructura del documento.
2. **Evitar nodos fantasmas**: Con el uso de `<hgroup>`, el eslogan ahora está asociado con el título principal (`<h1>`) sin crear nodos adicionales que puedan interferir con la estructura del documento.
3. **Mejor accesibilidad**: Los lectores de pantalla y otras tecnologías de asistencia pueden interpretar más claramente el propósito del encabezado y navegar por el documento con mayor facilidad.

### Esquema del documento resultante

Con esta estructura, el esquema del documento ahora sería:

```
My Weblog (h1 of its hgroup)
   |
   +--Travel day (h2)
   |
   +--I'm going to Prague! (h2)
```

Esto asegura que el título del blog es el nodo raíz y que los encabezados de las entradas (como "Travel day" y "I'm going to Prague!") están correctamente organizados sin crear desorden innecesario. ¡Así es como puedes mejorar tanto la semántica como la accesibilidad de tu HTML!

**ARTICULOS**

En HTML5, el elemento `<article>` se introdujo para representar contenido independiente y autónomo, como artículos de blogs, publicaciones, o cualquier otro fragmento de contenido que se pueda sindicar o reutilizar. Veamos cómo se aplican estos conceptos en tu ejemplo y qué beneficios aportan.

### Código original:

```html
<div class="entry">
  <p class="post-date">October 22, 2009</p>
  <h2>
    <a href="#"
       rel="bookmark"
       title="link to this post">
       Travel day
    </a>
  </h2>
  …
</div>
```

Este marcado es correcto, pero HTML5 nos ofrece una forma más semántica y clara de estructurarlo utilizando el elemento `<article>` y otros elementos semánticos.

### Código optimizado con HTML5:

```html
<article>
  <header>
    <p class="post-date">October 22, 2009</p>
    <h1>
      <a href="#"
         rel="bookmark"
         title="link to this post">
         Travel day
      </a>
    </h1>
  </header>
  …
</article>
```

### Desglose de la optimización:

1. **Uso de `<article>`**: 
   - El contenido que antes estaba dentro de un `<div class="entry">` ahora se coloca dentro de un `<article>`. Esto indica claramente que el contenido es un artículo autónomo que puede ser independiente o sindicado.
   - Cada `<article>` se convierte en un nodo independiente en el esquema del documento.

2. **Encabezado del artículo con `<header>`**:
   - El `<header>` se utiliza para agrupar los elementos relacionados con el encabezado del artículo, como la fecha de publicación (`<p class="post-date">`) y el título del artículo (`<h1>`).
   - El uso de `<header>` dentro de `<article>` no interfiere con el esquema del documento global, ya que cada artículo crea su propia "sección", que puede tener su propio encabezado.

3. **Cambio de `<h2>` a `<h1>`**:
   - El título del artículo ahora es un `<h1>`, ya que dentro de un `<article>`, el uso de `<h1>` no rompe la jerarquía de encabezados en el documento. Cada artículo es una sección independiente, y puede tener su propio `<h1>`.
   - En HTML4, solo se permitía un `<h1>` por página para estructurar el documento, pero en HTML5 cada nueva sección (como `<article>`) puede tener su propio `<h1>` sin afectar la estructura global.

### Beneficios del uso de `<article>` y `<header>`:

1. **Estructura más clara y semántica**:
   - Ahora, los navegadores, motores de búsqueda y lectores de pantalla entienden que cada `<article>` es una unidad independiente de contenido, lo que mejora la accesibilidad y el SEO.

2. **Reutilización del contenido**:
   - Como el contenido dentro de `<article>` está estructurado como una unidad autónoma, es más fácil reutilizarlo o distribuirlo sin necesidad de modificar los encabezados o el contenido.

3. **Escalabilidad**:
   - Puedes agregar múltiples artículos a la misma página sin preocuparte por ajustar los niveles de encabezado (como hacer que un título sea `<h2>` en lugar de `<h1>`). El esquema del documento seguirá siendo claro porque cada `<article>` crea su propio nodo en el esquema.

### Esquema del documento resultante:

```
Travel day (h1 in article)
   |
   … (contenido del artículo)
```

Al tener el contenido estructurado así, la página tiene un esquema más claro, con cada artículo representado como un nodo independiente en el esquema del documento.

### Consideraciones finales:
- En HTML5, la creación de secciones autónomas con `<article>` y `<header>` hace que sea más fácil manejar y escalar páginas con múltiples secciones o artículos, sin necesidad de cambiar manualmente el nivel de los encabezados.
- Si usas ambos sistemas (HTML4 y HTML5) en la misma página, como encabezados `<h1>` a `<h6>` mezclados con los nuevos elementos de sección, asegúrate de revisar el esquema generado para evitar inconsistencias.

**FECHA Y HORA**

El elemento `<time>` en HTML5 es una herramienta poderosa para representar fechas y horas de manera semántica, lo que facilita a los navegadores, motores de búsqueda y otras herramientas comprender la información temporal de tu contenido. Vamos a revisar cómo usarlo de manera óptima, basándonos en el ejemplo de tu página.

### Código original:

```html
<div class="entry">
  <p class="post-date">October 22, 2009</p>
  <h2>Travel day</h2>
</div>
```

Aunque este marcado es válido en HTML5, carece de semántica que permita a las máquinas entender que estamos tratando con una fecha. Con HTML5, el uso del elemento `<time>` agrega semántica adicional al contenido temporal.

### Código optimizado con HTML5 usando `<time>`:

```html
<article>
  <header>
    <time datetime="2009-10-22" pubdate>October 22, 2009</time>
    <h1>
      <a href="#"
         rel="bookmark"
         title="link to this post">
         Travel day
      </a>
    </h1>
  </header>
  <p>Lorem ipsum dolor sit amet…</p>
</article>
```

### Explicación de las mejoras:

1. **Uso del elemento `<time>`**:
   - El elemento `<time>` permite asociar una fecha o una hora con un contenido. Aquí lo utilizamos para representar la fecha de publicación del artículo.
   - El atributo `datetime="2009-10-22"` proporciona una versión legible por máquina de la fecha, que sigue el formato ISO 8601 (AAAA-MM-DD para fechas y horas).
   - Este formato es crucial para mejorar la comprensión de la fecha por parte de motores de búsqueda, herramientas de sindicación, y navegadores, y mejora la accesibilidad.

2. **Atributo `pubdate`**:
   - El atributo `pubdate` es booleano y señala que la fecha asociada es la fecha de publicación del artículo.
   - Este atributo es útil cuando el contenido dentro de `<time>` está relacionado con la publicación de un artículo o post, y le indica al navegador que este es un contenido con fecha publicable.
   - Si estuvieras marcando una fecha de modificación o cualquier otra fecha distinta a la de publicación, podrías omitir este atributo.

3. **Mantener el contenido textual legible por humanos**:
   - Aunque el atributo `datetime` utiliza un formato legible por máquinas, el texto entre las etiquetas `<time></time>` sigue siendo completamente personalizable para mostrar una versión más comprensible para los usuarios humanos, como "October 22, 2009" o incluso algo más descriptivo como "last Thursday".

### Ejemplos adicionales:

1. **Incluir solo la fecha**:

   ```html
   <time datetime="2009-10-22" pubdate>October 22, 2009</time>
   ```

2. **Incluir fecha y hora con zona horaria**:

   Si también quisieras incluir la hora de publicación con un formato más detallado, podrías hacerlo así:

   ```html
   <time datetime="2009-10-22T13:59:47-04:00" pubdate>
     October 22, 2009 1:59pm EDT
   </time>
   ```

   Aquí, el formato `2009-10-22T13:59:47-04:00` indica una fecha (22 de octubre de 2009), una hora (1:59:47 PM) y una zona horaria (-04:00, que representa EDT, Eastern Daylight Time).

3. **Contenido flexible en el `<time>`**:

   Si prefieres mostrar un texto más informal pero manteniendo la precisión semántica, puedes hacer algo como:

   ```html
   <time datetime="2009-10-22">last Thursday</time>
   ```

   Aquí, aunque el texto dice "last Thursday", el valor dentro del atributo `datetime` sigue siendo exacto y legible por máquinas.

### Beneficios:

1. **Mejora del SEO y accesibilidad**:
   - Los motores de búsqueda como Google reconocen el elemento `<time>` y utilizan la información temporal para indexar mejor tu contenido.
   - Las herramientas de lectura de pantalla para usuarios con discapacidades también pueden reconocer mejor las fechas con el uso de `<time>`, haciendo que tu sitio sea más accesible.

2. **Formato universal**:
   - Al utilizar el formato ISO 8601, aseguras que la fecha sea comprendida de manera uniforme por todos los agentes de usuario, independientemente de la configuración regional del lector o del sistema.

3. **Facilidad de sindicación**:
   - Cuando se utilizan servicios que sindican contenido, como RSS o Atom, el uso del elemento `<time>` asegura que la fecha de publicación esté bien estructurada y pueda ser leída correctamente.

### Consideración final:
Si bien el uso del `<time>` es opcional, su implementación en el marcado es una buena práctica que añade una capa extra de semántica y precisión. El ejemplo que hemos visto ilustra cómo HTML5 proporciona una solución eficiente y escalable para manejar fechas y horarios en documentos web.

**NAVEGACION**

  En HTML5, la semántica y la accesibilidad son elementos clave, especialmente en la navegación del sitio web. La introducción del elemento `<nav>` mejora la claridad y la accesibilidad del código, lo que permite que tanto las máquinas como las personas con discapacidades identifiquen fácilmente las áreas de navegación.

### Código original:

```html
<div id="nav">
  <ul>
    <li><a href="#">home</a></li>
    <li><a href="#">blog</a></li>
    <li><a href="#">gallery</a></li>
    <li><a href="#">about</a></li>
  </ul>
</div>
```

Este código es HTML5 válido, pero carece de semántica específica que indique que se trata de una sección de navegación. Aunque visualmente es claro, no proporciona la información semántica necesaria para usuarios con discapacidades o para herramientas de accesibilidad como lectores de pantalla.

### Mejora con `<nav>`:

```html
<nav>
  <ul>
    <li><a href="#">home</a></li>
    <li><a href="#">blog</a></li>
    <li><a href="#">gallery</a></li>
    <li><a href="#">about</a></li>
  </ul>
</nav>
```

### Explicación de las mejoras:

1. **El uso del elemento `<nav>`**:
   - El elemento `<nav>` está específicamente diseñado para agrupar secciones de navegación en una página web. Al envolver la lista de enlaces dentro de `<nav>`, le estamos diciendo a los navegadores, motores de búsqueda y tecnologías asistivas que este bloque contiene los enlaces principales de navegación.
   - Esto permite que los lectores de pantalla y otras herramientas de accesibilidad salten o identifiquen fácilmente las secciones de navegación sin necesidad de depender solo del orden visual del contenido.

2. **Mejora de la accesibilidad**:
   - Para los usuarios que dependen de navegadores de texto o lectores de pantalla, el uso del elemento `<nav>` proporciona una referencia clara y semántica a la barra de navegación. Esto les facilita saltar rápidamente a la sección deseada o evitar la navegación si desean ir directamente al contenido.
   - Además, para usuarios con movilidad reducida, que pueden navegar la web utilizando teclados u otras tecnologías, la barra de navegación estructurada con `<nav>` permite un acceso más rápido y eficiente.

3. **Futuro de los enlaces de omisión (skip links)**:
   - Los "enlaces de omisión" (`skip links`) son una herramienta clave en HTML4 para que los usuarios de lectores de pantalla puedan saltar directamente a secciones específicas de la página, como el contenido principal.
   - En HTML5, con la introducción del elemento `<nav>`, los enlaces de omisión eventualmente podrían volverse obsoletos, ya que los lectores de pantalla modernos podrían detectar automáticamente las secciones de navegación y ofrecer opciones para saltar de manera nativa.
   - Sin embargo, no todos los usuarios tienen acceso inmediato a las versiones más recientes de los lectores de pantalla, por lo que es recomendable seguir ofreciendo enlaces de omisión como respaldo durante la transición.

### Ejemplo de un enlace de omisión adicional:

Para aquellos usuarios que necesiten saltar la navegación y acceder directamente al contenido principal, puedes agregar un enlace de omisión:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>

<nav>
  <ul>
    <li><a href="#">home</a></li>
    <li><a href="#">blog</a></li>
    <li><a href="#">gallery</a></li>
    <li><a href="#">about</a></li>
  </ul>
</nav>

<main id="main-content">
  <h1>Welcome to our website</h1>
  <p>Main content goes here...</p>
</main>
```

- Este enlace permite a los usuarios de teclados o lectores de pantalla saltar directamente al contenido principal de la página.

### Beneficios del uso de `<nav>`:

1. **Claridad Semántica**: Mejora la semántica del código HTML, facilitando que las máquinas entiendan la estructura y propósito del contenido.
2. **Mejora de la Accesibilidad**: Los lectores de pantalla pueden identificar claramente las secciones de navegación y ofrecer a los usuarios opciones para navegar de manera más eficiente.
3. **SEO (Optimización para Motores de Búsqueda)**: Los motores de búsqueda como Google pueden interpretar más fácilmente las secciones de navegación, lo que potencialmente mejora la clasificación y la indexación de tu sitio.

### Conclusión:
El uso del elemento `<nav>` en HTML5 no solo mejora la accesibilidad y la experiencia del usuario, sino que también proporciona beneficios semánticos y de SEO. Si bien los enlaces de omisión siguen siendo útiles por ahora, la transición hacia lectores de pantalla completamente compatibles con HTML5 reducirá la necesidad de esos enlaces en el futuro. Al adoptar estas prácticas, haces que tu sitio sea más inclusivo y accesible para todos.

**PIE DE PAGÍNA**

El pie de página de un sitio web es una sección esencial que proporciona información adicional sobre el sitio, como derechos de autor, enlaces a políticas o formas de contacto. En HTML5, el uso del elemento `<footer>` mejora la semántica del código y facilita su comprensión tanto para los motores de búsqueda como para las tecnologías de asistencia.

### Código original:

```html
<div id="footer">
  <p>&#167;</p>
  <p>&#169; 2001&#8211;9 <a href="#">Mark Pilgrim</a></p>
</div>
```

Este código es HTML5 válido, pero para una mejor semántica, puede ser reemplazado por el elemento `<footer>`:

### Mejora con `<footer>`:

```html
<footer>
  <p>&#167;</p>
  <p>&#169; 2001&#8211;9 <a href="#">Mark Pilgrim</a></p>
</footer>
```

### Explicación:

1. **Uso de `<footer>`**: 
   - El elemento `<footer>` está diseñado específicamente para contener la información de pie de página de una página web o una sección de contenido. Es adecuado para contener datos como derechos de autor, enlaces de contacto, términos de servicio, entre otros. Al usar `<footer>`, se mejora la semántica del documento y se clarifica su estructura para las tecnologías de asistencia.
   
2. **Información relevante en `<footer>`**:
   - Según la especificación HTML5, un pie de página generalmente contiene detalles sobre la sección o el documento en el que se encuentra, como datos de derechos de autor, información de autoría y enlaces relevantes. Esto lo convierte en un lugar adecuado para elementos que no sean cruciales para la navegación principal, pero que siguen siendo útiles para el usuario.

3. **Comparación con otros sitios**:
   - **CNN** utiliza su pie de página para incluir derechos de autor, enlaces a términos de servicio y políticas, así como a páginas como "Contáctenos" y "Acerca de nosotros".
   - **Google**, a pesar de su simplicidad visual, tiene en su pie de página enlaces a programas de publicidad, soluciones comerciales y políticas de privacidad.

4. **Pies de página complejos ("Fat footers")**:
   - Sitios como **W3C** utilizan lo que se llama un "pie de página gordo", con varias columnas y una gran cantidad de información. Estos pies de página pueden contener múltiples secciones como navegación, contacto y actualizaciones.

### Ejemplo de un "pie de página gordo" semántico en HTML5:

Aquí tienes un ejemplo de cómo convertir un pie de página complejo en un marcado HTML5 semántico, utilizando `<footer>`, `<nav>`, y `<section>`:

```html
<footer>
  <nav>
    <h1>Navigation</h1>
    <ul>
      <li><a href="/">Home</a></li> 
      <li><a href="/standards/">Standards</a></li> 
      <li><a href="/participate/">Participate</a></li> 
      <li><a href="/Consortium/membership">Membership</a></li> 
      <li><a href="/Consortium/">About W3C</a></li> 
    </ul>
  </nav>
  <nav>
    <h1>Contact W3C</h1>
    <ul>
      <li><a href="/Consortium/contact">Contact</a></li> 
      <li><a href="/Help/">Help and FAQ</a></li> 
      <li><a href="/Consortium/sup">Donate</a></li> 
      <li><a href="/Consortium/siteindex">Site Map</a></li> 
    </ul>
  </nav>
  <section>
    <h1>W3C Updates</h1>
    <ul>
      <li><a href="http://twitter.com/W3C">Twitter</a></li>
      <li><a href="http://identi.ca/w3c">Identi.ca</a></li>
    </ul>
  </section>
  <p class="copyright">Copyright © 2009 W3C</p>
</footer>
```

### Explicación del marcado:

1. **`<footer>`**: El pie de página envuelve todo el contenido final de la página, lo que indica que esta sección contiene información de cierre.
2. **`<nav>`**: Se usa para las secciones que contienen navegación dentro del pie de página, como enlaces a otras partes del sitio o recursos adicionales.
3. **`<section>`**: Utilizado aquí para representar un bloque de contenido independiente (actualizaciones de W3C en este caso), que puede tener contenido agrupado por un tema específico.
4. **Encabezados (`<h1>`)**: Se utilizan dentro de `<nav>` y `<section>` para estructurar mejor la jerarquía de los contenidos, especialmente cuando hay varias secciones dentro del pie de página.

### Conclusión:

El uso de `<footer>` en HTML5 mejora significativamente la semántica y la accesibilidad del pie de página, haciéndolo más claro tanto para los usuarios como para las tecnologías asistivas. Implementar un pie de página bien estructurado en HTML5 no solo mejora la experiencia del usuario, sino que también optimiza el código para los motores de búsqueda y otras herramientas.
