// Synchronous

console.log("hello")

console.log("Hello world")





// Ascynchronous

// setTimeout(function(){
//     console.log("i will reach there.")
// },2000);

// setInterval(() => {
//     console.log ("SetInterval Function")
// },1000);

// let a = 2;
// let b = 4;
// console.log(a + b);


// Call Back Functions

// function fullName( Toyota , Supra , cb){
//     console.log(Toyota+Supra)
//     cb();
// }

// function carSpecs(){
//     console.log("V8 Twin Turbo");
// }

// fullName("2002"," Jet Black", carSpecs);



// function Add(Num1, Num2, cb){
//     console.log(Num1 + Num2)
//     ;
// }

// function Result(){
//     console.log("This is Result")
// }

// Add((5+6), Result)


function CreateAccount (cb){
    setTimeout(()=>{
        cb();

    },1000);
}
function Login(cb){
    setTimeout(()=>{
        cb();
    },1000)
}
function DataCollected (cb){
    setTimeout(()=>{
       cb();
    },2000)
}
function DataDisplayed (){
    setTimeout(()=>{
        console.log ("Your Data is being Displayed")
    },4000)
}


// CallBack Hell

 CreateAccount(function(){
    console.log ("Your Registration is Completed");

    Login(function(){
        console.log ("Successfully Loged In")
    });
 DataCollected (function(){
    console.log ("Your Data is being Collected")
 });

 DataDisplayed ();
 
})