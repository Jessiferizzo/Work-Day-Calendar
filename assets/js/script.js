$(document).ready(function () {


//get all elements with class description
var timeBlockEvents = $(".description");
console.log(timeBlockEvents);


//THEN the current day is displayed at the top of the calendar
//display current date at top 
var currentDateEl=document.querySelector("#currentDay");
console.log("picked the date!");
currentDateEl.textContent= moment().format('dddd')+","+"   "+moment().format("MMMM Do"); 

//WHEN I scroll down
 //insert some kinda scroll button

//THEN I am presented with time blocks for standard business hours
  //time blocks with times displayed 

//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
    //add coloring like from taskpro to indicate time (if statement?)*/
//Change textarea background color based on time
//Change textarea background color based on time
var checkTime = function () {
    //Get Current time
    var currentTime = moment().hours()
    console.log(currentTime);

    //loop through description classes
    for (var i = 0 ; i < timeBlockEvents.length ; i++) {

        //Get element IDs from each block
        var elementId = timeBlockEvents[i].id;
        (console.log(elementId));

        //get element by ID
        var newId = document.getElementById(timeBlockEvents[i].id)
        console.log(newId);

       // apply new class if task is present/past/future
       if (elementId==currentTime) {
        $(newId).addClass("present");
        console.log("it's the present")
    } else if (elementId < currentTime) {
        $(newId).addClass("past");
        console.log("its the past");
    } else {
        $(newId).addClass("future");
        console.log("its the future!)");
    }
}
}
console.log("time was checked!");
// checkTime every 5 minutes
setInterval(checkTime(), (1000 * 60) * 5);

//listener event for save button click sends to local storage
  $('.saveBtn' ).on( "click", function(event) {
    event.preventDefault();
    console.log("Saved Button Clicked!");
    //get nearby values.
    console.log(this);
     // taken the change from the sibling html description attribute
    var text = $(this).prev().val(); 
    console.log(text);
    // taken the change from the parent html id attribute
    var time = $(this).
    console.log(time);
    //set items in local storage.
    localStorage.setItem(time,text);
  });

  //get items from localStorage when page reloads
      $("#hour9 .description").val(localStorage.getItem("hour9"));
      $("#hour10 .description").val(localStorage.getItem("hour10"));
      $("#hour11 .description").val(localStorage.getItem("hour11"));
      $("#hour12 .description").val(localStorage.getItem("hour12"));
      $("#hour13 .description").val(localStorage.getItem("hour13"));
      $("#hour14 .description").val(localStorage.getItem("hour14"));
      $("#hour15 .description").val(localStorage.getItem("hour15"));
      $("#hour16 .description").val(localStorage.getItem("hour16"));
      $("#hour17 .description").val(localStorage.getItem("hour17"));

});