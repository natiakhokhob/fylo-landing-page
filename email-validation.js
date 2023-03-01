
debugger
const inputText1 = document.getElementById("email");
const inputText2 = document.getElementById("email-2");
const error1 = document.getElementById("fail-email1");
const error2 = document.getElementById("fail-email2");

const button1 = document.getElementById("getstarted");
const button2 = document.getElementById("getstarted-2");

button1.addEventListener("click", () => {
    event.preventDefault();
    emailValidation(inputText1, error1)
});

button2.addEventListener("click", () => {
    event.preventDefault();
    emailValidation(inputText2, error2)
})


function emailValidation(inputText, error){
      
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

     if(inputText.value.match(mailformat)){
        error.style.display = "none";
        inputText.style.borderColor = "black";
        return true;
     }
     else{
        error.style.display = "flex";
        inputText.style.borderColor = "red";
        return false;
    }




}