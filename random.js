fetch(
    "https://opensheet.elk.sh/1F77UjfkB9J9qFiH1rwh45uUantZE1V3F02OaCjJIkY8/PlayerInfo"
  )
    .then((res) => res.json())
    .then((data) => {
      var copy = [...data];
      console.log(copy)
      
      
      var randomGroupFour = 4
      var randomGroupEight = 8
      
      var shuffle = copy.sort(() => Math.random() - 0.5);

      for (var i = 0; i < shuffle.length; i++){
        var toons = shuffle[i].Character;
        console.log(toons)
      }
      
    });


