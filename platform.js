const formFirst = document.getElementById("first-form");
const nameForm = document.getElementById("name-form");
const company = document.getElementById("company-form");
const email = document.getElementById("email-form");
const phone = document.getElementById("number-form");
const descriptionForm = document.getElementById("description-form");
const message = document.getElementById("message-form");
const invalid = document.getElementById("invalid-email");

function sendEmail() {
  const bodySubject = `Client's Details: <br> <br> Name: ${nameForm.value} <br> Company: ${company.value}
   <br> Email Address: ${email.value} <br> Phone Number: ${phone.value} <br> Description: ${descriptionForm.value} 
   <br> Message: ${message.value}`;

  Email.send({
    SecureToken: "de00c1ac-35e4-48b6-8ee7-607319e5a344",
    To: "contact@optimizeai.net",
    From: "contact@optimizeai.net",
    Subject: "New Message from Client",
    Body: bodySubject,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Thank You",
        text: "Message sent successfully",
        icon: "success",
      });
    }
  });
}

function checkInputs() {
  if (email.value == "") {
    invalid.classList.remove("hidden");
  }
  email.addEventListener("keyup", () => {
    if (email.value != "") {
      invalid.classList.add("hidden");
    } else {
      invalid.classList.remove("hidden");
    }
  });
}

formFirst.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (validateEmail(email.value.trim()) === true) {
    invalid.classList.remove("hidden");
  } else {
    invalid.classList.add("hidden");
  }

  function validateEmail(inputText) {
    const mailForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailForm)) {
      return false;
    }
    return true;
  }

  if (invalid.classList.contains("hidden")) {
    sendEmail();
    formFirst.reset();
    return false;
  }
});
