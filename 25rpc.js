let usrScore = 0;
let cmtrScore = 0;

// console.log(Math.floor(Math.random() * 3));



const genComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomGenerate = Math.floor(Math.random() * 3);
    return options[randomGenerate];
}

const choicess = window.document.querySelectorAll(".choice");

choicess.forEach((i) => {
    i.addEventListener("click", (e) => {
        const userChoice = i.getAttribute("id");
        playGame(userChoice, genComputerChoice());
    });
});

let msg = document.querySelector("#msg00");
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#computerScore");

const draw = (userChoice, computerChoice) => {
    msg.innerText = "The round was a draw";
    msg.setAttribute("style", "background-color:yellow ; color:blue");
};

const youWin = (userChoice, computerChoice) => {
    msg.innerText = `You win the round, ${userChoice} beats ${computerChoice}, you get 1 point`;
    usrScore++;
    userScore.innerText = usrScore;
    msg.style.backgroundColor = "green";
    msg.style.color = "black";
};
const youLose = (userChoice, computerChoice) => {
    msg.innerText = `You lose the round, ${computerChoice} beats ${userChoice}, computer gets 1 point`;
    cmtrScore++;
    compScore.innerText = cmtrScore;
    msg.style.backgroundColor = "red";
    msg.style.color = "black";
};


const playGame = (userChoice, computerChoice) => {
    console.log("Your choice is :", userChoice, "\n");
    console.log("Computer's choice is :", computerChoice, "\n");

    // while (1) {
    if (userChoice === computerChoice) {
        console.log("The game is a draw\n");
        draw();
        // break;
    } else {

        if (userChoice === "rock") {
            if (computerChoice === "paper") {
                console.log("You lose the game\n");
                youLose(userChoice, computerChoice);
                // break;
            }
            else {
                console.log("You win the game\n");
                youWin(userChoice, computerChoice);
                // break;
            };
        }

        if (userChoice === "paper") {
            if (computerChoice === "scissors") {
                console.log("You lose the game\n");
                youLose(userChoice, computerChoice);
                // break;
            }
            else {
                console.log("You win the game\n");
                youWin(userChoice, computerChoice);
                // break;
            }
        }

        if (userChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("You lose the game\n");
                youLose(userChoice, computerChoice);
                // break;
            }
            else {
                console.log("You win the game\n");
                youWin(userChoice, computerChoice);
                // break;
            }
        }
    }
    // }
};



