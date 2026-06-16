diff --git a/.gitignore b/.gitignore
index c1f854e..49e84fe 100644
--- a/.gitignore
+++ b/.gitignore
@@ -1,2 +1,6 @@
 .DS_Store
 *.zip
+evaluate.sh
+evaluate.mjs
+EVALUACION_OPUS.md
+EVALUACION_OPUS.pdf
diff --git a/README.md b/README.md
index f08d05a..7ed08e1 100644
--- a/README.md
+++ b/README.md
@@ -22,7 +22,7 @@ Este módulo va de aprender a controlarlo de verdad. Cinco ejercicios progresivo
 
 Y donde dedicas un ejercicio entero a lo que nadie enseña: **gestionar la ventana de contexto igual que un programador gestiona  la memoria en C.** Sabrás exactamente cuándo usar `/compact`, cuándo `/clear`, cuándo rebobinar con `Esc Esc`, qué operaciones queman más tokens sin que te des cuenta, y saldrás con estrategias propias para que cada token cuente.
 
-Porque el problema no es únicamente la factura. Es que un agente con el contexto saturado razona peor, olvida lo que acordasteis dos mensajes atrás y te hace repetir el trabajo. Controlar el contexto no es una optimización para tacaños — es control de calidad. Y sí, también ahorra dinero. Las dos cosas.
+Y no es solo la factura: controlar el contexto no es una optimización para tacaños — es **control de calidad**. Un agente con el contexto saturado razona peor. Y sí, además ahorra dinero. Las dos cosas.
 
 Aquí no te voy a decir que uses `.md` en lugar de `.pdf` para ahorrar tokens, ni voy a darte una lista de mil agentes. Aquí aprendes el porqué, no solo el cómo. Por qué el contexto funciona así. Por qué un hook PreToolUse es más fiable que una instrucción en el `CLAUDE.md`. Por qué el SDK te da un control que la CLI nunca te dará. Sin magia. Sin «confía en mí». Con la lógica expuesta.
 
@@ -190,7 +190,7 @@ También disponible como texto plano: [EVALUACION.md](EVALUACION.md)
 <div align="center">
 
 Hecho por Mikel Zabal · CodingWithZabal  
-LinkedIn · mzabalm@gmail.com
+[LinkedIn](https://www.linkedin.com/in/mikel-zabal-martin/) · mzabalm@gmail.com
 
 Si te ha servido, una ⭐ ayuda a que llegue a más gente.
 
diff --git a/docs/index.html b/docs/index.html
index c9cea5b..d2317dc 100644
--- a/docs/index.html
+++ b/docs/index.html
@@ -119,12 +119,12 @@ const data=[
     {t:'m',text:'session_log.txt registra los 9 pasos con observaciones reales'},
     {t:'m',text:'He ejecutado /compact y documentado qué recordó y qué perdió Claude'},
     {t:'m',text:'He ejecutado /compact [instrucciones] y comparado con el compact normal'},
-    {t:'m',text:'He demostrado el uso de /clean'},
+    {t:'m',text:'He demostrado el uso de /clear'},
     {t:'m',text:'He demostrado el uso de Esc Esc para interrumpir una operación'},
-    {t:'m',text:'NOTES.md responde: ¿cuándo /compact vs /clean? ¿cuándo es crítico el doble Esc?'},
+    {t:'m',text:'NOTES.md responde: ¿cuándo /compact vs /clear? ¿cuándo es crítico el doble Esc?'},
     {t:'m',text:'NOTES.md incluye al menos 2 estrategias propias para minimizar tokens'},
     {t:'e',text:'Sé explicar qué información sobrevive a un /compact y por qué'},
-    {t:'e',text:'Sé explicar la diferencia real entre /compact y /clean'},
+    {t:'e',text:'Sé explicar la diferencia real entre /compact y /clear'},
     {t:'b',text:'Tabla comparativa: operación → tokens consumidos'},
     {t:'b',text:'He identificado qué operaciones consumen más contexto y por qué'},
   ]},
diff --git a/starters/ex01/NOTES.md b/starters/ex01/NOTES.md
index 48efc65..09c84ef 100644
--- a/starters/ex01/NOTES.md
+++ b/starters/ex01/NOTES.md
@@ -15,7 +15,7 @@
 <!-- Sé específico: ¿recordó el nombre del método añadido en el paso 3? -->
 <!-- ¿La estructura del proyecto? ¿El error que corregiste? -->
 
-## 3. /compact vs /clean — ¿cuándo usar cada uno?
+## 3. /compact vs /clear — ¿cuándo usar cada uno?
 
 <!-- Tu criterio personal, con ejemplos concretos del escenario -->
 
