const form = document.querySelector("form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");

const comments = document.querySelector("#comments");
const submit = document.querySelector("#submit");

const datum = new Date().getFullYear();

form.addEventListener("submit", function (event) {
    event.defaultPrevented();

    const password1 = document.querySelector("#pass1");
    const password2 = document.querySelector("#pass2");
    const birthday = document.querySelector("#birthday");

    submit.onclick = () => {
        if (password2.value !== password1.value) {
            alert("Password is not same.")
        };
    
        if ((birthday.value.substring(0,4) - datum) < 18) {
            alert("You must be over 18 years old.")
        };
    };
    
    
});











