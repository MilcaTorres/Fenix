document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    // Simulación de validación de credenciales
    if (user === 'usuarioEjemplo' && password === 'contraseñaEjemplo') {
        Swal.fire({
            icon: "success",
            title: "Inicio de sesión exitoso",
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            window.location.href = 'index.html';
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Nombre de usuario o contraseña incorrectos",
        });
    }
});
