const form = document.querySelector(".feedback-form");
const email = document.querySelector('[name = "email"]');
const message = document.querySelector('[name = "message"]');
let emailInput, messageInput;

const formState = {
    email: "",
    message: "",
};

localStorage.setItem("feedback-form-state", JSON.stringify(formState));

email.addEventListener("input", (event) => {
    localStorage.setItem("email", event.currentTarget.value);
    
});

message.addEventListener("input", (event) => {
    localStorage.setItem("message", event.currentTarget.value);
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (event.target.elements.email.value === "" || event.target.elements.message.value === "") {
        return alert("All fields must be filled in");
    }

    // console.log(`Email: ${emailInput} \nMessage: ${messageInput}`);
    console.log(`Email: ${localStorage.getItem("email")} \nMessage: ${localStorage.getItem("message")}`);
    event.target.reset();
});
