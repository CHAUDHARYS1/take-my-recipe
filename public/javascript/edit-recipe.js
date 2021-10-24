async function editFormHandler(event) {

  event.preventDefault();
    const title = document.getElementById('recipe-title').value;
    const category = document.getElementById('form-stacked-select').value;
    const description = document.getElementById('description').value;
    const instructions = document.getElementById('instructions').value;
    const imageUrl = document.getElementById('image_link').value; 
    const ingredients = document.getElementById('ingredients').value;
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
      
      const response = await fetch(`/api/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          description,
          ingredients,
          instructions,
          imageUrl,
          category
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        document.location.replace(`/singleRecipe/${id}`);
      } else {
        alert(response.statusText);
      }
    }


    async function cancelFormHandler(event) {
      event.preventDefault();
      const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
      document.location.replace(`/singleRecipe/${id}`);
    }
    
    var submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener("click", editFormHandler);


    var cancelBtn = document.querySelector('#cancel-btn');
    cancelBtn.addEventListener("click", cancelFormHandler);