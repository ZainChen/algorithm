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
