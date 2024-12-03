# CAPITULO 9 
El texto describe la función de los **marcadores de posición** en formularios web en HTML5. Estos son textos que aparecen dentro de los campos de entrada mientras están vacíos y no seleccionados. Desaparecen al hacer clic o tabular en el campo. Un ejemplo típico es la barra de ubicación en navegadores como Firefox, que muestra un texto como "Buscar marcadores e historial".

Además, incluye una demostración de cómo implementarlo en HTML:  

```html
<form>
  <input name="q" placeholder="Search Bookmarks and History">
  <input type="submit" value="Search">
</form>
```

Si un navegador no es compatible con el atributo `placeholder`, simplemente lo ignora sin causar problemas.
El texto aborda el **atributo de enfoque automático** (`autofocus`) en HTML5, una mejora para formularios web que permite establecer automáticamente el foco en un campo de entrada tan pronto como se carga la página, sin necesidad de JavaScript. Esto soluciona problemas de consistencia y accesibilidad presentes en las implementaciones previas basadas en scripts.

## Direcciones de correo electrónico

1. **Ventajas del atributo `autofocus`:**  
   - Simplifica el marcado HTML y reduce el uso de JavaScript.
   - Comportamiento consistente en todos los navegadores modernos.
   - Permite a navegadores o extensiones desactivar el enfoque automático si es necesario.

   Ejemplo básico:
   ```html
   <form>
     <input name="q" autofocus>
     <input type="submit" value="Search">
   </form>
   ```

2. **Compatibilidad con navegadores antiguos:**  
   - Si el navegador no admite `autofocus`, se ignora sin causar errores.  
   - Se puede combinar con un script de reserva que detecte si el navegador soporta `autofocus`:
     ```html
     <form name="f">
       <input id="q" autofocus>
       <script>
         if (!("autofocus" in document.createElement("input"))) {
           document.getElementById("q").focus();
         }
       </script>
       <input type="submit" value="Go">
     </form>
     ```

3. **Establecer el foco de manera óptima:**  
   - Coloca el script de enfoque inmediatamente después del campo al que se refiere para minimizar interrupciones.
   - Alternativamente, usa eventos personalizados o bibliotecas como jQuery para definir cuándo establecer el foco:
     ```html
     <script>
       $(document).ready(function() {
         if (!("autofocus" in document.createElement("input"))) {
           $("#q").focus();
         }
       });
     </script>
     ```

4. **Consideraciones:**  
   - No uses `window.onload` para el enfoque, ya que espera hasta que se carguen todos los elementos de la página, lo que puede interrumpir la experiencia del usuario.
   - Usa eventos personalizados para mayor flexibilidad si necesitas mantener la lógica fuera del cuerpo del HTML.

   El texto explica el uso del nuevo tipo de entrada HTML5 **`type="email"`**, diseñado específicamente para capturar direcciones de correo electrónico en formularios web. Este nuevo tipo mejora la experiencia del usuario al optimizar la validación y entrada de datos, sin comprometer la retrocompatibilidad.

## Direcciones web

1. **Retrocompatibilidad con navegadores antiguos:**  
   - Si un navegador no reconoce `type="email"`, lo interpreta como `type="text"`, mostrando un cuadro de texto simple.  
   - Esto asegura que los formularios funcionen correctamente en cualquier navegador, incluso versiones antiguas como IE6.

2. **Validación implícita:**  
   - Los navegadores modernos que soportan `type="email"` pueden realizar una validación automática antes de enviar el formulario, verificando que el valor tenga el formato de una dirección de correo electrónico (por ejemplo, contenga un **"@"** y un **"."**).

3. **Optimización en dispositivos móviles:**  
   - En dispositivos como el iPhone, el teclado en pantalla se adapta al tipo de entrada.  
   - Para `type="email"`, se incluyen teclas específicas como **"@"** y **"."**, y la barra espaciadora se reduce, mejorando la experiencia de entrada.

4. **Implementación sencilla:**  
   - Cambiar un campo de texto convencional a `type="email"` no requiere modificaciones complejas:  
     ```html
     <form>
       <input type="email">
       <input type="submit" value="Go">
     </form>
     ```

5. **Ventajas generales:**  
   - No hay inconvenientes en adoptar `type="email"` de inmediato, ya que los navegadores que no lo soporten tratarán el campo como texto plano.  
   - Los usuarios que sí lo noten, especialmente en dispositivos móviles, apreciarán la mejora en usabilidad.

