//backend logic
function login(){

  window.alert("working");
}




//frontend logic
$(document).ready(function(){
  $("#voterForm").submit(function(event){
    event.preventDefault();

    var userEmail =$("userName").val();
    var userId = $("id").val();
  })
})
