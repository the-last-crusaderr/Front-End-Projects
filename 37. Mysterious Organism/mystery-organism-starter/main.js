// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAeqourFactory(specimenNum, dna){
  return {
    specimenNum,
    dna,

    mutate(){
      let index = Math.random() * 15;
      let base = this.dna[index];

      while(dna[index] === 'base'){
        dna[index] = returnRandBase();
      }
    },

    compareDNA(obj){
        let common = 0;
        for(let i=0;i<15;i++){
          if(obj[i] === this.dna[i])
            common += 1;
        }
        console.log(`specimen ${this.specimenNum} and specimen ${obj.specimenNum} have ${(common/15)*100} DNA in common`);
  },

willLikelySurvive() {
  let cg = 0;
  for(let i=0;i<15;i++){
    if (this.dna[i] === 'c' || this.dna[i] === 'g') 
      cg ++;
  }
  let survivalRate = (cg/15) * 100;
  if (survivalRate > 60)
    return true
  else
    return false;  
},
}
}


let batch = [];
for(let i=0;i<15;i++){
  batch.push(pAeqourFactory(i, mockUpStrand()));
}


console.log(batch);







