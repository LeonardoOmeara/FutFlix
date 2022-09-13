// selectores de html con jqery h1, p, input, etc
// query selector solo toma el primer elemento que encuentra
// queryall selecciona todos

const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafo1 = document.querySelector(".parrafo1");
const parrafo2 = document.querySelector("#parrafo2");
const input = document.querySelector("input");
const pid = document.getElementById("parrafo2");



console.log({
  h1,
  p,
  parrafo1,
  parrafo2,
  input,
});

// console.log(h1,p,parrafo1,parrafo2,input)
// console.log(h1)

// innerText solo cambia el text, no permite añadir html
h1.innerHTML = "Ahora cambio el titulo lol <br> Salto de linea";
h1.innerText = "Ahora cambio el titulo lol <br> Salto de linea";
console.log(h1.getAttribute('class'));

// modificar los atributos de los elemtnos HTML
h1.setAttribute('class', 'azul');

// modificar clases
h1.classList.add('rojo');
h1.classList.remove('azul');
// h1.classList.toggle('azul');
// h1.classList.contains('azul');

input.value = "12345678asdadasd";


// Crear elementos HTML
const img = document.createElement('img');
img.setAttribute('src',"https://pbs.twimg.com/media/E8jxa-AWUAAPSX9?format=jpg&name=small")
// console.log(img)

// pid.textContent = "";
pid.innerText = "";
pid.append(img);
// console.log(document.createElement('span'));
 
