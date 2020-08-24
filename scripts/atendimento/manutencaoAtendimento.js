$('#unlock').click(function () {
    $('#slcCliente').prop('disabled', false);
    $('#slcServico').prop('disabled', false);
    $('#btnCadastrar').prop('disabled', false);
    $('#valorTotal').prop('disabled', false);
    $('#desconto').prop('disabled', false);
    $('#data').prop('disabled', false);
    $('#hora').prop('disabled', false);
    $('#rbEnderecoCliente').prop('disabled', false);
    $('#rbOutroEndereco').prop('disabled', false);
    $('#rbEnderecoCasa').prop('disabled', false);
    $('#cep').prop('disabled', false);
    $('#logradouro').prop('disabled', false);
    $('#numero').prop('disabled', false);
    $('#ponto-referencia').prop('disabled', false);
    $('#complemento').prop('disabled', false);
    $('#bairro').prop('disabled', false);
    $('#slcFormaPagamento').prop('disabled', false);
    $('#slcBandeira').prop('disabled', false);
    $('#quantidadeParcelas').prop('disabled', false);
    $('#btn-confirmar-alteracao').prop('disabled', false);
})

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