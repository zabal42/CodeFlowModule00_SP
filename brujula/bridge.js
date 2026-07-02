// =====================================================================
//  Brújula — BRIDGE LOCAL (Agent SDK)
//  La web (docs/brujula.html) habla con este servidor; el servidor usa
//  query() del Agent SDK, que corre TU Claude Code Pro en TU máquina.
//  Resultado: sin API key, sin cuota, sin facturas. Esa es la idea del ex04.
//
//  Arranque:  npm install  &&  npm start   →  http://localhost:3000
// =====================================================================

import express from 'express';
import { query } from '@anthropic-ai/claude-agent-sdk';
import { buildSystemPrompt } from './brain.js';

// BARANDILLA (la lección del ex04): si hubiera una API key en el entorno, el
// SDK la usaría y gastaría CRÉDITOS DE PAGO de la API en vez de tu sesión Pro.
// La quitamos a propósito para forzar el uso de tu Claude Code (gratis).
delete process.env.ANTHROPIC_API_KEY;

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json({ limit: '256kb' }));

// CORS abierto: la web puede abrirse por file:// o por un server local.
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// Estado del SERVIDOR (no del navegador): modo Endika. Persiste entre peticiones.
let endika = false;
const ENDIKA_ON  = /modo\s+endika\s+(on|activ)/i;
const ENDIKA_OFF = /modo\s+endika\s+(off|desactiv|apag)/i;

app.get('/health', (req, res) => res.json({ ok: true, endika }));

app.post('/chat', async (req, res) => {
  const { message = '', history = [] } = req.body || {};
  if (typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'falta "message"' });
  }

  // Toggle de modo Endika (estado del servidor).
  if (ENDIKA_OFF.test(message)) endika = false;
  else if (ENDIKA_ON.test(message)) endika = true;

  const systemPrompt = buildSystemPrompt(endika);

  // El navegador manda el historial; lo reconstruimos como contexto del turno.
  const transcript = (Array.isArray(history) ? history : [])
    .map(m => `${m && m.role === 'user' ? 'Usuario' : 'Brújula'}: ${m ? m.text : ''}`)
    .join('\n');
  const prompt = transcript
    ? `=== Conversación previa ===\n${transcript}\n\n=== Mensaje nuevo del usuario ===\n${message}`
    : message;

  try {
    let out = '';
    for await (const msg of query({
      prompt,
      options: {
        systemPrompt,        // el cerebro (brain.js), string propio de Brújula
        allowedTools: [],    // responde desde su cerebro; no toca el disco
        maxTurns: 2,
        persistSession: false
      }
    })) {
      if (msg.type === 'result') {
        out = msg.subtype === 'success'
          ? msg.result
          : 'Uy, algo se me ha cruzado por dentro 🧭. Prueba otra vez.';
      }
    }
    res.json({ response: out });
  } catch (err) {
    console.error('[bridge] error en query():', err);
    res.status(500).json({ error: 'fallo del Agent SDK', detail: String((err && err.message) || err) });
  }
});

app.listen(PORT, () => {
  console.log(`🧭  Brújula bridge en http://localhost:${PORT}  (Endika: ${endika ? 'on' : 'off'})`);
  console.log('    Motor: Agent SDK query() → tu Claude Code Pro (sin API key).');
});
