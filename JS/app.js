function elegirColor(nombreColor) {
    let color = prompt('¿Qué color de sillón quiere comprar como ' + nombreColor + '? \nRojo \nAmarillo \nNegro \nAzul \nBlanco \nGris \nBeige').toLowerCase();
    switch (color) {
        case 'rojo':
            return 'rojo';
            break
        case 'amarillo':
            return 'amarillo';
            break
        case 'negro':
            return 'negro';
            break
        case 'azul':
            return 'azul';
            break
        case 'blanco':
            return 'blanco';
            break
        case 'gris':
            return 'gris';
            break
        case 'beige':
            return 'beige';
            break
        default:
            alert('Color no válido');
            return elegirColor(nombreColor);
    }
}

let continuar = true;

while (continuar) {
    let eleccion = prompt('Bienvenido a Himolla: ¿Quiere continuar con su compra?\nSi = 1\nNo = 2');
    if (eleccion === '1') {
        let colorPrincipal = elegirColor('color principal');
        let colorSecundario = elegirColor('color secundario');
        alert('Has elegido ' + colorPrincipal + ' y ' + colorSecundario + ' para tu sillon');
        continuar = false;
    } else if (eleccion === '2') {
        alert('Gracias por visitar Himolla');
        continuar = false;
    } else {
        alert('No ha ingresado un valor válido, por favor inténtelo de nuevo');
    }
}
