#!/usr/bin/env node
// bridge.mjs — SDK Bridge
// ex04: SDK Bridge — CodeFlow Módulo 00
//
// Uso: node bridge.mjs <ruta/al/archivo.cpp>
// Output: JSON con el mismo formato que sample_report.json, por stdout
//
// Pasos:
//   1. Recibe la ruta del archivo .cpp indicado
//   2. Lo envía a Claude Code via Agent SDK (query) para análisis
//   3. Imprime el resultado como JSON válido en stdout
//
// IMPORTANTE — autenticación:
//   query() usa la MISMA sesión de Claude Code en la que ya iniciaste
//   sesión durante ex00–ex03. No necesitas ANTHROPIC_API_KEY ni tarjeta:
//   el análisis corre con tu suscripción de Claude Code, no por la API
//   de pago por token.

import { query } from "@anthropic-ai/claude-code";
import { basename } from "node:path";

const filepath = process.argv[2];

if (!filepath) {
  console.error("Uso: node bridge.mjs <archivo.cpp>");
  process.exit(1);
}

// TODO: Paso 2
// 1. Construye el prompt: pide a Claude que LEA el archivo `filepath`,
//    analice el código C++ y responda SOLO con un JSON válido.
// 2. Lanza una sesión con query({ prompt, options }):
//    - allowedTools: ["Read"]  ← Claude solo puede LEER el archivo, nada más
//    - (no hace falta model: si lo omites, usa tu sesión de Claude Code activa)
// 3. Itera los mensajes y quédate con el del tipo "result" (subtype "success").
// 4. Extrae el JSON de esa respuesta y parséalo.
// 5. Imprime el JSON por stdout (console.log(JSON.stringify(report)))
//
// Formato de salida esperado:
// {
//   "file": "leak.cpp",
//   "issues": [
//     { "line": 4, "type": "memory_leak", "message": "new sin delete correspondiente" }
//   ],
//   "summary": "1 issue encontrado"
// }

// Ejemplo de estructura con el Agent SDK (completa esto):
/*
const prompt = `Lee el archivo ${filepath} y analiza el código C++ en busca de bugs
(memory leaks, variables sin inicializar, errores de lógica).
Responde SOLO con un JSON válido, sin texto ni explicaciones alrededor,
con este formato exacto:
{
  "file": "${basename(filepath)}",
  "issues": [
    { "line": <número>, "type": "<tipo>", "message": "<descripción>" }
  ],
  "summary": "<N> issues encontrados"
}`;

let respuesta = "";

for await (const message of query({
  prompt,
  options: {
    allowedTools: ["Read"], // limita qué puede hacer Claude: solo leer
    maxTurns: 3,
  },
})) {
  if (message.type === "result" && message.subtype === "success") {
    respuesta = message.result;
  }
}

// 'respuesta' puede venir envuelta en un bloque ```json ... ```;
// límpiala antes de JSON.parse y luego:
// const report = JSON.parse(respuesta);
// console.log(JSON.stringify(report));
*/
