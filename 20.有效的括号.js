/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const obj = { '(': ')', '[': ']', '{': '}' };
  const len = s.length;
  for (let i = 0; i < len; i++) {
    const str = s[i];
    if (str in obj) {
      stack.push(str);
    } else {
      if (str !== obj[stack.pop()]) {
        return false;
      }
    }
  }
  return !stack.length;
};
// @lc code=end

