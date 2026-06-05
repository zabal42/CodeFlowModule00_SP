#!/usr/bin/env bash
# hooks/guard.sh — PreToolUse hook para Bash
# ex02: HookGuard — CodeFlow Módulo 00
#
# Recibe el JSON de la herramienta por stdin.
# Debe:
#   1. Bloquear comandos con rm -rf o sudo (exit 2 + mensaje de error)
#   2. Loguear todos los comandos intentados en logs/commands.log con timestamp
#
# Códigos de salida:
#   0  → permitir la operación
#   2  → bloquear la operación (Claude recibe el stderr como feedback)

# Lee el JSON completo desde stdin
INPUT=$(cat)

# Extrae el comando bash usando jq
# TODO: inspecciona el JSON con jq primero (Parte 1 del ejercicio)
#       para saber qué campo contiene el comando antes de escribir esto
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
LOG_FILE="logs/commands.log"

# Asegura que el directorio de logs existe
mkdir -p logs

# TODO: implementa el logging
# Formato esperado: [2026-01-01 12:00:00] ALLOWED | rm -rf /tmp/test
# echo "..." >> "$LOG_FILE"

# TODO: implementa el bloqueo de rm -rf y sudo
# Pista: usa grep o un case/if sobre $COMMAND
# Si bloqueas: imprime el motivo en stderr y haz exit 2

exit 0
