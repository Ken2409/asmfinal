var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(date+' | '+time+' | matsui.js initialized!')

$(document).ready( function() {                

    /* $(selector).hover( inFunction, outFunction ) */
    $('.dropdown').hover( 
        function() {                        
            $(this).find('ul').css({
                "display": "block",
                "margin-top": 0
            });                        
        }, 
        function() {                        
            $(this).find('ul').css({
                "display": "none",
                "margin-top": 0
            });                        
        } 
    );

});