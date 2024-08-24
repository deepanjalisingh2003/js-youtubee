//memory----types
//stack
//heap

//Stack(primitive)---copy
//heap(Non-primitive)---reference (change in original value)
let myYouName="deepasingh"
let anothername=myYouName

anothername="chaiaurcode"
console.log(myYouName);   //deepasingh
console.log(anothername);  //chaiaurcode

let userOne={
    email:"deepa@gmail.com",
    upi:"deepa@ybl"
}

let usertwo=userOne
usertwo.email="singh@gmail.com"

console.log(userOne.email);
console.log(usertwo.email);