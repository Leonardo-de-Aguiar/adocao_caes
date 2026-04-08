document.getElementById("formulario_adocao").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let teve_pet = document.getElementById("teve_pet").value;
    let horas = document.getElementById("horas").value;
    let motivo = document.getElementById("motivo").value;
    let termo = document.getElementById("termo").value;


    if(nome.length < 3) return alert("Nome Inválido");
    if(!email.includes ("@")) return alert("Email Inválido");
    if(telefone.length < 8) return alert("Telefone Inválido");
    if(cpf.length == '') return alert("CPF Inválido");
    if(idade < 18) return alert("Idade Inválida");
    if(cidade.length < 3) return alert("Cidade Inválida");
    if(!moradia) return alert("Moradia Inválida");
    if(!quintal) return alert("Responda a pergunta sobre o quintal");
    if(!teve_pet) return alert("Responda a pergunta sobre pet");
    if(teve_pet == ("Não")) return alert("Poderá haver acompanhamento da ONG");
    if(horas > 8) return alert ("Tome cuidado, o seu pet ficará mais de 8 horas sozinho!");
    if(motivo.length < 10) return alert ("Motivo simples");
    if(!termo) return alert("É necessário aceitar o termo de responsabilidade!");



    document.getElementById("finalizar_cadastro").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;
});