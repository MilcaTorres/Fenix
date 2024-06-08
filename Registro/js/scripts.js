document.addEventListener('DOMContentLoaded', () => {
    const nuevoArticulo = JSON.parse(localStorage.getItem('nuevoArticulo'));
    if (nuevoArticulo) {
        agregarArticuloATabla(nuevoArticulo);
        localStorage.removeItem('nuevoArticulo');
    }

    const articuloModificar = JSON.parse(localStorage.getItem('articuloModificar'));
    if (articuloModificar) {
        document.getElementById('nombre').value = articuloModificar.nombre;
        document.getElementById('descripcion').value = articuloModificar.descripcion;
        document.getElementById('precio').value = articuloModificar.precio;
        document.getElementById('cantidad').value = articuloModificar.cantidad;
        localStorage.removeItem('articuloModificar');
    }
});

function registrarArticulo() {
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const precio = document.getElementById('precio').value;
    const cantidad = document.getElementById('cantidad').value;

    const articulo = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        cantidad: cantidad
    };

    localStorage.setItem('nuevoArticulo', JSON.stringify(articulo));
    window.location.href = 'verArticulo.html';
}

function agregarArticuloATabla(articulo) {
    const tabla = document.getElementById('articulosTable');
    const fila = tabla.insertRow();

    fila.insertCell(0).innerText = articulo.nombre;
    fila.insertCell(1).innerText = articulo.descripcion;
    fila.insertCell(2).innerText = articulo.precio;
    fila.insertCell(3).innerText = articulo.cantidad;
    fila.insertCell(4).innerHTML = '<button class="btn btn-warning" onclick="modificarArticulo(this)">Modificar</button>';
    fila.insertCell(5).innerHTML = '<button class="btn btn-danger" onclick="eliminarArticulo(this)">Eliminar</button>';
}

function eliminarArticulo(button) {
    const fila = button.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
}

function modificarArticulo(button) {
    const fila = button.parentNode.parentNode;
    const nombre = fila.cells[0].innerText;
    const descripcion = fila.cells[1].innerText;
    const precio = fila.cells[2].innerText;
    const cantidad = fila.cells[3].innerText;

    const articulo = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        cantidad: cantidad
    };

    localStorage.setItem('articuloModificar', JSON.stringify(articulo));
    window.location.href = 'registrarArticulo.html';
}
