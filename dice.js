var result=[];
function generateDiceNum1(){
    var diceNumber1= (Math.floor(Math.random()*6)+1);
    //var imgLink = ("./dice"+diceNumber+".png");
    var imgLink =document.body.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.querySelector("img");
   // var imgLink2 =document.body.firstElementChild.lastElementChild.querySelector("img");
    imgLink.setAttribute("src","./dice"+diceNumber1+".png");
    return diceNumber1;
}
function generateDiceNum2(){
    var diceNumber2= (Math.floor(Math.random()*6)+1);
    var imgLink =document.body.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.querySelector("img");
    imgLink.setAttribute("src","./dice"+diceNumber2+".png");
    return diceNumber2;

}

function selectWinner(x,y){
    var x=generateDiceNum1();
    var y=generateDiceNum2();
    console.log(x);
    console.log(y);
       
        if(x>y){
            document.body.firstElementChild.lastElementChild.innerText=("Congartulations!, Player 1 Won!");
        } else if(x==y){
            document.body.firstElementChild.lastElementChild.innerText=("No Winner! Game Draw. Play Again!");
        } else{
            document.body.firstElementChild.lastElementChild.innerText=("Congratulations!, Player 2 Won!");
        }
    
    }
