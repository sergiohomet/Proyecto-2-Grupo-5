function buscarCursos(carrera) {

    const cursosJSON = localStorage.getItem("cursos");

    const cursos = JSON.parse(cursosJSON);

    carrera = carrera.toLowerCase();
    return Object.values(cursos).filter((curso) => {
        const nombreCurso = curso.nombreCurso.toLowerCase();
        const carreraCurso = curso.carrera.toLowerCase();
        const duracion = curso.duracionEnHoras.toString();
        return (
        (nombreCurso.includes(curso) || carreraCurso.includes(carrera) || duracion.includes(curso)) &&
        (carrera === "todas" || carreraCurso === carrera)
        );
    });

}


function actualizarTabla(cursosFiltrados) {
    const cuerpoTabla = document.getElementById("cuerpoTabla");
    cuerpoTabla.innerHTML = "";
    const tituloTabla = document.getElementById("tabla-titulo");
    tituloTabla.classList.remove("d-none");
    cursosFiltrados.forEach((curso) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td><a href="./html/error.html" class="text-dark text-decoration-none">${curso.nombreCurso}</a></td>
        <td>${curso.carrera}</td>
        <td>${curso.duracionEnHoras} Hs.</td>
    `;
    cuerpoTabla.appendChild(fila);
    });


}

function filtraCursos() {

    const selectCarrera = document.getElementById("carrera-form");
    const carreraSeleccionada = selectCarrera.options[selectCarrera.selectedIndex].text;


    const cursosFiltrados = buscarCursos(carreraSeleccionada);
    actualizarTabla(cursosFiltrados);
}

function limpiarTabla() {
    const cuerpoTabla = document.getElementById("cuerpoTabla");
    cuerpoTabla.innerHTML = "";
    const tituloTabla = document.getElementById("tabla-titulo");
    tituloTabla.classList.add("d-none");

}


const btnBuscar = document.getElementById("nuestroCursos-btn");


btnBuscar.addEventListener("click", filtraCursos);