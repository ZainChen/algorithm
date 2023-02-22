[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-js-1](#code-js-1)
>        - [code-ts-1](#code-ts-1)

# 标题

>[目录](#目录)

146.&nbsp;LRU 缓存

<div class="title__3Vvk">请你设计并实现一个满足&nbsp; <a href="https://baike.baidu.com/item/LRU" target="_blank">LRU (最近最少使用) 缓存</a> 约束的数据结构。</div>

<div class="title__3Vvk">实现 <code>LRUCache</code> 类：</div>

<div class="original__bRMd">
<div>
<ul>
	<li><code>LRUCache(int capacity)</code> 以 <strong>正整数</strong> 作为容量&nbsp;<code>capacity</code> 初始化 LRU 缓存</li>
	<li><code>int get(int key)</code> 如果关键字 <code>key</code> 存在于缓存中，则返回关键字的值，否则返回 <code>-1</code> 。</li>
	<li><code>void put(int key, int value)</code>&nbsp;如果关键字&nbsp;<code>key</code> 已经存在，则变更其数据值&nbsp;<code>value</code> ；如果不存在，则向缓存中插入该组&nbsp;<code>key-value</code> 。如果插入操作导致关键字数量超过&nbsp;<code>capacity</code> ，则应该 <strong>逐出</strong> 最久未使用的关键字。</li>
</ul>

<p>函数 <code>get</code> 和 <code>put</code> 必须以 <code>O(1)</code> 的平均时间复杂度运行。</p>
</div>
</div>

<p>&nbsp;</p>

<p><strong>示例：</strong></p>

<pre>
<strong>输入</strong>
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
<strong>输出</strong>
[null, null, null, 1, null, -1, null, -1, 3, 4]

<strong>解释</strong>
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
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= capacity &lt;= 3000</code></li>
	<li><code>0 &lt;= key &lt;= 10000</code></li>
	<li><code>0 &lt;= value &lt;= 10<sup>5</sup></code></li>
	<li>最多调用 <code>2 * 10<sup>5</sup></code> 次 <code>get</code> 和 <code>put</code></li>
</ul>


# 解

## 方法1

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-1), [TypeScript](#code-ts-1)

### 代码

#### code-js-1

>[目录](#目录) | [标题](#标题) | [方法1](#方法1) | [index-1.js](./index-1.js "index-1.js")

```JavaScript
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

>[目录](#目录) | [标题](#标题) | [方法1](#方法1) | [index-1.ts](./index-1.ts "index-1.ts")

```TypeScript
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

