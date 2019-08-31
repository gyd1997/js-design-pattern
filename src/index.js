// 工厂模式
/* 
场景
    1.jQuery - $('div')
    2.React.createElement
    3.vue 异步组件
*/
class Product {
    constructor(name) {
        this.name = name
    }
    init() {
        alert('init')
    }
    fun1() {
        alert('fun1')
    }
    fun2() {
        alert('fun2')
    }
}

class Creator {
    create(name) {
        return new Product(name)
    }
}

// 测试
let creator = new Creator()
let p = creator.create('p1')
p.init()
p.fun1()