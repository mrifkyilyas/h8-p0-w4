function cariModus(arr) {
   var arrResult = []
   var datasama=0
   var count = 0
   for ( var i = 0; i < arr.length; i++) {
       var arrTemp = []
       var isExist = false
       
       for ( var j = 0; j < arrResult.length; j++  ){ 
           if ( arr[i]===arrResult[j][0]) {
               arrResult[j][1]++
               isExist = true
              
           }           
       }
       if (isExist==false) {
           arrTemp.push(arr[i],1)
           arrResult.push(arrTemp)
       }

   }  
   
   for ( var k = 0; k < arrResult.length; k++ ) {
       if(arrResult[k][1]>count){
           count=arrResult[k][1]
           modus = arrResult[k][0]

       }
   }
   
   if ( count === 1 || count === arr.length ){

       return -1

   } else {

       return modus
   }
   
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1