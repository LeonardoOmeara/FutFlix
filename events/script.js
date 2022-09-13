// EVENTS

const h1 = document.querySelector("h1");
const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const btnCalcular = document.querySelector(".btnCalcular");
const result = document.querySelector("#result");

btnCalcular.addEventListener('click',BtnCalcular);
// la funcion que tiene que mandar a llamar por eso no va con parentesis

function BtnCalcular(event){
    // event toma el evento que enviamos en este caso mouseover

    // alert('VirusXD');
    // preventDefautl() evita que la pagina se recargue, ya que esta dentro de un formulario y el ultimo boton
    // del formulario lo toma como un tipo submit
    event.preventDefault();
    
    const sumaInputs = Number(numero1.value) + Number(numero2.value);
    result.textContent = "Resultado: " + sumaInputs;

}

