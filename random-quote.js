
// const array1 = ['I want to','You want to', 'She wants to'];
// const array2 = [' eat',' sleep', ' shout'];
// const array3 = [' on the table.',' in my bed.', ' in her room.'];
var firstFrag,secondFrag,thirdFrag,randomQuote,randomize;
var totalArray=[];

totalArray = [
  ['I want to','You want to', 'She wants to', 'He needs to', 'We can', 'They should'],
  [' eat',' sleep',' shout', ' run', ' jump'],
  [' on the table.',' in my bed.', ' in her room.', ' in the police station.', ' in the asylum.']
];

randomize = (x) => {
   return x.map(item => ({value: Math.random(), item:item}))
          .sort((a,b)=> a.value-b.value)
          .map(item => item.item)
          .slice(0,1);
}

firstFrag = randomize(totalArray[0]);
secondFrag = randomize(totalArray[1]);
thirdFrag = randomize(totalArray[2]);
randomQuote = firstFrag + secondFrag + thirdFrag;

console.log(randomQuote);
