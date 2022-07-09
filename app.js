// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('select');
//     var instances = M.FormSelect.init(elems, options);
// ---------------------------------TEXT SIDEBAR---------------------------------------------


// Ingreso texto superior

const memeTopText = document.getElementById('top-txt-meme'); //texto superior del canvas etiqueta p
const topTxtArea = document.getElementById('top-text-area'); //textarea ingreso texto superior
const memeBottomText = document.getElementById('bottom-txt-meme');// texto inferior del canvas
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