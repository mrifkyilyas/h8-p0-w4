function countProfit(shoppers) {
  if(shoppers.length===0){
    return shoppers
  } else {
    
      let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                        ['Baju Zoro', 500000, 2],
                        ['Sweater Uniklooh', 175000, 1]
                      ];
        
      var arrResult = []                        
    
      for ( var i = 0; i<shoppers.length; i++ ) {
        for ( var j = 0; j<listBarang.length; j++ ) {   
          if(listBarang[j][3]===undefined) {
            listBarang[j][3]=[]
            listBarang[j][4] = 0
            
          }
          if(shoppers[i].product==listBarang[j][0]) {        
            if(listBarang[j][2]>=shoppers[i].amount) {          
              listBarang[j][2] = listBarang[j][2] - shoppers[i].amount
              listBarang[j][3].push(shoppers[i].name)
              profitTemp = shoppers[i].amount * listBarang[j][1]          
              listBarang[j][4] = listBarang[j][4] + profitTemp     
              }        
          }      
        }
      }

      for (var k = 0; k<listBarang.length; k++){
        var obj = {}    
        obj.product = listBarang[k][0],
        obj["shoppers"] = listBarang[k][3],
        obj["leftOver"] = listBarang[k][2],
        obj.TotalProfit = listBarang[k][4]
        arrResult.push(obj)

      
      }
      return arrResult 
 }
  
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]