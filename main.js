//when page loads prompt user to pick a category.
alert ('Please pick a category and dollar amount.');
//create variables.
const selectCat = document.querySelectorAll('#catpick *');
const displayBox = document.querySelector('#displaybox')
const displayBoxList = document.getElementById('displaybox').querySelectorAll('.db');
const finalQuestion = document.querySelector('#finalquestion');
// const afterSelect = document.querySelector('.amount').addEventListener("click", function() {
//   this.style = "pressed";
//   console.log(this);
// });

let objInPlay;
let score = 0;

let gameObs = [{
    catPoint: "cat1-100",
    point: 100,
    answer: "The air hoses that provide air to the trailer.",
    questions: [{
        text: "What are air hands?",
        isCorrect: false
      },
      {
        text: "What are sad hands?",
        isCorrect: false
      },
      {
        text: "What are glad hands?",
        isCorrect: true
      }
    ]
  },
  {
    catPoint: "cat1-200",
    point: 200,
    answer: "The connector that secures a trailer to a truck.",
    questions: [{
        text: "What is a trailer hitch?",
        isCorrect: false
      },
      {
        text: "What is a fifth wheel?",
        isCorrect: true
      },
      {
        text: "What is a link post?",
        isCorrect: false
      },
    ]
  },
  {
    catPoint: "cat1-300",
    point: 300,
    answer: "The tires on the front of a semi truck.",
    questions: [{
        text: "What are steer tires?",
        isCorrect: true
      },
      {
        text: "What are drive tires?",
        isCorrect: false
      },
      {
        text: "What are tandem tires?",
        isCorrect: false
      }
    ]
  },
  {
    catPoint: "cat1-400",
    point: 400,
    answer: "A blind side back.",
    questions: [{
        text: "What is backing to the left?",
        isCorrect: false
      },
      {
        text: "What is backing to the right?",
        isCorrect: true
      },
      {
        text: "What is backing at night?",
        isCorrect: false
      }
    ]
  },
  {
    catPoint: "cat1-500",
    point: 500,
    answer: "A drop and hook.",
    questions: [{
        text: "What is dropping a gear and turning?",
        isCorrect: false
      },
      {
        text: "What is delivering a loaded trailer and picking up an empty one?",
        isCorrect: true
      },
      {
        text: "What is dropping off your load and going to sleep?",
        isCorrect: false
      }
    ]
  },

  {
    catPoint: "cat2-100",
    point: 100,
    answer: "This movie featured a car named Eleanor.",
    questions: [{
        text: "What is Gone in 60 seconds?",
        isCorrect: true
      },
      {
        text: "What is Meet the parents?",
        isCorrect: false
      },
      {
        text: "What is Almost famous?",
        isCorrect: false
      }
    ]
  },
  {
    catPoint: "cat2-200",
    point: 200,
    answer: "Denzel Washington starred in this grid iron classic.",
    questions: [{
        text: "What is Gone with the wind?",
        isCorrect: false
      },
      {
        text: "What is Remember the Titans?",
        isCorrect: true
      },
      {
        text: "What is Rudy?",
        isCorrect: false
      }
    ]
  },
  {
    catPoint: "cat2-300",
    point: 300,
    answer: "The movie Castaway starred this iconic actor.",
    questions: [{
        text: "Who is Samuel L. Jackson?",
        isCorrect: false
      },
      {
        text: "Who is Tom Cruise?",
        isCorrect: false
      },
      {
        text: "Who is Tom Hanks?",
        isCorrect: true
      }
    ]
  },
  {
    catPoint: "cat2-400",
    point: 400,
    answer: "This movies main character was named Maximus.",
    questions: [{
        text: "What is Gladiator?",
        isCorrect: true
      },
      {
        text: "What is Scary Movie?",
        isCorrect: false
      },
      {
        text: "What is Shanghai Noon?",
        isCorrect: false
      }
    ]
  },
  {
    catPoint: "cat2-500",
    point: 500,
    answer: "Harrison Ford and Michelle Pfeiffer co-starred in this thriller.",
    questions: [{
        text: "What is Mission Impossible?",
        isCorrect: false
      },
      {
        text: "What is Charlie's Angels?",
        isCorrect: false
      },
      {
        text: "What is What lies beneath?",
        isCorrect: true
      }
    ]
  },
  {
    catPoint: "cat3-100",
    point: 100,
    answer: "This team won three consecutive NBA championships, twice.",
    questions: [{
        text: "Who are the Chicago Bulls?",
        isCorrect: true
      },
      {
        text: "Who are the Boston Celtics?",
        isCorrect: false
      },
      {
        text: "Who are the Golden State Warriors?",
        isCorrect: false
      }
    ]
  },
  {
    catPoint: "cat3-200",
    point: 200,
    answer: "This retired player was nicknamed the 'Big Ticket'.",
    questions: [{
        text: "Who is Charles Barkley?",
        isCorrect: false
      },
      {
        text: "Who is Dennis Rodman?",
        isCorrect: false
      },
      {
        text: "Who is Kevin Garnett?",
        isCorrect: true
      }
    ]
  },
  {
    catPoint: "cat3-300",
    point: 300,
    answer: "Greg Poppovich has been the head coach of this team for over 20 years.  '.",
    questions: [{
        text: "Who are the San Antonio Spurs?",
        isCorrect: true
      },
      {
        text: "Who are the Houston Rockets?",
        isCorrect: false
      },
      {
        text: "Who are the Dallas Mavericks?",
        isCorrect: false
      }
    ]
  },
  {
    catPoint: "cat3-400",
    point: 400,
    answer: "The Utah Jazz relocated from this city.",
    questions: [{
        text: "What is Baton Rouge, LA?",
        isCorrect: false
      },
      {
        text: "What is Tampa Bay, FL?",
        isCorrect: false
      },
      {
        text: "What is New Orleans, LA?",
        isCorrect: true
      }
    ]
  },
  {
    catPoint: "cat3-500",
    point: 500,
    answer: "This team plays it's home games at FedEx Forum.",
    questions: [{
        text: "Who are the Miami Heat?",
        isCorrect: false
      },
      {
        text: "Who are the Memphis Grizzlies?",
        isCorrect: true
      },
      {
        text: "Who are the Dallas Mavericks?",
        isCorrect: false
      }
    ]
  },
  {
    catPoint: "cat4-100",
    point: 100,
    answer: "In 2018 he announced that his 3-year Farewell Yellow Brick Road tour would be his last.",
    questions: [{
        text: "Who is Paul Simon?",
        isCorrect: false
      },
      {
        text: "Who is LL Cool J?",
        isCorrect: false
      },
      {
        text: "Who is Elton John?",
        isCorrect: true
      }
    ]
  },
  {
    catPoint: "cat4-200",
    point: 200,
    answer: "A song by Morrissey is called this 4-letter woodwind Concerto.",
    questions: [{
        text: "What is an Oboe?",
        isCorrect: true
      },
      {
        text: "What is a lute?",
        isCorrect: false
      },
      {
        text: "What is a fife?",
        isCorrect: false
      }
    ]
  },
  {
    catPoint: "cat4-300",
    point: 300,
    answer: "This mechanical device is used by musicians to keep time.",
    questions: [{
        text: "What is a metronome?",
        isCorrect: true
      },
      {
        text: "What is a tempo-moderator?",
        isCorrect: false
      },
      {
        text: "What is an auto-adjust time-moderator?",
        isCorrect: false
      }
    ]
  },
  {
    catPoint: "cat4-400",
    point: 400,
    answer: "This tune from Frozen begins The snow glows white on thr mountain tonight.",
    questions: [{
        text: "What is For the first time in forever?",
        isCorrect: false
      },
      {
        text: "What is Let it go?",
        isCorrect: true
      },
      {
        text: "What is Elsa and Anna?",
        isCorrect: false
      }
    ]
  },
  {
    catPoint: "cat4-500",
    point: 500,
    answer: "Let's Groove with this R&B group that had a hit with Shining Star.",
    questions: [{
        text: "Who is Cameo?",
        isCorrect: false
      },
      {
        text: "Who is Jodeci?",
        isCorrect: false
      },
      {
        text: "Who is Earth Wind & Fire?",
        isCorrect: true
      }
    ]
  },
  {
    catPoint: "cat5-100",
    point: 100,
    answer: "It can't fly or breathe fire but this largest living lizard has a venomous bite that inhibits blood clotting.",
    questions: [{
        text: "What is The Rock Monitor?",
        isCorrect: false
      },
      {
        text: "What is The Komodo Dragon?",
        isCorrect: true
      },
      {
        text: "What is the Gila Monster?",
        isCorrect: false
      }
    ]
  },
  {
    catPoint: "cat5-200",
    point: 200,
    answer: "Seems counterintuitive but the Earth is farthest from the sun during this month",
    questions: [{
        text: "What is July?",
        isCorrect: true
      },
      {
        text: "What is August?",
        isCorrect: false
      },
      {
        text: "What is January?",
        isCorrect: false
      }
    ]
  },
  {
    catPoint: "cat5-300",
    point: 300,
    answer: "An appliance marked 1000 watts and 250 volts requires a current of this many amps.",
    questions: [{
        text: "What is 40?",
        isCorrect: false
      },
      {
        text: "What is 4?",
        isCorrect: true
      },
      {
        text: "What is 400?",
        isCorrect: false
      }
    ]
  },
  {
    catPoint: "cat5-400",
    point: 400,
    answer: "18399 feet down & probably pretty darn cold the Malloy Deep is the deepest point in this ocean.",
    questions: [{
        text: "What is The Indian Ocean?",
        isCorrect: false
      },
      {
        text: "What is The Pacific Ocean?",
        isCorrect: false
      },
      {
        text: "What is The Artic Ocean?",
        isCorrect: true
      }
    ]
  },
  {
    catPoint: "cat5-500",
    point: 500,
    answer: "Dinosaurs died out in this geological era that means middle life.",
    questions: [{
        text: "What is The Mesozoic Era?",
        isCorrect: true
      },
      {
        text: "What is The Caenozoic Era?",
        isCorrect: false
      },
      {
        text: "What is The Palaeozoic Era",
        isCorrect: false
      }
    ]
  }
]

