let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#res");

let turn = true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
document.getElementById("but").onclick = function (){
    boxes.forEach((box)=>{
        box.disabled=false;
    });
}
document.getElementById("res").onclick=function (){
    boxes.forEach((box)=>{
        box.textContent="";
    });
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(box.textContent!==""){
            return;
        }
        if (turn) {
            box.textContent = "O";
            turn = false;
        } else {
            box.textContent = "X";
            turn = true;
        }
        checkwinner();
    });
});
function checkwinner(){
for(let pattern of winpattern){
    let pos1=boxes[pattern[0]].textContent;
    let pos2=boxes[pattern[1]].textContent;
    let pos3=boxes[pattern[2]].textContent;

    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1==pos2 && pos2==pos3){
            document.getElementById("win").textContent=`Winner is ${pos1}`;
                 boxes.forEach((box) => {
                    box.disabled = true;
                    box.textContent="";
                });
                return;
        }
    }
}
}