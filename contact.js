const contactFormSecond = document.getElementById("contact-second-form");
const nameContactForm = document.getElementById("name-contact-form");
const emailContactForm = document.getElementById("email-contact-form");
const invalidContact = document.getElementById("invalid-contact-email");
const messageContactform = document.getElementById("message-contact-form");

function sendEmailContact() {
  const bodySubject = `Cient's Details: <br> <br> Name: ${nameContactForm.value} <br> Email Address: ${emailContactForm.value}
   <br> Message: ${messageContactform.value}`;

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

function checkInputsContact() {
  if (emailContactForm.value == "") {
    invalidContact.classList.remove("hidden");
  }
  emailContactForm.addEventListener("keyup", () => {
    if (emailContactForm.value != "") {
      invalidContact.classList.add("hidden");
    } else {
      invalidContact.classList.remove("hidden");
    }
  });
}

contactFormSecond.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputsContact();

  if (validateEmail(emailContactForm.value.trim()) === true) {
    invalidContact.classList.remove("hidden");
  } else {
    invalidContact.classList.add("hidden");
  }

  function validateEmail(inputText) {
    const mailForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailForm)) {
      return false;
    }
    return true;
  }

  if (invalidContact.classList.contains("hidden")) {
    sendEmailContact();
    contactFormSecond.reset();
    return false;
  }
});
