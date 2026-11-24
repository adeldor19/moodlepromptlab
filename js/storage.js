const read=k=>{try{return JSON.parse(localStorage.getItem(k)||"[]")}catch{return []}};
const write=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
export const getSaved=()=>read("mpl_saved");
export const getHistory=()=>read("mpl_history");
export function saveTemplate(x){const a=getSaved();a.unshift({...x,id:crypto.randomUUID(),savedAt:new Date().toISOString()});write("mpl_saved",a);return a}
export function addHistory(x){const a=[{...x,id:crypto.randomUUID(),createdAt:new Date().toISOString()},...getHistory()].slice(0,30);write("mpl_history",a);return a}
export function removeSaved(id){write("mpl_saved",getSaved().filter(x=>x.id!==id));return getSaved()}