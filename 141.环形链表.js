/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 时间复杂度O(n)空间复杂度O(n)
var hasCycle1 = function(head) {
  // 也可以使用对象Map
  let cache = new Set();
  while(head) {
    if (cache.has(head)) {
      return true;
    }
    cache.add(head);
    head = head.next;
  }
  return false;
};
// 空间复杂度O(1)
var hasCycle = function(head) {
  // 操场跑圈，只要是个圈，跑的快的一定会把跑的慢的套圈
  let slow = head;
  let fast = head;
  while(fast?.next) {
    slow = slow.next;
    fast = fast.next?.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};
// @lc code=end

