var timeDisplayed=document.querySelector('.time-block')
//THEN the current day is displayed at the top of the calendar
    //display current date at top 
var currentDateEl=document.querySelector("#currentDay");
console.log("picked the date!");
currentDateEl.textContent= moment().format('dddd')+","+"   "+moment().format("MMMM Do"); 

//WHEN I scroll down
 //insert some kinda scroll button

//THEN I am presented with time blocks for standard business hours
  //time blocks with times displayed 

//WHEN I CLICK the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
    //add coloring like from taskpro to indicate time (if statement?)
$('.time-block').on('click',function() {
    timeBlocktime=timeDisplayed.textContent
    timeNumber=parseInt(timeBlocktime)
    console.log(timeBlocktime);
    //timeBlocktime.val=moment().format("HH:mm:ss a")
    //console.log(timeBlocktime.val);
    timeNumber =moment(timeNumber,'HH').format('HH:mm'); 
    console.log(timeNumber);
    });
//take string of number 9AM and change it to 9:00
/*var time= moment().format("HH:mm:ss a");
console.log(time);
});
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


$('.time-block').click(function() {     
//get time from time block/
timeBlocktime=timeDisplayed.textContent
console.log(timeBlocktime)
});
//WHEN I click into a time block
//THEN I can enter an event
   //insert form input 


//WHEN I click the save button for that time block
   //save button active 

//THEN the text for that event is saved in local storage
   //save textcontent to local storage

//WHEN I refresh the page
//THEN the saved events persist
  //tasks stay present on page after refresh without clearing*/