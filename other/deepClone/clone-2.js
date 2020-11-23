/**
 * 深拷贝，第二版（考虑数组）
 * @param {*} target 待拷贝的对象
 */
function clone(target) {
    if (typeof target === 'object') {
        let cloneResult = Array.isArray(target) ? [] : {};
        for (const key in target) {
            cloneResult[key] = clone(target[key]);
        }
        return cloneResult;
    } else {
        return target;
    }
}

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};

const result = clone(target);

console.log(JSON.stringify(result, null, 2));
