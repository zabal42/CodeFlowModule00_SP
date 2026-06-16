// leak.cpp — archivo de test con memory leak
// ex04: SDK Bridge — CodeFlow Módulo 00

#include <iostream>

int main()
{
	int *ptr = new int(42);  // new sin delete correspondiente

	std::cout << "Valor: " << *ptr << std::endl;

	return 0;  // ptr nunca se libera → memory leak
}
