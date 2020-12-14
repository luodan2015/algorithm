class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkNodeList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  // 增加
  append(element) {
    const node =  new Node(element);
    if (this.head) {
      let cur = this.head;
      while(cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    } else {
      this.head = node;
    }
    this.length += 1;
  }

  // 删除
  removeAt(index) {
    let cur = this.head;
    if (index === 0) {
      this.head = cur.next;
      cur.next = null;
      this.length -= 1;
      return;
    }
    if (index < this.length) {
      let i = 0;
      let pre = null;
      while (i < index) {
        pre = cur;
        cur = cur.next;
        i++;
      }
      pre.next = cur.next;
      cur.next = null;
      this.length -= 1;
    }
  }

  // 打印
  print() {
    let cur = this.head;
    const res = [];
    while(cur) {
      res.push(cur.element);
      cur = cur.next;
    }
    return res.join(' ');
  }
}

// 测试
const linkNode = new LinkNodeList();
linkNode.append('hello');
linkNode.append('world');
linkNode.append('!!!');
console.log(linkNode.print());
linkNode.removeAt(1);
console.log(linkNode.print());
