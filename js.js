let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newGamebtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg")
let turnX=true;
boxes.forEach((box) => {
    box.addEventListener("click",() => {
    console.log("button was clicked");
    if(turnX){
        box.innerText = "X";
        turnX=false;
    }
    else{
        box.innerText = "O";
        turnX=true;
    }
    box.disabled = true;
    checkWinner();
    })
});

const resetGame =  () =>{
    turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
let winningCases = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes  = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const checkWinner = () => {
    for(let pattern of winningCases){
        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 ===posVal3){
                console.log("winner",posVal1);
                showWinner(posVal1);
                disableBoxes();
            }
        }
    }

};
const showWinner = (winner) =>{
    msg.innerText = `Congratulations ! The Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);