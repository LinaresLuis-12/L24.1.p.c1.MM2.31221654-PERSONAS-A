const personas = [
    { nombre: 'Luisa', sexo: 'F' },
    { nombre: 'Ana', sexo: 'F' },
    { nombre: 'José', sexo: 'M' },
    { nombre: 'Carmen', sexo: 'F' },
    { nombre: 'Rosa', sexo: 'F' },
    { nombre: 'José', sexo: 'M' },
    { nombre: 'María', sexo: 'F' },
    { nombre: 'Luz', sexo: 'F' },
    { nombre: 'Rafael', sexo: 'M' },
    { nombre: 'Liz', sexo: 'F' },
    { nombre: 'Marcos', sexo: 'M' },
    { nombre: 'Leo', sexo: 'M' }
];

let totalMujeres = 0;
let totalHombres = 0;

personas.forEach(persona => {
    if (persona.sexo === 'F') {
        totalMujeres++;
    } else {
        totalHombres++;
    }
});

const porcentajeMujeres = (totalMujeres / personas.length) * 100;

let resultado = '';
if (totalHombres > totalMujeres) {
    resultado = 'Hay más hombres que mujeres.';
} else if (totalMujeres > totalHombres) {
    resultado = 'Hay más mujeres que hombres.';
} else {
    resultado = 'Hay igual cantidad de hombres y mujeres.';
}

const totalPersonas = personas.length;

let salida = document.getElementById("salida");
salida.innerHTML = "Contador de Personas:";
salida.innerHTML += `<br>Porcentaje de Mujeres: ${porcentajeMujeres.toFixed(2)}%`;
salida.innerHTML += `<br>${resultado}`;