function indexLetters(str) {

  var result = {};

  for (var i = 0; i < str.length; i++) {
    if (result[str[i]]){
      result[str[i]].push(i);
    } else {
      result[str[i]] = [i];
    }
  }

delete result[' '];

return result;

}

console.log(indexLetters("lighthouse in the house"));