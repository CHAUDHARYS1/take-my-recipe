async function newFormHandler(event) {
  event.preventDefault();
  const title = document.getElementById('recipe-name').value;
  const category = document.getElementById('form-stacked-select').value;
  const description = document.getElementById('description').value;
  const instructions = document.getElementById('instructions').value;
  const imageUrl = document.getElementById('image_link').value;
  const ingredients = document.getElementById('ingredients').value;
  const errorMessage = document.querySelector('#error');

  if (title === !null) {

  } else if (title === null || title === "") {
    errorMessage.classList.remove("uk-hidden");
    errorMessage.innerText = "Please enter a Recipe name";
    return false;
  } else if (category == "Select") {
    errorMessage.classList.remove("uk-hidden");
    errorMessage.innerText = "Please enter a category";
    return false;
  } else if (description === null || description === "") {
    errorMessage.classList.remove("uk-hidden");
    errorMessage.innerText = "Please enter a description";
    return false;
  } else if (instructions === null || instructions === "") {
    errorMessage.classList.remove("uk-hidden");
    errorMessage.innerText = "Please enter instructions";
    return false;
  } else if (ingredients === null || ingredients === "") {
    errorMessage.classList.remove("uk-hidden");
    errorMessage.innerText = "Please enter list of ingredients";
    return false;
  } else if (imageUrl === null || imageUrl === "") {
    errorMessage.classList.remove("uk-hidden");
    errorMessage.innerText = "Please enter url to the image";
    return false;
  } else {

  }

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
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}
var submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener("click", newFormHandler);