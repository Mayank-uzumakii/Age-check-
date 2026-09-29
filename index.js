const mytext = document.getElementById("mytext");
const myButton = document.getElementById("myButton");
const result = document.getElementById("result");
let age;
myButton.onclick = function() {
    age = mytext.value;
    age = Number(age);
    if (age >=100) {
        result.textContent = "You are too old to enter this website";
    }
    else if (age ==0) {
        result.textContent = "You were just born, you cannot enter this website";
    }
    else if (age >=18) {
        result.textContent = "You are old enough to enter this website";
    }
    else{
        result.textContent = "You are not old enough to enter this website";
    }
}