const prompt=require("prompt-sync")({sigint:true});  
/*let age=prompt("what is your age?");
age=Number.parseInt(age);

switch(age){
  case 20:
    console.log("you age is "+age);
    break;
  case 21:
    console.log("you age is "+age);
    break;
  default:
    console.log("Not in case");
    break;
}*/

/*let number=prompt("what is your age?");
age=Number.parseInt(number);
if(number%2==0 && number%3==0){
  console.log("It is visible by 2 and 3");
}
else{
  console.log("It is not  visible by 2 and 3");
}*/

         //A Ternary operator practice

/*let drivingAge=prompt("what is your age?");
drivingAge=Number.parseInt(drivingAge);
console.log(drivingAge);
let a= drivingAge>18?"you can drive":"you can not drive";
console.log(a);*/

      // For in Loop

/*let obj={
  rahim:20,
  karim:21,
  asad:29,
}

for(let a in obj){
  console.log("Mark of "+a+" is "+obj[a]);
}*/

    //for loops and function practice session(problem 1)

/*let obj={
 a:92,
  b:78,
  c:100
}

for(let a in obj){
  console.log("Mark of "+a+" is "+obj[a]);
}*/

   // problem 2(Do it using for loop)

/*let marks={
sam:85,
john:92,
kai:78
}

for(let i=0;i<Object.keys(marks).length;i++){
console.log("Mark of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]]);

}*/

        //Usage of ``

/*let boy1="john";
let boy2="Sam";

let sentence=`${boy1} and ${boy2} are good friends`;

console.log(sentence);
*/

        //Arrays printing through for loop

/*let marksArray=[20,30,65,20,10];

  for(let i=0;i<marksArray.length;i++){
    console.log(marksArray[i]);
  }*/

      //Array Methods
//let a=[1,2,3,4,5];
//let b=a.toString();
//console.log(typeof b);

/*let c=a.join("-");
//console.log(c);
 a.pop();
//console.log(a2);
console.log(a);*/

    //splice and slice in array

/*let num=[11,22,33,44,55,66,77,98];

//num.splice(2,3,1,3);//first index is arrays index number, the more number will be added the more change will happen in array

//console.log(num);

let sliceArray=num.slice(2,5)

console.log(sliceArray);
*/

      //for Each Loop

/*let array=[1,2,3,4,5];

array.forEach((element)=>{
  console.log(element);
});*/

      //Adding numbers in array given by user

/*let user=prompt("Give a number");
user=Number.parseInt(user);
console.log(typeof user);

let array=[];
let sum=0;

for(let i=0;i<user;i++){
  let userinput=prompt("Give number "+(i+1)+" ");
  let userInputNumber=Number.parseInt(userinput);
  array.push(userInputNumber);

}

//console.log(array);

array.forEach((element)=>{
  //console.log(element);
  sum=sum+element;
});

console.log(sum);*/

  //keep adding numbers of an array until user gives input 0

/*console.log("Enter a number ");
let a=prompt();
a=Number.parseInt(a);
let sum=0;

while(a!=0){
sum+=a;
a=prompt("Give a number ");
a=Number.parseInt(a);
}

console.log("total sum "+sum);*/

      //filter an array and keep only the elements which is divisible by 10

/*let array=[50,60,70,41,4,54,58];

//let array2=array.filter((element)=>element%10==0);

let array2=array.filter((element)=>
{
  if(element%10==0)
 return element;
  else
    return 0;
});

console.log(array2);
*/

      //Take an input from user.find the factorial of that number

/*let userInput=prompt("give a number to find its factorial ");
userInput=Number.parseInt(userInput);
console.log(userInput);

let array=[];
let b=userInput;
for(let i=0;i<b;i++){
    array[i]=userInput;
 // console.log("After initialization: "+array[i]);
    userInput--;
}
console.log(array);
let factorial=array.reduce((accumulator,element)=>{
  return accumulator*element;
});

console.log(factorial);
*/

      //keep adding numbers of an array until user gives input 0

/*console.log("Enter a number ");
let a=prompt();
a=Number.parseInt(a);
let sum=0;

while(a!=0){
sum+=a;
a=prompt("Give a number ");
a=Number.parseInt(a);
}

console.log("total sum "+sum);*/

      //filter an array and keep only the elements which is divisible by 10

/*let array=[50,60,70,41,4,54,58];

//let array2=array.filter((element)=>element%10==0);

let array2=array.filter((element)=>
{
  if(element%10==0)
 return element;
  else
    return 0;
});

console.log(array2);
*/

      //Take an input from user.find the factorial of that number

/*let userInput=prompt("give a number to find its factorial ");
userInput=Number.parseInt(userInput);
console.log(userInput);

let array=[];
let b=userInput;
for(let i=0;i<b;i++){
    array[i]=userInput;
 // console.log("After initialization: "+array[i]);
    userInput--;
}
console.log(array);
let factorial=array.reduce((accumulator,element)=>{
  return accumulator*element;
});

console.log(factorial);
*/




