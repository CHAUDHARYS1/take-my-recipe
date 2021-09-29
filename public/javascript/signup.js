function signup (event){
  event.preventDefault();
    const email = document.getElementById('emailSU').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const password = document.getElementById('pwSU').value;
    const confirmPassword = document.getElementById('pwConfirmSU').value;
  //Password check
  if (password != confirmPassword){
    alert('Password does not match')
    return false
  }
  fetch("/api/users/", {
    method: "post",
    body: JSON.stringify({
              firstName,
              lastName,
              email,
              password
    }),
    headers: { "Content-Type": "application/json" }
  })
  .then((response)=>{ 
    if (response.ok) {
      document.location.replace('/');
  } else {
    alert(response.statusText);
  }
})
  //sign up
  // console.log({email, firstName,lastName,password})
  //   fetch(`/api/users`,{
  //         method: 'POST',
  //         body: JSON.stringify({
  //             firstName,
  //             lastName,
  //             email,
  //             password
  //         }),
  //         headers: {
  //           'Content-Type': 'application/json',
  //         }
  //     })
  //    .then((response)=>{ 
  //     if (response.ok) {
  //       document.location.replace('/');
  //   } else {
  //     alert(response.statusText);
  //   }
  // })
}
  var submitButton = document.querySelector('#SUbtn');
  submitButton.addEventListener("click", signup);
  