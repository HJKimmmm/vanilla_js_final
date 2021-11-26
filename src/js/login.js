const loginForm = document.querySelector("#loginForm");
const account = document.querySelector("#accountID");
const currentID = document.querySelector("#currentID");
const greetingDiv = document.querySelector(".greeting");
const greeting = document.querySelector(".greeting h2:first-child");
const signOut = document.querySelector(".greeting h3");
const todoForm = document.querySelector("#todoForm");


const HIDDEN_CLASS = "hidden";
const ACCOUNT_ID_ITM = "accountID";

function login(event) {
    event.preventDefault();

    const accountID = account.value;
    localStorage.setItem(ACCOUNT_ID_ITM, accountID);
    showGreeting(accountID);
    account.value = "";
}

function logout(event) {
    localStorage.removeItem(ACCOUNT_ID_ITM);
    init();
}

function showGreeting(accountID) {
    if (accountID === null) {
        greeting.innerText = "";
        loginForm.classList.remove(HIDDEN_CLASS);
        greetingDiv.classList.add(HIDDEN_CLASS);
        todoForm.classList.add(HIDDEN_CLASS);
    } else {
        greeting.innerText = `Hello ${accountID}!!`;
        loginForm.classList.add(HIDDEN_CLASS);
        greetingDiv.classList.remove(HIDDEN_CLASS);
        todoForm.classList.remove(HIDDEN_CLASS);
    }
    currentID.value = accountID;
}
function init() {
    const accountID = localStorage.getItem(ACCOUNT_ID_ITM);
    showGreeting(accountID);
    
}

//commit test

loginForm.addEventListener("submit", login);
signOut.addEventListener("click", logout);
init();