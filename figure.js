let n = 10;
let row = 1;
while(row<=n){
    let emptystring = "";
    let plusstring = "";
    for(let i=1; i<=n-row; i++){
        emptystring+=" ";
    }
    for(let a=1; a<=row; a++){
        plusstring+="+";
    }
    arr=emptystring+plusstring;
    console.log(arr);
    row++;
}