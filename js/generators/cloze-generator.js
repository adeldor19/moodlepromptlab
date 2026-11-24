import {commonPrompt,xmlOutputInstruction} from "./base-generator.js";
export function generateClozePrompt(data,type){return `${commonPrompt(data,type)}
REGLAS PARA CLOZE
- Construye texto con sintaxis Cloze de Moodle correctamente formada.
- Cada hueco declara subtipo, peso, respuesta(s) y feedback si corresponde.
- Revisa llaves, separadores, porcentajes, signos y caracteres especiales.
- No confundas MULTICHOICE, MULTICHOICE_V, SHORTANSWER, NUMERICAL y variantes.
- Comprueba que los pesos sumen la calificación prevista.
- Evita anidamientos no admitidos.
${xmlOutputInstruction(data.xmlOutput)}`}