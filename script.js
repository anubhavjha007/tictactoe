let buttons = document.querySelectorAll(".button");
let cont = document.querySelector(".container");
let winCont= document.querySelector(".winCont");
let reset = document.querySelector('.reset');
let moveCount=0;
let winPtn=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let isWin=false;
const checkWin=()=>{
winPtn.forEach((ptn)=>{
    let p1= ptn[0];
    let p2= ptn[1];
    let p3= ptn[2]; 
      
       let x1= buttons[p1].innerText;
       let x2= buttons[p2].innerText;
       let x3= buttons[p3].innerText;
       if(x1!==""&&x2!==""&&x3!==""){
        if(x1==x2&&x2==x3){
            console.log("win");
            cont.style.pointerEvents="none";
            isWin=true;
            winCont.innerText=`THE WINNER IS PLAYER '${x1}'`;
        }
       }
      
})
}
const checkDraw=()=>{
 if(!isWin && moveCount==9){
    console.log("draw");
    winCont.innerText="DRAAWWWW!!!!!!";

 }
}
let isTurn=true;
buttons.forEach((eachBtn,idx)=>{
eachBtn.style.caretColor="transparent";
    eachBtn.addEventListener("click" , ()=>{
        if(isTurn){
            eachBtn.innerText="O";
            isTurn=false;
            eachBtn.style.pointerEvents = "none";
            console.log(idx, eachBtn.innerText);
            eachBtn.style.backgroundColor= "#0d3b66";        
            eachBtn.style.color = "white";
            moveCount++;
        }
       else{
                eachBtn.innerText="X";
                isTurn=true;
                eachBtn.style.pointerEvents = "none";
                console.log(idx , eachBtn.innerText);
                eachBtn.style.backgroundColor= "#faf0ca";
                moveCount++;
            }
        checkWin();
        checkDraw();

    })
    
});

reset.addEventListener("click" , ()=>{
    window.location.reload();
});
