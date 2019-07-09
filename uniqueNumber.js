let arr = [1, 2, 3, 4, 3, 2, 1];


let obj = {};

let i = 0;

function uniqueNumber(arr) {
  for(i;i< arr.length;i++) {
    if(obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] += 1;
    } else
      obj[arr[i]] = 1;
  }
  
  return obj;
}


let result = uniqueNumber(arr);

Object.keys(result).reduce((a, b) => obj[a] < obj[b] ? a: b)