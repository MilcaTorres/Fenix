document.getElementById('modifyProductButton').addEventListener('click', function() {
    Swal.fire({
        title: "Quieres guardar los cambios?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `No Guardar`
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Guardado!", "", "success").then(() => {
                // Aquí puedes agregar la lógica para guardar los cambios.
                window.location.href = 'visualizarProducto.html';
            });
        } else if (result.isDenied) {
            Swal.fire("Los cambios no se guardaron...", "", "error").then(() => {
            window.location.href = 'visualizarProducto.html';
        })};
    });
});
