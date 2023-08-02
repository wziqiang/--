# ES简介

# ES5

## 严格模式

1. 严格模式（strict mode）是ES5引入的，与非严格模式相比 ，它的JS语法会更加的严格，更加的安全
2. 使用严格模式，只需要要JS代码的最上面  添加 'use strict'; 这样一句代码就行
3. 在ES6的模块中，会自动采用严格模式，不管你有没有在模块头部加上 "use strict"; 
4. 严格模式主要有以下限制
   + 变量必须声明后再使用
   + 函数的参数不能有同名属性，否则报错
   + 不能使用 with 语句
   + 不能对只读属性赋值，否则报错
   + 不能使用前缀0表示八进制数，否则报错
   + 不能删除不可删除的属性，否则报错
   + 不能删除变量 delete prop ，会报错，只能删除属性 delete global[prop]
   + eval 不会在它的外层作用域引入变量
   + eval 和 arguments 不能被重新赋值
   + arguments 不会自动反映函数参数的变化
   + 不能使用 arguments.callee
   + 不能使用 arguments.caller
   + 禁止 this 指向全局对象
   + 不能使用 fn.caller 和 fn.arguments 获取函数调用的堆栈
   + 增加了保留字（比如 protected 、 static 和 interface ）

```js
    'use strict';	// 使用严格模式

    function showTime(){
        console.log(this);	// 这里打印undefined
    }
    showTime();

    // 创建eval作用域
    var name = 'OK';
    eval('var name = "Help";alert(name)');		// 这里打印 Help
    console.log(name);	// 这里打印 OK
```



## Function扩展

### bind(obj)方法

1. Function.prototype.bind(obj)
2. bind方法的作用，可以把函数内的this指定为obj, 并将函数返回
3. bing()函数 作用与call()和apply()是一样的，都是改变函数中this的指向，不一样的是call(),apply()会立即调用函数, 而bind()是把将函数返回
4. call()函数与apply()函数的区别传入参数的方式不一样
5. 面试题：说出bind()与call()和apply()三者的区别???

```js
    /*bind方法使用*/
    var obj = {};	// 创建一个对象
    function showTime(username, userAge) {
        this.username = username;
        this.userAge = userAge;
    }
    var f1 = showTime.bind(obj, '小明', 12);
    f1();
    console.log(obj);
;po

    // call()与apply()都可以改变函数中this的指向区别是传入参数的方式不一样
    // apply(obj [p1, p2])
    // call(obj, p1, p2)
    var obj = {};	
    function showTime(username, userAge) {
        this.username = username;
        this.userAge = userAge;
    }
    showTime.call(obj, '小明', 12);		// 使用call函数
    showTime.apply(obj, ['小明', 12]);	//使用apply函数
    console.log(obj);
```



## Object扩展

### create( )方法

1. Object.create(prototype, [descriptors])
2. create方法的作用是，以指定对象为原型创建新的对象
3. 也可以为新的对象指定新的属性, 并对属性进行描述
   + value : 指定值
   + writable : 标识当前属性值是否是可修改的, 默认为false
   + configurable: 标识当前属性是否可以被删除 默认为false
   + enumerable： 标识当前属性是否能用for in 枚举 默认为false

```js
    var obj = {name : '小明', age : 21};
    var obj1 = Object.create(obj, {
        id : {
            value : '78945',		// 指定值
            writable : false,		// 标识当前属性值是否是可修改的, 默认为false
            configurable: true,		// 标识当前属性是否可以被删除 默认为false
            enumerable: true,		// 标识当前属性是否能用for in 枚举 默认为false
        }
    });
    obj1.id = 12;			// 这里的修改无效
    console.log(obj1);		// 会发现obj1 是 obj
```



### defineProperties( )方法

1. Object.defineProperties(object, descriptors)
2. 可以为指定对象定义扩展多个属性，并且可以设置这些属性的get 与 set方法
3. get ：获取当前属性值时 触发的回调函数
4. set ：修改当前属性值时 触发的回调函数，是边的实参为修改后的值
5. 存取器属性：setter用来存值,   getter用来取值

