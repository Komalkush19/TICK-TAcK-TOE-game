let boxes= document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let nwbtn=document.querySelector("#newgame");
let  msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");

const showwiinner=(winner)=>{
    msg.innerText=`Congratulations, player${winner} has won the game!`;
    msgcontainer.classList.remove("hide");
    boxes.forEach((box)=>{
        box.disabled=true;
    })
};

nwbtn.onclick=()=>{
    msgcontainer.classList.add("hide");
    resetgame();
};

reset.onclick=()=>{
    resetgame();
};

const resetgame=()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    });
    turn0=true;
    };


let turn0=true; // true for X and false for O
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],    
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked");
        if (turn0){
        box.innerText="X";
        turn0=false;
        }
        else{
            box.innerText=0;
            turn0=true;
        }   
        
        box.disabled =true;
        // check for win
        checkwinner();

    })
});

const checkwinner=()=>{
    for(let pattern of winpatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        let box1=boxes[pattern[0]].innerText;
        let box2=boxes[pattern[1]].innerText;
        let box3=boxes[pattern[2]].innerText;   
         if (box1!=="" && box1===box2 && box2===box3){
            if (box1===box2 && box2===box3){
            console.log("winner is ", box1);
            showwiinner(box1);
         }    
            }
    }
};
