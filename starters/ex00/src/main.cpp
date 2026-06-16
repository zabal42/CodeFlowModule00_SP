#include <iostream>
#include "../inc/Calculator.hpp"

int main()
{
	Calculator calc;

	std::cout << "=== Calculator ===" << std::endl;
	std::cout << "3 + 4   = " << calc.add(3, 4) << std::endl;
	std::cout << "10 - 6  = " << calc.subtract(10, 6) << std::endl;
	std::cout << "5 * 7   = " << calc.multiply(5, 7) << std::endl;
	std::cout << "20 / 4  = " << calc.divide(20, 4) << std::endl;

	return 0;
}
