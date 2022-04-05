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

    //get all elements with class description
    var timeBlockEvents = $(".description");
    console.log(timeBlockEvents);

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


    /*if(timeNumber>= 9 &&  <= 17){
        $(".hour").addClass("present");
    }
    elseif(hours < 9){
        $(".hour").addClass("past");
    }
    else{
        $(".hour").addClass("future");
    }

}
//apply new class if time block is past/present/future time

          /*if (moment().isAfter(time)){
              timeDisplayed.addClass("past");
          }
          if (moment().
          } else {
            this.style.color = "";
          }
          if (moment().isAfter(time)) {
            $(taskEl).addClass("list-group-item-danger");
          } else if (Math.abs(moment().diff(time, "days")) <= 2) {
            $(taskEl).addClass("list-group-item-warning");
          }

        });
      });

//WHEN I click into a time block
//THEN I can enter an event
   //insert form input 
$('.time-block').on('click',function() {
    
    <form>
    <div class="form-group">
    <input type="text" class="form-control autocomplete="off">
    </div>
    </form>*/
        


//WHEN I click the save button for that time block
   //save button active 
/*$("#task-form-modal .btn-save").click(function() {
  // get form values
  var taskText = $("#modalTaskDescription").val();
  var taskDate = $("#modalDueDate").val();

  if (taskText && taskDate) {
    createTask(taskText, taskDate, "toDo");

    // close modal
    $("#task-form-modal").modal("hide");

    // save in tasks array
    tasks.toDo.push({
      text: taskText,
      date: taskDate
    });

    saveTasks();
  }
});*/

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