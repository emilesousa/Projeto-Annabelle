// Adicione interatividade ao menu
document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll("#menu a");
    menuItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            // Impede o comportamento padrão do link
            event.preventDefault();
            // Navega para o destino do link
            window.location.href = item.getAttribute("href");
        });
    });
});

// Adicione algum comportamento adicional, se necessário
