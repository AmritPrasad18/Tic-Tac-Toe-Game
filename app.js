let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame-btn");
let msgContainer = document.querySelector(".win-msg-container");
let msg = document.querySelector("#msg");

let turnX = true ;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked");

        if(turnX){
            box.innerText = "X";
            box.style.color = "blue";
            turnX = false;
        } else {
            box.innerText = "O";
            box.style.color = "red";
            turnX = true;
        }
        box.disabled = true;

        checkWinner();
   });
});

const rstbtn = () => {
    turnX = true;
    enableBox();
    msgContainer.classList.add("hide");
}

const newGame = () => {
    turnX = true;
    enableBox();
    msgContainer.classList.add("hide");
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
}

const enableBox = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
}

const disableBox = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

const showWinner = (winner) => {
   
     msg.innerText = `${winner} is the winner!`;
     msgContainer.classList.remove("hide"); 
     disableBox();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;  
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

reset.addEventListener("click", rstbtn); 
newGameBtn.addEventListener("click", newGame);