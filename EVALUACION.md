# Rúbrica de autoevaluación — CodeFlow Módulo 00

> Esta rúbrica te permite evaluarte solo, sin necesidad de un evaluador externo.
> Cada check es binario: **lo cumples o no lo cumples**. No hay medias tintas.
>
> Regla de oro del módulo: si funciona pero **no sabes explicar por qué**, no cuenta.
> La columna "¿Lo explicas?" es tan importante como la de "¿Funciona?".

---

## Cómo puntuar

- Cada ejercicio tiene un **mínimo obligatorio (Mandatory)**. Si fallas un solo check del Mandatory, el ejercicio está **incompleto** — el bonus no compensa.
- El **NOTES.md es obligatorio** en todos. Sin él, el ejercicio es 0 aunque todo lo demás funcione.
- El bonus solo suma si el Mandatory está **completo al 100%**.

| Estado | Significado |
|--------|-------------|
| ✅ | Cumplido y lo sé explicar |
| ⚠️ | Funciona pero no lo entiendo del todo → repásalo |
| ❌ | No cumplido |

---

## ex00 — Init & Context

### Mandatory

- [ ] He ejecutado `/init` en el directorio del starter
- [ ] He examinado el `CLAUDE.md` generado y documentado qué detectó Claude
- [ ] Mi `CLAUDE.md` incluye **reglas de compilación** (flags, estándar C++, estructura)
- [ ] Mi `CLAUDE.md` incluye **restricciones de estilo** (nombres de variables, comentarios)
- [ ] Mi `CLAUDE.md` limita los directorios que Claude puede modificar a `src/` e `inc/`
- [ ] Mi `CLAUDE.md` incluye la instrucción de responder en español
- [ ] He usado `@src/Calculator.cpp` para limitar el contexto a un archivo
- [ ] He usado `@tests/` para limitar el contexto a una carpeta
- [ ] Tengo **al menos 3 capturas** en `screenshots/` demostrando el uso de `@`
- [ ] `NOTES.md` compara el `CLAUDE.md` original vs el personalizado

### ¿Lo sabes explicar?

- [ ] Sé explicar **por qué** elegí cada regla de mi `CLAUDE.md`
- [ ] Sé explicar qué hace `@` exactamente y cómo afecta al contexto

### Bonus

- [ ] Sección de "errores frecuentes" en `CLAUDE.md` (ej: no usar printf, no tocar el Makefile)
- [ ] Segundo `CLAUDE.md` en `tests/` con reglas específicas de testing

---

## ex01 — Session Management

### Mandatory

- [ ] He ejecutado el escenario completo de **9 pasos** sobre el proyecto del ex00
- [ ] `session_log.txt` registra los 9 pasos con observaciones reales
- [ ] He ejecutado `/compact` y documentado qué recordó y qué perdió Claude
- [ ] He ejecutado `/compact [instrucciones]` y comparado con el compact normal
- [ ] He demostrado el uso de `/clear`
- [ ] He demostrado el uso de `Esc Esc` para interrumpir una operación
- [ ] `NOTES.md` responde: ¿cuándo `/compact` vs `/clear`? ¿cuándo es crítico el doble Esc?
- [ ] `NOTES.md` incluye **al menos 2 estrategias propias** para minimizar tokens

### ¿Lo sabes explicar?

- [ ] Sé explicar qué información sobrevive a un `/compact` y por qué
- [ ] Sé explicar la diferencia real entre `/compact` y `/clear`

### Bonus

- [ ] Tabla comparativa: operación → tokens consumidos
- [ ] He identificado qué operaciones consumen más contexto y por qué

---

## ex02 — HookGuard

### Mandatory

- [ ] He creado un hook de inspección `PostToolUse` con matcher `"*"` que vuelca stdin a JSON
- [ ] He hecho que Claude use **al menos 3 herramientas** (Read, Write, Bash) y examinado los JSON
- [ ] `hooks/guard.sh` **bloquea** `rm -rf` y `sudo`
- [ ] `hooks/guard.sh` loguea todos los comandos bash en `logs/commands.log` con timestamp
- [ ] `hooks/compiler_check.sh` ejecuta `make` tras cada Write en `.cpp` o `.hpp`
- [ ] Si la compilación falla, el error vuelve a Claude para que corrija
- [ ] `hooks/compiler_check.sh` loguea OK/FAIL + timestamp en `logs/compile.log`
- [ ] `settings.json` tiene ambos hooks configurados (Pre y Post)
- [ ] `logs/commands.log` tiene **al menos 5 entradas** con timestamp
- [ ] `logs/compile.log` tiene **al menos 3 entradas** (con OK y FAIL)
- [ ] `NOTES.md` explica la estructura del JSON de cada herramienta

