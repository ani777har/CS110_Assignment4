//(1)find n's factorial
function findFactorial(n){
    let factorial=1;
    for(let i=1; i<=n; i++){
        factorial*=i;
    }
    return factorial;
    
}   

//findFactorial(4)



//(2)find gcd of two gien integers
function findGcd(n1, n2){
    let curnum1=n1;
    let curnum2=n2;
    while(curnum1%curnum2>0){
        temp=curnum2;
        curnum2=curnum1%curnum2;
        curnum1=temp;   
    }
    return curnum2;
}
//console.log("gcd is "  + findGcd(24, 16));



//(3)find lcm of two given integers
function findLcm(m1, m2){
    let originm1=m1;
    let originm2=m2;
    let product=m1*m2;
    let gcd = findGcd(m1,m2);
    lcm = product/gcd;
    console.log("lcm of " + originm1 + " and " + originm2 + " is " +lcm);
}

//findLcm(17,2);


//(4)find corresponding hexadecimal number
function findHex(num){
    let originnum=num;
    let reverse="";
    let hex="";
    let letters="ABCDEF";
    if(num===0){
        hex+=0;
    }
    while(num/16>0){
        if(num%16>=10){
            reverse+=letters[num%16-10];
        } else {
            reverse+=num%16;
        }
        num=Math.floor(num/16);
    }
    for(i=reverse.length-1; i>=0; i--){
        hex+=reverse[i];
    }
   
    console.log("the corresponding hexadecimal number of " + originnum + " is " + hex);

}

//findHex(0);

function factorialText(num){
    console.log("the factorial of " + num + " is equal to " + findFactorial(num));

}
//Factorialtext(5)
function gcdText(num1, num2){
    console.log("gcd of " + num1 + " and " + num2 + " is " + findGcd(num1, num2));
}



module.exports = {
    findFactorial,
    findGcd,
    findLcm,
    findHex,
    factorialText,
    gcdText
}
