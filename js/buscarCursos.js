//  // Función para generar un número aleatorio entre min y max (ambos incluidos)
//  function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

  // Función de búsqueda de cursos
  function buscarCursos(curso, carrera) {
    // Obtener la cadena JSON del localStorage
    const cursosJSON = localStorage.getItem("cursos");
    
    // Convertir la cadena JSON nuevamente a un objeto
    const cursos = JSON.parse(cursosJSON);
    
    curso = curso.toLowerCase();
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
    
      // Función para actualizar la tabla con los resultados de la búsqueda
    function actualizarTabla(cursosFiltrados) {
    const cuerpoTabla = document.getElementById("cuerpoTabla");
    cuerpoTabla.innerHTML = "";
    
        cursosFiltrados.forEach((curso) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${curso.nombreCurso}</td>
            <td>${curso.carrera}</td>
            <td>${curso.duracionEnHoras} Hs.</td>
        `;
        cuerpoTabla.appendChild(fila);
        });
    
    }
    
      // Función para manejar el evento de clic en el botón "Buscar"
    // function filtraCursos() {
    //     const inputCurso = document.getElementById("curso-form").value;
    //     const selectCarrera = document.getElementById("carrera-form");
    //     const carreraSeleccionada = selectCarrera.options[selectCarrera.selectedIndex].text;
    
    //     const cursosFiltrados = buscarCursos(inputCurso, carreraSeleccionada);
    //     actualizarTabla(cursosFiltrados);
    // }
    
    function filtraCursos() {
        const inputCurso = document.getElementById("curso-form").value;
        const selectCarrera = document.getElementById("carrera-form");
        const carreraSeleccionada = selectCarrera.options[selectCarrera.selectedIndex].text;
    
    
        const cursosFiltrados = buscarCursos(inputCurso, carreraSeleccionada);
        console.log(`${cursosFiltrados}`)
        actualizarTabla(cursosFiltrados);
    }
    
      // Obtener referencias al botón "Buscar"
      const btnBuscar = document.getElementById("nuestroCursos-btn");
    
      // Asignar el evento de clic al botón "Buscar"
      btnBuscar.addEventListener("click", filtraCursos);