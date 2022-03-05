function isValidSubsequence(array, sequence) {
    let i = 0;
    if(i == sequence.length) return false;
    array.forEach(el => {
        if(sequence[i] == el){
            i++;
        }
    });
    return i == sequence.length
}

isValidSubsequence( [1, 1, 1, 1, 1], [1, 1, 1]) ? console.log("true") : console.log("false");