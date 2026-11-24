import {curriculumGuidance} from "../data/curriculum-andalucia.js";
const value=v=>(v===undefined||v===null||v==="")?"No especificado: propón una opción coherente y explícitala.":String(v);
export function commonPrompt(data,type){
 const curricular=data.curriculumEnabled?curriculumGuidance:"No incluir contextualización curricular formal.";
 return `Actúa como especialista en diseño de evaluación educativa, Moodle y creación de preguntas importables.

OBJETIVO
Genera ${data.quantity} pregunta(s) del tipo "${type.name}" (${type.id}) en formato Moodle XML completo.

CONTEXTO DIDÁCTICO
- Asignatura: ${value(data.subject)}
- Nivel: ${value(data.level)}
- Tema/unidad: ${value(data.topic)}
- Contexto: ${value(data.statement)}
- Dificultad: ${value(data.difficulty)}
- Categoría destino: ${value(data.category)}

REQUISITOS DIDÁCTICOS
- Evalúa comprensión y aplicación, no solo memorización, salvo que el objetivo lo requiera.
- Usa lenguaje adecuado al nivel. Evita ambigüedades y distractores absurdos.
- Incluye retroalimentación formativa, precisa y útil.
- Si se solicitan varias preguntas, evita duplicados y cambia el enfoque cognitivo.
- Verifica la corrección de la solución y declara los supuestos imprescindibles.

${curricular}

DATOS CURRICULARES APORTADOS
- Competencias específicas: ${value(data.competencies)}
- Criterios de evaluación: ${value(data.criteria)}
- Saberes básicos: ${value(data.knowledge)}

FORMATO Y COMPATIBILIDAD
- Entrega el XML completo desde la declaración XML hasta </quiz> en un único bloque de código.
- Utiliza Moodle XML y las etiquetas propias del tipo seleccionado.
- Escapa caracteres XML y usa CDATA cuando proceda para HTML.
- No mezcles etiquetas de otros tipos de pregunta.
- Incluye nombre, enunciado, calificación y retroalimentación cuando corresponda.
- Revisa anidamiento, porcentajes, referencias y caracteres especiales.
- No afirmes que has validado el XML en Moodle si no lo has importado realmente.

TIPO Y REQUISITOS
${type.description}

CONFIGURACIÓN ESPECÍFICA
${data.specificText}

DEPENDENCIAS
La compatibilidad depende de Moodle y de los plugins instalados. Para plugins de terceros, usa estructuras documentadas para su versión; si falta esa información, adviértelo y no inventes XML supuestamente válido.`;
}
export function xmlOutputInstruction(mode){return mode==="xml-explain"?"Después del XML, añade una explicación técnica breve.":"La salida debe contener exclusivamente el bloque Moodle XML completo."}
