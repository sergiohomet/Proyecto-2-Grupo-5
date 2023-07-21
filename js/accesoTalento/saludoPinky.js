const imagen = document.getElementById('imgPerfil');
const audio = document.getElementById('holaSoyPinky');

function reproducirAudio() {
    audio.play();
    imagen.style.boxShadow = '0 0 30px rgba(0, 0, 0, 1)';
}

function desactivarSombra() {
    imagen.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'; 
}


imagen.addEventListener('click', reproducirAudio);
audio.addEventListener('ended', desactivarSombra);