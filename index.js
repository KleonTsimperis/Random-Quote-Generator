
const array1 = ['I want to','You want to', 'She wants to'];
const array2 = [' eat',' sleep', ' shout'];
const array3 = [' on the table.',' in my bed.', ' in her room.'];

const randomize = (x) => {
   return x.map(item => ({value: Math.random(), item:item}))
          .sort((a,b)=> a.value-b.value)
          .map(item => item.item)
          .slice(0,1);
}

let firstFrag = randomize(array1);
let secondFrag = randomize(array2);
let thirdFrag = randomize(array3);
const randomQuote = firstFrag + secondFrag + thirdFrag;

console.log(randomQuote);
