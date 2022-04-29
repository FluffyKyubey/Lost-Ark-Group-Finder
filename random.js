var characters = 'data.json'
console.log(groups)

var randomGroupFour = 4
var randomGroupEight = 8

var shuffle = characters.sort(() => Math.random - 0.5);
console.log(shuffle)


function sortGroups(shuffle, divide){
for (var i = 0; i < shuffle.length; i += divide){
    divide = shuffle.slice(i, i + divide)
    tempGroup.push(divide)
}
return tempGroup;
}

sortGroups()