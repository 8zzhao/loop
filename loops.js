
function loopOne(){
let counter = 100;
let amount = 5;
while(counter > 0);{
console.log(counter+"seconds left");
    counter = counter - amount;
    console.log("Done !");
}

}

function loopTwo(){
let sum =0
for(let i=0; i=powersOfTwo; i=i+1){
    console.log(i);
}

}

function loopThree(){


}

function main(){
    //Testing each function
    loopOne(10);
    loopOne(25);

    let powersOfTwo = loopTwo(2,10);
    let powersOfFive = loopTwo(5,4);
    console.log("The sum is "+powersOfTwo);
    console.log("The sum is "+powersOfFive);

    loopThree("#",6);
    loopThree("$",20);
    loopThree("x",10);

    console.log("You will need to scroll up to check all of them.");
}

//Hit ctrl + Shift + B to run the program.
//Hit ESC to make the printout messages go away.
main();
