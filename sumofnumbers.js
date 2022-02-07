function sumFor(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sumWhile(arr) {
  let i = 0;
  let sum = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

function sumRecursion(arr, n) {
  if (n <= 0) {
    return 0;
  }
  return sumRecursion(arr, n - 1) + arr[n - 1];
}

function sumTheSimpleWay(arr) {
  return _.reduce(arr, function (memo, num) { return memo + num; });
}

console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4], 4));
console.log(sumTheSimpleWay([1, 2, 3, 4]));
