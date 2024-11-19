# curso-HTML5

Las implementaciones y las especificaciones tienen que hacer un delicado baile juntos. 
No desea que las implementaciones se produzcan antes de que finalice la especificación, ya que las personas comienzan a depender de los detalles de las implementaciones y eso restringe la especificación. Sin embargo, tampoco desea que la especificación esté terminada antes de que haya implementaciones y de que el autor tenga experiencia con esas implementaciones, ya que necesita los comentarios.

Aquí hay una tensión inevitable, pero tenemos que salir del paso.

Mantén esta cita en el fondo de tu mente, y déjame explicarte cómo surgió HTML5.

El texto explica la importancia de los **tipos MIME** en HTML5 y cómo los navegadores los utilizan para interpretar correctamente el contenido de una página web. 
        
Cada vez que un navegador solicita una página, el servidor web envía encabezados que incluyen el tipo MIME del contenido, como `text/html` para páginas HTML o `image/jpeg` para imágenes.
        
Este encabezado es crucial para que el navegador sepa cómo mostrar el recurso solicitado.

Aunque en los primeros servidores web (1993) no se usaba el encabezado **Content-Type**, hoy en día todos los recursos en la web (páginas, imágenes, scripts, etc.) se sirven con un tipo MIME específico. Algunos navegadores pueden ignorar este encabezado en casos excepcionales, pero, en general, la web funciona gracias a estos tipos MIME. 
        
El texto promete que este concepto será importante más adelante en el contexto de HTML5.

## Una larga digresión sobre cómo se elaboran las normas

El texto explora el origen del elemento `<img>` en HTML y cómo surgió su implementación. 

Marc Andreessen propuso este elemento en 1993 para permitir la incrustación de imágenes en páginas web. 

Aunque la idea fue debatida y refinada en discusiones con otros pioneros de la web, como Tim Berners-Lee y Dave Raggett, su versión inicial fue bastante simple: un elemento que permitiría a los navegadores cargar imágenes desde URLs. 

La implementación del `<img>` evolucionó a lo largo de los años, influida por propuestas para hacer HTML más flexible y capaz de manejar otros medios, aunque algunas ideas como el uso de MIME para una mejor negociación de contenido o la etiqueta `<embed>` tardaron en consolidarse.
  ###  HTML-5
en este resumen hablamos de casi 17 años de la creacion de un elemento de HTML que se ha utlizado en practicamente todas las paginas web publicadas 

El texto refleja cómo HTTP y HTML han evolucionado exitosamente desde sus inicios, manteniéndose vigentes a lo largo de las décadas. 

Aunque HTML comenzó como un formato simple que ni siquiera admitía imágenes en línea, fue evolucionando a través de versiones como 2.0, 3.2 y 4.0. A lo largo de esta evolución, muchas ideas fueron abandonadas, pero HTML ha permanecido adaptable y compatible con versiones antiguas, como lo demuestra el hecho de que las páginas web de 1990 aún pueden visualizarse en navegadores modernos.

El desarrollo de HTML ha sido un proceso colaborativo entre fabricantes de navegadores, autores y expertos en estándares. 

Los intentos de mantener HTML "puro" o reemplazarlo han fracasado, ya que el formato siempre ha sido una "conversación" entre diversas partes. 

Asimismo, los navegadores y sistemas operativos de 1993 han cambiado drásticamente, pero algunos de los involucrados en esos primeros desarrollos aún están activos.

El texto también menciona cómo HTML surgió influenciado por sistemas previos, como Andrew, Intermedia o HyTime, que no lograron el mismo éxito. 

Finalmente, se destaca que la razón por la cual existe el elemento `<img>` en HTML se debe a que Marc Andreessen propuso y envió ese código. Aunque la implementación inicial no era perfecta y aún presenta desafíos, el código que se implementa tiende a prevalecer.

**Citas relevantes:**
1. "HTML siempre ha sido una conversación entre fabricantes de navegadores, autores, expertos en estándares y otras personas que simplemente aparecieron y les gustaba hablar sobre corchetes angulares."
2. "Ninguno de los navegadores de 1993 sigue existiendo de forma reconocible."
3. "Los que ganan son los que envían."

### EN RESUMEN
Entre 1997 y 2004, el desarrollo de HTML experimentó varios cambios clave:

- **HTML 4.0 (1997)**: El W3C publicó HTML 4.0 y cerró el grupo de trabajo HTML.
- **XML 1.0 (1998)**: Se propuso una transición a un nuevo HTML basado en XML. Esto dio lugar a **XHTML 1.0**, que reestructuraba HTML en XML.
- **XHTML Extended Forms (1999)**: Se empezó a trabajar en **XForms**, un nuevo modelo de formularios que rompía con la compatibilidad con HTML.
- **XHTML 1.1 (2001)**: Introdujo características menores y eliminó la flexibilidad del **Apéndice C** en XHTML 1.0, forzando el uso del tipo MIME `application/xhtml+xml`.
- **Manejo de errores draconiano**: A diferencia del HTML "permisivo", los documentos XHTML requerían un manejo de errores estricto, deteniendo el procesamiento ante cualquier error.
- **Tasa de errores del 99%**: Debido a que los navegadores perdonaban los errores en HTML, la mayoría de las páginas de la web tenían al menos un error, lo que generó una resistencia a la adopción de XHTML.
- **WHATWG (2004)**: El grupo de trabajo WHAT surgió como respuesta a la rigidez de XHTML, con el objetivo de desarrollar un HTML evolutivo y mantener la compatibilidad con versiones anteriores.
