[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-js-1](#code-js-1)
>        - [code-ts-1](#code-ts-1)

# Title

>[Directory](#Directory)

146.&nbsp;LRU Cache

<p>Design a data structure that follows the constraints of a <strong><a href="https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU" target="_blank">Least Recently Used (LRU) cache</a></strong>.</p>

<p>Implement the <code>LRUCache</code> class:</p>

<ul>
	<li><code>LRUCache(int capacity)</code> Initialize the LRU cache with <strong>positive</strong> size <code>capacity</code>.</li>
	<li><code>int get(int key)</code> Return the value of the <code>key</code> if the key exists, otherwise return <code>-1</code>.</li>
	<li><code>void put(int key, int value)</code> Update the value of the <code>key</code> if the <code>key</code> exists. Otherwise, add the <code>key-value</code> pair to the cache. If the number of keys exceeds the <code>capacity</code> from this operation, <strong>evict</strong> the least recently used key.</li>
</ul>

<p>The functions <code>get</code> and <code>put</code> must each run in <code>O(1)</code> average time complexity.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input</strong>
[&quot;LRUCache&quot;, &quot;put&quot;, &quot;put&quot;, &quot;get&quot;, &quot;put&quot;, &quot;get&quot;, &quot;put&quot;, &quot;get&quot;, &quot;get&quot;, &quot;get&quot;]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
<strong>Output</strong>
[null, null, null, 1, null, -1, null, -1, 3, 4]

<strong>Explanation</strong>
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= capacity &lt;= 3000</code></li>
	<li><code>0 &lt;= key &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= value &lt;= 10<sup>5</sup></code></li>
	<li>At most <code>2 * 10<sup>5</sup></code> calls will be made to <code>get</code> and <code>put</code>.</li>
</ul>


# Solution

## Method1

>[Directory](#Directory) | [Title](#Title) | [JavaScript](#code-js-1), [TypeScript](#code-ts-1)

### Code

#### code-js-1

>[Directory](#Directory) | [Title](#Title) | [Method1](#Method1) | [index-1.js](./index-1.js "index-1.js")

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

>[Directory](#Directory) | [Title](#Title) | [Method1](#Method1) | [index-1.ts](./index-1.ts "index-1.ts")

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

