fetch(
    "https://opensheet.elk.sh/1F77UjfkB9J9qFiH1rwh45uUantZE1V3F02OaCjJIkY8/PlayerInfo"
  )
    .then((res) => res.json())
    .then((data) => {
      var copy = [...data];
      console.log(copy)
      //data.forEach((row) => {
       // console.log(data)
     // });
     // var newData= data.json()
      //console.log(newData)
     //console.log(characters)
      
      var randomGroupFour = 4
      var randomGroupEight = 8
      
      var shuffle = data.sort(() => Math.random() - 0.5);
      console.log(shuffle)
    });


//function sortGroups(shuffle, divide){
//for (var i = 0; i < shuffle.length; i += divide){
   // divide = shuffle.slice(i, i + divide)
    //tempGroup.push(divide)
////}
//return tempGroup;
//}

//sortGroups()