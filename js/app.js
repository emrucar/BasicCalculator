const buttonsEl = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result");


for (let i = 0; i<buttonsEl.length; i++){
  buttonsEl[i].addEventListener("click", () =>{
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue==="="){
      calculateResult();
    } else if (buttonValue==="back"){
      backOneNum();
    } else{
      appendValue(buttonValue);
    }

  });
}

function backOneNum() {
  inputFieldEl.value = inputFieldEl.value.slice(0, -1);
}
function clearResult(){
  inputFieldEl.value = "";

}

function calculateResult (){
  inputFieldEl.value = eval(inputFieldEl.value);

}

function appendValue(buttonValue){
  inputFieldEl.value += buttonValue;
}


