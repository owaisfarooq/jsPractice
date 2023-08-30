console.log(allNonConsecutive ([1,2,3,4,6,7,8,10]));

function allNonConsecutive (arr) {

    let result = [];
    
    for (var index = 1; index < arr.length; index++) {
        if (arr[index]-1 != arr[index-1]){
            result.push({i: index, n:arr[index]});
        
        }
    }
    return result;
    
}
// my one liner:
// function allNonConsecutive (arr) { return arr.map((v, i) => { if (arr[i] != arr[i-1]+1 && i != 0){ return {i: i, n: v} } }).filter(c => c != undefined) }