El texto explica el nuevo tipo de entrada HTML5 **`type="url"`**, diseñado específicamente para capturar direcciones web (URL) en formularios web. Este tipo facilita la entrada y validación de direcciones web de manera eficiente, con beneficios tanto en dispositivos móviles como en navegadores modernos.

## Números como Spinboxes

1. **Retrocompatibilidad con navegadores antiguos:**  
   - Si un navegador no reconoce `type="url"`, lo interpreta como `type="text"`, mostrando un campo de texto convencional.  
   - Esto asegura que los formularios funcionen correctamente en cualquier navegador, sin necesidad de cambios adicionales.

2. **Validación implícita:**  
   - Los navegadores modernos pueden realizar una validación automática del formato de la URL antes de enviar el formulario, verificando características como la presencia de "http://" o "https://", y prohibiendo espacios.

3. **Optimización en dispositivos móviles:**  
   - En dispositivos como el iPhone, el teclado en pantalla se adapta para facilitar la entrada de URL:  
     - Incluye teclas específicas como **"."**, **"/"**, y un botón **".com"**.  
     - El botón ".com" permite seleccionar otros sufijos comunes como ".org" o ".net".

4. **Uso en formularios:**  
   - Implementar `type="url"` es tan sencillo como cambiar el atributo de tipo:  
     ```html
     <form>
       <input type="url">
       <input type="submit" value="Submit">
     </form>
     ```

5. **Ventajas generales:**  
   - Mejora la experiencia del usuario en dispositivos móviles al optimizar el teclado virtual.  
   - Ofrece validación automática en navegadores modernos, ayudando a prevenir errores comunes en la entrada de direcciones web.  
   - No afecta la funcionalidad en navegadores antiguos.

El texto explica el uso de `type="number"` en HTML5, un tipo de entrada diseñado para capturar números en formularios web. Este tipo de campo incluye varias características que facilitan tanto la validación como la interacción del usuario, especialmente en navegadores modernos.

---

**Características principales:**

1. **Atributos clave para configurar el campo:**
   - **`type="number"`:** Define que el campo es numérico.
   - **`min` y `max`:** Establecen los límites mínimo y máximo del valor aceptable.  
     - Ejemplo: `min="0"` y `max="10"` aceptan números entre 0 y 10.
   - **`step`:** Define los intervalos permitidos entre valores consecutivos.  
     - Ejemplo: `step="2"` permite valores como 0, 2, 4, 6, etc.
   - **`value`:** Especifica el valor predeterminado del campo.

   **Ejemplo:**
   ```html
   <input type="number" min="0" max="10" step="2" value="6">
   ```

2. **Compatibilidad y retrocompatibilidad:**
   - En navegadores antiguos que no reconocen `type="number"`, el campo se trata como un campo de texto (`type="text"`), ignorando los atributos específicos como `min`, `max` y `step`.
   - Puedes usar herramientas como Modernizr para detectar soporte nativo y, si es necesario, implementar soluciones con JavaScript.

3. **Interacción mejorada en navegadores modernos:**
   - **Navegadores de escritorio:** Algunos, como Opera, muestran el campo como un "spinbox" con flechas para incrementar o disminuir el valor.
   - **Dispositivos móviles:** En iPhone y otros, el teclado virtual se optimiza para entrada numérica, mostrando sólo números y símbolos relacionados.

4. **Funciones de JavaScript para campos numéricos:**
   - **`input.stepUp(n)`:** Incrementa el valor en pasos de `n`.
   - **`input.stepDown(n)`:** Decrementa el valor en pasos de `n`.
   - **`input.valueAsNumber`:** Devuelve el valor actual como un número (en lugar de texto).

---

 **Ventajas:**
- **Validación automática:** Asegura que el valor ingresado esté dentro del rango y cumpla con los intervalos especificados.
- **Mejor experiencia de usuario:** Interfaz adaptada a números, especialmente en dispositivos móviles y navegadores modernos.
- **Flexibilidad:** Si el navegador no admite `type="number"`, el formulario sigue siendo funcional.

---

### Números como controles deslizantes
El campo de entrada `type="range"` en HTML5 permite capturar números a través de un control deslizante interactivo, proporcionando una alternativa visual y fácil de usar a los campos numéricos tradicionales.

