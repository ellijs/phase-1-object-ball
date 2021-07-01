function gameObject() {
  const someObject = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
  return someObject;
}

function homeTeamName() {
  return gameObject()["home"]["teamName"];
}

console.log(homeTeamName());

function findPlayer(name) {
  // refactor
  const data = gameObject();
  const { home, away } = data; // destructuring
  return home.players[name] ? home.players[name] : away.players[name];

  // let player;
  // const data = gameObject();

  // if(data.home.players[name]) {
  //   player = data.home.players[name]
  // } else if (data.away.players[name]) {
  //   player = data.away.players[name]
  // }
  // return player;

  // O(n)^2 solution
  // -----------------
  // const data = gameObject()
  // for (key in data) {
  //     for (player in data[key].players) {
  //         if (player === name) {
  //             return data[key].players[player].points
  //         }
  //     }
  // }
}
console.log(findPlayer("Jeff Adrien"));
console.log(findPlayer("Alan Anderson"));

function numPointScored(name) {
  return findPlayer(name).points;
}

console.log(numPointScored("Jeff Adrien"));

function shoeSize(name) {
  return findPlayer(name).shoe;
}

// const shoeSize = (name) => findPlayer(name).shoe   //super dry code!

console.log(shoeSize("Jeff Adrien"));

function teamColors(team) {
  const data = gameObject();
  for (const key in data) {
    if (data[key].teamName === team) {
      return data[key].colors;
    }
  }
}

console.log(teamColors("Brooklyn Nets"));

function teamNames() {
  const data = gameObject();
  const result = [];
  result.push(data.home["teamName"]);
  result.push(data.away["teamName"]);
  return result;
}

console.log(teamNames());

function playNumbers(team) {
  //return array of Jersey numbers
  const data = gameObject();
  const homeTeam = data.home.teamName;
  const awayTeam = data.away.teamName;

  if (team === homeTeam) {
    return;
  } else if (team === awayTeam) {
    return;
  }
}

const homeJerseyNumbers = function () {
  const data = gameObject();
  let newArray = [];
  let meetInnerValue = Object.values(data.home.players);
  newArray.push(
    meetInnerValue.map((element) => {
      console.log((element = element.number));
    })
  );
  return newArray;
};

console.log(homeJerseyNumbers());
// console.log(homePlayers);

// function gameObject() {
//   const games = {
//     home: {
//       teamName: "Brooklyn Nets",
//       colors: ["Black", "White"],
//       players: {
//         "Alan Anderson": {
//           number: 0,
//           shoe: 16,
//           points: 22,
//           rebounds: 12,
//           assists: 12,
//           steals: 3,
//           blocks: 1,
//           slamDunks: 1,
//         },
//         "Reggie Evans": {
//           number: 30,
//           shoe: 14,
//           points: 12,
//           rebounds: 12,
//           assists: 12,
//           steals: 12,
//           blocks: 12,
//           slamDunks: 7,
//         },
//         "Brook Lopez": {
//           number: 11,
//           shoe: 17,
//           points: 17,
//           rebounds: 19,
//           assists: 10,
//           steals: 3,
//           blocks: 1,
//           slamDunks: 15,
//         },
//         "Mason Plumlee": {
//           number: 1,
//           shoe: 19,
//           points: 26,
//           rebounds: 12,
//           assists: 6,
//           steals: 3,
//           blocks: 8,
//           slamDunks: 5,
//         },
//         "Jason Terry": {
//           number: 31,
//           shoe: 15,
//           points: 19,
//           rebounds: 2,
//           assists: 2,
//           steals: 4,
//           blocks: 11,
//           slamDunks: 1,
//         },
//       },
//     },
//     away: {
//       teamName: "Charlotte Hornets",
//       colors: ["Turquoise", "Purple"],
//       players: {
//         "Jeff Adrien": {
//           number: 4,
//           shoe: 18,
//           points: 10,
//           rebounds: 1,
//           assists: 1,
//           steals: 2,
//           blocks: 7,
//           slamDunks: 2,
//         },
//         "Bismak Biyombo": {
//           number: 0,
//           shoe: 16,
//           points: 12,
//           rebounds: 4,
//           assists: 7,
//           steals: 7,
//           blocks: 15,
//           slamDunks: 10,
//         },
//         "DeSagna Diop": {
//           number: 8,
//           shoe: 14,
//           points: 24,
//           rebounds: 12,
//           assists: 12,
//           steals: 4,
//           blocks: 5,
//           slamDunks: 5,
//         },
//         "Ben Gordon": {
//           number: 8,
//           shoe: 15,
//           points: 33,
//           rebounds: 3,
//           assists: 2,
//           steals: 1,
//           blocks: 1,
//           slamDunks: 0,
//         },
//         "Brendan Haywood": {
//           number: 33,
//           shoe: 15,
//           points: 6,
//           rebounds: 12,
//           assists: 12,
//           steals: 22,
//           blocks: 5,
//           slamDunks: 12,
//         },
//       },
//     },
//   };
//   return games;
// }

// gameObject();

// function numPointsScored(name) {
//   const homeSelectedPlayer = gameObject().home.players[name];
//   const awaySelectedPlayer = gameObject().away.players[name];

//   const homePointsScored = gameObject().home.players[name].points;
//   const awayPointsScored = gameObject().away.players[name].points;

//   if (homeSelectedPlayer) {
//     return homePointsScored;
//   } else if (awaySelectedPlayer) {
//     return awayPointsScored;
//   }
// }
// numPointsScored("Alan Anderson");

// function shoeSize(name) {
//   const homeSelectedPlayer = gameObject().home.players[name];
//   const awaySelectedPlayer = gameObject().away.players[name];

//   const homePointsScored = gameObject().home.players[name].shoe;
//   const awayPointsScored = gameObject().away.players[name].shoe;

//   if (homeSelectedPlayer) {
//     return homePointsScored;
//   } else if (awaySelectedPlayer) {
//     return awayPointsScored;
//   }
// }

// // variable, parameter ㅇㅣㄹ때는 "" 필요 없지만
// // 이미 존재하는 key면 [""]필요 or . notation

// const teamColors = (team) => {
//   if (gameObject().home.teamName === team) {
//     return Object.values(gameObject().home.colors)
//   } else if (gameObject().away.teamName === team) {
//     return Object.values(gameObject().away.colors)
//   } else {
//     return "This person didn't play tonight"
//   }
//   //return array of team colors
//   // if statement same as playername functions
// };

// const whichTeamPlayer = (homeObj, awayObj) => {
//   if (homeObj === arg) {
//     return homeObj;
//   } else if (awayObj === arg) {
//     return awayObj;
//   }
// }

// function playStats = (playerName) => {
//   // return {} of player name stats
//  const result = whichTeamPlayer(
//    gameObject().home.player[playerName],
//    gameObject().away.players[playerName]
//  )
//  return result
// }

// const playerNumbers = (team) => {
//   if (gameObject().home.teamName === team) {
//     const playerObjs = Object.values(gameObject().home.players;
//     return playerObjs.map(obj => obj.number)
//   } else if (gameObject().away.teamName === team) {
//     return )
//   } else {
//     return "This person didn't play tonight"
//   }
