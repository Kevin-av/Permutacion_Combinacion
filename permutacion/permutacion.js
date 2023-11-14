function calcularPermutacion() {
    let numero1 = parseInt(document.getElementById('numero1').value, 10);
    let numero2 = parseInt(document.getElementById('numero2').value, 10);

    let permutacion = permutation(numero1, numero2);

    document.getElementById('resultado').textContent = `Permutaciones de ${numero1} objetos tomados ${numero2} a la vez: ${permutacion}`;
}

function factorial(n) {
    if (n === 0) return 1; 
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i; 
    }
    return result; 
}

function permutation(n, r) {
    if (n < r) return 0; 
    return factorial(n) / factorial(n - r);  
}
/*
function calcularPermutaciones() {
    let numero1 = parseInt(document.getElementById('numero1').value, 10);
    let numero2 = parseInt(document.getElementById('numero2').value, 10);

    let permutaciones = obtenerPermutaciones(numero1, numero2);
    let resultado = '';

    for (let i = 0; i < permutaciones.length; i++) {
        resultado += `<div>${permutaciones[i]}\n</div>`;
    }

      document.getElementById('resultado').innerHTML = resultado;

      document.getElementById('resultado').innerHTML += `Permutaciones de ${numero1} objetos tomados ${numero2} a la vez: ${permutation(numero1, numero2)}`;
}

function factorial(n) {
    if (n === 0) return 1; 
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i; 
    }
    return result; 
}

function permutation(n, r) {
    if (n < r) return 0; 
    return factorial(n) / factorial(n - r); 
}

function obtenerPermutaciones(n, r) {
    if (n < r) return []; 

    const numeros = Array.from({ length: n }, (_, i) => i + 1); 
    const permutaciones = [];
    permutacionRecursiva([], numeros, r, permutaciones);
    return permutaciones;
}

function permutacionRecursiva(actual, disponibles, r, resultados) {
    if (actual.length === r) {
        resultados.push([...actual]); 
        return;
    }

    for (let i = 0; i < disponibles.length; i++) {
        const nuevoActual = [...actual, disponibles[i]];
        const nuevosDisponibles = [...disponibles.slice(0, i), ...disponibles.slice(i + 1)];
        permutacionRecursiva(nuevoActual, nuevosDisponibles, r, resultados);
    }
}*/