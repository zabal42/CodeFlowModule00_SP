# NOTES.md — ex04: SDK Bridge

> Rellena este archivo con tus observaciones. Es OBLIGATORIO para la evaluación.

---

## 1. Paso 1 — Parser JSON en C++

<!-- ¿Cómo implementaste el parser? ¿Usaste find/substr o algo distinto? -->
<!-- ¿Qué dificultades encontraste? -->

## 2. Paso 2 — bridge.mjs

<!-- ¿Cómo estructuraste el prompt para que Claude devuelva JSON válido? -->
<!-- ¿Por qué limitaste a allowedTools: ["Read"]? -->

## 3. Paso 3 — Conexión C++ → SDK

<!-- ¿Cómo lanzas bridge.mjs desde C++? ¿Qué hace system() exactamente? -->
<!-- ¿Cómo gestionas los errores? -->

## 4. Paso 4 — Resultados con test_files/

<!-- ¿Detectó Claude el memory leak en leak.cpp? -->
<!-- ¿Detectó la variable sin inicializar en uninit.cpp? -->
<!-- ¿Detectó el bug de lógica en logic_bug.cpp? -->

## 5. El flujo completo

<!-- Describe con tus palabras: C++ → system() → bridge.mjs → SDK → Claude → JSON → C++ -->

## 6. Bonus (si aplica)

<!-- ¿Usaste fork()/exec() en lugar de system()? ¿Qué diferencia notaste? -->
<!-- ¿Configuraste la notificación a Telegram/Slack? ¿Cómo? -->

## 7. Conclusión

<!-- ¿Qué has aprendido sobre la integración de LLMs en flujos de desarrollo? -->