```js
    var obj2 = {
        firstName : 'yang',
        lastName : 'help'
    };
    Object.defineProperties(obj2, {
        fullName : {
            get : function () {
                return this.firstName + '-' + this.lastName
            },
            set : function (data) {
                console.log(111);
                var names = data.split('-');
                this.firstName = names[0];
                this.lastName = names[1];
            }
        }
    });
    console.log(obj2.fullName);			// 打印yang-help
    obj2.firstName = 'tao';
    obj2.lastName = '666';
    console.log(obj2.fullName);			// 打印tao-666
    obj2.fullName = '哈哈-tao';
    console.log(obj2.fullName);			// 打印哈哈-tao
```



### get 和 set

1. 在对象本身可以有get 与 set两个方法
2. get propertyName(){}  获取当前属性值时，则会触发这个函数
3. set propertyName(){}  改变当前属性值时，则会触发这个函数

```js
    var obj = {
        firstName : 'tao',
        lastName : '6666',
        get fullName(){
            return this.firstName + ' ' + this.lastName
        },
        set fullName(data){
            console.log(111);
            var names = data.split(' ');
            this.firstName = names[0];
            this.lastName = names[1];
        }
    };
    console.log(obj.fullName);			// 打印tao 6666
    obj.fullName = 'yang 8888';
    console.log(obj.fullName);			// 打印yang 8888
```



## 数组的扩展

### indexOf(value)

```js

```



### forEach（）

```js
    /* forEach( function(item, index){} ) 的作用是用来遍历数组 */
    //遍历数组
    var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    arr.forEach(function (item, index) {
        console.log(item, index);
    });
```



### map（）

```js
    /* map( function(item, index){} ) 作用是遍历数组返回一个新的数组，返回修改之后的值*/
    var arr02 = arr.map(function (item, index) {
        return item = item+"Map";
    });
    console.log(arr02);
```



### filter（）

```js
    /* filter(function(item, index){}) 作用是遍历过滤出一个新的子数组， 返回条件为true的值 */
    var arr03 = arr.filter(function (item, index) {
        return index>3;
    });
    console.log(arr03);
```

## JSON对象

### stringify（）

1. JSON.stringify(obj/arr)
2. js对象(数组)转换为json对象(数组)

### parse（）

1. JSON.parse(json)
2. json对象(数组)转换为js对象(数组)



# ES6

## let 关键词

1. let与var类似, 用于声明一个变量
2. let定义的变量，在块作用域中有效
3. let定义的变量，不能重复定义
4. let定义的变量，并不会预处理，所以不存在变量提升

```js
    let elLis = document.querySelectorAll('li');
    for(let i = 0; i < elLis.length; i++){
        elLis[i].onclick = function () {
            console.log(i);					// 因为定义i是使用let定义的，所以每次循环进来的i，都有自己的一个作用域
        }
    }

    console.log(an);	// 这里会报错，使用let定义的an并不会预处理
    let an = 12;
```



## const 关键词

1. const 与 let类似, 用于声明一个变量
2. const 的作用 与 let基本相同，区别是const定义的变量值，不允许修改；并且const定义的变量必需要有初始赋值

```js
    const an; 	// 报错

    const bn = 12;
    bn = 19;	//报错
```



## 字符串模板

1. 字符串模板可以简化  字符串的拼接
2. 在字符串模板中 拼接一个变量时，需要这么写 ${变量}
3. 使用字符串模板时 必须用 `` 做为字符串，而不是单引号 或者 双引号

```js
    let obj = {age: 12};
    let str = `我的年龄：${obj.age}`;
    console.log(str);	//打印 '我的年龄：12'
```



## 变量的解构赋值

1. 解构赋值的作用是，可以从对象 或者 数组中提取数据，然后赋值给变量，可以是同时操作多个变量

### 对象解构赋值

```js
    let obj = {name: '小明', age: 12, sex: '男'};
    let {name, age, sex} = obj;	// 这里定义了name,age,sex三个变量, 且这三个变量的值就是obj中对应的属性值
    let {name: id} = obj;		// 这里定义了一个变量id, 且它的值就是obj中的name属性值

    let {abc} = obj;			// 因为obj中没有abc这个属性，所以这里定义的abc变量的值为undefined
    console.log(abc);			// 打印undefined
```



### 数组解构赋值

```js
    let arr = [11, 22, 33];
    let [a, b, c, d] = arr;		// 这里定义了a,b,c,d四个变量, 且它们的值就是arr数组中对应下标的元素值, 但arr中没有第四个元素, 所以变量d的值为undefined
```



### 给函数形参赋值

