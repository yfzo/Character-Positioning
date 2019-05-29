function indexLetters(str) {

  var chars = str.split(' ').join('');

  var result = {};

  for (var i = 0; i < chars.length; i++) {
    if (result[chars[i]]){
      result[chars[i]].push(i);
    } else {
      result[chars[i]] = [i];
    }
  }

return result;

}

console.log(indexLetters("Lighthouse in the house"));