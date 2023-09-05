function doMath(s){
    //your code here
  }
let lettersToIgnore = [
  " ",
  "."
]
asd = ["The Learn Python Challenge Casino.", "They bought a car", "Casinoville"]
console.log(word_search(asd, 'casino'));
// function word_search (doc_list, keyword) {
//   let result = [];
//   for (let doc_list_iterator = 0; doc_list_iterator < doc_list.length; doc_list_iterator++) {
//     const string = doc_list[doc_list_iterator];

//     for (let string_iterator = 0; string_iterator < string.length; string_iterator++) {
//       if (string[string_iterator].toLowerCase() === keyword[0].toLowerCase()) {
//         let isCorrect = true
//         for (let firstCharMatchedIterator = 0; firstCharMatchedIterator < keyword.length && firstCharMatchedIterator < string.length; firstCharMatchedIterator++) {
//           if ( !(string[firstCharMatchedIterator + string_iterator].toLowerCase() === keyword[firstCharMatchedIterator].toLowerCase()) ) {
//             isCorrect = false;
//             break
//           }
//         }
//         if (lettersToIgnore.includes(string[string_iterator -1]) && lettersToIgnore.includes(string[keyword.length + string_iterator])) {
//           // done
//           if (isCorrect) {
//             result.push(doc_list_iterator)
//           }
            
//         }
//       }

//     }

//   }
//   return result;
// }

//   def word_search(doc_list, keyword):
//     """
//     Takes a list of documents (each document is a string) and a keyword. 
//     Returns list of the index values into the original list for all documents 
//     containing the keyword.

//     Example:
//     doc_list = ["The Learn Python Challenge Casino.", "They bought a car", "Casinoville"]
//     >>> word_search(doc_list, 'casino')
//     >>> [0]
//     """
//     result = []
//     for index in range(len(doc_list)):
//         list = doc_list[index]
//         for i in range(len(list)):
//             letter = list[i]
//             if not (keyword[0] == letter):
//                 continue
//             isIT = False
//             for n in range(i, len(list)):
//                 if not (list[n] == keyword[n-i]):
//                     isIT = False
//                     break
//             if isIT:
//                 result.push(index)
    
    
//     return result
// # Check your answer
// q2.check()




function word_search (doc_list, keyword) {
  let result = [];
  for (let doc_list_iterator = 0; doc_list_iterator < doc_list.length; doc_list_iterator++) {
    const string = doc_list[doc_list_iterator];

    for (let string_iterator = 0; string_iterator < string.length; string_iterator++) {
      if (string[string_iterator].toLowerCase() !== keyword[0].toLowerCase())
        continue;

      let isCorrect = true

      for (let firstCharMatchedIterator = 0; firstCharMatchedIterator < keyword.length && firstCharMatchedIterator < string.length; firstCharMatchedIterator++) {
        if ( string[firstCharMatchedIterator + string_iterator].toLowerCase() !== keyword[firstCharMatchedIterator].toLowerCase() ) {
          isCorrect = false;
          break;
        }
      }

      if (!(lettersToIgnore.includes(string[string_iterator -1]) && lettersToIgnore.includes(string[keyword.length + string_iterator])))
        continue;

      if (!isCorrect)
        continue;

      result.push(doc_list_iterator)

    }

  }
  return result;
}