const questOne = document.querySelector('#firstquestion');
const questTwo = document.querySelector('#secondquestion');
const questThree = document.querySelector('#thirdquestion');
const scoreDisplay = document.querySelector('#scoredisplay');
const answer = document.querySelector('#answer');
const catPick = document.getElementById('catpick').querySelectorAll('.amount')

catPick.forEach(div => {
  div.addEventListener('click', (e) => {
    let newDiv = document.createElement('DIV');
    displayBox.appendChild(newDiv);
    gameObs.forEach(obj => {
      if (e.target.classList.contains(obj.catPoint)) {
        objInPlay = obj;
      }
    })

    answer.innerHTML = (objInPlay.answer);
    questOne.innerHTML = (objInPlay.questions[0].text)
    questTwo.innerHTML = (objInPlay.questions[1].text);
    questThree.innerHTML = (objInPlay.questions[2].text);
  })
})

// catPick.forEach(div => {
// if (e.target.innerHTML === )
// let questThree = document.querySelector('#thirdquestion');
// questOne.addEventListener('click', (e) => {
//     objInPlay.questions.map(question => {

//         if (question.isCorrect) {
//             score = score + obj.point;
//             console.log(score)
//         }
//         else{
//             alert('Wrong!')
//         }
//     })
// })


// })


const checkQuestions = (e) => {
  let wrongs = 0
  for (let i = 0; i <= objInPlay.questions.length; i++) {
    if (e.target.innerHTML === objInPlay.questions[i].text && objInPlay.questions[i].isCorrect) {
      score = score + objInPlay.point;
      scoreDisplay.innerHTML = score;
      alert('Correct!');
      break
    // } else if (wrongs = 3) {
    //     alert('You Lose! Please refresh page!');
        // wrongs = wrongs + 1
      } else if (e.target.innerHTML !== objInPlay.questions[i].text && objInPlay.questions[i].isCorrect) {
        alert('WRONG! You did not reach 2000. Please refresh the page.');
        scoreDisplay.innerHTML = "Score";
      }
  }
  checkScore()
}
const checkScore = () => {
  if (score < 2000) {
  } else {
    if (score >= 2000) {
      alert('You Win!')
    } else {
      if (score === 0) {
        console.log("Game over.")
      } else {
        console.log(score + ' ' + 'Good game.')
      }
    }
  }
}
displayBoxList.forEach(box => {
  box.addEventListener('click', checkQuestions)
})
// console.log(e.target.innerHTML);
