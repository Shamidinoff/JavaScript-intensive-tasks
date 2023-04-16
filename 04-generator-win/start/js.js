const calcAverage = (res1, res2, res3) => (res1 + res2 + res3) / 3;

const scoreKats = calcAverage(44, 23, 71);
const funnyDucks = calcAverage(65, 54, 49);

function checkWinner(avgKats, avgDucks) {
  if (avgKats >= 2 * avgDucks) {
    console.log(
      `crazyKats победили с результатом ${avgKats} против funnyDucks с результатом ${avgDucks}`
    );
  } else if (avgDucks >= 2 * avgKats) {
    console.log(
      `funnyDucks crazyKats победили с результатом ${avgDucks} против crazyKats с результатом ${avgKats}`
    );
  } else {
    console.log("У нас ничья!");
  }
}

checkWinner(scoreKats, funnyDucks);
