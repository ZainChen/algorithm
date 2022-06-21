[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法一](#方法一)
>        - [code-js-1](#code-js-1)
>        - [code-ts-1](#code-ts-1)

# 标题

>[目录](#目录)

146.&nbsp;LRU 缓存

请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
实现 LRUCache 类：
- LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
- int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
- void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。

函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

示例：
```
输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
```

提示：
- 1 <= capacity <= 3000
- 0 <= key <= 10000
- 0 <= value <= 105
- 最多调用 2 * 105 次 get 和 put

# 解

## 方法一

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-1), [TypeScript](#code-ts-1)

map 方法, 如果需要更深入, 需要手写双向链表

### 分析

...

### 代码

#### code-js-1

>[目录](#目录) | [标题](#标题) | [分析](#方法一) | [index-1.js](./index-1.js "index-1.js")

```js
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.maxSize = capacity
  this.cache = new Map()
  return null
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value)
    return value
  } else {
    return -1
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (!this.cache.get(key) && this.cache.size === this.maxSize) {
    this.cache.delete(this.cache.keys().next().value)
  } else {
    this.cache.delete(key)
  }
  this.cache.set(key, value)
  return null
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const lRUCache = new LRUCache(2);
let prints = [null]
lRUCache.put(1, 1); // 缓存是 {1=1}
prints.push(null)
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
prints.push(null)
let cacheValue = lRUCache.get(1);    // 返回 1
prints.push(cacheValue)
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
prints.push(null)
cacheValue = lRUCache.get(2);    // 返回 -1 (未找到)
prints.push(cacheValue)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
prints.push(null)
cacheValue = lRUCache.get(1);    // 返回 -1 (未找到)
prints.push(cacheValue)
cacheValue = lRUCache.get(3);    // 返回 3
prints.push(cacheValue)
cacheValue = lRUCache.get(4);    // 返回 4
prints.push(cacheValue)

// (10) [null, null, null, 1, null, -1, null, -1, 3, 4]
console.log(prints)

const lRUCache2 = new LRUCache(2);
prints = [null]
lRUCache2.put(2, 1); // 缓存是 {2=1}
prints.push(null)
lRUCache2.put(1, 1); // 缓存是 {2=1, 1=1}
prints.push(null)
lRUCache2.put(2, 3); // 替换关键字 2 的值，缓存是 {1=1, 2=3}
prints.push(null)
lRUCache2.put(4, 1); // 该操作会使得关键字 1 作废，缓存是 {2=3, 4=1}
prints.push(null)
cacheValue = lRUCache2.get(1);    // 返回 -1 (未找到)
prints.push(cacheValue)
cacheValue = lRUCache2.get(2);    // 返回 -1
prints.push(cacheValue)

// (7) [null, null, null, null, null, -1, 3]
console.log(prints)
```

#### code-ts-1

>[目录](#目录) | [标题](#标题) | [分析](#方法一) | [index-1.ts](./index-1.ts "index-1.ts")

```ts
class LRUCache {
  constructor(capacity: number) {
    this.maxSize = capacity
    this.cacheMap = new Map<number, number>()
  }

  maxSize: number

  cacheMap: Map<number, number>

  get(key: number): number {
    if (this.cacheMap.has(key)) {
      const value = this.cacheMap.get(key)
      this.cacheMap.delete(key)
      this.cacheMap.set(key, value)
      return value
    } else {
      return -1
    }
  }

  put(key: number, value: number): void {
    if (!this.cacheMap.has(key) && this.cacheMap.size === this.maxSize) {
      this.cacheMap.delete(this.cacheMap.keys().next().value)
    } else {
      this.cacheMap.delete(key)
    }
    this.cacheMap.set(key, value)
    return null
  }
}

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

const lRUCache = new LRUCache(2);
let prints: number[] = [null]
lRUCache.put(1, 1); // 缓存是 {1=1}
prints.push(null)
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
prints.push(null)
let cacheValue = lRUCache.get(1);    // 返回 1
prints.push(cacheValue)
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
prints.push(null)
cacheValue = lRUCache.get(2);    // 返回 -1 (未找到)
prints.push(cacheValue)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
prints.push(null)
cacheValue = lRUCache.get(1);    // 返回 -1 (未找到)
prints.push(cacheValue)
cacheValue = lRUCache.get(3);    // 返回 3
prints.push(cacheValue)
cacheValue = lRUCache.get(4);    // 返回 4
prints.push(cacheValue)

// (10) [null, null, null, 1, null, -1, null, -1, 3, 4]
console.log(prints)

const lRUCache2 = new LRUCache(2);
prints = [null]
lRUCache2.put(2, 1); // 缓存是 {2=1}
prints.push(null)
lRUCache2.put(1, 1); // 缓存是 {2=1, 1=1}
prints.push(null)
lRUCache2.put(2, 3); // 替换关键字 2 的值，缓存是 {1=1, 2=3}
prints.push(null)
lRUCache2.put(4, 1); // 该操作会使得关键字 1 作废，缓存是 {2=3, 4=1}
prints.push(null)
cacheValue = lRUCache2.get(1);    // 返回 -1 (未找到)
prints.push(cacheValue)
cacheValue = lRUCache2.get(2);    // 返回 -1
prints.push(cacheValue)

// (7) [null, null, null, null, null, -1, 3]
console.log(prints)
```
