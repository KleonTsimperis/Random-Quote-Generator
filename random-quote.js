
var firstFrag,secondFrag,thirdFrag,randomQuote,randomize;
var totalArray = [
  ['I want to','You want to', 'She wants to', 'He needs to', 'We can', 'They should'],
  [' eat',' sleep',' shout', ' run', ' jump'],
  [' on the table.',' in my bed.', ' in her room.', ' in the police station.', ' in the asylum.']
];

randomize = (x) => {
   return x.map(item => ({value: Math.random(), phrase:item}))
          .sort((a,b)=> a.value-b.value)  
          .map(item => item.phrase)
          .slice(0,1);
}

// if return > 0, b before a
// if return === 0, unchanged
// if return < 0, a before b

firstFrag = randomize(totalArray[0]);
secondFrag = randomize(totalArray[1]);
thirdFrag = randomize(totalArray[2]);
randomQuote = firstFrag + secondFrag + thirdFrag;

console.log(randomQuote);