```js
    function showTime({username, password}) {	 // 这里会以传入的对象，给形参解构赋值
        console.log(username, password);
    }
    showTime({username: '小明', password: '123'})	// 调用showTime方法，且传入一个对象{username: '小明', password: '123'}
```

## 形参默认值

```js
    function showTime(username='未知', password) {	// 给形参赋值一个默认值，当没有相应的实参传入时，则就使用默认值
        console.log(username, password);	// 打印 '未知' 123
    }
    showTime(undefined, 123)


    /*解构赋值时*/
    function showTime({username='未知', password}) {
        console.log(username, password);	// 打印 '未知' 123
    }
    showTime({password: '123'})
```

## 对象的简化写法

1. 在对象 的简化写法中，可以省略不写同名的属性值
2. 在对象 的简化写法中，可以省略不写方法的function

```js
    let aa = 12;
    let obj = {
        aa,	// 等同于 aa: aa
        showTime(){}	// 等同于 function showTime(){}
    }
```

## 三点运算符

1. 可以用来做函数的可变参数

### 可变参数

```js
    function run(...params) {		// 通过3点语法，定义可变形参
        console.log(params);
        console.log(params[0]);
    }
    run(10, 20, 30);
```



### 数组合并

```js
    //做数组的合并
    let arr01 = [1, 2, 3];
    let arr02 = [...arr01, 4, 5, 6];	// 这里相当于把  arr01的所有元素  添加到arr02数组
    console.log(arr02);

    let arr03 = [];
    arr03.push(...arr01);				// 也可以像这样，通过push方法，一次性添加arr01中的所有元素
    console.log(arr03);
```



### 对象合并

```js
    let obj01 = {
        userAge: 12,
        showTime(){
            console.log("showTime函数");
        }
    };
    let obj02 = {
        ...obj01,				// 这里把obj01对象上的所有属性，添加到obj02对象上来
        username: "小光"
    };
    obj02.showTime();
    console.log(obj02.userAge);
```

## 箭头函数

1. ES6箭头函数的本质其实就是一个匿名函数
2. 函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象；（看箭头函数外边有没有定义其它函数，如果有,箭头函数中的this则就指向外边函数中的this，如果没有,箭头函数中的this则就指向window）
3. 不可以当作构造函数，也就是说，不可以使用 new 命令，否则会抛出一个错误
4. 不可以使用 arguments 对象，该对象在函数体内不存在
5. 不可以使用 yield 命令，因此箭头函数不能用作Generator函数。

```js
    // 没有参数的情况
    let f1 = () => 12;				// 相当于 let f1 = function(){ return 12;};

    // 一个参数的情况
    let f1 = num => num * 2;		// 相当于 let f1 = function(num) { return num*2; }

    // 多个参数的情况
    let f1 = (p1, p2) => p1 * p2;	// 相当于 lef f1 = function(p1, p2) { return p1 * p2 }

    // 函数体如果没有大括号，则会默认返回结果；如果函数体有多条语句, 则需要使用{}包围，然后写return手动返回结果
    let f1 = () => {let n = 2; let m = 6; return n*m};

	
	/*
		箭头函数中的this指向
			看箭头函数外边有没有定义其它函数
			如果有,箭头函数中的this则就指向外边函数中的this
			如果没有,箭头函数中的this则就指向window
	*/
    let obj = {
        username: "小明",
        //谁调用的f1函数, f1函数中的this指向的就是谁
        f1: function () {
            console.log(this.username);	// 打印"小明",this是obj
        },
        f2: ()=>{
            console.log(this.username);	// this是window
        },
        f3: function () {
            (() => { console.log(this.username); })();
        }
    };
```

## 字符串扩展

### includes(str)

1. 判断是否包含指定的字符串

### startsWith(str)

1. 判断是否以指定字符串开头

### endsWith(str)

1. 判断是否以指定字符串结尾

### repeat(count)

1. 重复指定次数

## 数值扩展

### isFinite(i)

1. Number.isFinite(i) : 判断是否是有限大的数

### isNaN(i)

1. Number.isNaN(i) : 判断是否是NaN

### isInteger(i)

1. Number.isInteger(i) : 判断是否是整数

### trunc(i)

1. Math.trunc(i) : 直接去除小数部分

### parseInt(str)

1. Number.parseInt(str) : 将字符串转换为对应的数值

### 进制表示法

