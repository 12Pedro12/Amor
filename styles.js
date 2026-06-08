function verificar() {

    let clave =
        document.getElementById("n1").value +
        document.getElementById("n2").value +
        document.getElementById("n3").value;

    let mensaje = document.getElementById("mensaje");

    // Cambia 143 por tu número especial
    if(clave === "252"){
        mensaje.innerHTML = "❤️ ¡Lo lograste mi amor! ❤️";

        setTimeout(() => {
            window.location.href = "sorpresa.html";
        }, 1500);

    }else{
        mensaje.innerHTML = "💔 Clave incorrecta, intenta de nuevo";
    }
}