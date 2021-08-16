//1

{1,2,3,4}

//2
["r" "e" "f"].join("")

"ref"

//3
0:{Array(3) => true}
1:{Array(3) => false}



//4 
const hasDuplicate = arr => new Set(arr).size !== arr.length// set only accepts one of each variable

//5

function isVowel(char){
    return "aeiou".includes(char);
  }
  
  function vowelCount(string){
    const vowelMap = new Map();
    for(let char of string){
      let lowerCaseChar = char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }



//code adapted from: http://curric.rithmschool.com/springboard/exercises/js-maps-sets/solution/index.html
