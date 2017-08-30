 // main document ready function to check if dom is loaded fully or not
 $(document).ready(function() {

  //to hide the divs
  $(".second-div").hide();
  $(".third-div").hide();
  $(".fourth-div").hide();
  $(".fifth-div").hide();

 //to get access token from facebook graphs
 var myFacebookToken = 'EAACEdEose0cBABfm4pz06a4ZBcElzijKrQgit5PhOlZAE8yHhbZC0D3ZAISVyODqRyniKgDxJ0QGUNHr5U0a7vo7SELMhOcwD3UXsZAZC9v4OniNf5N8rnMLl1y0vQtWCPUfbDEdY54ZBYLntJ0mli50CubEiaeOpqPRIwEZCLxRZB6upmhUvRiy2mW1ixe6ZAy38kdQ9vFvdZAbQZDZD';

      
     // to get profile Information
     function getProfileInfo() {
         
          
         $.ajax('https://graph.facebook.com/me/?fields=name,email,id,picture,hometown,birthday,gender,first_name&access_token=' + myFacebookToken, {

                 success: function(response) {
                   
                     console.log(response);
                     console.log(typeof(response));
                      $(".second-div").show();
                      $(".third-div").show();
                     $("#myName").html(response.name);
                     $("#myEmail").text(response.email);
                     $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                     $("#myHomeTown").text(response.hometown.name);
                     $("#myAbout").text(response.about);

                     
                 }, //end success
                 error: function(response) {
                     console.log(request);
                    console.log(errorType);
                    alert(errorMessage);
                     $(".first-div").show(); 
                     
                 },
                 timout: 5000,
                 beforSend: function(response) {

                 },
                 complete: function(response) {
                     $(".first-div").hide();
                     $(".fourth-div").hide();
                     $(".fifth-div").hide();
                 }


             } //end argument list 

 ); // end ajax call 

 }// end get facebook info

 // to get Feed Information
     function getFeedInfo() {

         $.ajax({
            method:"GET",
            url:"https://graph.facebook.com/v2.9/me/?fields=feed.limit(5)%7Bfrom%2Cmessage%7D&access_token="+ myFacebookToken,

                 success: function(response) {
                     console.log(response);
                     $("#result").empty();
                     $(".fourth-div").show();
                     $(".fifth-div").show();
                     console.log(typeof(response));
                     $.user = response.feed.data;

                  
                for (let i in $.user){

                    $("#result").append("<h2 class='fee'>" +"<span id='feedname'>"+ $.user[i].from.name+"</span>" +" "+":"+" "+ $.user[i].message +"</h2>");

                     
                  } 

                   },//end success
                 error: function(response) {
                     console.log(request);
                    console.log(errorType);
                    alert(errorMessage);
                    $(".first-div").show(); 
                 },
                 timout: 5000,
                 beforSend: function(response) {

                 },
                 complete: function(response) {
                     $(".first-div").hide(); 
                     $(".second-div").hide(); 
                     $(".third-div").hide(); 

                     
                 }


             } //end argument list 

 ); // end ajax call 

 }// end getting facebook feed

 //to go back to the home page
 $("#homeBtn").on('click',function(){
   
//to hide and show the respective divs
     $(".first-div").show(1000); 
     $(".second-div").hide(1000); 
     $(".third-div").hide(1000); 
     $(".fourth-div").hide(1000); 
     $(".fifth-div").hide(1000); 

                     
});// end it on click

//to get back to the home page
 $("#homeButton").on('click',function(){
   

     $(".first-div").show(1000); 
     $(".second-div").hide(1000); 
     $(".third-div").hide(1000); 
     $(".fourth-div").hide(1000); 
     $(".fifth-div").hide(1000); 

                     
});// end it on click

    $("#facebookBtn").on('click',getProfileInfo)// to get profileInfo on clicking the Info button
    $("#loadDataBtn").on('click',getFeedInfo)// to get users feed on clicking the feed button
    $("#facebookButton").on('click',getProfileInfo)// to get profileInfo on clicking the Info button
    $("#loadDataButton").on('click',getFeedInfo)// to get users feed on clicking the feed button

    
  });