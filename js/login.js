//backend logic
function login(){

}




//frontend logic
$(document).ready(function(){
  $("#voterForm").submit(function(event){
    event.preventDefault();

    var userName =$("userName").val();
    var userId = $("id").val();
    window.alert("userName" + "" + "userId");


  })
})
