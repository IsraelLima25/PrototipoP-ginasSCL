function redirect() {
    window.location.href = "../../modules/atendimento/manutencaoAtendimento.html";
}

function filtrar() {
    $('#atendimento-table').filterTable('#cliente-atendimento-filter');
}

$('#rbFilterCliente').click(function () {
    $('#groupFilterByData').prop('hidden', true);
    $('#groupFilterByClient').prop('hidden', false);
})

$('#rbFilterData').click(function () {
    $('#groupFilterByClient').prop('hidden', true)
    $('#groupFilterByData').prop('hidden', false);
  


})


//groupFilterByClient
//groupFilterByData