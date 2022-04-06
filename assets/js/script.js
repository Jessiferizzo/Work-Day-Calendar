var tasksIdCounter=0;

var taskInput = document.querySelector(".description").value;
console.log(taskInput);


//create array for tasks events
var tasks=[];
//get all elements with class description
var timeBlockEvents = $(".description");
console.log(timeBlockEvents);



var resetTasks = function(taskDataObj) {
    var listItemEl = document.querySelector(".description");
    listItemEl.classname="text area";
var taskDataObj=taskInput
taskDataObj = tasksIdCounter;
tasks.push(taskDataObj);
}


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

//function to store items to local storage
 var saveTasks = function() {
    var taskInput = document.querySelector(".description").value;
    console.log(taskInput);
localStorage.setItem("tasks", JSON.stringify(taskInput));
};

//function to retrieve items from local storage and set back 
var loadTasks = function() {
    var savedTasks = localStorage.getItem("tasks");
    // if there are no tasks, set tasks to an empty array and return out of the function
    if (!savedTasks) {
      return false;
    }
    console.log("Saved tasks found!");
    // else, load up saved tasks
  
    // parse into array of objects
    savedTasks = JSON.parse(savedTasks);

    // loop through savedTasks array
    for (var i = 0; i < savedTasks.length; i++) {
    // pass each task object into the reset task function
    resetTasks(savedTasks[i]);
  }

  };
  

//listener event for save button click sends to local storage
  $('.saveBtn' ).on( "click", function( event ) {
    event.preventDefault();
    console.log("Saved Button Clicked!");
    saveTasks();
  });