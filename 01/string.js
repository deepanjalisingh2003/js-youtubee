const name="deepa"
const repo=50

console.log (name+repo+"value");
console.log (`hello my name is ${name} and my repo count is ${repo}`);

const gameName=new String('deepa')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log (gameName.length);
console.log (gameName.toUpperCase());
console.log (gameName.charAt(2));
console.log (gameName.indexOf('t'));

const new = gameName.substring(0,4); //negative value will be ignored
console.log (new);
 const another= gameName.slice(-8,4)    //start from reverse 
console.log (another);

//trim ---- extra space remove 
//replace - search and replace the value 
//includes --- variable include or not

console.log (gameName.split('-'));



