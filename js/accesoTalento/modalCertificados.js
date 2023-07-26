let modalUno = document.getElementById("modalUno");
let modalDos = document.getElementById("modalDos");


let imgUno = document.getElementById("myImgUno");
let modalImgUno = document.getElementById("img01");

imgUno.onclick = function(){
  modalUno.style.display = "block";
  modalImgUno.src = this.src;
}

let span = document.getElementsByClassName("cerrar")[0];

span.onclick = function() {
  modalUno.style.display = "none";
}

let imgDos = document.getElementById("myImgDos");
let modalImgDos = document.getElementById("img02");

imgDos.onclick = function(){
  modalDos.style.display = "block";
  modalImgDos.src = this.src;
}

span = document.getElementsByClassName("cerrar")[1];

span.onclick = function() {
  modalDos.style.display = "none";
}

