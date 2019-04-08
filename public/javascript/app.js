 $('.submit').on('click', (e)=>{
   e.preventDefault()
     getComment()

 })    
 
 function getComment(){

 $.ajax({
    type: "POST",
    dataType: "json",
    url: "/submit",
    data: {
      comment: $('#comment').val().trim(),
      username: $('#name').val().trim(),
      email:$('#email').val().trim(),
      date: Date.now()
    }    
  }).then(data=>{
    location.reload()

  })
//   Clear the field
      $('#comment').val("")
      $('#name').val("")
      $('#email').val("")
 }
 