/* find the longest substring without repeating characters

"aejfabcs"  should return abc */

function longestSubstring(s){
    let charObj = []
    let l = 0;   //left  ,r=right
    let maxLength = 0;
    let subString ="";

    for(let r=0;r<s.length;r++){
        let char = s[r]
        if(charObj[char] && charObj[char] > l){ // if we have already found the char and char found is within the window
            l = charObj[char]+1                    //we are moving the starting point of the window(l) to the point where we already have that char in sequence + 1 to exclude that char from window 
        }

        charObj[char] = r

        let currentWindowLength = r-l+1;

        if(currentWindowLength > maxLength){
            maxLength = currentWindowLength;
            subString = s.slice(l,r+1)       // extract that window
        }

    }
    return {subString,maxLength}
}

/* find the longest repeating character sequence

"abdeffffffcccvfds" should return the "ffffff" and 6
 */

function longestRepeatingCharSequence(s){
    let charObj = {};
    let l = 0;
    let subString='';
    let maxLength=0;
    let count = 1;                                                    // we are keeping count as 1 bcoz when its found for first time, we are not incrementing the count 
    let repeatingChar=''

    for(let r =0;r<s.length;r++){
       let char = s[r];
       if(repeatingChar !== char) count=1
       if(charObj[char] && charObj[char]+1 == r){
           count++;
           l=r-count + 1;                                            //r-count is left pointer stands before the start of seq,hence r-count+1
           repeatingChar = char
       }
          
       charObj[char] = r
       
       if(count>maxLength){
        maxLength = count
        subString = s.slice(l,r+1)
       }
    }
    return {maxLength,subString}
}

console.log(longestRepeatingCharSequence("sandssssshhsaaaaaaaa"))