function calcularPermutacion() {
    // Obtenemos los valores ingresados por el usuario desde elementos de entrada en el HTML.
    let numero1 = parseInt(document.getElementById('numero1').value, 10);
    let numero2 = parseInt(document.getElementById('numero2').value, 10);

    // Calculamos la permutación y almacenamos el resultado.
    let permutacion = permutation(numero1, numero2);

    // Mostramos el resultado en un elemento de texto en el HTML.
    document.getElementById('resultado').textContent = `Permutaciones de ${numero1} objetos tomados ${numero2} a la vez: ${permutacion}`;
}

// Esta función calcula el factorial de un número 'n'.
function factorial(n) {
    if (n === 0) return 1;  // El factorial de 0 es 1 por definición.
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;  // Multiplicamos el resultado por cada número desde 1 hasta 'n'.
    }
    return result;  // Devolvemos el resultado del factorial.
}

// Esta función calcula la permutación de 'n' objetos tomados 'r' a la vez.
function permutation(n, r) {
    if (n < r) return 0;  // Si 'n' es menor que 'r', la permutación es 0 (no es posible).
    return factorial(n) / factorial(n - r);  // La fórmula de la permutación es n! / (n - r)!.
}