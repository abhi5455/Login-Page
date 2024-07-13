let eyeOpen=document.getElementById("eyeOpen");
let eyeClose=document.getElementById("eyeClose");
let eyeLabel=document.getElementById("eyeLabel");
let eyeCloseFlag=true;

eyeLabel.addEventListener('click', function (){
    if(eyeCloseFlag){
        eyeCloseFlag=false;
        eyeOpen.style.display="block";
        eyeClose.style.display="none";
        document.getElementById('passwordField').type="text";
    }
    else{
        eyeCloseFlag=true;
        eyeOpen.style.display="none";
        eyeClose.style.display="block";
        document.getElementById('passwordField').type="password";
    }
})