---
**Características principales:**

1. **Atributos compartidos con `type="number"`:**
   - **`min` y `max`:** Determinan el rango de valores aceptables.
   - **`step`:** Define los intervalos entre valores consecutivos.  
     - Ejemplo: `step="2"` permite valores como 0, 2, 4, 6, etc.
   - **`value`:** Especifica el valor predeterminado del control.

   **Ejemplo:**
   ```html
   <input type="range" min="0" max="10" step="2" value="6">
   ```

2. **Diferencias respecto a `type="number"`:**
   - La principal diferencia es la interfaz: en lugar de un campo de texto o un spinbox con flechas, `type="range"` se representa como un control deslizante interactivo.
   - Los navegadores modernos como Chrome, Safari y Opera muestran un control deslizante funcional.
   - Navegadores más antiguos o que no admiten HTML5 tratarán el campo como `type="text"`.

3. **Experiencia de usuario:**
   - **Navegadores de escritorio:** El control deslizante incluye un "thumb" que se puede arrastrar para seleccionar un valor dentro del rango especificado.
   - **Dispositivos móviles:** Algunos navegadores móviles aún no optimizan la experiencia, representando el campo como texto o numérico estándar.

4. **Compatibilidad y retrocompatibilidad:**
   - Al igual que con `type="number"`, los navegadores que no lo admitan ignoran los atributos específicos de rango pero mantendrán el valor predeterminado y tratarán el campo como texto.

---

**Ventajas:**
- **Visualización atractiva:** Proporciona una experiencia más visual e intuitiva, ideal para seleccionar valores dentro de un rango predefinido.
- **Validación automática:** Asegura que los valores seleccionados sean válidos según los atributos `min`, `max` y `step`.
- **Versatilidad:** Funciona de inmediato en navegadores modernos y es fácilmente reemplazable con alternativas en navegadores antiguos mediante JavaScript.

---

**Limitaciones:**
- El control deslizante no muestra directamente el valor seleccionado al usuario. Esto puede solucionarse añadiendo un elemento de texto dinámico para reflejar el valor actual, como en el ejemplo siguiente:

   **Ejemplo con valor visible:**
   ```html
   <label for="slider">Seleccione un valor:</label>
   <input type="range" id="slider" min="0" max="10" step="2" value="6" oninput="document.getElementById('output').innerText = this.value">
   <span id="output">6</span>
   ```

---
### Selectores de fecha

HTML5 introduce controles nativos para la selección de fechas y horas, eliminando la necesidad de bibliotecas externas para implementarlos. Estos nuevos tipos de entrada permiten una captura de datos más específica y fácil de usar. A continuación, se detallan las características y usos de cada uno.

---

**Tipos de entrada para fechas y horas**
| Tipo de entrada          | Descripción                             | Ejemplo de uso                          |
|--------------------------|-----------------------------------------|-----------------------------------------|
| **`type="date"`**        | Selecciona una fecha (día, mes, año).   | Fecha de nacimiento, reserva.           |
| **`type="month"`**       | Selecciona un mes y año.                | Fecha de vencimiento de tarjetas.       |
| **`type="week"`**        | Selecciona una semana específica.       | Horarios semanales, planificación.      |
| **`type="time"`**        | Selecciona una hora (HH:MM).            | Horarios, alarmas.                      |
| **`type="datetime"`**    | Selecciona fecha y hora (con zona).     | Reuniones internacionales.              |
| **`type="datetime-local"`** | Fecha y hora sin zona horaria.       | Eventos locales, citas personales.      |

---

**Compatibilidad actual**
Hasta ahora, el soporte nativo de estos controles es limitado y variable. Por ejemplo:
- **Opera:** Soporta todos los controles desde su versión 9.0.
- **Otros navegadores:** Tienden a representar estos campos como simples cuadros de texto si no los reconocen.

---

**Ejemplo básico**
**Selector de fecha nativo:**
```html
<form>
  <label for="birthdate">Fecha de nacimiento:</label>
  <input type="date" id="birthdate">
  <input type="submit" value="Enviar">
</form>
```

Si el navegador no admite `type="date"`, el campo aparecerá como un cuadro de texto sin formato.

---

**Comprobación de compatibilidad y solución alternativa**
Puedes detectar si el navegador admite nativamente un selector de fechas mediante JavaScript. Si no, puedes implementar una solución basada en bibliotecas como jQuery UI o Dojo.

