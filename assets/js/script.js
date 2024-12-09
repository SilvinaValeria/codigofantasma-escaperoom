function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === "admin" && password === "seguridad123") {
        alert("Acceso concedido. Aquí está tu pista: Código César es la clave.");
    errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos. Intenta nuevamente.";
    }
}
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    alert("Clic derecho deshabilitado en esta página.");
});