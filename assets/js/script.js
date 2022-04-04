//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
    //display current date at top 
var currentDateEl=document.querySelector("#currentDay");
console.log("picked the date!");
currentDateEl.textContent= moment().format('dddd')+ moment().format("MMMM Do"); 


/*var createDate =function (){
var currentTimeSpan=$("<span>")
console.log("span made");
monthDate= moment().format("MMM Do YY") 
currentDay= moment().format('dddd')
.text(currentDay,monthDate);
currentDateEl.appendChild(currentTimeSpan);
}

/*var createDateHeader= function(dateText, dateDisplay)
    var currentDateEl=document.querySelector("#currentDay");
    var dayAndDateEl= document.createElement(date);
    var date= moment().format('dddd')+ moment().format("MMM Do YY")
        .text(dateText);
    currentDateEl.appendChild(dayAndDateEl);*/

//WHEN I scroll down
 //insert some kinda scroll button

//THEN I am presented with time blocks for standard business hours
  //time blocks with times displayed 

//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
    //add coloring like from taskpro to indicate time (if statement?)

//WHEN I click into a time block
//THEN I can enter an event
   //insert form input 


//WHEN I click the save button for that time block
   //save button active 

//THEN the text for that event is saved in local storage
   //save textcontent to local storage

//WHEN I refresh the page
//THEN the saved events persist
  //tasks stay present on page after refresh without clearing