1. 二进制用0b：console.log(0b110)
2. 八进制用0o：console.log(0o65)

## 数组扩展

### from(v)

1. Array.from(v) : 将伪数组对象或可遍历对象转换为真数组

### of(v1, v2, v3)

1. Array.of(v1, v2, v3) : 将一系列值转换成数组

### find(f)

1. find(function(value, index, arr){return true}) : 找出第一个满足条件返回true的元素

### findIndex(f)

1. findIndex(function(value, index, arr){return true}) : 找出第一个满足条件返回true的元素下标

## 对象扩展

### is(v1, v2)

1. Object.is(v1, v2)，判断2个数据是否完全相等

### assign(target, source1, source2..)

1. Object.assign(target, source1, source2..)，将源对象的属性复制到目标对象上

### ——proto—— 属性

1. 直接操作 __proto__ 属性；let obj2 = {};	obj2.__proto__ = obj1;

## Set数据结构

1. Set数据容器 :  无序不可重复的多个value的集合体
2. Set中的方法
   + Set( )	无参的构造
   + Set( array )     有参构造
   + add( value )    添加值
   + delete( value )   删除指定值
   + has( value )   判断是否包含指定值
   + clear( )   清空
   + size属性    表示set的大小

```js
    let set = new Set([2,3,4,5,2,2,2]);	  // 不能有重复的元素，所有set会自动去重
    console.log(set);

    let set = new Set();
    set.add(1);		//添加元素
    set.add(2);
    console.log(set.size);	//集合的长度
    set.delete(2);	//删除元素
    console.log(set.has(2));	//查的指定的元素
    set.clear();	//清空集合
    console.log(set);
```

## Map数据结构

1. Map数据容器 : 无序的 key不重复的多个key-value的集合体
2. Map中的方法
   + Map( )    无参的构造
   + Map( array )    有参的构造
   + set( key, value )    添加数据
   + get( key )    获取指定键的值
   + delete( key )    删除指定的键值
   + has( key )    判断是否存在某个键值
   + clear( )    清空数据
   + size    Map的大小

```js
    let map = new Map();
    let map = new Map([  ['username', 'aa'], ['userAge', 12] ]);

    map.set('userSex', '男');			// 添加数据
    map.set('userSex', '女');			// 重复的Key, 后面的会覆盖前面的
    console.log(map.get('username'));	// 获取指定键的值
    map.delete('userSex');				// 删除指定的键值
    console.log(map.has('userAge'));	// 判断是否存在某个键值
    console.log(map.size);				// 数据的多少
    map.clear();						// 清空数据
    console.log(map);
```

## for_of循环

1. for_of循环的作用，遍历数据集合
2. for_of只能遍历可 迭代的数据(如数组，字符串，set，Map，伪数组等)

```js
    // 遍历数组
	let arr = [2, 6, 7, 9];
    for (let i of arr) {
        console.log(i);		// 依次打印2，6，7，9
    }

	// 遍历字符串
    let str = "abcdefg";
    for (let i of str) {
        console.log(i);
    }
	
	// 遍历Set集合
    let set = new Set();
    set.add('小光');
    set.add('老光');
    set.add('光光');
    for (let i of set) {
        console.log(i);
    }

	// 遍历Map集合
    let map = new Map();
    map.set('aa', '屁屁');
    map.set('bb', '小屁屁');
    map.set('cc', '大屁屁');
    for (let i of map) {
        console.log(i);
    }
	
	// 遍历对象时会报错，因为对象并不是可以迭代的
    let obj = {
        username: '小晚',
        userAge: 12,
    };
    for (let i of obj) {	// 报错 Uncaught TypeError: obj is not iterabl
        console.log(i);
    }
```



# 其它

## 异常捕获

当代码错误发生时， JavaScript 会停止执行，并生成一个错误信息；

如果我们对代码错误进行了异常捕获，则就可以保证程序不会停止执行，而是会继续往下执行；

### 语法

```
try {
    tryCode      需要执行代码块
}
catch(err) {
    catchCode    如果try中的代码出错，则会执行这里的代码（捕获错误的代码块）
}
finally {
    finallyCode  无论 try / catch 结果如何都会执行的代码块
}

// PS：finally是可以写，也可以不写的
```

### 示例

