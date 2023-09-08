var arr=[20,17,98,18,87,2,5,47,101];
document.write("The Given array is["+arr+"]<br><br>")
var prime;
document.write("The prime numbers from given array:"+"<br>")
function primeNum(arr){
var primeValue=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]==2){
        prime=true;
    }
    for(j=2;j<arr[i];j++){
        prime=true;
        if(arr[i]%j==0){
            prime=false;
            break;
        }
    }
    if(prime==true){
        // document.write(arr[i]+"<br>");
        primeValue.push(arr[i]);
    }
}
return primeValue;
}
var output=primeNum(arr);
document.write(output)