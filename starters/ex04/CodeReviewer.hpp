#pragma once

#include <string>
#include <vector>

// Issue — representa un problema encontrado en el código
struct Issue
{
	int         line;
	std::string type;
	std::string message;
};

// ReviewReport — resultado completo del análisis de un archivo
struct ReviewReport
{
	std::string         file;
	std::vector<Issue>  issues;
	std::string         summary;
};

// CodeReviewer — lanza bridge.mjs y procesa el resultado JSON
class CodeReviewer
{
public:
	CodeReviewer();
	~CodeReviewer();

	// Analiza un archivo .cpp usando el SDK via bridge.mjs
	// Devuelve true si el análisis se completó (aunque haya issues)
	// Devuelve false si hubo error (archivo no encontrado, SDK no disponible, etc.)
	bool            analyze(const std::string &filepath);

	// Devuelve el último reporte generado
	ReviewReport    getReport() const;

	// Imprime el reporte por stdout de forma legible
	void            printReport() const;

private:
	ReviewReport    _report;

	// Lanza bridge.mjs con system() y captura el JSON en un archivo temporal
	bool            runBridge(const std::string &filepath);

	// Parsea el JSON del archivo temporal y rellena _report
	// TODO: Paso 1 — implementa el parser JSON (sin SDK todavía)
	bool            parseJSON(const std::string &jsonPath);
};
