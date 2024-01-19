export const truncatedText=(text:string, truncatedLength:number)=>{
  return text.replace(/<[a-z]>/gi,"").replace(/<\/[a-z]>/gi,"").length>truncatedLength?text.substring(0, truncatedLength)+'...':text;
}