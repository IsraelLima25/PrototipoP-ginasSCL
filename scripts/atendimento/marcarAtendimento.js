$('#rbOutroEndereco').click(function () {
    $('#outroEndereco').prop('hidden', false);
})

$('#rbEnderecoCliente').click(function () {
    $('#outroEndereco').prop('hidden', true);
})

$('#slcFormaPagamento').change(function () {
    var valueSelected = $('#slcFormaPagamento option:selected').val();

    if (valueSelected === 'cart') {
        $('#groupBandeiras').prop('hidden', true);
        $('#groupQuantidadeParcelas').prop('hidden', true);
    }
    else if (valueSelected === 'cred') {
        $('#groupBandeiras').prop('hidden', false);
        $('#groupQuantidadeParcelas').prop('hidden', false);
    }
    else {
        $('#groupBandeiras').prop('hidden', false);
        $('#groupQuantidadeParcelas').prop('hidden', true);
    }

})

