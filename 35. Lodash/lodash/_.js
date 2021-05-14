let _ = {
  clamp (number, lower, upper) {
      if (number<lower)
        return lower;
      else if(number > upper)  
        return upper;
      else
        return number;  
  },

  inRange(number,start=0,end){
    if (end === undefined){
      end = start;
      start = 0;
  }
  if(start > end){
    let temp = start;
    start = end;
    end = temp;
  }
  if (number >=start && number < end){
    return true;
  }
  else
    return false;
},

words(str) {
  let word = str.split(' ');
  return word;
},

pad(str, size){
  let newSize = size-str.length;
  if (newSize <=0 )
    return str;
  let start = Math.floor(newSize/2);
  let end = Math.ceil(newSize/2);
  let target = `${' '.repeat(start)}${str}${' '.repeat(end)}`;
  return target; 
},


has(obj, key){
  if(obj[key] != undefined)
    return true;
  else
    return false;  
},

invert(obj){
  let newObj = {};
  for(let keys in obj){
      let newKeys = obj[keys];
      let newVal = keys;
      newObj[newKeys] = newVal;
  }
  return newObj;
},

findKey(obj, pred){
  for(let key in obj){
    if (pred(obj[key] === true))
      return key;
  }
  return false;
},

drop(arr, num){
  let newArr = [];
  for(let i=num-1;i>=0;i--){
    arr.unshift();
  }
  newArr = arr;
  return newArr;
},



}





// Do not write or modify code below this line.
module.exports = _;
