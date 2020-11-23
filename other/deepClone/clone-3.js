/**
 * 深拷贝，第三版（考虑循环引用）
 * @param {*} target 待拷贝的对象
 */
function clone(target, map = new WeakMap()) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return target;
        }
        map.set(target, true);
        for (const key in target) {
            cloneTarget[key] = clone(target[key], map);
        }
        return cloneTarget;
    } else {
        return target;
    }
};

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.target = target;

const result = clone(target);

console.log(result);
