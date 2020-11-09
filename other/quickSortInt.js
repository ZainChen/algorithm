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
function quickSortInt2(array, low, high) {
    if (low < high) {
        let smallIndex = low;
        const pivot = array[high];
        for (let i = low; i < high; i++) {
            if (array[i] < pivot) {
                [array[i], array[smallIndex]] = [array[smallIndex], array[i]];
                smallIndex++;
            }
        }
        [array[smallIndex], array[high]] = [array[high], array[smallIndex]];
        quickSortInt2(array, low, smallIndex - 1);
        quickSortInt2(array, smallIndex + 1, high);
    }
    return array;
}

const zainArray2 = [2, 1, 4, 5, 3, 8, 7, 9, 0, 6];
quickSortInt2(zainArray2, 0, zainArray2.length - 1);
console.log(zainArray2);


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
function quickSortInt1(array, low, high) {
    if (low >= high) {
        return;
    }
    // 标记参考值
    let markValue = array[low];
    // 当前底下标
    let currentLow = low +1;
    // 当前高下标
    let currentHigh = high;
    while(currentLow < currentHigh) {
        while(currentLow < currentHigh && array[currentHigh] > markValue) {
            currentHigh--;
        }
        while(currentLow < currentHigh && array[currentLow] < markValue) {
            currentLow++;
        }
        if (currentLow === currentHigh) {
            break;
        }
        [array[currentLow], array[currentHigh]] = [array[currentHigh], array[currentLow]];
    }
    if(array[low] > array[currentHigh]) {
        [array[low], array[currentHigh]] = [array[currentHigh], array[low]];
    }
    quickSortInt1(array, low, currentLow - 1);
    quickSortInt1(array, currentLow + 1, high);
    return array;
}

const zainArray = [2, 1, 4, 5, 3, 8, 7, 9, 0, 6];
quickSortInt1(zainArray, 0, zainArray.length - 1);
console.log(zainArray);
