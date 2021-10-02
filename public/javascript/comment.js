async function commentFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

    const recipe_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    if(comment_text){
        const response = await fetch('/api/comments/', {
            method: 'POST', 
            body: JSON.stringify({
                recipe_id, 
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok) {
            document.location.reload();
        } else{
            UIkit.modal.alert('Your comment is over the maximum character allowed.').then(function () {
                console.log('Alert closed.')
            });        
            // alert(response.statusText);
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);


function countChars(obj){
    var maxLength = 255;
    var strLength = obj.value.length;
    var charRemain = (maxLength - strLength);
    
    if(charRemain < 0){
        document.getElementById("charNum").innerHTML = '<span style="color: red;">You have exceeded the limit of '+maxLength+' characters</span>';
    }else{
        document.getElementById("charNum").innerHTML = charRemain+' characters remaining';
    }
}