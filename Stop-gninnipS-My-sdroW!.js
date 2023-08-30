console.log(spinWords('this is another test'));
function spinWords(string) {
    

    // return string.split(' ').map(function (word) {
    //     return (word.length > 4) ? word.split('').reverse().join('') : word;
    //   }).join(' ');
    
    let arr = [];
    let newWord = "";
    

    for (let i = 0; i < string.length; i++) {

        if (string[i] == ' ') {
            arr.push(newWord);
            newWord = "";

        } else {
            newWord += string[i];

        }
        
    }
    
    arr.push(newWord);
    newWord = [];

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i].length > 4) {
            let newWord = Array.from(arr[i]);
            arr[i] = newWord.reverse().join().replaceAll(",","");
        }
    }
    return arr.toString().replaceAll(",", " ");
}