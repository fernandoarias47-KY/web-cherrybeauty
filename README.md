# CherryBeauty — sitio rediseñado

Dos páginas estáticas (HTML + CSS + JS, sin frameworks ni build):

- `index.html` — portada, sobre Valentina, servicios, estudio, perrito, ubicación, reservas/pagos, contacto.
- `portafolio.html` — galería con filtros por categoría y foto ampliada.
- `assets/css/style.css` — estilos compartidos.
- `assets/js/main.js` — datos de servicios/galería, filtros, menú móvil, lightbox.
- `assets/images/` — todas las fotos (las que ya tenías, extraídas del HTML anterior, más el perrito, Botox y Alisado).

## Cómo reemplazar tu sitio en GitHub y publicarlo en Vercel

1. En tu repositorio de GitHub (el mismo que ya está conectado a Vercel), borra los archivos antiguos del sitio (tu `index.html` anterior y lo que tuviera).
2. Copia dentro del repositorio **todos** los archivos y carpetas de este ZIP, respetando la estructura (`index.html`, `portafolio.html` y la carpeta `assets/` en la raíz).
3. Haz commit y push a la rama que Vercel tiene conectada (normalmente `main`):
   ```
   git add .
   git commit -m "Rediseño CherryBeauty"
   git push
   ```
4. Vercel detecta el push automáticamente y publica la nueva versión en tu mismo dominio (`web-cherrybeauty.vercel.app`). No necesitas cambiar ninguna configuración: sigue siendo un sitio estático.

## Qué revisar tú antes de dar por cerrado el cambio

- El mapa de Ubicación (sección "Cómo llegar") no pude verlo cargar en mi entorno de pruebas por una restricción de red propia de este sistema; el enlace y el `iframe` usan exactamente la misma referencia que ya tenías (Santa Marta con Alberto Undurraga, Huechuraba), así que debería funcionar igual que antes, pero ábrelo tú una vez publicado para confirmarlo.
- Los 8 enlaces de Cal.com son los mismos que ya usabas (no se crearon ni modificaron). Verifica que sigan activos en tu cuenta de Cal.com.
- Revisé que no haya imágenes rotas, scroll horizontal ni secciones superpuestas, en celular y escritorio.
