# Brújula — bridge local (Agent SDK)

La Brújula "de verdad" del Módulo 00. Corre en **tu** máquina y usa **tu** sesión
de Claude Code Pro a través del Agent SDK (`query()`): **sin API key, sin cuota,
sin facturas**. Esa distinción (Agent SDK con tu Pro vs. API de pago) es justo la
lección del **ex04**.

## Requisitos
- Node.js >= 18
- Claude Code instalado y con login (cuenta **Pro**).

## Arranque
```bash
cd brujula
npm install
npm start          # escucha en http://localhost:3000
```

## Usarla
Abre `docs/brujula.html` (por `file://` o un server local). Si el bridge está
encendido, Brújula piensa de verdad. Si no lo encuentra, cae sola al modo
**demo** (escaparate) — exactamente lo que verá quien la abra en la web pública.

## Cómo está montado
- `brain.js` — **el cerebro**: system prompt + contenido crítico por ejercicio +
  bloque del modo Endika. Única fuente de verdad. No viaja a la web pública.
- `bridge.js` — Express. `POST /chat` recibe `{ message, history }` y devuelve
  `{ response }`; usa `query()` del Agent SDK. `GET /health` para el sondeo.
  Borra `ANTHROPIC_API_KEY` del entorno a propósito (barandilla del ex04).
- **Modo Endika** = estado del servidor (booleano): escribe `modo endika on` /
  `modo endika off` en el chat.

## Motores (en la web, `getResponse`)
- `claude` → este bridge (real).
- `gemini` → preparado para el futuro web (no cableado).
- `mock` → respuestas de prueba.
- `demo` → mensaje fijo cuando no hay bridge.
