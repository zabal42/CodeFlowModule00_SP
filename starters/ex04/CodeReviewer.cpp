#include "CodeReviewer.hpp"
#include <iostream>
#include <fstream>
#include <sstream>
#include <cstdlib>

CodeReviewer::CodeReviewer() {}

CodeReviewer::~CodeReviewer() {}

bool CodeReviewer::analyze(const std::string &filepath)
{
    // Paso 3: llama a runBridge() y luego a parseJSON()
    // Por ahora (Paso 1), parsea directamente sample_report.json
    (void)filepath;
    return parseJSON("sample_report.json");
}

void CodeReviewer::printReport() const
{
    std::cout << "=== Code Review: " << _report.file << " ===" << std::endl;

    if (_report.issues.empty())
    {
        std::cout << "Sin issues detectados." << std::endl;
    }
    else
    {
        for (const Issue &issue : _report.issues)
        {
            std::cout << "[" << issue.type << "] "
                      << "Linea " << issue.line << ": "
                      << issue.message << std::endl;
        }
    }

    std::cout << "\nResumen: " << _report.summary << std::endl;
}

ReviewReport CodeReviewer::getReport() const
{
    return _report;
}

bool CodeReviewer::runBridge(const std::string &filepath)
{
    // TODO: Paso 3
    // Construye el comando: "node bridge.mjs <filepath> > /tmp/review_output.json"
    // Lanza con system()
    // Comprueba el código de retorno
    // Devuelve true si exit code == 0
    (void)filepath;
    return false;
}

bool CodeReviewer::parseJSON(const std::string &jsonPath)
{
    // TODO: Paso 1
    // Lee jsonPath como string
    // Parsea manualmente el JSON (sin librerías externas):
    //   - Busca "file", "issues", "summary"
    //   - Para cada issue busca "line", "type", "message"
    // Rellena _report
    //
    // Pista: puedes usar std::string::find() y substr()
    // o implementar un parser simple línea a línea

    std::ifstream file(jsonPath);
    if (!file.is_open())
    {
        std::cerr << "Error: no se puede abrir " << jsonPath << std::endl;
        return false;
    }

    // TODO: implementa el parsing aquí
    // Por ahora solo comprueba que el archivo existe
    (void)file;
    return true;
}
