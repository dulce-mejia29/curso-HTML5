# Códecs de vídeo

Los archivos de video, como los formatos **AVI** o **MP4**, son en realidad contenedores que almacenan diferentes tipos de datos relacionados con video y audio. Un contenedor define **cómo se organiza** el contenido, no necesariamente qué datos se incluyen. Por ejemplo, un archivo de video puede tener varias pistas: una de video (sin audio) y una o más de audio (sin video), junto con metadatos para sincronización, idioma o relación de aspecto.

**Principales formatos de contenedores**:
1. **MPEG-4 (.mp4, .m4v)**: Basado en el contenedor QuickTime de Apple, es común para contenido moderno como alquileres de iTunes.
2. **Flash Video (.flv)**: Utilizado por Adobe Flash; versiones más recientes soportan también MPEG-4.
3. **Ogg (.ogv)**: Estándar abierto compatible con navegadores como Firefox, Chrome y Linux sin necesidad de complementos.
4. **WebM**: Basado en Matroska, diseñado para usar los códecs VP8 (video) y Vorbis (audio). Compatible con navegadores modernos y Flash.
5. **AVI (.avi)**: Formato antiguo de Microsoft; limitado en funciones modernas como metadatos y soporte para códecs actuales.

Los contenedores también pueden incluir información extra como títulos, carátulas o números de episodios, dependiendo de sus características.

## Cdecs de vídeo

Cuando ves un video, no estás viendo solo un archivo simple, sino una combinación de una pista de video y una o más de audio, empaquetadas en un formato de contenedor (como AVI o MP4). Este contenedor organiza cómo se almacenan esas pistas dentro del archivo. Al reproducir un video, el reproductor realiza tres tareas clave:

Interpretar el formato del contenedor: Identifica las pistas disponibles y su ubicación en el archivo.
Decodificar el video: Muestra una serie de imágenes (fotogramas) en la pantalla.
Decodificar el audio: Envía el sonido a los altavoces.
El papel de los códecs
Un códec de video es un algoritmo que codifica y decodifica las transmisiones de video. Su función es reducir el tamaño del archivo y facilitar la reproducción.

Los códecs modernos utilizan técnicas de compresión avanzadas, como almacenar solo las diferencias entre fotogramas en lugar de cada fotograma completo, ya que muchos cambios son mínimos entre ellos.
Existen códecs con pérdida y sin pérdida:
Sin pérdida: Conservan toda la información original, pero generan archivos muy grandes, poco prácticos para la web.
Con pérdida: Sacrifican algo de calidad para obtener tamaños más pequeños. Esto puede causar efectos como el "bloqueo" en escenas de mucho movimiento si la compresión es alta o el códec es deficiente.
Códecs más relevantes
H.264: Amplia compatibilidad y alta eficiencia de compresión.
Theora: Abierto y gratuito, compatible con navegadores como Firefox.
VP8: Optimizado para WebM, con enfoque en contenido web.
Los códecs con pérdida logran una excelente compresión minimizando el impacto visual, pero cada recodificación degrada la calidad del video.

**H.264**

H.264, también conocido como "MPEG-4 Parte 10" o "MPEG-4 AVC", es un estándar de compresión de video desarrollado por el grupo MPEG y estandarizado en 2003. Su objetivo es ser un códec versátil que funcione en una amplia gama de dispositivos, desde teléfonos móviles con bajo ancho de banda hasta computadoras y reproductores de alta capacidad.

Perfiles de H.264
El estándar H.264 se divide en perfiles, que intercambian complejidad por calidad y tamaño de archivo:

Perfil Baseline: Optimizado para dispositivos de bajo rendimiento, como teléfonos móviles.
Perfil Main: Mejor calidad y rendimiento, compatible con más dispositivos.
Perfil High: Utilizado para aplicaciones de alta calidad, como discos Blu-Ray.
Ejemplos de soporte por dispositivo:

