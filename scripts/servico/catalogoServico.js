function redirect() {
    window.location.href = "../../modules/servico/manutencaoServico.html";
}

function filtrar() {
    $('#servico-table').filterTable('#nome-filter');
}