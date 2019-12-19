/**
 * 算法
 * 冒泡排序  交换位置比大小 
 */
let arr = [8, 11, 4, 3, 2, 9, 6, 0];
function bubleSort(arr) {
    const len = arr.length;
    for (let o = len; o > 1; o--) {
        // 遍历的次数
        for (let i = 0; i < o - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    }
    return arr;
}
// console.log(bubleSort(arr));
// 插入排序
function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            } else {
                break;
            }
        }
    }
    return arr;
}
// console.log(insertSort(arr));
// 快速排序 重选随机数
function quickSort(arr) {
    // 终止条件
    if (arr.length <= 1) {
        return arr;
    }
    let left = [];
    let right = [];
    let flag = arr.shift();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < flag) {
            left.push(arr[i])
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(flag, quickSort(right));
}
// console.log(quickSort(arr));
// 原地快速排序
function quickSort1(arr, low = 0, high = arr.length - 1) {
    if (low >= high) {
        return;
    }
    let left = low;
    let right = high;
    let flag = arr[left];
    while (left < right) {
        // 从右边尝试找比flag小的,比flag大,right坐移
        if (left < right && flag <= arr[right]) {
            right--;
        }
        arr[left] = arr[right];
        if (left < right && flag >= arr[left]) {
            left++
        }
        arr[right] = arr[left];
    }
    arr[left] = flag;
    quickSort1(arr, low, left - 1)
    quickSort1(arr, left + 1, high)
    return arr;
}
// console.log(quickSort(arr),111);

// 选择排序
function selsetSort(arr) {
    let len = arr.length;
    let index;
    for (let i = 0; i < len - 1; i++) {
        index = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[index] > arr[j]) {
                index = j; //保存最小值的索引
            }
        }
        if (index !== i) {
            [arr[i], arr[index]] = [arr[index], arr[i]]
        }
    }
    return arr;
}
// console.log(selsetSort(arr))
/**
 *  递归 
 * 递归就是自己调用自己,形成一个调用栈,逐渐缩小目标,到达截止条件返回执行逻辑
 *  */
// 数组打平  es6 数组 有了
let arr1 = [1, 2, 3, [4, 5], 6, [7, 8]];
Array.prototype.flat = function () {
    let newArr = [];
    this.forEach(item => {
        if (Array.isArray(item)) {
            newArr = newArr.concat(item.flat())
        } else {
            newArr.push(item);
        }
    })
    return newArr;
}
const flattened = arr => [].concat(...arr);
/**
 *  查找算法
 * 
 */
// 循环版本  二分法
function binarySearch(arr, target) {
    let low = 0,
        high = arr.length - 1,
        mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (target === arr[mid]) {
            return `找到了${target},在第${mid}个`;
        } else if (target > arr[mid]) {
            low = mid + 1;
        } else if (target < arr[mid]) {
            high = mid - 1;
        }
    }
    return -1;
}
// 递归算法
function binarySearch1(arr, target, low = 0, high = arr.length - 1, ) {
    const n = Math.floor((low + high) / 2);
    const cur = arr[n];
    if (cur === target) {
        return `找到了${target},在第${n}个`;
    } else if (cur > target) {
        return binarySearch1(arr, target, low, n - 1)
    } else if (cur < target) {
        return binarySearch1(arr, target, n + 1, high)
    }
    return -1
}
// console.log(binarySearch(arr, 6))
/**
 * 数据结构
 */
// 队列 先入先出


// 栈 先入后出
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
}
function isBlance(symbol) {
    const stack = new Stack();
    const left = '({';
    const right = ')}';
    let popValue;
    let balance = true;
    for (let i = 0; i < symbol.length; i++) {
        let s = symbol[i];
        if (left.includes(s)) {
            stack.push(s);
        } else if (right.includes(s)) {
            popValue = stack.pop();
            match(popValue, s);
        }
    }
    function match(popValue, current) {
        console.log(popValue, current);
        if (left.indexOf(popValue) !== right.indexOf(current)) {
            // 不匹配了
            balance = false;
        }
    }
    return balance
}
// 判断html格式规范
// console.log(isBlance('(() => {return () => {}})'))
/**
 * 链表=>不连续
 */
class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.current;
        this.length = 0
    }
    append() {

    }
}
/**
 * 集合 没重复数据
 */
/**
 *  hash表
 */

/**
 *  动态规划
 */
// 斐波那些数列 [1,1,2,3,5,8,13,21,34,55]
// 暴力丢递归
function fib(n) {
    if (n == 1 || n == 2) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
}
// 加入中间缓存 缓存版递归
function fib1(n) {
    let cache = [];
    return helper(cache, n);
}
function helper(cache, n) {
    if (n == 1 || n == 2) {
        return 1;
    }
    if (cache[n]) return cache[n];
    cache[n] = helper(cache, n - 1) + helper(cache, n - 2);
    return cache[n];
}
// 自底向上 简单的动态规划
function fib2(n) {
    let dp = [];
    dp[1] = dp[2] = 1;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
// console.time('fib1');
// console.log(fib2(145));
// console.timeEnd('fib1');
/**
 * 找零问题 怎么找零最合适  动态规划 全局最优解
 */

class Change {
    constructor(changeType) {
        this.changeType = changeType;
        this.cache = {}
    }
    makeChange(amount) {
        let min = [];
        if (!amount) {
            return [];
        }
        if (this.cache[amount]) {
            return this.cache[amount];
        }
        for (let i = 0; i < this.changeType.length; i++) {
            // 先找一张
            const leftAmount = amount - this.changeType[i];
            let newMin = [];
            if (leftAmount > 0) {
                // 还可以继续找钱   下一步找钱数组
                newMin = this.makeChange(leftAmount);
            }
            if (leftAmount >= 0 && (newMin.length < min.length - 1 || !min.length)) {
                // 纠正结果
                min = [this.changeType[i]].concat(newMin);
            }
        }
        return this.cache[amount] = min;
    }
}
const change = new Change([1, 5, 10, 20, 50, 100]);
// 结论是慢慢优化出来的
// console.log(change.makeChange(6));
// console.log(change.makeChange(33));
// console.log(change.makeChange(330));
/**
 * 贪心算法
 */
