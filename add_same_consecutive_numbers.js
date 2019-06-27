// Problem Statement:: To add numbers which are same and consecutive in an array
// Sample input:: [1,4,4,4,0,4,3,3,1]
// Sample output:: [1,12,0,4,6,1]

function consecutiveSum(arr) {
  let sumArr = [];
  let i = 0;
  for(i;i < arr.length;i++) {
    if(arr[i] !== arr[i-1]) {
      sumArr.push(arr[i]);
    } else {
       sumArr[sumArr.length-1] += arr[i];
    }
  }

  return sumArr;
}

var arr = [1,4,4,4,0,4,3,3,1];
consecutiveSum(arr);