const perguntas = [

{
pergunta:"O que significa agricultura sustentável?",

respostas:[
"Produzir sem cuidar do meio ambiente",
"Usar recursos naturais de forma consciente",
"Desmatar para aumentar plantações",
"Usar apenas máquinas"
],

correta:1
},


{
pergunta:"Qual atitude ajuda a economizar água na agricultura?",

respostas:[
"Irrigação sem controle",
"Deixar rios contaminados",
"Usar irrigação por gotejamento",
"Desperdiçar água"
],

correta:2
},


{
pergunta:"Qual energia renovável pode ser usada no campo?",

respostas:[
"Carvão",
"Petróleo",
"Energia solar",
"Gasolina"
],

correta:2
},


{
pergunta:"O que ajuda a proteger o solo?",

respostas:[
"Desmatamento",
"Retirar plantas",
"Rotação de culturas",
"Poluição"
],

correta:2
},


{
pergunta:"Como a tecnologia ajuda o agricultor?",

respostas:[
"Aumentando desperdícios",
"Usando drones e sensores",
"Prejudicando plantações",
"Eliminando a natureza"
],

correta:1
},


{
pergunta:"Por que preservar florestas é importante?",

respostas:[
"Ajuda no equilíbrio do clima e biodiversidade",
"Não serve para nada",
"Impede toda agricultura",
"Ocupa espaço"
],

correta:0
}

];


let perguntaAtual = 0;

let pontos = 0;



function carregarPergunta(){


let q = perguntas[perguntaAtual];


document.getElementById("numero").innerHTML =
"Pergunta "+(perguntaAtual+1)+" de "+perguntas.length;



document.getElementById("pergunta").innerHTML =
q.pergunta;



let botoes="";


q.respostas.forEach((resposta,index)=>{


botoes += `

<button onclick="responder(${index})">

${resposta}

</button>

`;

});


document.getElementById("respostas").innerHTML=botoes;


}




function responder(resposta){


if(resposta === perguntas[perguntaAtual].correta){

pontos++;

document.getElementById("pontos").innerHTML=pontos;

}



perguntaAtual++;



if(perguntaAtual < perguntas.length){

carregarPergunta();

}

else{

resultado();

}


}




function resultado(){


document.getElementById("quiz").classList.add("escondido");


document.getElementById("final").classList.remove("escondido");



let texto;



if(pontos <=2){

texto="🌱 Você está começando sua jornada sustentável!";

}

else if(pontos <=4){

texto="🌾 Muito bem! Você entende o Agro Sustentável!";

}

else{

texto="🌎 Excelente! Você está pronto para o futuro sustentável!";

}



document.getElementById("mensagem").innerHTML=

texto+

"<br><br>Acertos: "+pontos+" de "+perguntas.length;


}




function reiniciar(){


perguntaAtual=0;

pontos=0;


document.getElementById("pontos").innerHTML=0;


document.getElementById("quiz").classList.remove("escondido");


document.getElementById("final").classList.add("escondido");


carregarPergunta();


}



carregarPergunta();
