
async function newFormHandler(event) {
    event.preventDefault();
    const title = document.getElementById('recipe-name').value;
    alert( title)
    const category = document.getElementById('form-stacked-select').value;
    alert(category);
    const description = document.getElementById('description').value;
    const instructions = document.getElementById('instructions').value;
    const imageUrl = document.getElementById('image_link').value; 
    const ingredients = document.getElementById('ingredients').value;
  

    const response = await fetch(`/api/`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        ingredients,
        description,
        instructions,
        category, 
        imageUrl
      }),
      headers: {
        'Content-Type': 'application/json'
      }
      
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  var submitBtn = document.querySelector('#submit-btn');
  submitBtn.addEventListener("click", newFormHandler);

  /*
function myTest() {
    console.log('reached add new recipe form handler');
 }

 var submitBtn = document.querySelector('#submit-btn');
 submitBtn.addEventListener("click", myTest); */