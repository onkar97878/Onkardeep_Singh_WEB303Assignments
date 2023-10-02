// WEB303 Assignment 2
$(document).ready(function () {  
    // for the click event Prospect link
    $("#prospect").click(function (event) {   // jQuery functions that bind a click event handler
        event.preventDefault();  //to prevent default link behaviour
        loadContent("prospect.html"); 
    });

    //for the click event Convert link
    $("#convert").click(function (event) {     // jQuery functions that bind a click event handler
        event.preventDefault();  //to prevent default link behaviour
        loadContent("convert.html"); 
    });

    //for the click event Retain link
    $("#retain").click(function (event) { // jQuery functions that bind a click event handler
        event.preventDefault();  //to prevent default link behaviour
        loadContent("retain.html"); 
    });

    function loadContent(page) { //hides , loads new and revelas new       
        
        $("#content").slideUp(400, function () {  // used slideUp for the animation
            $.ajax({
                url: page,
                type: "GET",
                dataType: "html",   
                success: function (data) {
                    //updating content div with loaded data
                    $("#content").html(data);
                    $("#content").slideDown(400);  //used slideDown for animation
                },
                error: function () {    // callback function executed if the request fails 
                    console.error("Could not fetch as error while loading");
                },
            });
        });
    }
});  
