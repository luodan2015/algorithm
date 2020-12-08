/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let obj = {};
  const len = nums.length;
  for(let i = 0; i < len; i++) {
    const num = nums[i];
    if (num in obj) {
      return [obj[num], i];
    }
    obj[target - num] = i;
  }
};
// @lc code=end

