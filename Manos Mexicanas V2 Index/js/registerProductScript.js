document.addEventListener('DOMContentLoaded', function() {
    const productNameInput = document.getElementById('productName');
    const productCategoryInput = document.getElementById('productCategory');
    const productStockInput = document.getElementById('productStock');
    const productPriceInput = document.getElementById('productPrice');
    const registerProductButton = document.getElementById('registerProductButton');

    registerProductButton.addEventListener('click', function() {
        if (
            productNameInput.value.trim() === '' ||
            productCategoryInput.value.trim() === '' ||
            productStockInput.value.trim() === '' ||
            productPriceInput.value.trim() === ''
        ) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "Por favor, complete todos los campos obligatorios."
            });
        } else {
            Swal.fire({
                title: "¿Desea guardar los cambios?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Guardar",
                denyButtonText: `No guardar`
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire("Guardado!", "", "success").then(() => {
                        // Aquí puedes agregar la lógica para registrar el producto.
                        window.location.href = 'gestionarProductos.html';
                    });
                } else if (result.isDenied) {
                    Swal.fire("Los cambios no se han guardado", "", "error").then(() => {
                        window.location.href = 'gestionarProductos.html';
                    });
                }
            });
        }
    });
});