iPhone: Perfil Baseline.
AppleTV: Baseline y Main.
Adobe Flash (PC): Baseline, Main y High.
YouTube usa H.264 para videos HD en Flash y para transmisión móvil (iPhones y Android).
Decodificación y Hardware
Muchos dispositivos (iPhones, reproductores Blu-Ray) tienen chips dedicados para decodificar H.264, ya que sus CPU no son lo suficientemente potentes para hacerlo en tiempo real.
Las tarjetas gráficas modernas también soportan decodificación de H.264 en hardware.
Usos y Contenedores
Blu-Ray: H.264 es uno de los códecs estándar, generalmente en el perfil High.
Contenedores populares: MP4 (común en iTunes) y MKV (usado por la comunidad de video no comercial).
Patentes y Licencias
H.264 está sujeto a patentes administradas por MPEG LA, y su uso requiere licencias. Además, existen implementaciones competitivas, como la biblioteca de código abierto x264, ampliamente usada por su eficiencia y calidad.
**Theora**

Theora es un códec de video desarrollado por la Fundación Xiph.org, derivado del códec VP3. Es libre de regalías y no está sujeto a patentes conocidas, excepto por las originales de VP3, que han sido licenciadas sin costo. Aunque el estándar fue estabilizado en 2004, las versiones 1.0 y 1.1 del proyecto de referencia de Theora se lanzaron en 2008 y 2009, respectivamente.

Compatibilidad y Contenedores
El video de Theora puede integrarse en diferentes formatos de contenedores, aunque el más común es Ogg.
Es compatible de forma nativa en:
Linux: Incluido en todas las distribuciones principales.
Mozilla Firefox 3.5 y superiores: Soporte directo para videos en formato Ogg en todas las plataformas, sin necesidad de plugins.
En Windows y Mac OS X, se pueden reproducir videos de Theora instalando el software decodificador de código abierto de Xiph.org.
Theora es una opción ideal para quienes buscan una solución de video libre de restricciones de licencia y costos de regalías.

**VP8**
VP8 es un códec de video desarrollado por On2 Technologies, la misma empresa detrás de VP3 (precursor de Theora). Ofrece una calidad de video comparable al perfil High de H.264, pero con una complejidad de decodificación similar al perfil Baseline de H.264.

Adquisición por Google y Licencias
En 2010, Google adquirió On2 y convirtió a VP8 en código abierto, publicando tanto la especificación del códec como un codificador y decodificador de referencia. Como parte de este movimiento:

Google liberó las patentes de VP8, otorgando licencias sin regalías.
Aunque no es posible "anular" patentes existentes, la licencia sin regalías permite a cualquier persona usar VP8 sin pagar ni negociar derechos.
Estado actual
Desde el 19 de mayo de 2010, VP8 es un códec moderno libre de regalías, sin cargas de patentes conocidas, excepto las que On2 (y ahora Google) ha licenciado sin costo. Esto lo convierte en una alternativa atractiva a H.264, especialmente en contextos donde la libertad de uso y la compatibilidad con código abierto son prioritarias.
### Códecs de audio

Los códecs de audio son algoritmos para codificar transmisiones de audio, y al igual que los de video, pueden ser con o sin pérdidas. Sin embargo, los códecs de audio sin pérdidas generan archivos demasiado grandes para ser prácticos en la web, por lo que la mayoría de las aplicaciones se enfocan en los códecs con pérdida. Estos reducen el tamaño del archivo eliminando información que los oídos humanos no suelen notar.

Diferencias clave en audio frente a video
Canales de audio: El audio incluye la noción de canales, que corresponden a la cantidad de altavoces que se usarán. Por ejemplo:
Dos canales (estéreo): Izquierdo y derecho.
Múltiples canales (sonido envolvente): Configuraciones como 5.1 o 7.1, con varios altavoces colocados estratégicamente para una experiencia inmersiva.
Durante el proceso de reproducción:

El sonido se divide en canales durante la grabación.
Los canales se codifican y almacenan juntos en un flujo de audio.
Al decodificarse, cada canal se envía al altavoz correspondiente.
Cómputo del audio en los videos
Cuando reproduces un video, el sistema realiza tres tareas:

