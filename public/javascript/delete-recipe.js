async function deleteFormHandler(event) {
  event.preventDefault();

  UIkit.modal.confirm("Are you sure you want to delete this recipe?").then(
    async function () {
      const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
      ];

      const response = await fetch(`/api/${id}`, {
        method: "DELETE",
      });
      console.log(response);
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    },
    function () {
      console.log("Rejected.");
    }
  );
}

var deleteBtn = document.querySelector("#delete-btn");
deleteBtn.addEventListener("click", deleteFormHandler);
