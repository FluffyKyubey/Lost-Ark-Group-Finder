fetch(
    "https://opensheet.elk.sh/1F77UjfkB9J9qFiH1rwh45uUantZE1V3F02OaCjJIkY8/PlayerInfo"
  )
    .then((res) => res.json())
    .then((data) => {
      data.forEach((data) => {
        console.log(data.Character)
      });
    });