/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal1 = function(root, arr = []) {
  if (root) {
    arr.push(root.val);
    preorderTraversal1(root.left, arr);
    preorderTraversal1(root.right, arr);
  }
  return arr;
};

// 迭代
var preorderTraversal = function(root) {
  const res = [];
  const stack = [];
  let cur = root;
  while(cur || stack.length > 0) {
    while(cur) {
      res.push(cur.val);
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    cur = cur?.right;
  }
  return res;
};

// @lc code=end

