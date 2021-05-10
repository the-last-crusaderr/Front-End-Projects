let input = "The world is a great place to live, only if you live accordance to nature";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for(let i = 0;i<input.length;i++){
  for(let j=0;j<vowels.length;i++){
        if(input[i] == vowels[j]){
            if (input[i]=='e' || input[i]=='u'){
              resultArray.push(input[i]);
              resultArray.push(input[i]);
            }
        }

  }
}

console.log(resultArray); 
