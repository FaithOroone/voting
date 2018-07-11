//backend logic
function login(){

  window.alert("working");
}




//frontend logic
$(document).ready(function(){
  $("#voterForm").submit(function(event){
    event.preventDefault();

    var userEmail =$("email").val();
    var userId = $("id").val();
  })
})
