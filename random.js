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


 document.querySelector("#four").addEventListener("click", function (event) {
  var number = document.querySelector("#four").value;

  // chooseGroupSize(number)
  createGroups(number);
  // printGroups()
});

document.querySelector("#eight").addEventListener("click", function (event) {
  var number = document.querySelector("#eight").value;

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
  var indexNum = 0;
  var list = document.querySelector('.list')

  for (var i = 0; i < number; i++) {
    var characters = shuffle[i].Character;
    console.log(characters);
    result = finalGroup.push(characters);
  }
  console.log(finalGroup)

  for (var i = 0; i < finalGroup.length; i++){
    myLi = document.createElement('li');
    myLi.innerHTML = finalGroup[indexNum++]
    list.appendChild(myLi)
  }

  
}


