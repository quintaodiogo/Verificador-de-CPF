const express = require('express');
const app = express();
const port = 80;

const verificadorcpf = require('./lib/verificador_cpf')

app.get("/validar-cpf/:cpf", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let cpf = req.params.cpf;
    let status = verificadorcpf.verificarStatus(cpf);
    let unidadeFederativa;
    if(status==1){
         unidadeFederativa = verificadorcpf.buscarUnidadeFederativa(cpf);
    } else{
        unidadeFederativa="-";
    }   
    res.json({
        cpf: cpf,
        status: status,
        unidadeFederativa: unidadeFederativa
    });
});

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
})