```js
try{
    abc();	// 这里调用一个没有定义的函数, 会报错
}catch (err) {
    console.log('打印错误信息'+err);
} finally {
    console.log('这里的代码不管报不报错都会执行');
}
console.log(123);
```

## 抛异常

throw 语句允许我们抛出异常

 我们也可以通过 new Error('异常信息')  创建一个异常对象

### 语法

```
throw exception
```

### 示例

```js
function showTime() {
    throw '我是一个被抛出的异常信息';			// 抛出一条异常信息
    // throw new Error("this Error message"); 抛出一个异常对象
}

// 捕获异常
try {
    showTime();	// 调用会报错,因为方法抛出的异常
} catch(err) {
    console.log(err);
}
console.log(1111);
```

# Promise对象

# in关键词

## for(.. in ..)的使用

**For...In 声明用于对数组或者对象的属性进行循环/迭代操作**

```js
// for in 遍历数组时， 我们获取到的是下标
const arr = ['a', 'v', 'c', true , 12]
for(index in arr) {
    console.log(index, arr[index]);
}

// for in 遍历对象， 我们获取到是对象的属性名
const obj = {
    name: '小明',
    age: 12,
    sex: '女'
}
for(key in obj){
    console.log(key, obj[key]);
}
```

## in 单独使用

```js
// in关键词：判断某个属性是否属于指定的对象
// 注意：当对象为对象时，判断是属性；当对象是一个数组时，判断是则是下标
// 注意：实测在IE10及以下不支持
const arr = ['a', 'aa', undefined]
console.log('a' in arr, 1 in arr, 2 in arr);    // 打印false true true

const obj = {
    name: '小明',
    age: 12
}
console.log('name' in obj, 'sex' in obj);       // 打印true false
```

参考一下： https://www.cnblogs.com/fuqiang88/p/8043750.html

# Proxy代理

**Proxy** 的意思就是代理，属于ES6规范，它可以帮助我们完成很多事情，例如对数据的处理，对构造函数的处理，对数据的验证；说白了，就是在我们访问对象前添加了一层拦截，可以过滤很多操作，而这些过滤，由你来定义。

## 快速入门

**代码片段1：**

```js
let obj = { name: '小明' }
let proxy = new Proxy(obj, {    // 对obj进行代理包装, 返一个obj的代理对象
    get(target, key) {          // get方法会监听获取属性的操作
        console.log('get........执行了', target, target === obj,  key);
        return target[key]      // target就是包装的obj对象, key表示要获取的属性名
    }
})
console.log(proxy);
console.log(proxy.name);

// 这样写怎么样呢.......
let proxy = new Proxy({ name: '小明' }, {
    get(target, key) {
        console.log('get........执行了');
        return target[key]
    }
})
console.log(proxy);
console.log(proxy.name);
```

**代码片段2：**

```js
// 需求：获取年龄字段值时，在前面拼接"你的年龄"；设置年龄字段时, 字段值必需是一个数值, 否则抛出一个异常
let obj = {
    name: '小明',
    age: 12,
    sex: '女'
}
obj = new Proxy(obj, {
    get(target, key) {
        if (key === 'age') return '你的年龄：' + target[key]
        return target[key]
    },
    set(target, key, value) {
        if (key === 'age' && typeof value !== 'number') {
            throw Error('age必需是一个数字')
        }
        target[key] = value
        return true
        // 注意：在严格模式下，set方法需要返回一个true值，否则会报错； 也可以通过 return Reflect.set(target, key, value); 来解决这个问题
    }
})
console.log(obj.name, obj.age)
obj.name = '小红'
obj.age = 22
console.log(obj.name, obj.age)
```

参考文章：https://www.jianshu.com/p/77eaaf34e732

参考API：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy

# **Reflect** 反射

参考API：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect

# ObjectAPI简测(总结)

## Object.assign()

把多个源对象 合并到 目标对象上，也有复制的作用

注意：使用assign方法做复制时，属于浅复制

```js
const source1 = { name: 'aa', age: 12 }
const source2 = { dog: { name: '小黑' } }
const target = Object.assign({}, source1, source2)
console.log(target);	// 打印 {name: "aa", age: 12, dog: {name: '小黑'}}
```

## Object.defineProperty

可以在一个对象上定义一个新的属性，或者修改一个对象的现有属性，并返回此对象。

