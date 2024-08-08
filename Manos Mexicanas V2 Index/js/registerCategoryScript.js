document.addEventListener('DOMContentLoaded', function() {
    const categoryNameInput = document.getElementById('categoryName');
    const registerCategoryButton = document.getElementById('registerCategoryButton');

    // Función para verificar si el campo de nombre de la categoría está vacío
    function validateInput() {
        if (categoryNameInput.value.trim() === '') {
            registerCategoryButton.disabled = true;
        } else {
            registerCategoryButton.disabled = false;
        }
    }

    // Verificar el campo al cargar la página
    validateInput();

    // Verificar el campo cada vez que se cambia su valor
    categoryNameInput.addEventListener('input', validateInput);

    registerCategoryButton.addEventListener('click', function() {
        if (categoryNameInput.value.trim() !== '') {
            Swal.fire({
                title: "Desea guardar la Nueva Categoría?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Guardar",
                denyButtonText: `No Guardar`
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire("Guardada!", "", "success").then(() => {
                        // Aquí puedes agregar la lógica para registrar la categoría.
                        window.location.href = 'gestionarCategorias.html';
                    });
            } else if (result.isDenied) {
            Swal.fire("No se ha Guardado", "", "error").then(() =>{
                window.location.href = 'gestionarCategorias.html';
            });
        }
    });
}});
});
