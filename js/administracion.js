const tableBody = document.querySelector('#table-body');

const cursoNombre = document.querySelector('#curso-nombre');
const cursoCategoria = document.querySelector('#curso-categoria');
const cursoPrecio = document.querySelector('#curso-precio');
const modalCurso = document.querySelector('#modalCurso')

const btnAgregarCurso = document.querySelector('#agregar-curso');
const btnModificar = document.querySelector('#modificar-tabla');
const btnCerrarModal = document.querySelector('#cerrar-modal');
let cursosLocal = []

eventListener();
function eventListener() {

    document.addEventListener('DOMContentLoaded', () => {
        cursosLocal = JSON.parse(localStorage.getItem('cursos')) || [];
        crearHTML();
    });

    btnAgregarCurso.addEventListener('click', agregarCurso);

    btnCerrarModal.addEventListener('click', () => {
        cursoNombre.value = "";
        cursoCategoria.value = "";
        cursoPrecio.value = "";
    })

}

const eliminarCurso = (id) => {
    const cursoFiltrado = cursosLocal.filter( cursos => {
        return cursos.id !== id;
    });
    cursosLocal = cursoFiltrado;
    localStorage.setItem('cursos', JSON.stringify(cursosLocal));
    crearHTML();
}
  

function agregarCurso() {
    const nombreCurso = cursoNombre.value;
    const existe = cursosLocal.some(curso => curso.nombre === nombreCurso);

    if (existe) {
        const error = document.createElement('p');
        error.textContent = 'El curso que deseas agregar ya existe';
        error.classList.add('bg-danger', 'text-center', 'text-white', 'fw-bold', 'fs-2', 'p-2');
        modalCurso.appendChild(error);
    } else {
        infoCurso = {
            id: Date.now(),
            nombre: nombreCurso,
            categoria: cursoCategoria.value,
            precio: parseInt(cursoPrecio.value)
        }

        cursosLocal.push(infoCurso);
        crearHTML();
    }
}


function crearHTML() {
    limpiarHTML();
  
    cursosLocal.forEach(curso => {
      const { id, nombre, categoria, precio } = curso;
  
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${nombre}</td>
        <td>${categoria}</td>
        <td>${precio}</td>
        <td class="d-flex">
            <a href="#" class="fw-bold fs-1 text-danger px-1 text-decoration-none" onclick="eliminarCurso(${id})">X</a>
            <a href="#" class="fw-bold fs-1 text-primary px-1 text-decoration-none">&#128393</a>
        </td>
    `;
      tableBody.appendChild(row);
    });

    guardarEnLocalStorage();
}
  
function guardarEnLocalStorage() {
    localStorage.setItem('cursos', JSON.stringify(cursosLocal));
}


function limpiarHTML() {
    while(tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
}

function setLocalStorage() {
    localStorage.setItem('cursos', JSON.stringify(cursosLocal));
}