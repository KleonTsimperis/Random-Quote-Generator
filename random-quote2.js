var askTimes = prompt("How many quotes would you like to see?");
var response = parseInt( askTimes,10);

const totalArray1 = [
  ['I want to','You want to', 'She wants to', 'He needs to', 'We can', 'They should'],
  [' eat',' sleep',' shout', ' run', ' jump'],
  [' on the table.',' in my bed.', ' in her room.', ' in the police station.', ' in the asylum.']
];

const totalArray2 = [
  [ 'We can', 'They should'],
  [' eat',' sleep',' shout', ' run', ' jump'],
  [' on the table.',' in my bed.', ' in her room.', ' in the police station.', ' in the asylum.']
];

const randomize = (x) => {
   return x.map(item => ({value: Math.random(), item:item}))
          .sort((a,b)=> a.value-b.value)
          .map(item => item.item)
          .slice(0,1);
}

const sumArray = [totalArray1, totalArray2];




if (response > 0 && response <6){
  for(i=0; i<response; i++){
    let firstFrag = randomize(totalArray1[0]);
    let secondFrag = randomize(totalArray1[1]);
    let thirdFrag = randomize(totalArray1[2]);
    const randomQuote = firstFrag + secondFrag + thirdFrag;
    console.log(randomQuote);
  }
} else {
  prompt(" Please choose an integer value from 1 to 5 only!");

}
