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
