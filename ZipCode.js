
const Saida = document.getElementById('saida');
const cep = document.getElementById('cep');
const btnPesquisar = document.getElementById('btnPesquisar');

function obterCep(){
    return cep.value;
}

function mostraObjeto(objto){
    return (!objto.erro)?
    `${ objto.localidade}
     ${ objto.ddd}
     ${ objto.uf}
    `:
    `CEP nao encontrado`;
}

//function async  
 async function BuscaDadoCep(){

try{
    const urlCEP = `https://viacep.com.br/ws/${obterCep()}/json/`;
    const trazerCEP = fetch(urlCEP);
    //esperar|| O await é valido quando a function é async
    const resposta = await trazerCEP;
    //capturar dados || metodo JSON 
    const dadosJSON = await resposta.json()
    Saida.innerHTML = mostraObjeto(dadosJSON);
   // Saida.textContent = trazerCEP;

}catch(e){
    Saida.innerHTML = `<b>Erros</b>: <i>${e}</i>`;  
}    
   
    //console.log(dadosJSON);
    //Saida.textContent = mostraObjeto;
}
btnPesquisar.addEventListener("click", BuscaDadoCep); 

