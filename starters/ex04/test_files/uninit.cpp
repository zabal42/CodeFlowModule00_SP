// uninit.cpp — archivo de test con variable sin inicializar
// ex04: SDK Bridge — CodeFlow Módulo 00

#include <iostream>

int main()
{
    int x;  // declarada pero no inicializada

    if (x > 0)  // comportamiento indefinido: x tiene valor basura
        std::cout << "Positivo" << std::endl;
    else
        std::cout << "No positivo" << std::endl;

    return 0;
}
