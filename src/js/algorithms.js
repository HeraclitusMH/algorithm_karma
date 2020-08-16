/*
 Restituisce true se ad ogni elemento del primo Array corrisponde, con la stessa frequenza,
 un elemento del secondo array al quadrato.
*/

const samePow = (arr1,arr2) => {
    let res = false;
    if (arr1.length !== arr2.length){
        return false;
    }
    for(let i=0;i<arr1.length;i++){
        res = false;
        for(let x=0;x<arr2.length;x++){
            if(Math.pow(arr1[i],2) == arr2[x]){
                res = true;
                arr2.splice(x,1);
                break;
            }
        }
        if (res == false){
            return res;
        }
    }
    return res;
};

/*
 Frequency counter pattern
*/

const samePowRef = (arr1,arr2) => {
    if (arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1){
        if(!(Math.pow(key,2) in frequencyCounter2)){
            return false;
        }
        if (frequencyCounter1[key] !== frequencyCounter2[Math.pow(key,2)]){
            return false
        }
    }
    return true;
};

const samePowRef2 = (arr1,arr2) => {
    if (arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter = {};
    for (let val of arr1){
        frequencyCounter[val] ? frequencyCounter[val] +=1 : frequencyCounter[val] = 1;
    }
    for (let val of arr2){
        if(!(frequencyCounter[Math.sqrt(val)])){
            return false;
        } else {
            frequencyCounter[val] -= 1;
        }
    }
    return true;
};

/*
 Restituisce true se le due parole sono anagrammi
*/

const isValidAnagram = (str1,str2) => {
    if (str1.length !== str2.length){
        return false;
    }

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let letter of str1){
        frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) +1;
    }
    for (let letter of str2){
        frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) +1;
    }
    for (let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false;
        }
        if (frequencyCounter1[key] !== frequencyCounter2[key] ){
            return false;
        }
    }
    return true;
};

const isValidAnagramRef = (str1,str2) => {
    if (str1.length !== str2.length){
        return false;
    }
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let lookup = {}
    for (let letter of str1){
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let letter of str2){
        if (!lookup[letter]){
            return false;
        } else {
            lookup[letter] -= 1
        }
    }
    return true;
};

/*
 Restituisce le coppie di numeri che sommati restituiscono 0; sorted array;
*/

const sumIsZero = (arr) => {
    let res = '';
    for (let num of arr){
        if(num >= 0){
            break;
        }
        for ( let num2 of arr){
            num + num2 == 0 ? res += num+','+num2+';':res = res;
        }
    }
    
    return res == '' ? undefined : res;
};

const sumIsZeroRef = (arr) => {
    let res = '';
    let left = 0;
    let right = arr.length -1;
    while (left < right){
        let sum = arr[left] + arr[right]; 
        if (sum === 0){
           res += arr[left]+','+arr[right]+';';
           left ++;
           right --;
        } else {
        sum > 0 ? right -- : left ++ ;
        }
    }
    return res == '' ? undefined : res;
};

/*
 Restituisce il numero di valori unici nell'array; sorted array;
*/

/*
 Frequecy Counter
*/

const countUniqueValuesFq = (arr) => {
    let frequencyCounter = {};
    for (let val of arr){
       if(frequencyCounter[val]){
        frequencyCounter[val] += 1 
       } else {
        frequencyCounter[val] = 1;
       }  
    }
    return Object.keys(frequencyCounter).length;
};

/*
 Multiple Pointers
*/

const countUniqueValuesMp = (arr) => {
    if(arr.length == 0){
         return 0;
        }
    let i = 0;
    for (let j = 1; j < arr.length; j++){
        if (arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
};

/*
 Accetta un array di interi e un numero. La funzione calcola la massima somma data da n numeri
 consecutivi nell'array
*/

const maxSubarraySum = (arr,n) => {
    if (n > arr.length){
        return null;
    }
    let maxSum = -Infinity;
    for (let i = 0; i < arr.length - n + 1; i++){
        let currentSum = 0;
        for(let j = 0; j < n; j++){
           currentSum += arr[i+j];
        }
        currentSum > maxSum ? maxSum = currentSum : currentSum;
    }
return maxSum;
};

/*
 Sliding Window Pattern
*/

const maxSubarraySumRef = (arr,n) => {
    if (n > arr.length){
        return null;
    }
    let maxSum = 0;
    for (let i = 0; i < n; i++){
        maxSum += arr[i];
    }
    let tempSum = maxSum;
    for (let i = n; i < arr.length; i++){
        tempSum = tempSum - arr[i-n] + arr[i];
        tempSum > maxSum ? maxSum = tempSum : tempSum;
    }
    return maxSum;
};

/*
 Return the factorial, made with recursion
*/

const factorial = (num) => {
    if (num === 1 || num === 0){
        return 1;
    }
     return num * factorial(num-1);
};

/*
 Return the odds numbers, made with pure recrusion
*/

const collectOddNumbers = (arr) => {
    let newArr = [];
    if (arr.length === 0){
        return newArr;
    }
    if (arr[0]%2 !== 0){
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddNumbers(arr.slice(1)));
    return newArr;
};

/*
 Return the smallest missing number > 0
*/

const missingInteger = (arr) => {
    let sorted = mergeSort(arr);
    let findOne = binarySearch(sorted,1);
    if(findOne !== -1){
        let positiveArr = sorted.slice(findOne);
        for(i = 0; i < positiveArr.length; i++){
            if(positiveArr[i] + 1 !== positiveArr[i+1] ){
                return positiveArr[i] + 1;
            }
        }
    } else {
        return 1
    }
}

const missingIntegerRef = (arr) => {
    let dictionary = {};
    for (let val of arr){
        dictionary[val] = val;
    }
    let length = Object.keys(dictionary).length;
    for(var i = 1; i <= length; i++){
        if(!dictionary[i]){
            return i
        }
    }
    if(length > 0){
        return dictionary[i - 1] + 1
    } else {
        return 1;
    }
}

const missingIntegerRefBetter = (arr) => {
    let dictionary = {};
    for (let val of arr){
        dictionary[val] = val;
    }
    let i = 1;
    while(true){
        if(typeof dictionary[i] === "undefined"){
            return i
        }
        i++;
    }
}



function main(input) {
    let counter = 0;
    let a = [];
    let b = [];
   for(s in input){
       if (!isNaN(s)){
           if(counter < 2){
               a.push(s);
               counter++;
           } else {
               b.push(s);
               counter++;
           }
       }
   }
   return res(a,b);
}

const res = (a,b) => {
    let t1=0;
    let t2=0;
    for(let i=0;i<=3;i++){
        if(a[0][i]>b[0][i]){
            t1+=1;
        }  if(a[0][i]<b[0][i]){
            t2+=1;
        }
    }
    return(t1,t2);
}

 //process.stdout.write(input[4]);