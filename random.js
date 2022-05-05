fetch(
    "https://opensheet.elk.sh/1F77UjfkB9J9qFiH1rwh45uUantZE1V3F02OaCjJIkY8/PlayerInfo"
  )
    .then((res) => res.json())
    .then((data) => {
      var copy = [...data];
      console.log(copy)
      
      
      
      var shuffle = copy.sort(() => Math.random() - 0.5);
      
      for (var i = 0; i < shuffle.length; i++){
        var toons = shuffle[i].Character;
        console.log(toons)
      }
      
    });
    //var randomGroupFour = 4
    //var randomGroupEight = 8
    //var groupSelect = document.querySelector('number').textContent
    
    
    function chooseGroupSize(){
      choice = []
      groupSize = parseInt(modal)

      if (isNaN(groupSize)){
        return false;
      }
      return true;

    }

    function createGroups(){

      var group = [];
      for (var i = 0; i < groupSize)

    }

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