function urutkanAbjad(str) {
    var urutAbjad = []
    var arrTemp = []
    for(var i=0; i<str.length; i++){
        arrTemp.push(str[i])
    }
    arrTemp.sort()
    for(var j=0; j<arrTemp.length; j++){
        urutAbjad = urutAbjad + arrTemp[j]
    }
    return urutAbjad
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'