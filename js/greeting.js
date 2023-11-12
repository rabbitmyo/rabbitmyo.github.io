const logInDiv = document.getElementById("log-In");
const logInBtn = document.querySelector("#log-In button");
const inputBox = document.querySelector("#log-In Input");
const greetingH2 = document.getElementById("greeting");

function checkLS(localUser){
    localUser = localStorage.getItem("user");
    if(localUser !== null){
        const user = localUser;
        logInDiv.style.display='none';
        const greetingText = `Hello ${user}!`;
        greetingH2.innerText = greetingText;
    }
    else{
        document.getElementById("user_box").style.display='none';
    }
}

function login(){
    const user = inputBox.value;
    localStorage.setItem("user", user);
    logInDiv.style.display='none';
    const greetingText = "Hello " + `${user}!`;
    greetingH2.innerText = greetingText;
    document.getElementById("user_box").style.display='block';
}

checkLS();
logInBtn.addEventListener("click", login);

