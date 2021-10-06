async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const errorMessage = document.querySelector('#error');
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


  if(email.match(validRegex)){
  
  }else{
    errorMessage.classList.remove("uk-hidden");
    errorMessage.innerText = "Please enter a correct email";
    return false;
  }
  if(password === !null){
    return true;
  } else{
    errorMessage.classList.remove("uk-hidden");
    errorMessage.innerText = "Please enter a password";
  }

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      // alert(response.statusText);
      errorMessage.classList.remove("uk-hidden");
      errorMessage.innerText = "Invalid Email or Password";
    }
  }
}

//var loginBtn = document.getElementById('login');
var loginBtn = document.querySelector('#login');

loginBtn.addEventListener("click", loginFormHandler);


const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye / eye slash icon
  this.classList.toggle('bi-eye');
});


