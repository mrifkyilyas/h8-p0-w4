function digitPerkalianMinimum(angka) {
    var panjang = ''
    for(var i=1; i<=angka; i++) {
        if(angka%i==0) {
           a = angka;
           b = i;
           c = angka/b
           panjangTemp = String(c).length  + String(b).length        
           
        }
        if(panjang == '') {
            panjang = panjangTemp
        } else {
            if(panjang>panjangTemp) {
                panjang = panjangTemp
            }

        }
        
    }
    return panjang

 
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2