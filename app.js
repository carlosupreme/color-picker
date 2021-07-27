const input = document.getElementById("input");
const texto = document.getElementById("texto");
const fondo = document.getElementById("color");
const btn = document.getElementById("btn");
const caja = document.getElementById("caja");
const menuBtn = document.getElementById("nav-btn");
const menu = document.getElementById("nav-menu")
const aleatorioBtn = document.getElementById("aleatorio-btn"); 
const removeHistorialBtn = document.getElementById("btn-remove-h");
const actualizarTodo = document.getElementById("actualizarPagina")


actualizarTodo.addEventListener("click", function(){
    location.reload(300)
});

removeHistorialBtn.addEventListener("click", function(){
    caja.removeChild(caja.lastChild);
})

aleatorioBtn.addEventListener("click", function(){
    input.value = colorHEX();
    texto.innerText = input.value;
    fondo.style.background = input.value;
})

menuBtn.addEventListener("click", function(){
    desplegar();
})

btn.addEventListener("click", function () {
    agregarHistorial();
})

input.addEventListener("input", function() {
    texto.innerText = input.value;
    fondo.style.background = input.value;
})

function agregarHistorial(){
    let ul = document.createElement("li")
    let li = ul.innerText = input.value;
    caja.appendChild(ul);
}

function desplegar(){
    menu.classList.toggle("desplegar");
}

function generarLetra(){
	var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	var numero = (Math.random()*15).toFixed(0);
	return letras[numero];
}
	
function colorHEX(){
	var coolor = "";
	for(var i=0;i<6;i++){
		coolor = coolor + generarLetra() ;
	}
	return "#" + coolor;
}
