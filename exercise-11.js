function shoppingTime(memberId, money) {
    if ( memberId=="" || memberId==null || money==null ){
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    } else if (money<=15000) {
        return "Mohon maaf, uang tidak cukup"
    } else {
        var obj = {}
        var arrLists = []
        var firstMoney = money
        if(money>=1500000){
            arrLists.push("Sepatu Stacattu")
            money = money - 1500000
        }
        if(money>=500000){
            arrLists.push("Baju Zoro ")
            money = money - 500000
        }
        if(money>=250000){
            arrLists.push("Baju H&N")
            money = money - 250000
        }
        if(money>=175000){
            arrLists.push("Sweater Uniklooh")
            money = money - 175000
        }
        if(money>=50000){
            arrLists.push("Casing Handphone")
            money = money - 50000
        }
        obj["memberId"] = memberId,
        obj["money"] = firstMoney,        
        obj.listPurcased = arrLists,
        obj.chargeMoney = money
        

        
        console.log(obj)
    }
    return ''

         
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
 console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja