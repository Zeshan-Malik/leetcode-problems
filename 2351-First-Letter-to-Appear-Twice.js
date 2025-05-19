// ---------------------Problem Statement------------------------

// 2351. First Letter to Appear Twice

// Given a string s consisting of lowercase English letters, return the first letter to appear twice.

// Note:

// A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
// s will contain at least one letter that appears twice.



// ---------------------------Solution-------------------------------



const repeatedCharacter = (s) => {
    let data = {}
    for (i = 0; i < s.length; i++) {
        data[s[i]] = (data[s[i]] || 0) + 1;

        if (data[s[i]] == 2) {
            return s[i]
        }
    }
};

console.log(repeatedCharacter('abccbaacz'))