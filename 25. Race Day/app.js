let raceNumber = Math.floor(Math.random() * 1000);
let isRegisteredEarly = true;
let age = 32;

if (isRegisteredEarly && age> 18){
      raceNumber += 1000;
}

if(isRegisteredEarly && age> 18){
    console.log(`Hello! ${raceNumber}, Your race will start at 9:30 am`);
}
else if(!isRegisteredEarly && age> 18){
   console.log(`Hello! ${raceNumber}, Your race will start at 11:00 am`);
}
else{
  console.log("Youth registrants run at 12:30 pm (regardless of registration)");
} 
