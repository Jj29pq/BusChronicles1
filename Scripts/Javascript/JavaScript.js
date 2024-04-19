const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const errorTxtEmail = document.querySelector(".error-txt.email"); 

function sendEmail() {
    const bodyMessage = `
    Full Name: ${fullName.value}
    Email: ${email.value}
    Phone Number: ${phone.value}
    Message: ${message.value}
  `;

    Swal.fire({
        title: "Good job!",
        text: "Message sent successfully!",
        icon: "success",
    });
}

function checkInput() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value === "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        } else {
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
        }

        // Check email validity only on keyup for email field
        if (item === email) {
            item.addEventListener("keyup", CheckEmail);
        }
    }
}

function CheckEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d\.-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        errorTxtEmail.innerText = email.value ? "Enter a valid email address" : "Email address can't be blank";
    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    checkInput();

    if (
        !fullName.classList.contains("error") &&
        !email.classList.contains("error") &&
        !phone.classList.contains("error") &&
        !subject.classList.contains("error") && // Added check for subject field
        !message.classList.contains("error") // Added check for message field
    ) {
        sendEmail(); // Call sendEmail function when all fields are valid
    }
});
