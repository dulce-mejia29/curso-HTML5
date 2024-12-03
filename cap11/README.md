# CAP 11 
El texto describe cómo utilizar la API de historial de HTML5 para manipular la URL de la barra de direcciones en un navegador sin hacer una recarga completa de la página, lo que mejora la experiencia de navegación en aplicaciones web con muchos scripts. La API permite cambiar la URL en la barra de direcciones y actualizar el contenido de una página sin recargarla, creando una ilusión de navegación entre páginas. 

Para lograr esto, se cargan solo las partes diferentes de una página cuando el usuario navega entre ellas, se insertan en la página actual y se actualiza la URL usando `history.pushState()`. Este proceso simula el cambio de páginas sin recargar el contenido, lo que mejora el rendimiento.

Se utiliza un ejemplo de una galería de fotos en línea, donde al hacer clic en los enlaces "Siguiente" o "Anterior", se cambia solo la foto sin recargar la página, y la URL se actualiza. Al presionar el botón "Atrás" del navegador, la página vuelve a su estado anterior gracias al evento `popstate`. Todo esto permite que la experiencia de navegación sea más rápida y fluida, pero sin que el usuario note que no hubo una actualización completa de la página.
