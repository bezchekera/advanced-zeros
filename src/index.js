module.exports = function getZerosCount(number, base) { 


  let arr = [], extentR=[]; basisR=[] ;
  let base1=base; 
  let flag; 
  
  for(var i = 2; i <= base; i++){ 
  flag=0; 
  baze1=base; 
  let count=0; 
  for (let j = 2; j <= i; j++){ 
  if (i % j == 0) { flag++; } 
  } 
    if (((flag==1) && (base % i == 0)) ) { 
  while (baze1 % i == 0) {count++; baze1=baze1 / i;} 
  
  arr.push(i); 
  extentR.push(count); 
  } 
  } 
  var res = 0;
  var zeroCount=zero0=number;
 var num=number;

 for  (let i = 0; i<extentR.length; i++){ 
  num=number;
  res = 0;
  while(num > 0)
    {
      num = Math.floor(num / arr[i]);
     
      res += num;
    }
    zero0=Math.floor(res/extentR[i]);
  if (zero0<zeroCount) {zeroCount=zero0;}
  }
  return zeroCount;
  //count=count.toString(base); 
  // your implementation 
  //return zerosCount; 
  }