/**
 *  常见的设计模式 Design pattern
 * 
 */
// 观察者模式
class Event {
    constructor() {
        this.callbacks = {};
    }
    $on(name, fn) {
        (this.callbacks[name] || (this.callbacks[name] = [])).push(fn);
    }
    $emit(name, args) {
        let cbs = this.callbacks[name];
        if (cbs) {
            cbs.forEach(v => {
                v.call(this, args);
            });
        }
    }
    $off(name) {
        this.callbacks[name] = null;
    }
}
let event = new Event();
event.$on('event1', function (arg) {
    console.log('event1', arg)
})
event.$on('event1', function (arg) {
    console.log('又event1', arg)
})
event.$on('event2', function (arg) {
    console.log('event2', arg)
})
event.$emit('event1', '欢迎');
event.$emit('event2', '世界');
// 单例模式 
function getSingle(fn) {
    let result;
    return function () {
        return result || (result = fn.apply(this, arguments))
    }
}
// 策略模式 增加扩展性/表单验证
let strategy = {
    "S": function (salary) {
        return salary * 3;
    },
    "A": function (salary) {
        return salary * 2;
    },
    "B": function (salary) {
        return salary;
    }
}
let calculate = function (level, salary) {
    if (level in strategy) {
        return strategy[level](salary)
    }
    return 1;
}
// 中介者模式
// 装饰器模式/代理模式


