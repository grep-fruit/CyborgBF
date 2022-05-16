// remove dashes and each word after dash to uppercase. use split and join


// function camelize(str){
//   str.split('-')
//   str.map((word,index) => index ===0 ? word : word [0].toUpperCase()+word.slice(1))
//   console.log(str)
// }
//
// camelize("my-short-array")
function camelize(str) {
  return str.split('-')
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}

console.log(camelize("border-left-width"))
