function validAnagram(string1, string2){
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for( let char of string1) {
        char = char.toLowerCase();
        frequencyCounter1[char] = ++frequencyCounter1[char] || 1;
    }
    
    for( let char of string2) {
        char = char.toLowerCase();
        frequencyCounter2[char] = ++frequencyCounter2[char] || 1;
    }
    
    for( let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
        else if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }
    return true;
  }

  console.log(validAnagram( '', ''))
  console.log(validAnagram( 'aaz', 'zza'))
  console.log(validAnagram( 'cinema', 'iceman'))

