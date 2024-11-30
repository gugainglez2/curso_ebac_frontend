$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });
    
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });

    $('#cep').mask('00000-000', {
        placeholder: '01234-567'
    });

    $('#form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 5
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 15
            },
            cpf: {
                required: true,
                minlength: 14
            },
            endereco: {
                required: true,
                minlength: 5
            },
            cep: {
                required: true,
                minlength: 9
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome completo",
                minlength: "Seu nome deve conter pelo menos 5 caracteres"
            },
            email: {
                required: "Por favor, insira seu e-mail",
                email: "Por favor, insira um e-mail válido"
            },
            telefone: {
                required: "Por favor, insira seu telefone",
                minlength: "Seu telefone deve conter pelo menos 11 dígitos no formato (00) 00000-0000"
            },
            cpf: {
                required: "Por favor, insira seu CPF",
                minlength: "Seu CPF deve conter 11 digitos no formato 000.000.000-00"
            },
            endereco: {
                required: "Por favor, insira seu endereço",
                minlength: "Seu endereço deve conter pelo menos 5 caracteres"
            },
            cep: {
                required: "Por favor, insira seu CEP",
                minlength: "Seu CEP deve conter 8 algarismos"
            }
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (event, validator) {
            alert("Por favor, preencha todos os campos corretamente para prosseguir com a compra!");
        }
    });
});