**Ejemplo de detección:**
```html
<script>
  var input = document.createElement("input");
  input.setAttribute("type", "date");
  if (input.type === "text") {
    console.log("El navegador no soporta selectores de fecha nativos.");
    // Implementar un selector de fecha con JavaScript.
  }
</script>
```

---

**Ventajas de los selectores nativos**
1. **Facilidad de uso:** Proporcionan una interfaz gráfica para seleccionar fechas y horas.
2. **Validación integrada:** Los navegadores que los soportan pueden validar automáticamente el formato de entrada.
3. **Menor dependencia de scripts:** No se requiere una biblioteca adicional para implementar selectores.
4. **Compatibilidad progresiva:** Los navegadores antiguos tratarán estos campos como `type="text"`, garantizando un comportamiento predecible.

---

**Limitaciones**
- **Compatibilidad desigual:** Solo algunos navegadores modernos los soportan plenamente.
- **Personalización limitada:** A diferencia de las soluciones basadas en JavaScript, los selectores nativos ofrecen pocas opciones para personalizar su apariencia o comportamiento.

---
### Cuadros de búsqueda
HTML5 introduce el atributo `type="search"`, un nuevo tipo de campo diseñado específicamente para cuadros de búsqueda en formularios web. Aunque funcionalmente similar a un cuadro de texto estándar (`type="text"`), este tipo está optimizado para mejorar la experiencia del usuario y la integración con navegadores modernos.

---
**Ejemplo básico**
```html
<form>
  <label for="search">Buscar:</label>
  <input id="search" name="q" type="search" placeholder="Escribe aquí...">
  <input type="submit" value="Buscar">
</form>
```

---
**¿Qué lo hace especial?**
1. **Optimización visual y funcional:**
   - En navegadores como **Safari** y **Google Chrome**, `type="search"` aplica mejoras visuales, como esquinas redondeadas y un botón "x" integrado que permite borrar el contenido del campo con un solo clic.
   - Estas características imitan el comportamiento de los cuadros de búsqueda nativos en aplicaciones como iTunes o sistemas macOS.

2. **Compatibilidad universal:**
   - Navegadores que no reconocen `type="search"` lo tratan como `type="text"`. Esto asegura que no haya problemas de compatibilidad.
   - Puedes implementarlo en tus formularios sin preocuparte por cómo se verá en navegadores antiguos.

3. **Ajuste a las convenciones de la plataforma:**
   - Cada navegador puede renderizar el campo según las convenciones de diseño específicas de su sistema operativo, brindando una experiencia más nativa y coherente para los usuarios.

---
**Ventajas de usar `type="search"`**
- **Mejor experiencia de usuario:** Los navegadores que soportan este tipo de campo añaden funcionalidades nativas como el botón de limpieza.
- **Semántica mejorada:** El uso de `type="search"` deja claro que el propósito del campo es buscar, lo que puede ser útil para motores de búsqueda y herramientas de accesibilidad.
- **Sin inconvenientes:** Los navegadores que no lo reconocen simplemente lo renderizan como un campo de texto, garantizando retrocompatibilidad.

---
**Ejemplo avanzado con atributos**
```html
<form>
  <label for="site-search">Buscar en el sitio:</label>
  <input id="site-search" name="q" type="search" placeholder="¿Qué necesitas?" 
         aria-label="Buscar en el sitio" autocomplete="on">
  <button type="submit">Buscar</button>
</form>
```

**Explicación de los atributos:**
- `placeholder`: Muestra un texto guía dentro del campo hasta que el usuario comience a escribir.
- `aria-label`: Mejora la accesibilidad, proporcionando un nombre accesible para el campo.
- `autocomplete`: Indica al navegador si debe guardar y sugerir valores previamente ingresados.

---

**Diferencias frente a `type="text"`**
| Característica              | `type="text"`          | `type="search"`         |
|-----------------------------|------------------------|-------------------------|
| Semántica                   | Genérica              | Diseñada para búsquedas |
| Estilo visual (en algunos navegadores) | Plano                  | Esquinas redondeadas, botón "x" |
| Optimización para plataformas | No                   | Sí                      |

