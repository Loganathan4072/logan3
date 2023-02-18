const computerChoiceDisplay=document.getElementById('computer-choice');
const userChoiceDisplay=document.getElementById('user-choice');
const resultDisplay=document.getElementById('result');
const possibleChoices=document.querySelectorAll('button');
let userChoice;
let result;
resultDisplay.style="color:white;"

possibleChoices.forEach(possibleChoices =>possibleChoices.addEventListener('click',(e) =>{
   userChoice= e.target.id;
   userChoiceDisplay.innerHTML=userChoice;
   generateComputerChoice();
   getResult();
  
}))

function generateComputerChoice()
{
    const randomNum=Math.floor(Math.random()* 3)+1 // or we can use possibleChoices.length
    if(randomNum ===1)
    {
        computerChoice='Rock';
    }
    if(randomNum === 2)
    {
        computerChoice='Scissors';
    }
    if(randomNum === 3)
    {
        computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML=computerChoice;
}
function getResult(){
    if(computerChoice === userChoice)
    {
        result="It's a Draw";
    }
    if(computerChoice === 'Rock' && userChoice === 'Paper')
    {
        result="You Won";
    }
    if(computerChoice==='Rock' && userChoice==='Scissors')
    {
        result="You Lost";
    }
    if(computerChoice ==='Paper' && userChoice==='Scissors')
    {
        result="You Won";
    }
    if(computerChoice==='Paper' && userChoice==='Rock')
    {
        result="You Lost";
    }
    if(computerChoice==='Scissors' && userChoice==='Rock')
    {
        result="You Won";
    }
    if(computerChoice==='Scissors' && userChoice==='Paper')
    {
        result="You Lost";
    }
    resultDisplay.innerHTML=result;
    if(result==='You Won')
    {
        content_box=document.getElementById('content-box');
        content_box.style="background-color:green;"
    }
    if(result==="It's a Draw")
    {
        content_box=document.getElementById('content-box');
        content_box.style="background-color:blue;"
    }
    if(result==='You Lost')
    {
        content_box=document.getElementById('content-box');
        content_box.style="background-color:red;"
    }
}