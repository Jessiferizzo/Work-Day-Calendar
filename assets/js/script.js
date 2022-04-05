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
    var currentTime = moment("12:15 AM", ["h:mm A"]).format("HH:mm");
    console.log(currentTime);

    //loop through description classes
    for (var i = 0 ; i < timeBlockEvents.length ; i++) {

        //Get element IDs from each block
        var elementId = timeBlockEvents[i].id;
        (console.log(elementId));

        //get element by ID
        var newId = document.getElementById(timeBlockEvents[i].id)
        console.log(newId);

        //remove any old classes from element
        $(timeBlockEvents[i].id).removeClass(".present .past .future");

        // apply new class if task is present/past/future
         if (elementId < currentTime) {
            $(newId).addClass("past");
            console.log("its the past");
        } else if (elementId > currentTime) {
            $(newId).addClass("future");
            console.log("its the future!)");
        } else {
            $(newId).addClass("present");
            console.log("it's present!");
        }
    }
}
console.log("time was checked!");
// checkTime every 5 minutes
setInterval(checkTime(), (1000 * 60) * 5);


//WHEN I click into a time block
//THEN I can enter an event HTML DID IT
        
//WHEN I click the save button for that time block
   //save button active 

/*function textSubmit(event) {
    event.preventDefault();
    var textEvent = document.querySelector('.description');
    var textEvent= textEvent.textContent
    console.log(textEvent);
}
console.log(textSubmit);

  var submitButton= document.querySelector('.saveBtn')
  submitButton.addEventListener('submit', textSubmit);
  console.log("you clicked save!");

//THEN the text for that event is saved in local storage
   //save textcontent to local storage
/*var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};*/

// audit task due dates every 5 minutes
/*setInterval(checkTime(), (1000 * 60) * 5);*/

//WHEN I refresh the page
//THEN the saved events persist
  //tasks stay present on page after refresh without clearing*/
/*var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));*/

    $( ".saveBtn" ).submit(function( event ) {
        alert( "Handler for .submit() called." );
        event.preventDefault();
      });