```js
const person = {}
let name = '小明'
const newPerson = Object.defineProperty(person, 'name', {
    // value: '小明',
    // writable: false,         // 属性是否可写可修改
    configurable: false,        // 属性是否可被删除, 以及除了value, writable之外的其它是否可改
    enumerable: false,          // 属性是否会出现在对象的枚举属性中
    get() {                     // 获取属性时, 触发get方法，这个不能与value, writable同时存在
        console.log(this, this === person);
        return name
    },
    set(value) {                // 设置属性时，触发set方法
        // this.name = value    错误写法
        name = value
    }
})
person.name = '小红'
console.log(person, newPerson, newPerson === person, person.name);
console.log(Object.keys(person));
```

**`Object.defineProperties`** 与 Object.defineProperty一样，只不过Object.defineProperties可以一次性定义多个属性

```js
const son = Object.defineProperties({}, {
    name: {
        value: '小明',
        writable: false
    },
    age: {
        value: 12
    }
})
console.log(son);	// 打印 {name: "小明", age: 12}
```

## Object.getOwnPropertyDescriptor()

作用：返回对象上自有属性的描述符, 可以获取到属性的描述信息, 如writable, configurable等

注意：自有属性是直接赋予该对象的属性，不需要从原型链上进行查找的属性

```js
const object1 = { name: '小明......' }
const discriptor = Object.getOwnPropertyDescriptor(object1, 'name')
console.log(discriptor.value, discriptor.writable, discriptor.configurable, discriptor.enumerable, discriptor.get, discriptor.set);
// 打印 小明...... true true true undefined undefined
```

**`Object.getOwnPropertyDescriptors()`**

与Object.getOwnPropertyDescriptor()类似

注意: Object.assign() 方法只能拷贝源对象的可枚举的自身属性，同时拷贝时无法拷贝属性的特性们，而且访问器属性会被转换成数据属性，也无法拷贝源对象的原型，该方法配合Object.create() 方法可以实现上面说的这些。

```js
const cat = Object.defineProperties({}, {
    name: { value: '罗小黑', writable: false },
    age: { value: 6, writable: true, enumerable: false }
})
const object2 = Object.create(
    Object.getPrototypeOf(cat),
    Object.getOwnPropertyDescriptors(cat)
);
object2.name = '罗小白'
object2.age = 12
console.log(object2);	// 打印 {name: "罗小黑", age: 12}
```

## Object.getPrototypeOf(obj)

返回指定的对象的原型

```js
const source3 = { name: '小天啊' }
const object3 = Object.create(source3)
console.log(Object.getPrototypeOf(object3) === source3);    // 打印true
const reg = /aa/
console.log(Object.getPrototypeOf(reg) === RegExp.prototype);   // 打印true
```

**`Object.setPrototypeOf(obj, prototype)`**

设置一个指定的对象的原型 ( 即内部[[Prototype]]属性）到另一个对象或 null。

```js
Object.setPrototypeOf(source3, RegExp.prototype)
console.log(source3, 111);
```

## Object.create(source_proto, [propertyObject])

创建一个新对象，使用现有的对象来提供新创建的对象的 __proto__

```js
const animal = { name: '小黑' }
const dog = Object.create(animal, {
    age: {
        writable: true,
        configurable: false,
        value: 12
    }
})
console.log(dog, dog.name);	// 打印 {age: 12} "小黑"
```

## Object.getOwnPropertyNames

返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组

```js
const object4 = Object.defineProperties({}, {
    name: { value: '小月月', enumerable: false },
    age: { value: 12, enumerable: true }
})
object4['sex'] = "女"
object4[Symbol('W')] = "哈哈"
console.log(Object.getOwnPropertyNames(object4), object4[Symbol('W')]);	// 打印 ["name", "age", "sex"] undefined
```

**`Object.getOwnPropertySymbols(obj)`** 

获取给定对象自身的所有 Symbol 属性, 返回一个数组

```js
const object5 = {}
object5[Symbol('A')] = 'aa'
object5['B'] = 'bb'
object5[Symbol('C')] = 'cc'
console.log(Object.getOwnPropertySymbols(object5));	// 打印 [Symbol(A), Symbol(C)]
```

## Object.keys()

作用：返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。

**`Object.values()`** 

作用：返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )

