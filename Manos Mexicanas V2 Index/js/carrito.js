document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelectorAll('.cart-item');
    const summaryList = document.getElementById('summary-list');
    const totalPriceElement = document.querySelector('.total-price');
    const purchaseButton = document.getElementById('purchase-button');
    
    let totalPrice = 0;

    cartItems.forEach(item => {
        const button = item.querySelector('.select-button');
        button.addEventListener('click', function() {
            const productName = item.querySelector('h3').textContent;
            const productPrice = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
            
            // Verificar si el producto ya está en el resumen
            if ([...summaryList.children].some(li => li.textContent === productName)) {
                alert('Este producto ya está en el resumen.');
                return;
            }
            
            // Agregar el producto al resumen
            const listItem = document.createElement('li');
            listItem.textContent = productName;
            summaryList.appendChild(listItem);
            
            // Actualizar el total
            totalPrice += productPrice;
            totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
            
            // Desactivar el botón para evitar duplicados
            button.disabled = true;
            button.textContent = 'Seleccionado';
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
});