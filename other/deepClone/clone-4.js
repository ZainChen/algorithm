/**
 * 深拷贝，第三版（性能优化，优化前）
 * @param {*} target 待拷贝的对象
 */
function cloneFor(target, map = new WeakMap()) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return target;
        }
        map.set(target, true);
        for (const key in target) {
            cloneTarget[key] = cloneFor(target[key], map);
        }
        return cloneTarget;
    } else {
        return target;
    }
};

/**
 * 通用 forEach，用 while 实现
 * @param {*} array 待遍历的数组
 * @param {*} func 遍历元素的回调函数
 */
function forEach(array, func) {
    let index = 0;
    while (array && index < array.length) {
        func(array[index], index);
        index++;
    }
    return array;
}

function cloneWhile(target, map = new WeakMap()) {
    if (typeof target === 'object') {
        const isArray = Array.isArray(target);
        const cloneTarget = isArray ? [] : {};
        if (map.get(target)) {
            return target;
        }
        map.set(target, true);
        const keys = isArray ? undefined : Object.keys(target);
        forEach(keys || target, (value, key) => {
            if (keys) {
                key = value;
            }
            cloneTarget[key] = cloneWhile(target[key], map);
        });
        return cloneTarget;
    } else {
        return target;
    }
}

// const target = {
//     field1: 1,
//     field2: undefined,
//     field3: {
//         child: 'child'
//     },
//     field4: [2, 4, 8]
// };
// target.target = target;

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
};
target.target = target;

console.time();
const result1 = cloneFor(target);
console.timeEnd();
console.log(result1);

console.time();
const result2 = cloneWhile(target);
console.timeEnd();
console.log(result2);
