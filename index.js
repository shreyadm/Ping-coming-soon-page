$(document).ready(function(){
   
   
$("button").click(function(){
    $(".error").hide();
    var emailid = $("input").val();
    var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
    if(emailid==""){
        // alert("Email cannot be empty!");
        $("input").addClass("invalid");
        $("button").after('<p class="error">Please provide a valid email address.</p>');
       
       } 
     else if(!pattern.test(emailid)){
        // alert("Enter valid Email ID!"); 
        $("input").addClass("invalid");
        $("button").after('<p class="error">Please provide a valid email address.</p>');
     }
       else {
        $("input").removeClass("invalid");
        
        alert("Awesome! You'll be notified on "+ emailid);
        
       } 
   });
});