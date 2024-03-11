function isPalindrome(str){
    let ultimaString = str.toLowerCase().length -1;
    let result = ""
    
    for(let i = ultimaString; i >= 0; i--){

        result= str[i] + result ;
        console.log(result);
    }
    if(result == str){
        return true
    } 
    
    return false
}
console.log(isPalindrome("Anilina"))