---
#### Selectores de color
HTML5 introduce el campo de entrada `type="color"`, que permite a los usuarios seleccionar un color a través de un selector de color nativo. Este campo devuelve un valor en formato hexadecimal RGB, como `#RRGGBB`, lo que lo hace ideal para aplicaciones donde se requiere especificar colores, como diseño web, edición gráfica o configuraciones de personalización.

---
**Ejemplo básico**
```html
<form>
  <label for="colorPicker">Selecciona un color:</label>
  <input id="colorPicker" type="color" name="favoriteColor" value="#ff0000">
  <input type="submit" value="Guardar">
</form>
```
---
**Compatibilidad con navegadores**
El soporte para `type="color"` ha mejorado significativamente desde sus inicios, con navegadores modernos como Chrome, Firefox, Edge y Opera implementando selectores de color nativos. En Mac y Windows, se integra con el selector de color del sistema operativo. En Linux, despliega un selector básico.

| Navegador       | Compatibilidad |
|------------------|----------------|
| Chrome          | ✅ Sí          |
| Firefox         | ✅ Sí          |
| Safari          | ✅ Sí          |
| Edge            | ✅ Sí          |
| Opera           | ✅ Sí          |
| Navegadores antiguos | ❌ Lo tratan como `type="text"` |

---
**Características clave**
1. **Valor predeterminado:**
   - Puedes establecer un color inicial con el atributo `value`, especificando un color hexadecimal, como `#ff0000` (rojo).
   
2. **Salida estándar:**
   - El valor siempre será un código hexadecimal de seis caracteres, ideal para usar en CSS u otras aplicaciones relacionadas con colores.

3. **Compatibilidad nativa:**
   - En sistemas operativos compatibles, se integra con el selector de color nativo, lo que proporciona una experiencia familiar para los usuarios.

---
**Ventajas del uso de `type="color"`**
- **Simplicidad:** Reduce la necesidad de escribir código personalizado o depender de bibliotecas externas para selectores de color.
- **Estandarización:** Ofrece una solución consistente para aplicaciones web que requieren entrada de color.
- **Compatibilidad progresiva:** En navegadores que no lo soportan, se representa como un campo de texto, permitiendo a los usuarios ingresar manualmente un valor hexadecimal.

---

**Mejoras con JavaScript**
Puedes usar JavaScript para interactuar con el campo de color y mejorar la experiencia del usuario.

```html
<form>
  <label for="colorPicker">Selecciona un color:</label>
  <input id="colorPicker" type="color" name="favoriteColor" value="#00ff00">
  <p id="colorValue">Color seleccionado: #00ff00</p>
</form>

<script>
  const colorPicker = document.getElementById('colorPicker');
  const colorValue = document.getElementById('colorValue');

  colorPicker.addEventListener('input', (event) => {
    colorValue.textContent = `Color seleccionado: ${event.target.value}`;
  });
</script>
```
---
#### Validación de formularios

La validación de formularios en HTML5 permite una validación automática del lado del cliente sin depender completamente de JavaScript, lo que mejora la experiencia del usuario y reduce la necesidad de validar en el servidor.

---

### **Compatibilidad con la validación de formularios**
HTML5 introduce validación automática para entradas comunes como correos electrónicos, URLs y números. Esta validación se realiza en el navegador, incluso sin JavaScript habilitado, lo que elimina algunos problemas como la dependencia de scripts o errores en la validación.

---
**Validación de direcciones de correo electrónico**
Para validar un correo electrónico, basta con usar `type="email"`. Los navegadores modernos, como Opera, Firefox y Chrome, ofrecen validación automática que asegura que la entrada se ajuste al formato adecuado de una dirección de correo electrónico.

```html
<input type="email">
```
---
**Validación de URLs y números**
HTML5 también valida URLs y números. En el caso de los números, los navegadores controlan los rangos definidos por los atributos `min` y `max`.

```html
<input type="url">
<input type="number" min="1" max="100">
```
---
**Desactivar la validación**
Si se desea desactivar la validación automática, se puede utilizar el atributo `novalidate` en el formulario.

```html
<form novalidate>
  <input type="email">
  <input type="submit" value="Subscribe">
</form>
```
---

#### **Campos obligatorios**
HTML5 permite marcar campos como obligatorios usando el atributo `required`, lo que asegura que el usuario no pueda enviar el formulario sin completar esos campos.

```html
<form>
  <input id="q" required>
  <input type="submit" value="Search">
</form>
```
