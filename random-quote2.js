var firstFrag,secondFrag,thirdFrag, randomQuote;

const totalArray1 = [
  ['I want to','You want to', 'She wants to', 'He needs to'],
  [' eat',' sleep',' shout', ' yawn', ' linger'],
  [' on the table.',' in my bed.', ' in her room.', ' in the toilet.', ' in the bathroom.']
];

const totalArray2 = [
  ['We can', 'They should', 'We will', 'They must'],
  [' hike',' swim',' climb', ' run', ' jump'],
  [' on the track & field.',' in the basketball court.', ' on the field.', ' in the police station.', ' in the asylum.']
];

const randomize = (x) => {
   return x.map(item => ({value: Math.random(), item:item}))
          .sort((a,b)=> a.value-b.value)
          .map(item => item.item)
          .slice(0,1);
}

do{
var askTimes = prompt("How many quotes would you like to see?");
var response = parseInt(askTimes,10);
var continueOrQuit = 0;

if (response > 0 && response <6){
  var selectArray = Math.floor(Math.random()*10);
  for(i=0; i<response; i++){
      if (selectArray < 5){
         firstFrag = randomize(totalArray1[0]);
         secondFrag = randomize(totalArray1[1]);
         thirdFrag = randomize(totalArray1[2]);
         randomQuote = firstFrag + secondFrag + thirdFrag;
        console.log(randomQuote);
      } else {
         firstFrag = randomize(totalArray2[0]);
         secondFrag = randomize(totalArray2[1]);
         thirdFrag = randomize(totalArray2[2]);
         randomQuote = firstFrag + secondFrag + thirdFrag;
        console.log(randomQuote);
      } // else finish
    }// for loop finish
  } // if finish
else{
  alert("Reminder: You can see up to and including 5 quotes");
}

var secondQuestion = prompt("Would  you like to continue? (Respond by Yes or No otherwise the program will terminate)");
if (!secondQuestion.toLowerCase().includes("yes")){
  continueOrQuit++;
  }

} // do finish

while (continueOrQuit<1);
alert("Thanks for participating");
