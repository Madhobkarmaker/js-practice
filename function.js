function iloveyou(){
    console.log('prem valobasa hudai');
    console.log('asholei eigula faltu');
}
iloveyou();


function doubleIt(num){
    var result = num*2;
    console.log(result);
}
doubleIt(200);
doubleIt(300);



function doubleIt(num){
    var result = num*2;
    return result;
}
var first = doubleIt(100);
var second = doubleIt(500);
var total = first + second ;
console.log(total);



function add(num1, num2){
    var result = num1 + num2 ;
    return result;
}
console.log(add(12,15));