document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelectorAll('.cart-item');
    const summaryList = document.getElementById('summary-list');
    const totalPriceElement = document.querySelector('.total-price');
    const purchaseButton = document.getElementById('purchase-button');
    let totalPrice = 0;

    cartItems.forEach(item => {
        const selectButton = item.querySelector('.select-button');
        const removeButton = item.querySelector('.btn-remove');
        
        selectButton.addEventListener('click', function() {
            const productName = item.querySelector('h3').textContent;
            const productPrice = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
            
            // Verificar si el producto ya está en el resumen
            if ([...summaryList.children].some(li => li.textContent === productName)) {
                alert('Este producto ya está en el resumen.');
                return;
            }
            
            // Agregar el producto al resumen
            const listItem = document.createElement('li');
            listItem.textContent = productName + ' - $' + productPrice.toFixed(2);
            summaryList.appendChild(listItem);
            
            // Actualizar el total
            totalPrice += productPrice;
            totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
            
            // Desactivar el botón para evitar duplicados
            selectButton.disabled = true;
            selectButton.textContent = 'Seleccionado';

            // Agregar funcionalidad de eliminar al resumen
            const removeSummaryButton = document.createElement('button');
            removeSummaryButton.classList.add('btn', 'btn-remove', 'btn-sm', 'ml-2');
            removeSummaryButton.textContent = 'Eliminar';
            listItem.appendChild(removeSummaryButton);
            
            removeSummaryButton.addEventListener('click', function() {
                listItem.remove();
                totalPrice -= productPrice;
                totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
                selectButton.disabled = false;
                selectButton.textContent = 'Seleccionar';
            });
        });

        removeButton.addEventListener('click', function() {
            item.remove();
        });
    });

    purchaseButton.addEventListener('click', function() {
        if (summaryList.children.length === 0) {
            alert('No has seleccionado ningún producto.');
        } else {
            alert('Compra realizada con éxito!');
            // Aquí puedes agregar el código para procesar la compra
        }
    });

    function updateTotalPrice() {
        let totalPrice = 0;
        summaryList.querySelectorAll('li').forEach(item => {
            const price = parseFloat(item.textContent.split('-')[1].trim().substring(1));
            totalPrice += price;
        });
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }
});