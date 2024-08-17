// Your code here
function isPalindrome(stringToTest){
    let reversedString=stringToTest.split("").reverse().join("");
    if(stringToTest===reversedString){
        return true;
    } else {
        return false;
    }
}
export default isPalindrome;