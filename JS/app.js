class Color {
    constructor(nombre, displayName) {
        this.nombre = nombre;
        this.displayName = displayName;
    }
}

const colores = [
    new Color("Rojo", "Rojo intenso"),
    new Color("Amarillo", "Amarillo brillante"),
    new Color("Negro", "Negro elegante"),
    new Color("Azul", "Azul profundo"),
    new Color("Blanco", "Blanco clásico"),
    new Color("Gris", "Gris moderno"),
    new Color("Beige", "Beige suave"),
];

let continuar = true;

function elegirColor(nombreColor) {
    let colorInput = prompt(`¿Qué ${nombreColor} de sillón quiere comprar?\n${colores.map(color => color.displayName).join('\n')}`).toLowerCase();

    const colorSeleccionado = colores.find(index =>
        index.nombre.toLowerCase() === colorInput || index.displayName.toLowerCase() === colorInput
    );

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
        alert(`Has elegido ${colores.find(index => index.nombre === colorPrincipal).displayName} y ${colores.find(index => index.nombre === colorSecundario).displayName} para tu sillón`);
        continuar = false;
    } else if (eleccion === '2') {
        alert('Gracias por visitar Himolla');
        continuar = false;
    } else {
        alert('No ha ingresado un valor válido, por favor inténtelo de nuevo');
    }
}