```js
const object6 = { name: '小芳', age: 12 }
Object.defineProperty(object6, 'sex', {
    value: '女'
})
console.log(object6, Object.keys(object6));		// 打印 {name: "小芳", age: 12, sex: "女"} ,  ["name", "age"]

console.log(object6, Object.values(object6));   // 打印 {name: "小芳", age: 12, sex: "女"} ，  ["小芳", 12]
```

## Object.entries(obj)

作用：方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。

```js
const object7 = { name: '小芳', age: 12 }
const arr = Object.entries(object7)    // 获取到的结果为：[["name", "小芳"], ["age", 12]]
for (const [key, value] of arr) {
    console.log(key, value);
}
```

**`Object.fromEntries(iterable)`**

作用：把键值对列表转换为一个对象， 类似 Array 、 Map 或者其它实现了可迭代协议的可迭代对象。  

```js
// const map = new Map([['name', '小芳啊'], ['age', 12]])
const map = [['name', '小芳啊', '哈哈', '呵呵'], ['age', 12]]
console.log(map);
console.log(Object.fromEntries(map));
```

## Object.freeze(obj)

作用：冻结指定对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。

```js
const pig = Object.create(animal, {
    age: {
        value: 12,
        writable: true
    }
})
Object.freeze(pig)
pig.age = 22
// animal.name = '小白'
pig.name = '小白'
console.log(pig, pig.age, pig.name);	// 打印 {age: 12} 12 "小黑"
```

**`Object.isFrozen`**

作用：判断指定是否被冻结

```js
console.log(Object.isFrozen(pig));	// 打印 true
```

## Object.preventExtensions

作用：让指定对象变得不可扩展，即永远不能添加新的属性

```js
const cow = {}
Object.preventExtensions(cow)
Object.defineProperty(cow, 'name', {    // 添加属性会失败
    value: '小牛'
})
```

**`Object.isExtensible`**

作用：判断对象是否可扩展, 密封对象是指那些不可 扩展 的，且所有自身属性都不可配置且因此不可删除（但不一定是不可写）的对象。

```js
console.log(Object.isExtensible(cow));	// r打印 true 
```

## Object.seal

作用：封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要原来是可写的就可以改变。

```js
const chook = { name: '小鸡鸡' }
Object.defineProperty(chook, 'age', { value: 12, configurable: true })
Object.seal(chook)
chook.name = '鸡鸡'
// Object.defineProperty(chook, 'age', { value: 22, writable: true })
chook.age = 22
console.log(chook);		// 打印 {name: "鸡鸡", age: 12}
```

**`Object.isSealed`**

作用：判断指定对象是否被密封,

```js
const fish = { name: '小鱼儿' }
Object.preventExtensions(fish)
console.log(Object.isSealed(fish));     // 打印false
const chicken = {}
Object.preventExtensions(chicken)
console.log(Object.isSealed(chicken));  // 打印true
```

## Object.is(value1, value2)

作用：判断两个值是否是同一个值

```js
console.log(Object.is(Symbol('a'), Symbol('a')));	// 打印false
console.log(Object.is('a', 'a'));					// 打印true
```

# FormData()函数

`**FormData()**`构造函数用于创建一个新的[`FormData`](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData)对象。

```js
<body>

    <div id="box">
        <form action="" id="user_form">
            <p>
                <label for="username">姓名 <input id="username" type="text" name="username"> </label>
            </p>

            <p>
                <label for="pasword">
                    密码
                    <input id="pasword" type="password" name="password">
                </label>

            </p>

            <p>
                <label for="M">
                    男
                    <input id="M" type="radio" value="0" name="sex">
                </label>

                <label for="W">
                    女
                    <input id="W" type="radio" value="1" name="sex">
                </label>
            </p>

            <p>
                吃<input type="checkbox" value="吃" name="hobbies">
                喝<input type="checkbox" value="喝" name="hobbies">
                拉<input type="checkbox" value="拉" name="hobbies">
                拉很多<input type="checkbox" value="拉很多" name="hobbies">
            </p>
        </form>
    </div>

    <script>
        // 使用FormData获取表单数据时，是通过表单元素的name属性来获取数据的
        document.ondblclick = function () {
            const myForm = document.getElementById('user_form');
            const formData = new FormData(myForm);
			
            console.log(formData);
            console.log(formData.get('username'));
            console.log(formData.get('password'));
            console.log(formData.get('sex'));
            console.log(formData.getAll('hobbies'));
        }
    </script>
</body>
```

官方文档： https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/FormData















