// logic_bug.cpp — archivo de test con error de lógica
// ex04: SDK Bridge — CodeFlow Módulo 00

#include <iostream>

// Calcula el factorial de n
int factorial(int n)
{
	int result = 0;  // bug: debería ser 1, no 0

	for (int i = 1; i <= n; i++)
		result *= i;  // con result = 0, siempre devuelve 0

	return result;
}

int main()
{
	std::cout << "factorial(5) = " << factorial(5) << std::endl;
	// Resultado esperado: 120
	// Resultado real:     0 (bug)
	return 0;
}
