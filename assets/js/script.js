<script src="assets/js/script.js"></script>
const boton = document.getElementById("btn-arriba");

boton.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});