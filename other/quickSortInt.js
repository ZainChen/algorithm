/**
 * 整形数组快速排序
 * @param {*} array 待排序的数组
 * @param {*} low 左区间
 * @param {*} high 右区间
 * @return 待排序的数组
 * 例子:
 * const zainArray = [2, 1, 4, 5, 3, 8, 7, 9, 0, 6];
 * quickSortInt(zainArray, 0, zainArray.length);
 * console.log(zainArray);
 */
function quickSortInt(array, low, high) {
    if (low >= high) {
        return;
    }
    // 标记参考值
    let markValue = array[low];
    // 当前底下标
    let currentLow = low +1;
    // 当前高下标
    let currentHigh = high - 1;
    while(currentLow < currentHigh) {
        while(currentLow < currentHigh && array[currentLow] < markValue) {
            currentLow++;
        }
        while(currentLow < currentHigh && array[currentHigh] > markValue) {
            currentHigh--;
        }
        if (currentLow === currentHigh) {
            break;
        }
        [array[currentLow], array[currentHigh]] = [array[currentHigh], array[currentLow]];
    }
    if(array[low] > array[currentHigh]) {
        [array[low], array[currentHigh]] = [array[currentHigh], array[low]];
    }
    quickSortInt(array, low, currentLow - 1);
    quickSortInt(array, currentLow + 1, high - 1);
    return array;
}

const zainArray = [2, 1, 4, 5, 3, 8, 7, 9, 0, 6];
quickSortInt(zainArray, 0, zainArray.length);
console.log(zainArray);
