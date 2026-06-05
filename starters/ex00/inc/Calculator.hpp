#pragma once

// Calculator — clase básica de operaciones aritméticas
// ex00: Init & Context — CodeFlow Módulo 00

class Calculator
{
public:
    Calculator();
    ~Calculator();

    double  add(double a, double b);
    double  subtract(double a, double b);
    double  multiply(double a, double b);
    double  divide(double a, double b);
};
