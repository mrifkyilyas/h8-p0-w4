function checkAB(num) {    
    var coorA = ''
    var coorB = '' 
    var hasil = 0
    var jarak = 0
    for ( var j = 0; j < num.length; j++ ) {//mencari kordinat "a" dan "b"
        if( num[j]=='a') {
            for (var k = 0; k < num.length; k++ ) {
                if (num[k]=='b') {
                    hasil = Math.abs(j-k)                    
                }
                if(hasil===4){
                    jarak = hasil
                }
            }
        } 

    }
    return jarak===4
  
    
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
