const today = moment().format('LL')
var timeNow = moment().hour()
var saveBtn = $("saveBtn")


// Today's date on the top of the page
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

//save data function
function saveData(){
    $(".saveBtn").on("click", function(){

        var time = $(this).siblings(".hour").text()
        var text = $(this).siblings(".description").val()

        console.log(time);
        console.log(text)

        localStorage.setItem(time, text);
    });
};

// //maintain data on refresh
// function maintainData(){
//     $( ".description").each(function(){
//         var currentHour = $(this).text();
//         var storedText = localStorge.getItem(currentHour);

//         if (storedText !== null){
//             $(this).siblings(".description").val(storedText);
//         }
//     })
// };

//run function
textAreaColor()
saveData()