Interpreta el contenedor para ubicar las pistas de audio y video.
Decodifica y reproduce la transmisión de video.
Decodifica la transmisión de audio, convirtiéndola en formas de onda digitales que los altavoces transforman en sonido.
Códecs de propósito general
En la web, la mayoría de los códecs especializados en voz no se usan debido a la falta de soporte en navegadores y plugins. En su lugar, los códecs de audio de propósito general dominan el espacio multimedia. Los más relevantes son:

MP3
AAC
Vorbis
Estos códecs equilibran calidad y tamaño, ofreciendo una experiencia de audio optimizada para transmisión y almacenamiento eficiente.

**Capa de audio MPEG-1 3**

MPEG-1 Audio Layer 3 se conoce coloquialmente como "MP3". Si no has oído hablar de los MP3, no sé qué hacer contigo. Walmart vende reproductores de música portátiles y los llama "reproductores de MP3". Walmart. De todos modos...

Los MP3 pueden contener hasta 2 canales de sonido. Se pueden codificar a diferentes velocidades de bits: 64 kbps, 128 kbps, 192 kbps y una variedad de otras de 32 a 320. Las velocidades de bits más altas significan tamaños de archivo más grandes y audio de mejor calidad, aunque la relación entre la calidad del audio y la tasa de bits no es lineal. (128 kbps suena más del doble de bien que 64 kbps, pero 256 kbps no suena el doble de bien que 128 kbps). Además, el formato MP3 permite la codificación de velocidad de bits variable, lo que significa que algunas partes de la transmisión codificada se comprimen más que otras. Por ejemplo, el silencio entre notas se puede codificar a una tasa de bits baja, luego la tasa de bits puede aumentar un momento después cuando varios instrumentos comienzan a tocar un acorde complejo. Los MP3 también se pueden codificar con una tasa de bits constante, lo que, como era de esperar, se denomina codificación de tasa de bits constante.

El estándar MP3 no define exactamente cómo codificar los MP3 (aunque sí define exactamente cómo decodificarlos); Los diferentes codificadores utilizan diferentes modelos psicoacústicos que producen resultados muy diferentes, pero todos son decodificables por los mismos reproductores. El proyecto LAME de código abierto es el mejor codificador gratuito y, posiblemente, el mejor período de codificador para todos, excepto para las tasas de bits más bajas.

El formato MP3 (estandarizado en 1991) está patentado, lo que explica por qué Linux no puede reproducir archivos MP3 de forma inmediata. Casi todos los reproductores de música portátiles admiten archivos MP3 independientes, y las transmisiones de audio MP3 se pueden incrustar en cualquier contenedor de video. Adobe Flash puede reproducir tanto archivos MP3 independientes como secuencias de audio MP3 dentro de un contenedor de vídeo MP4.

**Codificación de audio avanzada**

El MP3 es un formato de audio extremadamente popular, ampliamente utilizado tanto en dispositivos portátiles como en aplicaciones de software.

Características principales
Canales de sonido: Soporta hasta 2 canales (estéreo).
Tasas de bits:
Puede codificarse a tasas de bits entre 32 y 320 kbps.
Calidad y tamaño: A tasas más altas, la calidad mejora y el tamaño del archivo aumenta, aunque la mejora en calidad no es proporcional al incremento de la tasa de bits (por ejemplo, 256 kbps no es el doble de bueno que 128 kbps).
Codificación variable:
CBR (tasa de bits constante): Usa la misma tasa en toda la pista.
VBR (tasa de bits variable): Ajusta la tasa según la complejidad del audio, comprimiendo más las secciones simples (como silencios) y menos las complejas.
Codificación y decodificación
El estándar MP3 especifica cómo decodificar archivos, pero no cómo codificarlos, lo que permite a los desarrolladores crear codificadores con diferentes enfoques.
LAME, un proyecto de código abierto, es considerado uno de los mejores codificadores de MP3.
Compatibilidad y licencias
Patentes: MP3 está patentado, lo que ha generado restricciones en algunos sistemas como Linux, que no lo soportan de manera nativa.
Soporte universal: Casi todos los reproductores de música portátiles y software admiten MP3.
En contenedores de video: Los flujos de audio MP3 pueden incrustarse en contenedores de video como MP4.
Adobe Flash: Es compatible tanto con archivos MP3 independientes como con transmisiones MP3 integradas en videos.

