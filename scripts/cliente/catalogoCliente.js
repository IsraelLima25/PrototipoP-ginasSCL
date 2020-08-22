function redirect() {
    window.location.href = "../../modules/cliente/manutencaoCliente.html";
}

function filtrar() {
    $('#cliente-table').filterTable('#nome-filter');
}