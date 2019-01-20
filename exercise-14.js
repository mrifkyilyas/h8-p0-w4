function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  if ( arrPenumpang.length ==0 ){
      return arrPenumpang
  } else {
      var coorX = 0
      var coorY = 0
      var arrResult = []
      
      
    for( var i = 0; i<arrPenumpang.length; i++ ) { 
        var obj = {}        
        for ( var j = 0; j<rute.length; j++ ) {
            if( arrPenumpang[i][1]==rute[j] ) {
                coorX = j

            }
            if ( arrPenumpang[i][2]==rute[j]) {
                coorY = j
            }
            
        }
        
        obj.penumpang = arrPenumpang[i][0],
        obj.NaikDari = arrPenumpang[i][1],
        obj.Tujuan = arrPenumpang[i][2] ,
        obj.bayar = Math.abs(coorY-coorX) * 2000,
        arrResult.push(obj)
       

    }
    
    return arrResult
  }
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]