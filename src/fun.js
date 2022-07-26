let counter = 0;
function outer() {
  
    function counterIncriment(){
        counter++;
        console.log(counter);
    }
    return counterIncriment;
}

const myNewfunction = outer();
myNewfunction();
myNewfunction();


const myAnothernewfunction = outer();
myAnothernewfunction()
myAnothernewfunction()