function changeMe(arr) {
  var year = new Date()
  var obj = {}
  var output = ''
  for ( var i = 0; i < arr.length; i++ ){
    obj.firstname = arr[i][0],
    obj.lastname = arr[i][1],
    obj.gender = arr[i][2]   
    if (arr[i][3]===undefined) {
      obj.age = "invalid birth year"
      
    } else {
      obj.age = year.getFullYear() - arr[i][3]
      
    }
    

    console.log((i+1) + ". "+  obj.firstname, obj.lastname + ": ", obj)

    
  }
  
  
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""