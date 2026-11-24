import {commonPrompt,xmlOutputInstruction} from "./base-generator.js";
export function generateStandardPrompt(data,type){return `${commonPrompt(data,type)}
REGLAS DEL FORMATO
- Tipo Moodle: ${type.id}.
- Construye XML propio del tipo y respeta campos obligatorios de Moodle.
- Define correctamente fracciones, calificaciones, penalizaciones y barajado solo cuando correspondan.
- Distribuye puntuaciones parciales de forma coherente.
- La retroalimentación explicará por qué cada respuesta es correcta o incorrecta.
- En preguntas dependientes de categorías, declara qué preguntas fuente deben existir.
${xmlOutputInstruction(data.xmlOutput)}`}