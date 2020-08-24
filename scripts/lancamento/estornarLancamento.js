$('#rbFilterCliente').click(function () {
    $('#groupFilterByData').prop('hidden', true);
    $('#groupFilterByClient').prop('hidden', false);
})

$('#rbFilterData').click(function () {
    $('#groupFilterByClient').prop('hidden', true)
    $('#groupFilterByData').prop('hidden', false);
})

function filtrar(){
    $('#lancamento-table').filterTable('#cliente-lancamento-filter');
}
