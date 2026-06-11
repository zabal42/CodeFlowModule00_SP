<div align="center">

<img src="assets/logo.png" alt="CodeFlow logo" width="250">

# CodeFlow — Módulo 00

### Domina Claude Code: desde /init hasta el SDK

Un módulo de estudio progresivo para aprender a controlar tu agente de desarrollo.  
No a usarlo. A controlarlo.

</div>

---

## ¿De qué va esto?

Claude Code es una herramienta brutal. El problema no es hacer que trabaje — el problema es que trabaje como tú quieres, de forma supervisada, controlada y eficiente.

Este módulo te lleva por 5 ejercicios progresivos donde aprendes a domar al agente capa por capa: desde configurar su contexto hasta integrarlo programáticamente en tu propio código C++.

Y sí — aprenderás a hacerlo gastando menos tokens. Ese es el problema que tiene todo el mundo con Claude Code: el contexto se dispara, la factura se dispara, y encima empieza a olvidar cosas. Aquí dedicamos un ejercicio entero (ex01) a gestionar la ventana de contexto como se gestiona la memoria en C: si no la controlas, te explota en la cara.

Sabrás cuándo usar /compact, cuándo usar /clear, cuándo rebobinar con Esc Esc, qué operaciones consumen más contexto, y saldrás con estrategias propias para que cada token cuente.

Está inspirado en la filosofía de las escuelas tipo 42:

> Si no puedes explicar lo que has hecho, no lo has aprendido.

Aquí no se trata de que Claude Code haga tu trabajo. Se trata de que tú demuestres que lo controlas.

---

## ¿Para quién es?

- Vienes de una escuela tipo 42 y quieres añadir Claude Code a tu arsenal con el rigor al que ya estás acostumbrado.
- Eres desarrollador y has usado Claude Code, pero intuyes que solo estás arañando la superficie.
- Quieres entender de verdad cómo funciona el bucle interno: contexto, hooks, MCP, SDK y automatización supervisada.

No necesitas ser un experto. Necesitas saber programar y tener ganas de entender el porqué, no solo el cómo.

---

## Los 5 ejercicios

| # | Nombre | Qué aprendes |
|---|--------|--------------|
| ex00 | Init & Context | Inicializar un proyecto, escribir un buen CLAUDE.md, controlar el contexto con @ |
| ex01 | Session Management | Gestionar la ventana de contexto: /compact, /clear, rewind (Esc Esc) y ahorro de tokens |
| ex02 | HookGuard | Interceptar a Claude con hooks PreToolUse y PostToolUse; bloquear comandos peligrosos y compilar automáticamente |
| ex03 | PlayBot | Conectar herramientas externas vía MCP y automatizar un navegador con Playwright |
| ex04 | SDK Bridge | Llamar a Claude Code desde C++ vía SDK y construir un revisor de código automático |

Cada ejercicio construye sobre el anterior.

El ex04 integra todo lo aprendido — y cierra con un detalle que engancha: lanzas un review de código, te vas al gimnasio, y el resultado te llega al móvil por Telegram.

---

## Requisitos

- Claude Code instalado y autenticado.
- Cuenta de Anthropic que permita el uso de Claude Code.
- Node.js >= 18 para SDK y MCP.
- jq instalado:

bash sudo apt install jq 

o en macOS:

bash brew install jq 

- Git.
- Un editor de texto a tu gusto.

Para los ejercicios con C++ necesitarás un compilador con soporte para:

bash -std=c++17 

> ¿Usas Windows?  
> Este módulo está diseñado para macOS y Linux.  
> Si estás en Windows, usa WSL2: tendrás un Ubuntu real y todo funcionará de forma mucho más parecida al entorno esperado.  
> → Guía de instalación de WSL2

---

## Cómo empezar

📄 Subject: Español

Este repositorio es de consulta.

No entregas aquí. Lo usas para:

- leer el subject,
- consultar la evaluación,
- copiar los starters,
- revisar la documentación de apoyo.

Tu trabajo debe vivir en otro repositorio propio, creado al mismo nivel que este.

---

### 1. Clona el repo de consulta

bash git clone https://github.com/zabal42/CodeFlowModule00_SP.git cd CodeFlowModule00_SP 

---

### 2. Lee el subject completo

Sí. Entero. En serio.

bash open subject/codeflow_subject_v2.pdf 

En Linux puedes usar:

bash xdg-open subject/codeflow_subject_v2.pdf 

---

### 3. Crea tu propio repo de trabajo

Primero sal del repo de consulta:

bash cd .. 

Ahora crea tu repositorio personal de trabajo al mismo nivel:

bash mkdir codeflow-m00-tunombre cd codeflow-m00-tunombre git init 

La estructura recomendada debe quedar así:

txt Code Flow Module 00/ ├── CodeFlowModule00_SP/        # repo de consulta └── codeflow-m00-tunombre/      # tu repo personal de trabajo 

> Importante: no crees tu repo personal dentro de CodeFlowModule00_SP.  
> Si lo haces, puedes acabar con un repositorio Git dentro de otro y liarte con los commits, los paths y los starters.

---

### 4. Copia el starter del ejercicio que toca

Desde tu repo personal de trabajo:

bash cp -r ../CodeFlowModule00_SP/starters/ex00 . 

Comprueba que se ha copiado correctamente:

bash ls 

Deberías ver:

txt ex00 

---

### 5. Entra, compila y empieza a trabajar

bash cd ex00 make 

A partir de aquí, sigue el subject.

---

## Consejo de supervivencia

Haz commits de checkpoint antes de dejar que Claude Code modifique tu código.

Por ejemplo:

bash git add . git commit -m "checkpoint before claude modifications" 

Si algo se rompe, vuelves atrás.

Y recuerda:

> Si no puedes explicar qué hace cada línea, no lo entregues.

---

## Autoevaluación

¿No tienes a nadie que te corrija? No pasa nada.

➡️ Abre la rúbrica interactiva — marca checks, ve tu progreso en tiempo real y recibe el veredicto final.

También disponible como texto plano: EVALUACION.md

Así se usa:

1. Abre el enlace y ve ejercicio por ejercicio.
2. Al terminar cada uno, marca los checks con un clic.
3. Hay tres bloques por ejercicio:
   - Mandatory — lo que pide el subject. Binario: lo tienes o no lo tienes.
   - ¿Lo explicas? — tan importante como el mandatory. Si funciona pero no lo entiendes, no cuenta.
   - Bonus — solo si el mandatory está al 100%.
4. Al completar todo, aparece el veredicto final.

> Si puedes marcar todo el Mandatory y todos los “¿Lo explicas?”, estás listo para una defensa real.

---

## La regla que lo resume todo

> ¡Por Tutatis! ¡Usa tu cerebro!  
> Claude Code es una herramienta, no un sustituto de tu capacidad de razonamiento.

---

<div align="center">

Hecho por Mikel Zabal · CodingWithZabal  
LinkedIn · mzabalm@gmail.com

Si te ha servido, una ⭐ ayuda a que llegue a más gente.

© 2026 Mikel Zabal – CodingWithZabal

</div>