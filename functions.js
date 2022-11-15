//(1)find n's factorial
function findFactorial(n){
    let factorial=1;
    for(let i=1; i<=n; i++){
        factorial*=i;
    }
    console.log("the factorial of " + n + " is equal to " + factorial);
}

//findFactorial(4)



//(2)find gcd of two gien integers
function findGcd(n1, n2){
    let origin1=n1;
    let origin2=n2;
    while(n1%n2>0){
        temp=n2;
        n2=n1%n2;
        n1=temp;   
    }
    return n2;
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
    while(num%16>0){
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

//findHex(34);

module.exports = {
    findFactorial,
    findGcd,
    findLcm,
    findHex
}