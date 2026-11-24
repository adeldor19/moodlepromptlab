# Moodle Prompt Lab

Generador local de prompts especializados para solicitar a una IA preguntas Moodle XML.

## Funciones MVP
- Modo híbrido: configuración común y campos específicos por tipo.
- 15 formatos: multichoice, truefalse, matching, shortanswer, numerical, gapselect, randomsamatch, ddwtos, Formulas, GeoGebra, Matrix/Kprime, Ordering, Cloze, Regex y STACK.
- Moodle XML completo como salida solicitada.
- Contextualización LOMLOE Andalucía con campos para competencias, criterios y saberes.
- Sin API, sin servidor y sin dependencias de ejecución.
- Plantillas e historial mediante localStorage.

## Ejecutar
Usa un servidor estático local (por ejemplo Live Server) o publica en GitHub Pages. Se usan módulos ES.

## GitHub Pages
Settings → Pages → Deploy from a branch → main → /(root).

## Limitaciones
La herramienta redacta prompts, no ejecuta IA ni valida XML en Moodle. Los plugins de terceros requieren verificar su versión y documentación. La contextualización curricular es apoyo y debe revisarse con la normativa vigente y la programación didáctica del centro.

## Estructura
- js/data/: catálogo de formatos y reglas curriculares.
- js/generators/: motores especializados.
- js/storage.js: plantillas e historial.
- js/ui.js: interfaz.
