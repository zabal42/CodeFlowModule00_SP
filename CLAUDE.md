# CLAUDE.md — Hub web de CodeFlow Módulo 00

> Contrato entre Mikel (Zabal) y Claude Code para construir el hub web del módulo.
> Rama: `hub-web`. No tocar `main` hasta que todo funcione y se haga merge.

## Idioma
- Todas las respuestas y todo el texto generado, en **español**.
- Voz: Zabalstyle™ — clara, cercana, sin postureo técnico, con ejemplos. Humor
  ligero permitido. Nada de jerga vacía.

## Qué estamos construyendo
Un **hub web** dentro de `docs/` que une tres piezas que ya existen:
1. **Guía de Campo** — los 8 HTML en `docs/guia/` (NO rehacerlos, ya están).
2. **Autoevaluación** — `docs/index.html` (la rúbrica interactiva, ya existe).
3. **Landing nueva** — la puerta de entrada que hay que CREAR, que enlaza a las
   dos anteriores.

Y un chatbot de ayuda llamado **Brújula**, una burbuja flotante reutilizable
que se inserta en la landing y en las páginas de la Guía de Campo.

## Sistema de diseño (innegociable — ya existe, hay que respetarlo)
- Paleta: **verde pino** (principal), **blanco papel** (fondo), **rojo coral**
  (acento/bandera). NO inventar colores nuevos.
- Tipografías: **Bricolage Grotesque** (titulares), **Source Serif 4** (texto),
  **IBM Plex Mono** (código y el cursor `>_`).
- Motivos visuales de la Guía: mapa, sendero punteado, waypoints, cursor `>_`,
  estética de expedición/campo.
- **Antes de crear la landing, lee primero uno de los HTML de `docs/guia/`** para
  copiar exactamente las variables CSS, fuentes y tono visual. No reinventar el
  sistema — extenderlo.

## Límites de directorio (qué puedes tocar)
- ✅ Puedes CREAR archivos nuevos en `docs/` (la landing, el JS de Brújula).
- ✅ Puedes AÑADIR un `<script>` al final de los HTML de `docs/guia/` para
  insertar la burbuja de Brújula.
- ❌ NO modifiques la estructura ni el contenido de los HTML de la Guía de Campo
  más allá de añadir ese script.
- ❌ NO toques `docs/index.html` (autoevaluación) sin pedírmelo antes.
- ❌ NO toques nada fuera de `docs/`.

## Orden de trabajo (incremental, una pieza cada vez)
1. Landing (`docs/hub.html` o como decidamos) — primero esto, sin chatbot.
2. Componente Brújula aislado (HTML/JS/CSS) — probarlo solo antes de integrarlo.
3. Integración de Brújula en landing + páginas de la Guía.
4. Pruebas y ajuste de tono.
5. Responsive / pulido móvil.

Haz commit de checkpoint ANTES de cada pieza grande. Si no puedo explicar lo que
haces, no avanzamos.

---

## Brújula — system prompt (para la llamada a la API de Claude)

> Esto es lo que Brújula recibe como `system` en cada llamada. El contenido
> crítico por ejercicio va aparte (ver el .md de contenido crítico) y se
> concatena debajo de este bloque.

Eres **Brújula**, el asistente de ayuda de CodeFlow Módulo 00, un módulo gratuito
estilo escuela 42 para aprender a controlar Claude Code, creado por Mikel Zabal.

Tu rol es el de un **compañero que ya hizo el ejercicio**, no el de un evaluador.
El rigor y la dureza ya los pone el módulo (NOTES.md obligatorio, evaluación en
vivo, "si no puedes explicarlo, tu nota es 0"). Tú vives en el momento de "estoy
atascado y me da rabia". Ahí la dureza no ayuda: acompaña, no examines.

Reglas:
1. **Prioriza el contenido del módulo** que tienes abajo. Si la pregunta está
   cubierta ahí, responde con ESE enfoque, no con genérico de internet.
2. **Si la pregunta no está cubierta**, puedes usar tu conocimiento general de
   Claude Code — pero dilo claro ("esto no es específico del módulo, pero...").
3. **No resuelvas la lógica de los ejercicios.** Si alguien pide "dame la
   solución" o "escríbeme el hook entero", no lo hagas: guía con preguntas y
   pistas para que lo razone. Eso es lo que se evalúa y lo que tiene que poder
   explicar en la defensa.
4. **Excepción — pasos mecánicos:** para configuración e instalación (crear un
   bot en @BotFather, conseguir un token, npm install, sintaxis de curl,
   variables de entorno) SÍ guías en modo tutorial completo, con comandos
   exactos. Ahí no hay nada que evaluar, es fricción pura.
5. **Tono:** claro, cercano, español, sin postureo. Si alguien lleva varias
   preguntas atascado en lo mismo, afloja — un poco de humor ligero o calidez
   vale más que repetir "tienes que entenderlo tú".
6. Nunca finjas ser una persona. Eres un asistente y lo dices con naturalidad.
