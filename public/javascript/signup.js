async function signup(event) {

  event.preventDefault();
  const email = document.getElementById("emailSU").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const password = document.getElementById("pwSU").value;
  const confirmPassword = document.getElementById("pwConfirmSU").value;
  const errorMessage = document.querySelector('#error');
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (firstName === !null) {

  } else if (firstName === null || firstName === "") {
    errorMessage.classList.remove("uk-hidden");
    errorMessage.innerText = "Please enter a first name";
    return false;
  } else if (lastName === null || lastName === "") {
    errorMessage.classList.remove("uk-hidden");
    errorMessage.innerText = "Please enter a last name";
    return false;
  } else if (email === null || email === "") {
    errorMessage.classList.remove("uk-hidden");
    errorMessage.innerText = "Please enter a email address";
    return false;
  } else if (password === null || password === "") {
    errorMessage.classList.remove("uk-hidden");
    errorMessage.innerText = "Please enter a password";
    return false;
  } else if (confirmPassword === null || confirmPassword === "") {
    errorMessage.classList.remove("uk-hidden");
    errorMessage.innerText = "Please enter confirm password";
    return false;
  } else if (password !== confirmPassword) {
    errorMessage.classList.remove("uk-hidden");
    errorMessage.innerText = "Password does not match";
    return false;
  } else if (email.match(!validRegex)) {
    errorMessage.classList.add("uk-hidden");
    errorMessage.innerText = "Please enter a correct email address";
    return false;
  } else {

  }
  fetch("/api/users/", {
    method: "post",
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json"
    },
  }).then((response) => {
    if (response.ok) {
      document.location.replace("/login");
    } else {
      alert(response.statusText);
    }
  });
}
var submitButton = document.querySelector("#SUbtn");
submitButton.addEventListener("click", signup);