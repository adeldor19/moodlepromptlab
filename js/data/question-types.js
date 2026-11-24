export const questionTypes = [
{id:"multichoice",name:"Opción múltiple",group:"Estándar",plugin:"Núcleo de Moodle",description:"Una o varias respuestas correctas, calificaciones parciales, barajado y retroalimentación por alternativa.",fields:[["options","Número de alternativas","number","4"],["correct","Respuestas correctas","select","Una","Una","Varias"],["shuffle","Barajar respuestas","checkbox",true],["feedback","Retroalimentación por alternativa","checkbox",true],["penalty","Penalización por error","text","Definir según puntuación"]]},
{id:"truefalse",name:"Verdadero/Falso",group:"Estándar",plugin:"Núcleo de Moodle",description:"Afirmaciones evaluables con respuesta y justificación.",fields:[["statements","Número de afirmaciones","number","5"],["feedback","Justificar ambas opciones","checkbox",true]]},
{id:"matching",name:"Emparejamiento",group:"Estándar",plugin:"Núcleo de Moodle",description:"Relacionar conceptos con definiciones, magnitudes, imágenes o ejemplos.",fields:[["pairs","Número de parejas","number","5"],["shuffle","Barajar elementos","checkbox",true],["distractors","Incluir distractores","checkbox",false]]},
{id:"shortanswer",name:"Respuesta corta",group:"Estándar",plugin:"Núcleo de Moodle",description:"Respuestas textuales exactas o equivalentes, con variantes aceptadas.",fields:[["variants","Variantes aceptadas","textarea","Sinónimos, mayúsculas/minúsculas y equivalencias"],["case","Distinguir mayúsculas","checkbox",false]]},
{id:"numerical",name:"Numérica",group:"Estándar",plugin:"Núcleo de Moodle",description:"Resultados numéricos con tolerancias, unidades, rangos y retroalimentación.",fields:[["unit","Unidad esperada","text","Indicar unidad"],["tolerance","Tolerancia","text","Tolerancia absoluta o relativa"],["random","Variables aleatorias","textarea","Variables, rangos y restricciones"],["partial","Crédito parcial","checkbox",true]]},
{id:"gapselect",name:"Elige la palabra perdida",group:"Estándar",plugin:"Núcleo de Moodle",description:"Texto con huecos que se completan mediante menús desplegables.",fields:[["gaps","Número de huecos","number","5"],["distractors","Número de distractores","number","3"],["groups","Agrupar opciones","checkbox",true]]},
{id:"randomsamatch",name:"Emparejamiento aleatorio",group:"Estándar",plugin:"Núcleo de Moodle",description:"Selecciona preguntas aleatoriamente de respuesta corta ya existentes en una categoría.",fields:[["category","Categoría fuente","text","Categoría existente"],["count","Número de preguntas","number","5"]]},
{id:"ddwtos",name:"Arrastrar y soltar sobre texto",group:"Estándar",plugin:"Núcleo de Moodle",description:"Arrastrar palabras o fragmentos a huecos de un texto.",fields:[["drags","Elementos arrastrables","number","6"],["groups","Grupos de elementos","text","Definir grupos si procede"],["images","Usar imágenes","checkbox",false]]},
{id:"formulas",name:"Fórmulas",group:"Plugins",plugin:"Plugin Formulas",description:"Variables, fórmulas, respuestas calculadas y evaluación matemática. Verificar sintaxis de la versión instalada.",fields:[["variables","Variables y rangos","textarea","Variables, rangos y restricciones"],["formula","Fórmula esperada","textarea","Expresión o algoritmo"],["tolerance","Tolerancia","text","Precisión y tolerancia"],["feedback","Retroalimentación por pasos","checkbox",true]]},
{id:"geogebra",name:"GeoGebra",group:"Plugins",plugin:"Plugin GeoGebra",description:"Actividad basada en construcción o applet GeoGebra.",fields:[["construction","Construcción requerida","textarea","Objetos, restricciones y acciones del alumno"],["evaluation","Criterios de evaluación","textarea","Qué debe comprobarse"],["resource","Recurso GeoGebra","text","Archivo, URL o recurso"]]},
{id:"kprime",name:"Matrix/Kprime",group:"Plugins",plugin:"Plugin adicional Matrix/Kprime",description:"Matriz de afirmaciones y columnas de respuesta; estructura dependiente del plugin.",fields:[["rows","Número de filas","number","5"],["columns","Opciones por fila","text","Definir columnas"],["scoring","Sistema de puntuación","textarea","Puntuación y combinaciones válidas"]]},
{id:"ordering",name:"Poner en orden",group:"Plugins",plugin:"Plugin Ordering",description:"Ordenar una secuencia de pasos, procesos, fases o acontecimientos.",fields:[["items","Número de elementos","number","5"],["shuffle","Presentar desordenados","checkbox",true],["partial","Puntuación parcial","checkbox",true]]},
{id:"cloze",name:"Rellenar espacio en blanco (Cloze)",group:"Estándar",plugin:"Núcleo de Moodle · Embedded answers",description:"Una pregunta integra subtipos de opción múltiple, respuesta corta y numérica.",fields:[["subtypes","Subtipos incluidos","text","MULTICHOICE, SHORTANSWER, NUMERICAL"],["gaps","Número de huecos","number","5"],["weights","Pesos por hueco","textarea","Puntuación relativa de cada hueco"],["feedback","Retroalimentación por hueco","checkbox",true]]},
{id:"regex",name:"Respuesta corta con expresión regular",group:"Plugins",plugin:"Plugin adicional Regex",description:"Validación de texto mediante patrones regex. Confirmar sintaxis del plugin instalado.",fields:[["pattern","Patrón regex","textarea","Patrón propuesto y explicado"],["examples","Ejemplos válidos e inválidos","textarea","Casos límite"],["case","Ignorar mayúsculas","checkbox",true]]},
{id:"stack",name:"STACK",group:"Avanzado",plugin:"Plugin STACK",description:"Evaluación matemática avanzada con Maxima, unidades, PRT, variables aleatorias, SVG y QTest.",fields:[["variables","Variables aleatorias y rangos","textarea","Variables, rangos y restricciones"],["calculation","Magnitud a calcular y tolerancia","textarea","Magnitud, unidad y margen de error"],["errors","Errores frecuentes y crédito parcial","textarea","Errores conceptuales y crédito parcial"],["svg","Dibujo SVG dinámico","select","No","No","Sí"],["svgdesc","Descripción del SVG","textarea","Esquema, cotas y valores dinámicos"],["seeds","Semillas desplegadas","number","8"],["qtests","Casos de prueba QTest","number","5"]]}
];

