const today = moment().format('LL')
var timeNow = moment().hour()
var saveBtn = $("saveBtn")



$( "#currentDay").append("Today's date is: " + today)


//dynamic color change
function textAreaColor(){
    $( ".time-block").each(function(){
        
        var currentHour = parseInt($(this).attr("id"));
        console.log(currentHour);

        if (currentHour < timeNow){
            $(this).addClass("past")
        }

        else if (currentHour === timeNow){
            $(this).addClass("present")
        }

        else {
            $(this).addClass("future")
        }

});     

};


textAreaColor()