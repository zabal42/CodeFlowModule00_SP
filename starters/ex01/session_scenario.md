# session_scenario.md — ex01: Session Management

Este archivo describe el escenario guiado que debes ejecutar con Claude Code.
Usa el proyecto de ex00 como base.

---

## El escenario (9 pasos obligatorios)

Ejecuta estos pasos en orden dentro de una sesión de Claude Code:

| Paso | Acción |
|------|--------|
| 1 | Pide a Claude que analice la estructura del proyecto |
| 2 | Pide que localice la función principal de Calculator |
| 3 | Pide una mejora pequeña: añadir un método `power(double base, double exp)` |
| 4 | Pide que ejecute `make` |
| 5 | Introduce un error deliberado en el código (ej: elimina un `;`) |
| 6 | Pide que diagnostique y corrija el error |
| 7 | Ejecuta `/compact` |
| 8 | Pide una nueva modificación relacionada con el paso 3 (ej: añadir `sqrt`) |
| 9 | Observa y documenta qué recuerda Claude y qué necesita releer |

---

## Qué documentar

- Registra cada paso en `session_log.txt` usando el template incluido.
- Presta especial atención al comportamiento de Claude ANTES y DESPUÉS de `/compact`.
- Responde las preguntas de análisis en `NOTES.md`.
