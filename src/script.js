let toggleButton = document.getElementById("toggleButton");
let toggleButton3 = document.getElementById("toggleButton3");
let submitButton = document.getElementById("submitButton");
let section=document.getElementById("section");
let userInput=document.getElementById("userInput");
let userInteractedFlag=false;

//GoogleIcon
let GBox=document.getElementById("GBox");
GBox.addEventListener("mouseenter", function(){
    document.getElementById('G').src="../Images/googleHover.png"
    document.getElementById('G').style.height="17px";
    document.getElementById('G').style.width="17px";
});
GBox.addEventListener("mouseleave", function(){
    document.getElementById('G').src="../Images/google.png"
    document.getElementById('G').style.height="15px";
    document.getElementById('G').style.width="15px";
});


let toggleFlag=false;
let h1=document.getElementById("h1");
let name=document.getElementById("name");
let email=document.getElementById("email");
let forgotPassword=document.getElementById("forgotPassword");
let useMail=document.getElementById("useMail");
let userInputH1=document.getElementById("userInputH1");
let mainDiv=document.getElementById("mainDiv");


toggleButton.addEventListener("click", function (){
    console.log("Toggle Button");
    if(!toggleFlag){
        setSignIn();
    }
    else{
        setSignUp();
    }
});

function setSignIn(){
    toggleFlag = true;
    userInteractedFlag=true;
    h1.textContent = "Hello, Friend !";
    toggleButton.textContent = "SIGN UP";
    submitButton.textContent = "SIGN IN";
    userInputH1.textContent = "Sign In";
    useMail.textContent = "or, use your email password";
    name.style.display = "none";
    forgotPassword.style.display = "block";
    email.style.marginTop = "-20px";
    submitButton.style.marginTop = "-8px";
    if(window.matchMedia('(max-width: 900px)').matches){
        toggleButton3.style.display = "block";
        userInput.style.transform = "translateX(0%)";
        userInput.style.borderRadius="0 0 0 0";
        section.style.transform = "translateX(-100%)";
        section.style.borderRadius = "0 0 0 0";
        toggleButton3.textContent="SIGN UP";
    }
    else {
        toggleButton3.style.display = "none";
        section.style.transform = "translateX(100%)";
        userInput.style.transform = "translateX(-100%)";
        section.style.borderRadius = "260px 0 0 150px";
        userInput.style.borderRadius = "0 260px 150px 0";
        mainDiv.style.background = "linear-gradient(to left,rgb(81, 45, 168),rgb(81, 45, 168))";
        setTimeout(function () {
            mainDiv.style.background = "linear-gradient(to left,rgb(81, 45, 168),rgb(0, 255, 255,.8))";
        }, 350);

    }
}

function setSignUp(){
    toggleFlag=false;
    userInteractedFlag=true;
    h1.textContent = "Welcome Back !";
    toggleButton.textContent = "SIGN IN";
    submitButton.textContent = "SIGN UP";
    userInputH1.textContent = "Create Account";
    useMail.textContent = "or, use your email id for registration";
    name.style.display = "block";
    forgotPassword.style.display = "none";
    email.style.marginTop = "0";
    submitButton.style.marginTop = "15px";
    if(window.matchMedia('(max-width: 900px)').matches){
        toggleButton3.style.display = "block";
        userInput.style.transform = "translateX(0%)";
        userInput.style.borderRadius="0 0 0 0";
        section.style.transform = "translateX(-100%)";
        section.style.borderRadius = "0 0 0 0";
        toggleButton3.textContent="SIGN IN";
    }
    else {
        toggleButton3.style.display = "none";
        section.style.transform = "translateX(0)";
        userInput.style.transform = "translateX(0)";
        section.style.borderRadius = "0 260px 150px 0";
        userInput.style.borderRadius = "260px 0 0 150px";
        mainDiv.style.background = "linear-gradient(to left,rgb(81, 45, 168),rgb(81, 45, 168))";
        setTimeout(function () {
            mainDiv.style.background = "linear-gradient(to right,rgb(81, 45, 168),rgb(0, 255, 255,.8))";
        }, 350);
    }
}

let toggleButton2=document.getElementById("toggleButton2");
toggleButton2.addEventListener("click", function(){
    setSignUp();
})

toggleButton3.addEventListener("click", function(){
    if(toggleButton3.textContent === "SIGN UP"){
        setSignUp();
    }
    else{
        setSignIn();
    }
})

window.addEventListener('resize', function(){
    if(userInteractedFlag===true) {
        if (submitButton.textContent === "SIGN UP") {
            setSignUp();
        } else {
            setSignIn();
        }
    }
    else {
        if(window.matchMedia('(max-width: 900px)').matches){
            h1.textContent = "Hello, Friend !";
        }
        else {
            h1.textContent = "Welcome Back !";
        }
    }
})

window.addEventListener("load", function(){
    if(window.matchMedia('(max-width: 900px)').matches){
        h1.textContent = "Hello, Friend !";
    }
})

setGoogleIcon();
window.addEventListener("resize", setGoogleIcon);
document.getElementById('GBox').addEventListener('mouseleave', function(){ setGoogleIcon(); })
function setGoogleIcon(){
    if(window.matchMedia('(max-width: 900px)').matches){
        document.getElementById('G').src="../Images/googleHover.png"
    }
    else{
        document.getElementById('G').src="../Images/google.png"
    }
}
