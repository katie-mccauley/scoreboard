let teamScore1 = 0
let teamScore2 = 0
let touchScore1 = 0
let touchScore2 = 0

function increaseScore(team) {
  if (team == 'team1') {
    teamScore1 += 3
  } else if (team == 'team2') {
    teamScore2 += 3
  }
  draw(team)
}

function touchDown(team) {
  if (team == 'team1') {
    touchScore1 += 6
    console.log(touchScore1);
  } else if (team == "team2") {
    touchScore2 += 6
    console.log(touchScore2);
  }
  draw()
}

function draw() {
  document.getElementById('team1').innerText = teamScore1
  document.getElementById(`team2`).innerText = teamScore2
  document.getElementById('touch1').innerText = touchScore1
  document.getElementById('touch2').innerText = touchScore2
}



function reset() {
  teamScore1 = 0
  teamScore2 = 0
  touchScore1 = 0
  touchScore2 = 0
  draw()
}

function addPlayer() {

}