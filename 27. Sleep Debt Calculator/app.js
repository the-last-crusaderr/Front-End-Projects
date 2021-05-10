function getSleepHours(day){
  if (day === 'monday' || day === 'wednesday' || day === 'friday')
    return 7;
  else if (day === 'tuesday' || day === 'thursday')  
    return 6;
  else
    return 5;  
}


function getActualSleepHours(){
  let sum = 0;
  sum += getSleepHours('sunday');
  sum += getSleepHours('monday');
  sum += getSleepHours('tuesday');
  sum += getSleepHours('wednesday');
  sum += getSleepHours('thursday');
  sum += getSleepHours('friday');
  sum += getSleepHours('saturday');
  return sum;
}

function getIdealSleepHours(idealHours = 7){
  idealHours *= 7;
  return idealHours;
}

function calculateSleepDebt(){
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours)
    console.log('Perfect amount of sleep');
  else if (actualSleepHours > idealSleepHours)
    console.log('More sleep than needed');  
  else
    console.log('You should get some rest');  
}


calculateSleepDebt(); 