**Vorbis**

Vorbis es un códec de audio de código abierto y libre de regalías, conocido por su flexibilidad y amplia compatibilidad en entornos de software libre.

Características principales
Patentes: Vorbis no está gravado por ninguna patente conocida, lo que permite su uso gratuito.

Compatibilidad:

Linux: Compatible de manera inmediata con todas las principales distribuciones.
Dispositivos portátiles: Soportado por dispositivos con firmware de código abierto, como Rockbox.
Navegadores y móviles:
Mozilla Firefox 3.5: Soporta audio Vorbis en contenedores Ogg y WebM.
Android: Reproduce archivos de audio Vorbis sin necesidad de aplicaciones adicionales.
Otros contenedores: Aunque Vorbis se encuentra comúnmente en Ogg y WebM, también puede usarse en MP4, MKV e incluso en AVI con modificaciones.
Canales de sonido: Soporta un número ilimitado de canales, lo que lo hace ideal para configuraciones avanzadas como sonido envolvente.

Codificadores y decodificadores
Proyectos de código abierto destacados:
Codificadores: OggConvert, aoTuV.
Decodificadores: ffmpeg, libvorbis.
Compatibilidad adicional:
Componentes de QuickTime para macOS.
Filtros DirectShow para Windows.
Usos típicos
Vorbis es ampliamente usado en proyectos de código abierto, transmisiones en línea y sistemas donde la libertad de licencias es crucial. Su flexibilidad en formatos contenedores y soporte para múltiples canales lo hace una opción robusta frente a otros códecs con regalías.

#### LO QUE FUNCIONA EN LA WEB

El elemento <video> de HTML5 permite incrustar videos directamente en una página web sin necesidad de complementos como Adobe Flash. Sin embargo, la compatibilidad de los navegadores con diferentes códecs, formatos de audio y contenedores varía ampliamente, lo que complica su uso universal.

Estado actual de la compatibilidad con video HTML5 (en el momento descrito):
Códec/Contenedor	IE	Firefox	Safari	Chrome	Opera	iPhone	Android
Theora+Vorbis+Ogg	✗	3.5+	✗	5.0+	10.5+	✗	✗
H.264+AAC+MP4	✗	✗	3.0+	5.0+	✗	3.0+	2.0+
WebM	✗	✗	✗	6.0+	10.6+	✗	✗
Aspectos clave:
Códecs soportados por navegador:

Firefox, Opera y Chrome soportan Theora+Vorbis+Ogg y, en versiones más recientes, WebM.
Safari y dispositivos móviles (iPhone y Android) soportan principalmente H.264+AAC+MP4.
Internet Explorer:
IE9: Soporta H.264+AAC+MP4 y puede reproducir WebM si se instala un códec de terceros.
IE8: No tiene soporte HTML5 pero es compatible con Adobe Flash.
Dispositivos móviles:

Los teléfonos iPhone y Android reproducen H.264+AAC+MP4 de forma nativa debido a su uso generalizado en la web y su eficiencia en dispositivos de bajo consumo.
Adobe Flash:

A pesar de la transición a HTML5, Flash sigue siendo un respaldo común, especialmente en navegadores más antiguos como IE8.
Contenedores de video:

Ogg y WebM son populares en software libre y navegadores modernos, mientras que MP4 domina en dispositivos y navegadores con soporte comercial.
Consideraciones futuras:
WebM: Impulsado por Google, es probable que su adopción crezca debido a que es un formato abierto y sin regalías.
H.264: Aunque muy utilizado, está gravado por patentes y podría perder soporte en navegadores como Chrome en favor de WebM.
Estrategias para soporte universal:
Proporcionar múltiples versiones de video (Ogg/WebM/MP4).
Usar Flash como respaldo en navegadores antiguos.

##### Problemas de licencia con vídeo H.264