// Ayuda contextual para cada campo: orientaciones breves visibles junto a las opciones.
export const fieldHelp = {
  "multichoice": {
    "options": "Cuántas opciones verá el alumnado. Cuenta la correcta y los distractores. Ejemplo: 4 (una válida y tres incorrectas).",
    "correct": "«Una» permite marcar una sola opción correcta. «Varias» exige seleccionar más de una respuesta válida.",
    "shuffle": "Mezcla el orden de las opciones en cada intento. Desactívalo si el orden tiene significado.",
    "feedback": "Añade una explicación para cada alternativa, indicando por qué es correcta o qué error representa.",
    "penalty": "Descuento aplicado a respuestas incorrectas en preguntas con varios intentos. Si no conoces el valor, pide a la IA que proponga uno coherente."
  },
  "truefalse": {
    "statements": "Número de afirmaciones independientes que quieres crear. Ejemplo: 5 frases sobre circuitos eléctricos.",
    "feedback": "Solicita una explicación tanto para las afirmaciones verdaderas como para las falsas, para que el alumno entienda el motivo."
  },
  "matching": {
    "pairs": "Número de relaciones que deberá resolver el alumno. Ejemplo: 5 componentes y sus funciones.",
    "shuffle": "Mezcla preguntas y respuestas para evitar asociaciones por posición.",
    "distractors": "Añade respuestas que no corresponden a ninguna pregunta. Funcionan como opciones sobrantes y aumentan la dificultad."
  },
  "shortanswer": {
    "variants": "Incluye otras formas válidas de escribir la respuesta: sinónimos, abreviaturas o equivalencias. Ejemplo: «ordenador» y «computadora».",
    "case": "Actívalo solo si las mayúsculas deben importar. Normalmente conviene desactivarlo para aceptar distintas capitalizaciones."
  },
  "numerical": {
    "unit": "Unidad en la que debe introducirse el resultado. Ejemplos: cm, m/s, N, rpm o W. La pregunta numérica estándar no comprueba por sí sola las unidades físicas como STACK.",
    "tolerance": "Margen permitido respecto al resultado correcto. Ejemplo: ±0,1 o un 2 %. Aclara si el margen es absoluto o porcentual.",
    "random": "Datos que cambiarán entre versiones y sus límites. Ejemplo: «radio entre 2 y 8 cm; velocidad entre 100 y 500 rpm». Déjalo vacío si no necesitas variantes.",
    "partial": "Pide una propuesta de puntuación parcial si el procedimiento puede valorarse. La pregunta numérica estándar tiene menos opciones de evaluación que plugins como STACK."
  },
  "gapselect": {
    "gaps": "Cantidad de espacios en blanco que aparecerán en el texto. Cada uno se completa eligiendo una opción de un desplegable.",
    "distractors": "Palabras adicionales que no completan ningún hueco. Ejemplo: 3 opciones sobrantes.",
    "groups": "Agrupa opciones cuando haya distintos conjuntos de palabras o categorías. Si todos los huecos comparten opciones, indícalo en el enunciado."
  },
  "randomsamatch": {
    "category": "Nombre exacto de una categoría del banco de Moodle que ya contenga preguntas de respuesta corta. Esta modalidad reutiliza preguntas existentes; no las crea.",
    "count": "Número de preguntas que se seleccionarán al azar de esa categoría. Debe haber suficientes preguntas compatibles."
  },
  "ddwtos": {
    "drags": "Número de palabras o fragmentos que el alumno podrá arrastrar. Puedes incluir elementos sobrantes que actúen como distractores.",
    "groups": "Indica qué elementos pertenecen a un mismo grupo si quieres limitar dónde se pueden colocar. Si no lo necesitas, escribe «Sin grupos».",
    "images": "Actívalo si quieres arrastrar imágenes en lugar de palabras. Describe los archivos necesarios; deberán incorporarse al recurso."
  },
  "formulas": {
    "variables": "Datos que cambiarán en cada intento y sus límites. Ejemplo: «a: entero entre 2 y 10; b: decimal entre 1 y 5». Añade restricciones para evitar divisiones por cero.",
    "formula": "Relación matemática que calcula la respuesta. Ejemplo: «A = base × altura / 2». Si no conoces la sintaxis del plugin, descríbela con palabras.",
    "tolerance": "Precisión admitida. Ejemplo: error máximo de 0,01 o del 1 %. Aclara cómo debe redondearse el resultado.",
    "feedback": "Solicita el procedimiento con los valores concretos de cada variante, no solo el resultado final."
  },
  "geogebra": {
    "construction": "Qué debe aparecer en la actividad y qué hará el alumno. Ejemplo: «construir un triángulo, mover un vértice y observar cómo cambia el área».",
    "evaluation": "Qué evidencias permiten comprobar que está bien: posiciones, valores, propiedades geométricas o pasos realizados.",
    "resource": "URL o archivo GeoGebra si ya existe. Si no lo tienes, escribe «Crear propuesta desde cero» y describe el recurso."
  },
  "kprime": {
    "rows": "Número de afirmaciones o filas de la matriz. Ejemplo: 5 frases que el alumno debe clasificar.",
    "columns": "Opciones que aparecerán como columnas. Ejemplo: «Verdadero / Falso» o «Siempre / A veces / Nunca».",
    "scoring": "Explica cómo se puntúa cada selección y si hay penalización. Si desconoces el sistema del plugin instalado, pide que se advierta y no se invente."
  },
  "ordering": {
    "items": "Número de pasos o elementos que forman la secuencia correcta. Ejemplo: 6 pasos para fabricar una pieza.",
    "shuffle": "Presenta los elementos mezclados para que el alumno reconstruya el orden correcto.",
    "partial": "Permite valorar parcialmente una secuencia cuando algunos elementos están bien colocados, aunque el orden completo no sea correcto."
  },
  "cloze": {
    "subtypes": "Tipo de respuesta de cada hueco: MULTICHOICE (desplegable), SHORTANSWER (texto breve) o NUMERICAL (número). Puedes combinar varios.",
    "gaps": "Número de espacios que el alumno tendrá que completar dentro de un único texto o enunciado.",
    "weights": "Reparte la puntuación entre huecos. Ejemplo: «hueco 1: 1 punto; hueco 2: 2 puntos». Si no lo sabes, pide un reparto equilibrado.",
    "feedback": "Incluye una explicación específica para cada hueco, indicando qué concepto conviene revisar."
  },
  "regex": {
    "pattern": "Una expresión regular define qué estructura debe tener la respuesta. Si no sabes escribirla, describe el formato esperado y pide a la IA que proponga y explique el patrón.",
    "examples": "Ejemplos que deberían aceptarse y rechazarse. Ejemplo: válidos «AB-1234», «CD-5678»; inválido «A1234».",
    "case": "Actívalo si debe aceptarse la misma respuesta aunque cambien las mayúsculas y minúsculas."
  },
  "stack": {
    "variables": "Datos que cambiarán automáticamente y sus límites. Ejemplo: «diámetro motriz entre 10 y 40 cm; velocidad entre 500 y 1500 rpm». Añade restricciones para evitar valores imposibles.",
    "calculation": "Qué debe calcular el alumno, en qué unidad y con qué margen de error. Ejemplo: «velocidad de salida en rpm, con tolerancia del 2 %».",
    "errors": "Fallos habituales y puntuación parcial. Ejemplo: «invertir la relación: 0,25 puntos; olvidar convertir cm a m: 0,5 puntos».",
    "svg": "Selecciona «Sí» si quieres un esquema técnico SVG adaptado a los valores aleatorios. Si el dibujo no aporta información necesaria, selecciona «No».",
    "svgdesc": "Describe componentes, etiquetas, cotas y valores que deben cambiar. Ejemplo: «dos poleas unidas por correa, con diámetros y velocidades señalados».",
    "seeds": "Número de variantes de datos preparadas para comprobar la pregunta. Ocho es un valor inicial razonable.",
    "qtests": "Número de pruebas automáticas de respuestas y ramas de corrección. Cinco cubren los casos principales previstos en este prompt STACK."
  }
};
