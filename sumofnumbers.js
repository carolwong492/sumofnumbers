const testNums = [1, 2, 3, 4, 5];

function sumFor(nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}
console.log(sumFor(testNums));

function sumWhile(nums) {
  let sum = 0;
  let index = 0;
  while (index < nums.length) {
    sum += nums[index];
    index++;
  }
  return sum;
}
console.log(sumWhile(testNums));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.splice(1, nums.length));
}
console.log(sumRecursion(testNums));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, sec) { return memo + sec; });
}
console.log(sumTheSimpleWay(testNums));
