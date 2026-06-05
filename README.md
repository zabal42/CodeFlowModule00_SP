<div align="center">

# CodeFlow — Módulo 00

### Domina Claude Code: desde `/init` hasta el SDK

*Un módulo de estudio progresivo para aprender a **controlar** tu agente de desarrollo.*
*No a usarlo. A controlarlo.*

</div>

---

## ¿De qué va esto?

Claude Code es una herramienta brutal. El problema no es hacer que trabaje — el problema es que trabaje **como tú quieres**, de forma supervisada, controlada y eficiente.

Este módulo te lleva por 5 ejercicios progresivos donde aprendes a domar al agente capa por capa: desde configurar su contexto hasta integrarlo programáticamente en tu propio código C++.

Y sí — aprenderás a hacerlo **gastando menos tokens**. Ese es el problema que tiene todo el mundo con Claude Code: el contexto se dispara, la factura se dispara, y encima empieza a olvidar cosas. Aquí dedicamos un ejercicio entero (ex01) a gestionar la ventana de contexto como se gestiona la memoria en C: si no la controlas, te explota en la cara. Sabrás cuándo usar `/compact`, cuándo `/clean`, qué operaciones consumen más contexto, y saldrás con estrategias propias para que cada token cuente.

Está inspirado en la filosofía de las escuelas tipo 42: **si no puedes explicar lo que has hecho, no lo has aprendido.** Aquí no se trata de que Claude Code haga tu trabajo. Se trata de que tú demuestres que lo controlas.

---

## ¿Para quién es?

- **Vienes de 42 / 19 / una escuela de código** y quieres añadir Claude Code a tu arsenal con el rigor al que ya estás acostumbrado.
- **Eres desarrollador** y has usado Claude Code pero intuyes que solo arañas la superficie.
- **Quieres entender de verdad** cómo funciona el bucle interno: hooks, contexto, MCP, SDK.

No necesitas ser un experto. Necesitas saber programar y tener ganas de entender el *porqué*, no solo el *cómo*.

---

## Los 5 ejercicios

| # | Nombre | Qué aprendes |
|---|--------|--------------|
| **ex00** | Init & Context | Inicializar un proyecto, escribir un buen `CLAUDE.md`, controlar el contexto con `@` |
| **ex01** | Session Management | Gestionar la ventana de contexto: `/compact`, `/clean`, `Esc Esc` y ahorro de tokens |
| **ex02** | HookGuard | Interceptar a Claude con hooks `PreToolUse` y `PostToolUse`. Bloquear comandos peligrosos, compilar automáticamente |
| **ex03** | PlayBot | Conectar herramientas externas vía MCP. Automatizar un navegador con Playwright |
| **ex04** | SDK Bridge | Llamar a Claude Code desde C++ vía SDK. Construir un revisor de código automático |

Cada ejercicio construye sobre el anterior. El ex04 integra **todo** lo aprendido — y cierra con un detalle que engancha: lanzas un review de código, te vas al gimnasio, y el resultado te llega al móvil por Telegram.

---

## Requisitos

- Claude Code instalado y autenticado (cuenta Pro mínimo)
- Node.js >= 18 (para SDK y MCP)
- `jq` instalado (`sudo apt install jq` o `brew install jq`)
- Git
- Un editor de texto a tu gusto

Para los ejercicios con C++: compilador con soporte `-std=c++17`.

---

## Cómo empezar

Este repositorio es **de consulta**. No entregas aquí — lo usas para leer el subject y coger los starters.

```bash
# 1. Clona el repo
git clone https://github.com/<tu-usuario>/CodeFlow-Module00_SP.git

# 2. Lee el subject completo (en serio, léelo entero antes de empezar)
open subject/codeflow_subject_v2.pdf

# 3. Crea tu propio repo de trabajo
mkdir codeflow-m00-tunombre && cd codeflow-m00-tunombre
git init

# 4. Copia el starter del ejercicio que toca
cp -r ../CodeFlow-Module00_SP/starters/ex00 .

# 5. Entra, compila, y empieza a trabajar
cd ex00 && make
```

> **Consejo:** haz commit de checkpoint **antes** de dejar que Claude Code modifique tu código. Si algo se rompe, vuelves atrás. Y si no puedes explicar qué hace cada línea, no lo entregues.

---

## Autoevaluación

¿No tienes a nadie que te corrija? No pasa nada.

➡️ **[Abre la rúbrica interactiva](https://zabal42.github.io/CodeFlowModule00_SP/)** — marca checks, ve tu progreso en tiempo real y recibe el veredicto final.

También disponible como texto plano: [`EVALUACION.md`](EVALUACION.md)

Así se usa:

1. **Abre el enlace** y ve ejercicio por ejercicio
2. **Al terminar cada uno**, marca los checks con un clic
3. Hay tres bloques por ejercicio:
   - **Mandatory** — lo que pide el subject. Binario: lo tienes o no lo tienes
   - **¿Lo explicas?** — tan importante como el mandatory. Si funciona pero no lo entiendes, no cuenta
   - **Bonus** — solo si el mandatory está al 100%
4. **Al completar todo**, aparece el veredicto final

> Si puedes marcar todo el Mandatory **y** todos los "¿Lo explicas?", estás listo para una defensa real.

---

## La regla que lo resume todo

> ¡Por Tutatis!! ¡Usa tu cerebro!
> Claude Code es una herramienta, no un sustituto de tu capacidad de razonamiento.

---

<div align="center">

**Hecho por Mikel Zabal** · CodingWithZabal
[LinkedIn](https://www.linkedin.com/in/mikel-zabal-martin/) · mzabalm@gmail.com

*Si te ha servido, una ⭐ ayuda a que llegue a más gente.*

© 2026 Mikel Zabal – CodingWithZabal

</div>