### ¿Lo sabes explicar?

- [ ] Sé explicar por qué `exit 2` bloquea la operación y `exit 0` la permite
- [ ] Sé explicar **por qué inspecciono con jq ANTES** de escribir el hook
- [ ] Sé explicar cómo el stdout del PostToolUse llega a Claude como feedback

### Bonus

- [ ] Hook `Notification` que avisa en `notifications.log` cuando Claude lleva >60s idle
- [ ] Hook `Stop` que ejecuta `make clean && make` al final de cada turno
- [ ] `settings.local.json` con rutas absolutas + explicación de por qué son más seguras

---

## ex03 — PlayBot

### Mandatory

- [ ] He instalado el servidor MCP de Playwright
- [ ] `mcp_config.json` está configurado y Claude Code lo detecta
- [ ] He capturado pantallazo de la verificación de herramientas MCP disponibles
- [ ] Claude ha navegado a una web pública y extraído datos específicos
- [ ] `reports/github_profile.md` contiene **datos reales** extraídos
- [ ] He diseñado un test que verifica carga de página (status 200)
- [ ] El test comprueba que un elemento específico existe
- [ ] `reports/test_results.md` tiene **al menos 2 tests** (PASS/FAIL + timestamp)
- [ ] `screenshots/` tiene capturas del proceso
- [ ] `NOTES.md` explica el patrón MCP: configurar → verificar → usar

### ¿Lo sabes explicar?

- [ ] Sé explicar qué es MCP y por qué es "el sistema de plugins" de Claude Code
- [ ] Sé explicar el patrón configurar→verificar→usar con mis propias palabras

### Bonus

- [ ] Segundo servidor MCP configurado y usado en la misma sesión
- [ ] Hook `PostToolUse` del ex02 combinado con Playwright (loguea cada página visitada)

---

## ex04 — SDK Bridge

### Mandatory

- [ ] **Paso 1:** mi programa C++ lee y parsea `sample_report.json` y muestra los issues
- [ ] **Paso 2:** `bridge.mjs` recibe la ruta de un `.cpp`, lo analiza vía SDK y genera JSON
- [ ] **Paso 2:** uso `allowedTools: ["Read"]` para limitar qué puede hacer Claude
- [ ] **Paso 3:** `CodeReviewer` lanza `bridge.mjs` con `system()`
- [ ] **Paso 3:** leo el JSON generado y lo muestro por stdout
- [ ] **Paso 3:** gestiono errores (fichero no encontrado, SDK no disponible, JSON malformado)
- [ ] **Paso 4:** detecto el memory leak en `leak.cpp`
- [ ] **Paso 4:** detecto la variable sin inicializar en `uninit.cpp`
- [ ] **Paso 4:** detecto el bug de lógica en `logic_bug.cpp`
- [ ] El programa compila con `-Wall -Wextra -Werror -std=c++17`
- [ ] `NOTES.md` explica el flujo completo: C++ → system() → bridge.mjs → SDK → Claude → JSON → C++

### ¿Lo sabes explicar?

- [ ] Sé explicar por qué C++ no llama al SDK directamente y necesita el puente
- [ ] Sé explicar qué hace `system()` exactamente y cuáles son sus riesgos
- [ ] Sé explicar por qué limito a `allowedTools: ["Read"]`

### Bonus

- [ ] Hook `Stop` del ex02 que ejecuta `CodeReviewer` automáticamente y loguea en `logs/review.log`
- [ ] He sustituido `system()` por `fork()/exec()` y sé explicar la diferencia
- [ ] **Bonus final:** el resultado del review llega a Telegram/Slack via curl

---

## Veredicto final (rellénalo tú)

| Ejercicio | Mandatory completo | NOTES.md | Bonus | ¿Lo sé explicar todo? |
|-----------|:------------------:|:--------:|:-----:|:---------------------:|
| ex00      |                    |          |       |                       |
| ex01      |                    |          |       |                       |
| ex02      |                    |          |       |                       |
| ex03      |                    |          |       |                       |
| ex04      |                    |          |       |                       |

> Si has marcado ✅ en todo el Mandatory y "¿Lo sé explicar?" de los 5 ejercicios,
> has dominado el Módulo 00. No has aprendido a usar Claude Code: has aprendido a **controlarlo**.
>
> Si tienes ⚠️ en algún sitio, vuelve a ese punto. El objetivo no era terminar — era entender.

---

© 2026 Mikel Zabal – CodingWithZabal
