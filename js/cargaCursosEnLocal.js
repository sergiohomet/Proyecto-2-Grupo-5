let cursos = [
    {
      id: 1,
      nombreCurso: "HTML 5",
      carrera: "PROGRAMACIÓN",
      duracionEnHoras: 40,
    },
    {
      id: 2,
      nombreCurso: "C++",
      carrera: "PROGRAMACIÓN",
      duracionEnHoras: 60,
    },
    {
      id: 3,
      nombreCurso: "PHYTON",
      carrera: "PROGRAMACIÓN",
      duracionEnHoras: 80,
    },
    {
      id: 4,
      nombreCurso: "LOGICA DE PROGRAMACIÓN",
      carrera: "PROGRAMACIÓN",
      duracionEnHoras: 80,
    },
    {
      id: 5,
      nombreCurso: "PASCAL",
      carrera: "PROGRAMACIÓN",
      duracionEnHoras: 40,
    },
    {
      id: 6,
      nombreCurso: "ESTADÍSTICAS CON PHYTON",
      carrera: "DATA SCIENCE",
      duracionEnHoras: 60,
    },
    {
      id: 7,
      nombreCurso: "EXCEL",
      carrera: "DATA SCIENCE",
      duracionEnHoras: 80,
    },
    {
      id: 8,
      nombreCurso: "EXCEL VBA",
      carrera: "DATA SCIENCE",
      duracionEnHoras: 80,
    },
    {
      id: 9,
      nombreCurso: "MACHINE LEARNING",
      carrera: "DATA SCIENCE",
      duracionEnHoras: 40,
    },
    {
      id: 10,
      nombreCurso: "GOOGLE SHEETS",
      carrera: "DATA SCIENCE",
      duracionEnHoras: 60,
    },
    {
      id: 11,
      nombreCurso: "ASPECTOS BÁSICOS",
      carrera: "GESTION",
      duracionEnHoras: 80,
    },
    {
      id: 12,
      nombreCurso: "FINANZAS EMPRESARIALES",
      carrera: "GESTION",
      duracionEnHoras: 80,
    },
    {
      id: 13,
      nombreCurso: "SCRUM",
      carrera: "GESTION",
      duracionEnHoras: 40,
    },
    {
      id: 14,
      nombreCurso: "KAMBAN",
      carrera: "GESTION",
      duracionEnHoras: 60,
    },
    {
      id: 15,
      nombreCurso: "TOMA DE DESICIONES",
      carrera: "GESTION",
      duracionEnHoras: 80,
    },
    {
      id: 16,
      nombreCurso: "CIBERSEGURIDAD",
      carrera: "SEGURIDAD Y REDES",
      duracionEnHoras: 80,
    },
    {
      id: 17,
      nombreCurso: "COMPTIA SECURITY+",
      carrera: "SEGURIDAD Y REDES",
      duracionEnHoras: 40,
    },
    {
      id: 18,
      nombreCurso: "ISACA CSX-P",
      carrera: "SEGURIDAD Y REDES",
      duracionEnHoras: 60,
    },
    {
      id: 19,
      nombreCurso: "HACKER ÉTICO",
      carrera: "SEGURIDAD Y REDES",
      duracionEnHoras: 80,
    },
    {
      id: 21,
      nombreCurso: "TRANSFORMACIÓN DIGITAL",
      carrera: "INOVACION",
      duracionEnHoras: 40,
    },
    {
      id: 22,
      nombreCurso: "CRIPTO MONEDAS",
      carrera: "INOVACION",
      duracionEnHoras: 60,
    },
    {
      id: 23,
      nombreCurso: "ANALISIS DE INVERSIONES",
      carrera: "INOVACION",
      duracionEnHoras: 80,
    },
    {
      id: 24,
      nombreCurso: "AUTOMATIZACION",
      carrera: "INOVACION",
      duracionEnHoras: 80,
    },
    {
      id: 25,
      nombreCurso: "TURISMO VIRTUAL",
      carrera: "INOVACION",
      duracionEnHoras: 40,
    },
    {
      id: 26,
      nombreCurso: "MANDOS MEDIOS",
      carrera: "LIDERAZGO",
      duracionEnHoras: 60,
    },
    {
      id: 27,
      nombreCurso: "ALTOS MANDOS",
      carrera: "LIDERAZGO",
      duracionEnHoras: 80,
    },
    {
      id: 28,
      nombreCurso: "COMUNICACIÓN",
      carrera: "LIDERAZGO",
      duracionEnHoras: 80,
    },
    {
        id: 29,
        nombreCurso: "GESTIÓN EMPRESARIAL",
        carrera: "LIDERAZGO",
        duracionEnHoras: 80,
    },
    {
        id: 30,
        nombreCurso: "RELACIONES PÚBLICAS",
        carrera: "LIDERAZGO",
        duracionEnHoras: 80,
    },
  ];
  
  const cursosJSON = JSON.stringify(cursos);
  
 
  localStorage.setItem("cursosCargados", cursosJSON);