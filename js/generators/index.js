import {generateStandardPrompt} from "./standard-generator.js";
import {generateNumericalPrompt} from "./numerical-generator.js";
import {generateClozePrompt} from "./cloze-generator.js";
import {generatePluginPrompt} from "./plugin-generator.js";
import {generateStackPrompt} from "./stack-generator.js";
export function generatePrompt(data,type){
 if(type.id==="stack")return generateStackPrompt(data,type);
 if(type.id==="numerical")return generateNumericalPrompt(data,type);
 if(type.id==="cloze")return generateClozePrompt(data,type);
 if(type.group==="Plugins"||type.id==="geogebra"||type.id==="kprime"||type.id==="ordering"||type.id==="regex")return generatePluginPrompt(data,type);
 return generateStandardPrompt(data,type);
}