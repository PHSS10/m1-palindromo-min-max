function isPalindrome(str){
    
    const conversao = str.toLowerCase().replaceAll(" ","");
    const ultimaString = conversao.length -1;
    let result = ""
    
    for(let i = ultimaString; i >= 0; i--){
   
        result= result + conversao[i] ;
       
    }
    if(result == conversao){
        return true;
    } 
    
    return false;
}

function arrayMaxMin(arr){
    
    let valorMax = arr[0];
    let valorMin = arr[0];
    let novoArr = [valorMin, valorMax];
    
    for(let i = 0; i < arr.length; i ++){

        if(arr[i] >= valorMax){
            
            valorMax = arr[i];
        } 
        else if(arr[i] <= valorMin){
            
            valorMin = arr[i]; 
        }
    }
    
   novoArr=[valorMin ,valorMax];
   return novoArr;
}

    