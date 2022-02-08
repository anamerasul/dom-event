function makeYellow(){
                    document.body.style.backgroundColor="yellow";
}

// handle bluebutton click by setting function name
const blueButton=document.getElementById('blue-button');
console.log(blueButton);
//     just set name of the function                            

blueButton.onclick=makeBlue;
function makeBlue(){
                    document.body.style.backgroundColor='blue';
}