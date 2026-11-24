import {commonPrompt,xmlOutputInstruction} from "./base-generator.js";
export function generatePluginPrompt(data,type){return `${commonPrompt(data,type)}
REGLAS PARA PLUGINS
- Plugin requerido: ${type.plugin}.
- No presupongas que está instalado.
- No inventes campos XML, identificadores internos, atributos ni serializaciones.
- Si falta documentación de versión y formato, advierte que no puedes garantizar importación y pide los datos necesarios.
- Separa XML respaldado por documentación de pseudocódigo ilustrativo.
- Incluye dependencias: plugin, versión, archivos, recursos o categorías.
- Si no hay importación Moodle XML estándar, dilo y no sustituyas silenciosamente el tipo solicitado.
${xmlOutputInstruction(data.xmlOutput)}`}