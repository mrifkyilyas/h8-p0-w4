function fpb(angka1, angka2) {
    var a = Number(angka1);
    var b = Number(angka2)
    
    while (b != 0){             
        bTemp = b        
        b = a%b        
        a = bTemp       
    }

    return a
 
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
