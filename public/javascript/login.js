
async function loginFormHandler(event) {
    event.preventDefault();
    alert('log in clicked')
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }

  //var loginBtn = document.getElementById('login');
  var loginBtn = document.querySelector('#login');
  
  loginBtn.addEventListener("click", loginFormHandler);