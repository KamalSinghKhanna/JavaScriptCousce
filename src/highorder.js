function coypArrayManuplate(array, instruction) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instruction(array[i]));
        
        
    }
    return output;
}

function multiplyby2(input) {
    return input*2;
}

const result = coypArrayManuplate([1,2,3], multiplyby2);
console.log(result);