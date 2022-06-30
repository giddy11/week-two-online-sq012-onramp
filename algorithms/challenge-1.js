function isAnagram(str1, str2) {
    let newStr1= str1.split("").sort().join('');
    let newStr2= str2.split("").sort().join('');
    
        if (newStr1  === newStr2  ){
           return true
        }
        else return false
}

console.log(isAnagram("india", "nidia"));
module.exports = isAnagram