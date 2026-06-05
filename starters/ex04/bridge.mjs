#!/usr/bin/env node
// bridge.mjs — SDK Bridge
// ex04: SDK Bridge — CodeFlow Módulo 00
//
// Uso: node bridge.mjs <ruta/al/archivo.cpp>
// Output: JSON con el mismo formato que sample_report.json, por stdout
//
// Pasos:
//   1. Lee el archivo .cpp indicado
//   2. Lo envía a Claude Code via SDK para análisis
//   3. Imprime el resultado como JSON válido en stdout

import Anthropic from "@anthropic-ai/claude-code";

const filepath = process.argv[2];

if (!filepath) {
  console.error("Uso: node bridge.mjs <archivo.cpp>");
  process.exit(1);
}

// TODO: Paso 2
// 1. Lee el contenido del archivo con fs.readFileSync
// 2. Lanza una sesión de Claude Code via SDK con:
//    - allowedTools: ["Read"]  ← limita qué puede hacer Claude
//    - prompt: pide un análisis del código y que responda en JSON
// 3. Parsea la respuesta de Claude y extrae el JSON
// 4. Imprime el JSON por stdout (console.log(JSON.stringify(report)))
//
// Formato de salida esperado:
// {
//   "file": "leak.cpp",
//   "issues": [
//     { "line": 4, "type": "memory_leak", "message": "new sin delete correspondiente" }
//   ],
//   "summary": "1 issue encontrado"
// }

// Ejemplo de estructura SDK (completa esto):
/*
import { readFileSync } from "fs";

const code = readFileSync(filepath, "utf-8");

const client = new Anthropic();

const messages = await client.messages.create({
  model: "claude-opus-4-5",
  max_tokens: 1024,
  messages: [
    {
      role: "user",
      content: `Analiza este código C++ y devuelve SOLO un JSON con este formato exacto:
{
  "file": "<nombre del archivo>",
  "issues": [
    { "line": <número>, "type": "<tipo>", "message": "<descripción>" }
  ],
  "summary": "<N> issues encontrados"
}
Código:
\`\`\`cpp
${code}
\`\`\``,
    },
  ],
});

// Extrae y parsea el JSON de la respuesta
// Imprime por stdout
*/
