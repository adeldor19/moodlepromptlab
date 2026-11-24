import {commonPrompt,xmlOutputInstruction} from "./base-generator.js";
export function generateStackPrompt(data,type){
const s=data.specific||{};
return `${commonPrompt(data,type)}
INSTRUCCIONES ESPECIALIZADAS STACK / MAXIMA
1. VARIABLES Y CÁLCULOS
- Define variables numéricas puras para cálculos y etiquetas.
- Usa stackunits(valor, unidad) para variables con unidades cuando corresponda.
- Usa <type>units</type> en el input si se esperan unidades, salvo magnitudes adimensionales.
- Comprueba dominios y dependencias Maxima.

2. ÁRBOL DE RESPUESTA POTENCIAL (PRT)
- Evalúa solución correcta con unidades mediante UnitsRelative.
- Incluye error conceptual indicado por el docente con crédito parcial (por ejemplo 0.25 o 0.5) y pista específica.
- Incluye valor numérico correcto sin unidad o con unidad incorrecta mediante NumRelative y crédito parcial.
- Evita ramas contradictorias.

3. SVG DINÁMICO (si se solicita)
- Incrusta <svg> directamente en <questiontext>, sin atributo xmlns.
- Dentro del SVG usa exclusivamente delimitadores de texto plano {#variable#}; nunca {@variable@}.
- Usa line, polyline, rect, circle, polygon y text.
- Utiliza entidades HTML para símbolos, por ejemplo &#937; y &#8722;.
- Comprueba que todas las variables estén definidas y que el SVG no dependa de HTML de Maxima.

4. FÓRMULAS Y FEEDBACK
- Cierra delimitadores MathJax \\( ... \\) y \\[ ... \\].
- Incluye resolución paso a paso en generalfeedback con valores de cada variante.
- Comprueba dimensiones, signos, redondeos y coherencia física.

5. VARIANTES Y QTEST
- Incluye ${s.seeds||8} semillas <deployedseed>.
- Incluye ${s.qtests||5} casos <qtest>: solución exacta, conversión equivalente, error conceptual, número sin unidad y fallo total.
- En round(), evita notación científica con letra e cuando pueda causar ambigüedad.

6. CONTROL DE CALIDAD
- Comprueba variables, PRT, nodos, tests y etiquetas.
- No simules haber ejecutado Maxima/STACK.
- No declares XML validado sin importación real.

DATOS STACK DEL DOCENTE
- Variables y rangos: ${s.variables||"No especificados"}
- Magnitud y tolerancia: ${s.calculation||"No especificadas"}
- Errores y crédito parcial: ${s.errors||"No especificados"}
- SVG: ${s.svg||"No"}
- Descripción SVG: ${s.svgdesc||"No procede"}
${xmlOutputInstruction(data.xmlOutput)}`;
}