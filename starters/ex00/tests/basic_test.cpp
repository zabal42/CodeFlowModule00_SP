#include <iostream>
#include <cassert>
#include "../inc/Calculator.hpp"

// Tests básicos para Calculator
// ex00: Init & Context — CodeFlow Módulo 00

int main()
{
	Calculator calc;
	int passed = 0;
	int failed = 0;

	// Test add
	if (calc.add(2, 3) == 5.0)
		{ std::cout << "[OK] add(2, 3) == 5" << std::endl; passed++; }
	else
		{ std::cout << "[KO] add(2, 3) != 5" << std::endl; failed++; }

	// Test subtract
	if (calc.subtract(10, 4) == 6.0)
		{ std::cout << "[OK] subtract(10, 4) == 6" << std::endl; passed++; }
	else
		{ std::cout << "[KO] subtract(10, 4) != 6" << std::endl; failed++; }

	// Test multiply
	if (calc.multiply(3, 7) == 21.0)
		{ std::cout << "[OK] multiply(3, 7) == 21" << std::endl; passed++; }
	else
		{ std::cout << "[KO] multiply(3, 7) != 21" << std::endl; failed++; }

	// Test divide
	if (calc.divide(20, 5) == 4.0)
		{ std::cout << "[OK] divide(20, 5) == 4" << std::endl; passed++; }
	else
		{ std::cout << "[KO] divide(20, 5) != 4" << std::endl; failed++; }

	// Test divide by zero
	try
	{
		calc.divide(1, 0);
		std::cout << "[KO] divide(1, 0) deberia lanzar excepcion" << std::endl;
		failed++;
	}
	catch (const std::invalid_argument &)
	{
		std::cout << "[OK] divide(1, 0) lanza invalid_argument" << std::endl;
		passed++;
	}

	std::cout << "\nResultado: " << passed << " OK / " << failed << " KO" << std::endl;
	return failed == 0 ? 0 : 1;
}
