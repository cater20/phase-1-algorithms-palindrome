function isPalindrome(word) {
  const len=word.length
  for (i=0; i<len/2 ; i++){
    if (word[i] === word[len - 1 - i]){
      return true
    }else {
      return false
    }
  }
  }



/* 
  Add your pseudocode here
  write ispalindrone function using fuction keywords 
  pass the string argument
  if the is a palindrone the function returns true
  and if function not palindrone it returns false.
  
*/

/*
  Add written explanation of your solution here
  what is a palindrone ,
  A string is a palindrome if it is read the same from forward or backward
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
