var toons;

var finalGroup = [];

fetch(
  "https://opensheet.elk.sh/1F77UjfkB9J9qFiH1rwh45uUantZE1V3F02OaCjJIkY8/PlayerInfo"
)
  .then((res) => res.json())
  .then((data) => {
    toons = [...data];
    console.log(toons);


  });



document.querySelector("#create").addEventListener("click", function (event) {
  var number = document.querySelector(".number").value;

  // chooseGroupSize(number)
  createGroups(number);
  // printGroups()
});

function chooseGroupSize(number) {
  groupSize = parseInt(number);
  console.log(groupSize);

  if (isNaN(groupSize)) {
    return 0;
  }
  return groupSize;
}

function createGroups(number) {
  finalGroup = [];
  var shuffle = toons.sort(() => Math.random() - 0.5);

  for (var i = 0; i < number; i++) {
    var characters = shuffle[i].Character;
    console.log(characters);
    finalGroup.push(characters);
  }
  console.log(finalGroup)
}


function printGroups() {
  var newGroup = chooseGroupSize();
  var groupMembers = document.querySelector(".group");

  if (newGroup) {
    var createdGroup = createGroups();
    groupMembers.value = createdGroup;
  } else {
    groupMembers.value = "";
  }
}
