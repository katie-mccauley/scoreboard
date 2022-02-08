let teamScore1 = 0
let teamScore2 = 0
let touchScore1 = 0
let touchScore2 = 0
let safetyScore1 = 0
let safetyScore2 = 0
let team1 = 0

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
  } else if (team == "team2") {
    touchScore2 += 6
  }
  draw()
}

function increaseSafety(team) {
  if (team == 'team1') {
    safetyScore1 += 4
  } else if (team == 'team2') {
    safetyScore2 += 4
  }
  draw()
}

function total1(team) {
  team1 = safetyScore1 + teamScore1
  draw()
  console.log(team1)
}

function draw() {
  document.getElementById('team1').innerText = teamScore1
  document.getElementById('team2').innerText = teamScore2
  document.getElementById('touch1').innerText = touchScore1
  document.getElementById('touch2').innerText = touchScore2
  document.getElementById('safety1').innerText = safetyScore1
  document.getElementById('saftey2').innerText = safetyScore2
  document.getElementById('total1').innerText = team1
}



function reset() {
  teamScore1 = 0
  teamScore2 = 0
  touchScore1 = 0
  touchScore2 = 0
  safetyScore1 = 0
  safetyScore2 = 0
  draw()
}

function addPlayer() {

}