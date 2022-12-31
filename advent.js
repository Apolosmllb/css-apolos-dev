const systemName = ["tree_1","tree_2","house","tree_1","tree_2","house"];

const stepNumbers = [1,33,10,2,44,20];

//tree_1 =>  1 -  2
//tree_2 => 33 - 44
//house  => 10 - 20

function checkStepNumber(systemName,stepNumbers){

   const stored = {};

   return systemName.every((systemName, index) =>{
      if( typeof stored[systemName] !== "undefined" && 
      stored[systemName] >= stepNumbers[index]){
         return false;
      }
      stored[systemName] = stepNumbers[index];
      return true;
   })
}



console.log( checkStepNumber(systemName,stepNumbers));
