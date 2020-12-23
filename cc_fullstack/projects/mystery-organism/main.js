// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(num, bases) {
  return {
    specimenNum: num,
    dna: bases,
    mutate: function() {
      this.dna = mockUpStrand();
    },
    compareDNA: function(pAequor) {
      let identical = 0;
      const baseLen = this.dna.length;

      for (let i = 0; i < baseLen; i++) {
        (this.dna[i] === pAequor.dna[i]) ? identical += 1 : null ;
      }
      const ratio = Math.floor(100 * (identical / baseLen));

      return `specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${ratio}% DNA in common.`;
    },
    willLikelySurvive: function() {
      const surviveArr = this.dna.filter(item => (item === 'C' || item === 'G'));
      const ratio = Math.floor(100 * (surviveArr.length / this.dna.length));

      return (ratio >= 60) ? true : false;
    }
  }
}

const test1 = pAequorFactory(1, mockUpStrand());
const test2 = pAequorFactory(2, mockUpStrand());
console.log(test1);
test1.mutate();
console.log(test1);

console.log(test1.compareDNA(test2));
console.log(test1.willLikelySurvive());


function createThirty() {
  let thirtyArr = [];
  while (thirtyArr.length < 30) {
    let candidate = pAequorFactory(thirtyArr.length, mockUpStrand());
    (candidate.willLikelySurvive()) ? thirtyArr.push(candidate) : null ;
  }
  return thirtyArr;
}

const testArr = createThirty();
console.log(testArr.length);
