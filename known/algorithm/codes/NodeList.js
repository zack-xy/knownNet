//声明链表节点
class Node {
  constructor(value) {
    this.val = value
    this.next = null
  }
}


// 声明链表的数据结构
class NodeList {
  constructor(arr) {
    let head = new Node(arr.shift())
    let next = head
    arr.forEach(item => {
      next.next = new Node(item)
      next = next.next
    })
  }
}


//交换两个节点的值
let swap = (p, q) => {
  let val = p.val
  p.val = q.val
  q.val = val
}

// 寻找基准元素的节点
let partion = (begin, end) => {
  let val = begin.val
  let p = begin
  let q = begin.next
  while (q != end) {
    if (q.val < val) {
      p = p.next
      swap(p, q)
    }
    q = q.next
  }
  swap(p, begin)
  return p
}


// 链表排序—快排
function sort (begin, end = null) {
  if (begin !== end) {
    let part = partion(begin, end)
    sort(begin, part)
    sort(part.next, end)
  }
}


// 链表结构转数组
function nodeListToArray (node) {
  let arr = []
  while (node) {
    arr.push(node.val)
    node = node.next
  }
  return arr
}

// 反转链表
function reverseNodeList (head) {
  let prev = null
  let curr = head
  while (curr) {
    let cnext = curr.next
    curr.next = prev ? prev : null
    prev = curr
    curr = cnext
  }
  return prev
}


let head = new NodeList([4, 1, 3, 2, 7, 9, 10, 12, 6])