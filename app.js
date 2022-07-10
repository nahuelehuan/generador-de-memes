// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('select');
//     var instances = M.FormSelect.init(elems, options);
// ---------------------------------TEXT SIDEBAR---------------------------------------------


// Ingreso texto superior

const memeTopText = document.getElementById('top-txt-meme'); //texto superior del canvas etiqueta p
const topTxtArea = document.getElementById('top-text-area'); //textarea ingreso texto superior
const memeBottomText = document.getElementById('bottom-txt-meme');// texto inferior del canvas etiqueta p
const bottomTxtArea = document.getElementById('bottom-text-area'); //textarea ingreso texto inferior

topTxtArea.addEventListener('input', ()=>{
  let topTxt = topTxtArea.value;
  memeTopText.innerHTML = topTxt;
})

bottomTxtArea.addEventListener('input', ()=>{
  let bottomTxt = bottomTxtArea.value;
  memeBottomText.innerHTML = bottomTxt;
})



// COLOR DEL TEXTO Y BACKROUND COLOR DEL TXT

const colorInput = document.querySelector('.color-input'); //input type color texto meme
const colorSpan = document.getElementById('color-span'); //span del input color de texto meme
const txtBackgroundColorInput = document.querySelector('.txt-background-color-input'); // input type color fondo texto meme
const txtBackgroundColorSpan = document.getElementById('txt-background-color-span'); //span del imput color fondo texto
// const topText = document.getElementById('top-text');
// console.log(topText)
// const bottomText = document.getElementById('bottom-text');
const transparentBackground = document.getElementById('no-background'); //input checkbox fondo transparente
// console.log(transparentBackground)

colorInput.addEventListener('input', ()=>{
  let color = colorInput.value;
  colorSpan.style.color = color;
  colorSpan.innerHTML = color;
  memeTopText.style.color = color;
  memeBottomText.style.color = color;
})

txtBackgroundColorInput.addEventListener('input', ()=>{
  let fondo = txtBackgroundColorInput.value;
  txtBackgroundColorSpan.style.color = fondo;
  txtBackgroundColorSpan.innerHTML = fondo;
  memeTopText.style.backgroundColor = fondo;
  memeBottomText.style.backgroundColor = fondo;
})

transparentBackground.addEventListener('click', ()=>{
  if(transparentBackground.checked){
  memeTopText.classList.add("transparent");
}else{
  memeTopText.classList.remove("transparent");
}
})
  


//falta ver cómo es para retomar al color anterior


// const collection = document.getElementsByClassName("example");
// for (let i = 0; i < collection.length; i++) {
//   collection[i].style.backgroundColor = "red";





// FALTA HACER QUE EL COLOR DEL TEXTO ESCRITO CAMBIE EN EL CANVAS


// Botón de cierre para sidebar texto

const btnCloseTxtSidebar = document.getElementById("close-txt-sidebar"); //trae botón X de sidebar texto
const aside = document.getElementById("aside"); //todo el aside

btnCloseTxtSidebar.addEventListener('click', ()=>{
 
  aside.classList.add("hidden");
 
})

// Botón TEXTO (Abre aside)

const txtButton = document.getElementById("txt-btn"); //Botón TEXTO del header

txtButton.addEventListener('click', ()=>{
  aside.classList.remove("hidden");
})

//checkbox "sin texto sup"

const noTopText = document.getElementById('top-txt-non'); //input "sin texto superior"

noTopText.addEventListener('click', ()=>{
  memeTopText.classList.toggle("hidden")
  
})

//checkbox "sin texto sup"
const noBottomText = document.getElementById('bottom-txt-non'); //input "sin texto inferior"
noBottomText.addEventListener('click', ()=>{
  memeBottomText.classList.toggle("hidden")
})

// Fuentes - Selección font-family

const fontsOptions = document.getElementById('fonts');
// let arial = document.getElementById('arial');
// let arima =  document.getElementById('arima');
// let titan = document.getElementById('titan-one');
// let openSans = document.getElementById('open-sans');
// let hevetica = document.getElementById('helvetica');
// let impact = document.getElementById('impact');
// let verdana = document.getElementById('verdana');

// const fonts = () => {
//   memeTopText.style.fontFamily = `${fontFamily.value}`
 
// };

fontsOptions.addEventListener('change', ()=>{
  memeTopText.style.fontFamily = `${fontsOptions.value}`
  memeBottomText.style.fontFamily = `${fontsOptions.value}`
})


// Fuentes - Selección font-size

const fSize = document.getElementById('font-size'); //Tre etiqueta select con todas las options

fSize.addEventListener('change', ()=>{
  memeTopText.style.fontSize = `${fSize.value}px`
  memeBottomText.style.fontSize = `${fSize.value}px`
})
fSize.onkeyup = ()=>{
  memeTopText.style.fontSize = `${fSize.value}px`
  memeBottomText.style.fontSize = `${fSize.value}px`
}

// Fuentes - Alineación texto

const waveschildren = document.getElementById('waves').children

for (let i = 0; i <= waveschildren.length -1; i++) {
  waveschildren[i].addEventListener('click',()=>{
    memeTopText.style.textAlign = waves.children[i].id;
    memeBottomText.style.textAlign = waves.children[i].id;
  }
  )
}

// Botones borde texto

const noBorder = document.getElementById('no-outline-btn'); //Botón NINGUNO
const lightBorder = document.getElementById('jedi-outline-btn'); //Botón CLARO
const darkBorder = document.getElementById('sith-outline-btn'); //Botón OSCURO

noBorder.addEventListener('click', ()=>{
  memeTopText.style.webkitTextStroke  = 'transparent'
  memeBottomText.style.webkitTextStroke  = 'transparent'
})

lightBorder.addEventListener('click', ()=>{
  memeTopText.style.webkitTextStroke = '1px white';
  memeBottomText.style.webkitTextStroke = '1px white';
})

darkBorder.addEventListener('click', ()=>{
  memeTopText.style.webkitTextStroke = '2px black';
  memeBottomText.style.webkitTextStroke = '2px black';
})
