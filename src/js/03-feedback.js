const form = document.querySelector(".feedback-form");
const email = document.querySelector('[name = "email"]');
const message = document.querySelector('[name = "message"]');

const formState = {
    email: "example@email.xyz",
    message: "hello world",
};

localStorage.setItem("feedback-form-state", JSON.stringify(formState));
let emailInput;
let messageInput;

email.value = localStorage.getItem("email") ?? "";
message.value = localStorage.getItem("message") ?? "";

email.addEventListener("input", _.throttle((event) => {
    emailInput = event.currentTarget.value;
    localStorage.setItem("email", emailInput);    
}, 500));

message.addEventListener("input", _.throttle((event) => {
    messageInput = event.currentTarget.value;
    localStorage.setItem("message", messageInput);
}, 500));

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (event.target.elements.email.value === "" || event.target.elements.message.value === "") {
        return alert("All fields must be filled in");
    }
    console.log(`Email: ${localStorage.getItem("email")} \nMessage: ${localStorage.getItem("message")}`);
    localStorage.clear();
    form.reset();
});


