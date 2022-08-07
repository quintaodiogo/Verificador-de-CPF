function validarCPF(event, form) {
    event.preventDefault();
    const inputCpf = form.cpf;
    if (inputCpf) {
        const cpf = inputCpf.value;
        if (cpf.length === 11) {
             const URL = `http://localhost/validar-cpf/${cpf}`;
            axios.request(URL)
                .then(resposta => mostrarResposta(resposta.data))
                .catch(erro => console.error(erro));
        }
    }
}


function mostrarResposta(data) {
     const mensagem = `
         cpf: ${data.cpf},    
         status: ${data.status},
         unidadeFederativa : ${data.unidadeFederativa}
     `;
     alert(mensagem);
    console.log(data);
}