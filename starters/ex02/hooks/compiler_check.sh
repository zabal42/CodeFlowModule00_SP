#!/usr/bin/env bash
# hooks/compiler_check.sh — PostToolUse hook para Write
# ex02: HookGuard — CodeFlow Módulo 00
#
# Se ejecuta después de cada Write en archivos .cpp o .hpp.
# Debe:
#   1. Detectar si el archivo escrito es .cpp o .hpp
#   2. Ejecutar make en el directorio del proyecto (ex00/)
#   3. Si falla, imprimir el error en stdout para que Claude lo vea y corrija
#   4. Loguear cada resultado en logs/compile.log con timestamp
#
# Formato de log esperado:
#   [2026-01-01 12:00:00] OK   | src/Calculator.cpp
#   [2026-01-01 12:00:01] FAIL | src/main.cpp

INPUT=$(cat)

# TODO: inspecciona el JSON (Parte 1) para saber qué campo
#       contiene la ruta del archivo escrito
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.path // empty')

TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
LOG_FILE="logs/compile.log"

mkdir -p logs

# TODO: comprueba si la extensión es .cpp o .hpp
# Si no lo es, sal con exit 0 sin hacer nada

# TODO: ejecuta make (ajusta la ruta según donde esté tu Makefile)
# Captura stdout y stderr
# MAKE_OUTPUT=$(make -C ../ex00 2>&1)
# MAKE_EXIT=$?

# TODO: loguea el resultado y, si falla, imprime el error en stdout
# para que Claude lo reciba como feedback y pueda corregir

exit 0
