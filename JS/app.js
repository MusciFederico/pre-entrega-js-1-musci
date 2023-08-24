const colores = [
    { nombre: 'rojo', displayName: 'Rojo intenso' },
    { nombre: 'amarillo', displayName: 'Amarillo brillante' },
    { nombre: 'negro', displayName: 'Negro elegante' },
    { nombre: 'azul', displayName: 'Azul profundo' },
    { nombre: 'blanco', displayName: 'Blanco clásico' },
    { nombre: 'gris', displayName: 'Gris moderno' },
    { nombre: 'beige', displayName: 'Beige suave' }
];

let continuar = true;

function elegirColor(nombreColor) {
    let colorInput = prompt(`¿Qué ${nombreColor} de sillón quiere comprar?\n${colores.map(color => color.displayName).join('\n')}`).toLowerCase();

    const colorSeleccionado = colores.find(index => index.nombre === colorInput || index.displayName.toLowerCase() === colorInput);

    if (colorSeleccionado) {
        return colorSeleccionado.nombre;
    } else {
        alert('Color no válido');
        return elegirColor(nombreColor);
    }
}


while (continuar) {
    let eleccion = prompt('Bienvenido a Himolla: ¿Quiere continuar con su compra?\nSi = 1\nNo = 2');
    if (eleccion === '1') {
        let colorPrincipal = elegirColor('color principal');
        let colorSecundario = elegirColor('color secundario');
        alert(`Has elegido ${colores.find(c => c.nombre === colorPrincipal).displayName} y ${colores.find(index => index.nombre === colorSecundario).displayName} para tu sillón`);
        continuar = false;
    } else if (eleccion === '2') {
        alert('Gracias por visitar Himolla');
        continuar = false;
    } else {
        alert('No ha ingresado un valor válido, por favor inténtelo de nuevo');
    }
}
