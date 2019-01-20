function ubahHuruf(kata) {
  var abcs = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var output = ''
  for(var i=0; i<kata.length; i++){
      for(var j=0; j<abcs.length; j++){
          if(kata[i]==abcs[j]){
              if(kata[i]=='z'){
                output= output + 'a'                  
              }else{
                output= output + abcs[j+1]
              }
             
              j=abcs.length
          }
      }
  }
  return output
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
