function makeYellow(){
                    document.body.style.backgroundColor="yellow";
}

// handle bluebutton click by setting function name
const blueButton=document.getElementById('blue-button');
// console.log(blueButton);
//     just set name of the function                            

blueButton.onclick=makeBlue;
function makeBlue(){
                    document.body.style.backgroundColor='blue';
}

// using event anooymus fuction

const greenButton =document.getElementById('green-button');
// console.log(greenButton);

// annonymus function
greenButton.onclick=function(){
                    document.body.style.backgroundColor='green'
}
// console}

// handle by using add event lisener
const GoldenrodBtn=document.getElementById('Goldenrod-button');
//     console.log(GoldenrodBtn);
GoldenrodBtn.addEventListener('click',Makegoldenrod)

function Makegoldenrod(){
                    document.body.style.backgroundColor='goldenrod'
}


// addEventListener function
const hotPinkBtn =document.getElementById('hotpink-button');

// console.log(hotPinkBtn);
hotPinkBtn.addEventListener('click',
function makePink(){
                    document.body.style.backgroundColor='hotpink'
})

// direct shortcut
document.getElementById('lightblue-button').addEventListener('click', function(){
                    document.body.style.backgroundColor='lightblue'
})