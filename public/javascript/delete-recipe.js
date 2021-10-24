async function deleteFormHandler(event) {
   event.preventDefault();
   
   var confirmDelete = window.confirm(
    "Are you sure you want to delete this recipe? "
  );

   if(confirmDelete) {
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
      
      const response = await fetch(`/api/${id}`, {
        method: 'DELETE'
      });    
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
    
    var deleteBtn = document.querySelector('#delete-btn');
    deleteBtn.addEventListener("click", deleteFormHandler);