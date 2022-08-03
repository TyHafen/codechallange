//Palindrome with linear reversal
function palindrome(word) {
     let reversed = ""
    for (let i = word.length-1 ; i >= 0; i--){
       
        reversed += word[i]

    }
    if (word.toLowerCase() === reversed.toLowerCase()) {
        return "It is a pal"
    } return false + " It isnt a pal"

}
//Reverse string with logarithmic O
function reverseStr(word) {
    let rev =  word.split("").reverse().join("")
    return rev
}
//Anagram
function anagram(word1, word2) {
    if (word1.length !== word2.length) {
        return "words arent same length"
    }
    const hist = {}
    for (let i = 0; i < word1.length; i++){
        if (!hist[word1[i]]) hist[word1[i]] = 0
        if (!hist[word2[i]]) hist[word2[i]] = 0
        console.log(hist)
        hist[word1[i]]++
        hist[word2[i]]--
    }
    console.log(hist);
    for (let ch in hist) {
        if(hist[ch] !==0) return false
    }
    return 'WOrds are anagrams'

}

//reverse integer
function reverseInteger(num){
    const reverseStr = num.toString().split("").reverse().join("")
    
    return parseInt(reverseStr) *Math.sign(num)
}

//Capitalize the first letter
function capitalizeLetters(str) {
    // const strArray = str.toLowerCase().split("")
    // for (let i = 0; i < strArray.length; i++) {
    //      strArray[i] = str[i].substring(0, 1).toUpperCase() + strArray[i].substring(1)
        
    // } return strArray.join(' ')


    return str
        .toLowerCase()
        .split(" ")
        .map(word => word[0].toUpperCase() + word.substring(1))
    .join(" ")
}


// Max character

function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';
    str.split('').forEach(function (char) {
        if (charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    })
    for (let char in charMap) {
        if (charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    return (maxChar + ":" + maxNum)
}


//FIZZBUZZ

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("fizzBuzz");
        }
       else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 ===0)  {
            console.log("buzz");
        } else {
            console.log(i);
        }
        
    }
}


class Lode{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }    
    
    insert(data) {
        let node = new Lode(data);
        if (this.head == null)
        {
            this.head = node; 
            this.size++
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
            this.size++;
            }
    }

    remove(data) {
        if (this.head == null) {
            return -1;
        }
        let current = this.head;
        let prev = null;
        while (current != null) {
            if (current.data == data) {
                if (prev != null) {
                    this.head = current.next;
                }
            }
        }
    }
}

function maxChar(word) {
    const charSet = {};
    let maxNum = 0;
    let maxChar = ''

    word.split('').forEach(function (char) {
        
        if (charSet[char]) {
            charSet[char]++
        } else charSet[char] = 1
    })
    for (let char in charSet) {
        if (charSet[char] > maxNum) {
            maxNum = charSet[char];
            maxChar = char;
        }
    }
    console.log(maxChar + ':' + maxNum);
}

function  smallest(str) {
    const strArray = str.split(" ");
    let min = strArray[0];
    let max = strArray[0];
    for (let i = 0; i < strArray.length; i++){
        if (strArray[i].length < min.length) {
            min = strArray[i];
        }
    }
      for (let i = 0; i < strArray.length; i++){
        if (strArray[i].length > max.length) {
            max = strArray[i];
        }
    }

    console.log(min , max);
}
    let string = "Hello everybody my name is T"
smallest(string)
