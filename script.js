/* ATIVIDADE 01

const numero = document.getElementById("numero");
const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");

aumentar.addEventListener('click', ()=>{
    
    let valorAtual = parseInt(numero.textContent);
    valorAtual++;
    numero.textContent = valorAtual

});

diminuir.addEventListener('click',()=>{

    let valorAtual = parseInt(numero.textContent);
    valorAtual--;
    numero.textContent = valorAtual;

})*/

/* ATIVIDADE 02

const alterarFundo = document.getElementById("btn_fundo");
const alterarTitulo = document.getElementById("btn_titulo");
const alterarParagrafo = document.getElementById("btn_paragrafo");
const alterarFonteTitulo = document.getElementById("btn_fonte_titulo");
const alterarFonteParagrafo = document.getElementById("btn_fonte_paragrafo");
const alterarTudo = document.getElementById("btn_tudo");

const titulo = document.getElementById("titulo");
const paragrafo = document.getElementById("paragrafo");
const fundo = document.getElementById("texto");

const fontes = [
    "Roboto, sans-serif",
    "Open Sans, sans-serif",
    "Lato, sans-serif",
    "Montserrat, sans-serif",
    "Oswald, sans-serif",
    "Raleway, sans-serif",
    "PT Sans, sans-serif",
    "Merriweather, serif",
    "Roboto Slab, serif",
    "Ubuntu, sans-serif",
    "Playfair Display, serif",
    "Nunito, sans-serif",
    "Source Sans Pro, sans-serif",
    "Inconsolata, monospace",
    "Fira Sans, sans-serif"
];

alterarFundo.addEventListener('click', ()=>{
const corAleatoria = "#" + Math.floor(Math.random() * 16777215).toString(16);

fundo.style.backgroundColor = corAleatoria;
alterarFundo.style.backgroundColor = corAleatoria;

});

alterarTitulo.addEventListener('click', ()=>{

    const corAleatoria = "#" + Math.floor(Math.random() * 16777215).toString(16);
    
    titulo.style.color = corAleatoria;
    alterarTitulo.style.backgroundColor = corAleatoria;
});

alterarParagrafo.addEventListener('click', ()=>{

    const corAleatoria = "#" + Math.floor(Math.random() * 16777215).toString(16);
    
    paragrafo.style.color = corAleatoria;
    alterarParagrafo.style.backgroundColor = corAleatoria;

});

alterarFonteTitulo.addEventListener('click', ()=>{

 const indiceAleatorio = Math.floor(Math.random() * fontes.length);
 titulo.style.fontFamily = fontes[indiceAleatorio];

 alterarFonteTitulo.style.fontFamily = fontes[indiceAleatorio];

});

alterarFonteParagrafo.addEventListener('click', ()=>{

 const indiceAleatorio = Math.floor(Math.random() * fontes.length);
 paragrafo.style.fontFamily = fontes[indiceAleatorio];

 alterarFonteParagrafo.style.fontFamily = fontes[indiceAleatorio];
});

alterarTudo.addEventListener('click', ()=>{

//
const corAleatoria = "#" + Math.floor(Math.random() * 16777215).toString(16);

fundo.style.backgroundColor = corAleatoria;
alterarFundo.style.backgroundColor = corAleatoria;
alterarFonteTitulo.style.backgroundColor = corAleatoria

//
const corAleatoria2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    
    titulo.style.color = corAleatoria2;
    alterarTitulo.style.backgroundColor = corAleatoria2;
    alterarFonteParagrafo.style.backgroundColor = corAleatoria2
//

const corAleatoria3 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    
    paragrafo.style.color = corAleatoria3;
    alterarParagrafo.style.backgroundColor = corAleatoria3;
    alterarTudo.style.backgroundColor = corAleatoria3

//

const indiceAleatorio = Math.floor(Math.random() * fontes.length);
titulo.style.fontFamily = fontes[indiceAleatorio];

alterarFonteTitulo.style.fontFamily = fontes[indiceAleatorio];

//

const indiceAleatorio2 = Math.floor(Math.random() * fontes.length);
 paragrafo.style.fontFamily = fontes[indiceAleatorio2];

alterarFonteParagrafo.style.fontFamily = fontes[indiceAleatorio2];

//

});*/
