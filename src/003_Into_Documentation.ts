/**=======================
 * *       INFO
 *  Introduction to types and
documentation
 *  
 *========================**/
export function test() {
 //NOTE -
 //types:
 // NUMBER -- STRING -- BOOLEAN
 // UNDEFINED -- NULL -- VOID
 // OBJECT -- ARRAY -- TUPLES ...
 /*! ANY */
 // NEVER -- UNKNOWN

 type Vec = {
  name: string;
 };
 function sal(param: Vec) {
  if ("name" in param) {
   console.log(param.name);
  }
 }
 sal({ name: "hol" });
}
