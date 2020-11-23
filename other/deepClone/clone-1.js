/**
 * 深拷贝，第一版（只考虑递归）
 * @param {*} target 待拷贝的对象
 */
function clone(target) {
    if (typeof target === 'object') {
        let cloneResult = {};
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
    field3: 'ConardLi',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    },
    field5: [1, 2]
};

const result = clone(target);

console.log(JSON.stringify(result, null, 2));
