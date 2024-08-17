// Your tests here
// implement a palindrome word that reads the same forwards and backwards
import isPalindrome from "../utils";
describe("isPalindrome", ()=>{
    it("accepts a string as an argument and returns true if the string is a palindrome and false if it isn't", ()=>{
        let keyedInString="radar";
        let palindromeValidator=isPalindrome(keyedInString);
        expect(palindromeValidator).toBe(true);
    })
})