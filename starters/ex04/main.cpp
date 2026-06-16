#include <iostream>
#include "CodeReviewer.hpp"

// Uso: ./code_reviewer <archivo.cpp>
// Sin argumentos: usa sample_report.json (Paso 1)

int main(int argc, char **argv)
{
	CodeReviewer reviewer;

	if (argc == 1)
	{
		// Paso 1: demo con el JSON de ejemplo
		std::cout << "Modo demo — leyendo sample_report.json" << std::endl;
		if (!reviewer.analyze("sample_report.json"))
		{
			std::cerr << "Error al procesar sample_report.json" << std::endl;
			return 1;
		}
	}
	else if (argc == 2)
	{
		// Paso 3: análisis real via bridge.mjs
		std::string filepath = argv[1];
		std::cout << "Analizando: " << filepath << std::endl;
		if (!reviewer.analyze(filepath))
		{
			std::cerr << "Error al analizar " << filepath << std::endl;
			return 1;
		}
	}
	else
	{
		std::cerr << "Uso: " << argv[0] << " [archivo.cpp]" << std::endl;
		return 1;
	}

	reviewer.printReport();
	return 0;
}
