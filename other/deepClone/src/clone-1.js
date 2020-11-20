/**
 * 深拷贝，第一版
 * @param {*} target 待拷贝的对象
 */
module.exports = function clone(target) {
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
