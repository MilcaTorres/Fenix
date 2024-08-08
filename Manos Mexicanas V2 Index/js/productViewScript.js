document.addEventListener('DOMContentLoaded', function() {
    const deleteProductButton = document.getElementById('deleteProductButton');

    deleteProductButton.addEventListener('click', function() {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "¡Sí, elimínalo!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Aquí puedes agregar la lógica para eliminar el producto.
                Swal.fire({
                    title: "¡Eliminado!",
                    text: "El producto ha sido eliminado.",
                    icon: "success"
                }).then(() => {
                    // Simulación de redirección después de eliminar.
                    window.location.href = 'gestionarProductos.html';
                });
            }
        });
    });
});
