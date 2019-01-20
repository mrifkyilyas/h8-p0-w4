function angkaPrima(angka) {
  if(angka==1 || angka==0){
    return false
  }else{
    var isPrima = true
    for(var i=2; i<angka; i++ ){
      if(angka%i==0){
        isPrima = false
        i = angka
      }
      
    }
    return isPrima

  }  
}



// TEST CASES

console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false 