El uso del códec H.264, aunque popular por su alta calidad y eficiencia, está gravado por un sistema complejo de licencias administrado por el consorcio MPEG LA. Estos costos afectan a diferentes partes del proceso de codificación, distribución y decodificación de contenido. Aquí se explican los puntos clave:

1. Tipos de licencias de H.264:
La licencia H.264 se divide en dos niveles principales:

Fabricantes de hardware/software:
Esto incluye fabricantes de codificadores (herramientas que comprimen videos) y decodificadores (herramientas que los reproducen).
Distribuidores de contenido:
Incluye plataformas y emisoras que transmiten videos a los usuarios.
2. Costos para distribuidores:
Para quienes distribuyen contenido (emisoras, plataformas de streaming, etc.), MPEG LA establece tarifas dependiendo del método de distribución y el tamaño del público.

Transmisión "gratuita" (por aire, cable o satélite):

Pago único por codificador de transmisión AVC: $2,500.
Tarifas anuales de transmisión, según el tamaño del mercado:
$2,500 para audiencias de 100,000 a 499,999 hogares.
$5,000 para audiencias de 500,000 a 999,999 hogares.
$10,000 para audiencias de más de 1 millón de hogares.
Transmisión por Internet:

Inicialmente, las transmisiones por Internet estaban sujetas a tarifas similares a las de la televisión gratuita.
Sin embargo, MPEG LA modificó esta política, declarando que no se aplicarán tarifas por transmisión pública de video AVC en Internet (al menos durante ciertos períodos).
3. Codificadores y decodificadores siguen sujetos a licencias:
Aunque la transmisión por Internet puede ser "sin costo" para el distribuidor final, los fabricantes de herramientas de codificación (como las que usa YouTube) y decodificación (como los reproductores de video en navegadores como Internet Explorer 9) sí deben pagar licencias. Esto significa que los costos de H.264 se trasladan a las empresas tecnológicas que crean estas herramientas.

4. Implicaciones para desarrolladores y empresas:
Si estás considerando usar H.264 para proyectos personales o empresariales, los costos de licencias pueden ser una barrera, especialmente si planeas distribuir contenido en gran escala.
Formatos alternativos como WebM o Theora, que son libres de regalías, pueden ser más económicos para pequeñas empresas o proyectos de código abierto.
5. Cambios en la estructura de licencias:
La política de "transmisión sin costo" por Internet es un alivio temporal para las plataformas de streaming. Sin embargo, el futuro de los costos relacionados con H.264 podría cambiar, dependiendo de las decisiones de MPEG LA y el crecimiento de alternativas sin regalías.

###### Codificación de vídeo con Miro Video Converter

Miro Video Converter es una herramienta de código abierto y gratuita para la conversión de videos en varios formatos. Aquí están los aspectos clave:

Características principales:
Código abierto: Licenciado bajo GPL, lo que permite su uso y modificación gratuita.
Compatibilidad con múltiples formatos: El programa soporta una amplia gama de formatos de video de entrada y salida.
Simplicidad: No requiere conocimientos avanzados de codificación de video. Solo necesitas elegir un archivo de video y seleccionar el formato de salida.
Facilidad de uso: Ideal para aquellos que no quieren lidiar con complejas configuraciones de codificación. El proceso es automático y sencillo.
Entrada amplia: Puede manejar casi cualquier archivo de video, incluido el vídeo DV proveniente de cámaras de nivel consumidor.
Salida de calidad razonable: Aunque no ofrece muchas opciones de personalización, Miro Video Converter produce una salida de calidad aceptable para la mayoría de los videos.
Limitaciones:
Pocas opciones de personalización: Si no estás satisfecho con la salida, la única opción es probar otro programa.
Sin configuraciones avanzadas: No es ideal si deseas un control preciso sobre la codificación (como el bitrate o la resolución).
Para empezar:
Descarga e instala Miro Video Converter en tu sistema (disponible para Mac OS X y Windows).
Abre el programa, selecciona el archivo de video que deseas convertir.
Elige el formato de salida deseado.
El programa se encargará del proceso automáticamente.
