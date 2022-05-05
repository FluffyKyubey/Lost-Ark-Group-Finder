fetch(
    "https://opensheet.elk.sh/1F77UjfkB9J9qFiH1rwh45uUantZE1V3F02OaCjJIkY8/PlayerInfo"
  )
    .then((res) => res.json())
    .then((data) => {
      var copy = [...data];
      console.log(copy)
      
      
      //testing shuffle of names, not for final block
      var shuffle = copy.sort(() => Math.random() - 0.5);
      
      for (var i = 0; i < shuffle.length; i++){
        var toons = shuffle[i].Character;
        console.log(toons)
      }
      
      //var randomGroupFour = 4
      //var randomGroupEight = 8
      //var groupSelect = document.querySelector('number').textContent
    });
      
      function shuffle(data){
        var currentIndex = data.length, randomIndex;

        while (currentIndex !==0){
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          [data[currentIndex], data[randomIndex]] = [data[randomIndex], data[currentIndex]];
        }
      }
    
    document.querySelector('.number').addEventListener('keyup', function(event){
      var number = document.querySelector('.number').value
      if(event.key == 'Enter'){
      chooseGroupSize(number)
      createGroups()
      printGroups()
      }
    })



      function chooseGroupSize(){
        choice = document.querySelector('.number').value
        groupSize = parseInt(choice)
        console.log(choice)

        
        if (isNaN(groupSize)){
          return false;
        }
        return true;
        
      }
      
      
     
      
      function createGroups(groups, quantity){
        
        var group = [];
        var shuffleResult = shuffle(groups)
        for (var i = 0; i < quantity; i++){
          group.push(shuffleResult[i])
        }
        return group
        
      }

      var currentQuantity = chooseGroupSize()

      

      var result = createGroups(data, currentQuantity)
      
      function printGroups(){
        var newGroup = chooseGroupSize();
        var groupMembers = document.querySelector('.group')
        
        if (newGroup){
          
          var createdGroup = createGroups();
          groupMembers.value = createdGroup
        } else {
          groupMembers.value = ""
        }
        
      }