import {commonPrompt,xmlOutputInstruction} from "./base-generator.js";
export function generateNumericalPrompt(data,type){return `${commonPrompt(data,type)}
REGLAS PARA PREGUNTAS NUMÉRICAS
- Define respuesta correcta y tolerancia explícitamente.
- Distingue tolerancia absoluta y relativa.
- Indica unidades en enunciado y feedback. No supongas que el tipo numérico estándar evalúa unidades físicas automáticamente.
- Si hay conversión, muestra el factor y comprueba dimensiones.
- Evita redondeos que alteren la respuesta.
- Si hay aleatoriedad, garantiza rangos válidos y evita divisiones por cero o resultados imposibles.
- Incluye resolución paso a paso.
- Si se requiere evaluación de unidades, advierte que STACK u otro plugin podría ser más apropiado.
${xmlOutputInstruction(data.xmlOutput)}`}