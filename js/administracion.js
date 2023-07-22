const tableBody = document.querySelector('#table-body');

const cursoNombre = document.querySelector('#curso-nombre');
const cursoCategoria = document.querySelector('#curso-categoria');
const cursoPrecio = document.querySelector('#curso-precio');
const modalCurso = document.querySelector('#modalCurso')

const btnAgregarCurso = document.querySelector('#agregar-curso');
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
        limpiarFormulario();
    })

}

const eliminarCurso = (id) => {
    const cursoFiltrado = cursosLocal.filter( cursos => {
        return cursos.id !== id;
    });
    cursosLocal = cursoFiltrado;
    guardarEnLocalStorage();
    crearHTML();
}

const modificarCurso = (id) => {
    const cursoMod = cursosLocal.find( curso => {
        return curso.id === id;
    });

    cursoNombre.value = cursoMod.nombre;
    cursoCategoria.value = cursoMod.categoria;
    cursoPrecio.value = cursoMod.precio;

    // Probar crear un boton cerrar distinto al hacer click en modificar
    // Eliminar lo de abajo para probar como funciona
    
    btnCerrarModal.classList.add('cerrar-modal')
    if(btnCerrarModal.classList.contains('cerrar-modal')) {
        limpiarFormulario();
        return;
    }
    const filter = cursosLocal.filter( curso => {
        return curso.id !== id;
    });
    cursosLocal = filter;
    guardarEnLocalStorage();
}

function agregarCurso() {
    const nombreCurso = cursoNombre.value;
    const existe = cursosLocal.some(curso => curso.nombre === nombreCurso);

    if (existe) {
        error('El curso que desea agregar ya existe');
    } else if(cursoNombre.value === "" || cursoCategoria.value === "" || cursoPrecio.value === "") {
        error('Los campos deben estar completos');
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
        <td class="d-flex border-bottom-0">
            <a href="#" class="fw-bold fs-1 text-danger px-1 text-decoration-none" onclick="eliminarCurso(${id})">X</a>
            <a href="#" class="fw-bold fs-1 text-primary px-1 text-decoration-none" onclick="modificarCurso(${id})" data-bs-toggle="modal" data-bs-target="#modalCurso" id="modCurso">&#128393</a>
        </td>
    `;
      tableBody.appendChild(row);
    });

    guardarEnLocalStorage();
}
  
function guardarEnLocalStorage() {
    localStorage.setItem('cursos', JSON.stringify(cursosLocal));
}

function error(mensaje) {
    const error = document.createElement('p');
    error.textContent = mensaje;
    error.classList.add('bg-danger', 'text-center', 'text-white', 'fw-bold', 'fs-2', 'p-2');
    modalCurso.appendChild(error);

    setTimeout(() => {
        error.remove();
    }, 4000);
}

function limpiarFormulario() {
    cursoNombre.value = "";
    cursoCategoria.value = "";
    cursoPrecio.value = "";
}

function limpiarHTML() {
    while(tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
}