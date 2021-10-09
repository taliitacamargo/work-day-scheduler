
// current date added to Jumbotron section

var today = moment();
var dayWeek = today.format("[Today is] dddd, MMMM Do YYYY");
$("#currentDay").text(dayWeek);



    $(document).ready(function() {
        $(".saveBtn").on("click", function() {
            var texts = $(this).siblings(".description").val();
            var time = $(this).parent().attr("id");
            
            localStorage.setItem(time, texts);
        })
        
        function timeRecord() {
        var theTimeNow = moment().hour();
        $(".time-block").each(function() {
            var BlockTime = parseInt($(this).attr("id").split("hour")[1]);
if (BlockTime < theTimeNow ) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
       
 else if ( BlockTime === theTimeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        
        }
        
else {
          $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
        
        })
    }

    $("#hrs9 .description").val(localStorage.getItem("hour9"));
    $("#hrs10 .description").val(localStorage.getItem("hour10"));
    $("#hrs11 .description").val(localStorage.getItem("hour11"));
    $("#hrs12 .description").val(localStorage.getItem("hour12"));
    $("#hrs13 .description").val(localStorage.getItem("hour13"));
    $("#hrs14 .description").val(localStorage.getItem("hour14"));
    $("#hrs15 .description").val(localStorage.getItem("hour15"));
    $("#hrs16 .description").val(localStorage.getItem("hour16"));
    $("#hrs17 .description").val(localStorage.getItem("hour17"));

    timeRecord();
})