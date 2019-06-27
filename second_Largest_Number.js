// Problem Statement:: To find the second largest number
// Sample input :: [8,5,4,19,20,21,7,6,3]
// Sample output:: 20

function secondLarge(arr) {
  let i = 0;
let largest = -1;
let secondLargest = -1;
for(i; i <= arr.length; i++) {
  if(arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if(arr[i] < largest && arr[i] > secondLargest) {
    secondLargest = arr[i];
  }
}
  return secondLargest;
}

var arr = [8,5,4,19,20,21,7,6,3];
secondLarge(arr);
