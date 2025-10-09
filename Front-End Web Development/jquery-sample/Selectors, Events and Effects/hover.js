$(document).ready(function() {
    $("p").hover(
        function() {
            $(this).css("background-color", "lightblue"); 
        },
        function() {
            $(this).css("background-color", ""); 
        }
    );
});
