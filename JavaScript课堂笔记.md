## JavaScript代码书写位置

1. 在页面的script标签中,一般会把script标签body底部

   ```js
       <script>
           alert("哈哈哈哈哈") // 弹窗打印
       </script>
   ```

2. 可以在外面创建一个js文件，然后通过script标签的src属性引入执行

   ```js
       <script src="./js/index.js"></script>
   ```


## alert弹窗

1. 语法：alert(要弹窗的内容)

2. 作用：在浏览器中弹出一个窗口，里边显示内容

   ```html
       <!-- alert()弹窗 -->
       <script>
           alert('OK')    
       </script>
   ```

## console控制台打印

1. 语法：console.log( 要打印的内容 )

2. ```html
       <script>
           /* 
               浏览器控制台打印, console表示控制台的意思, log表示的日志意思
           */
           console.log('美女。。。。。。。')
       </script>
   ```

3. ![image-20210310171934928](JavaScript课堂笔记.assets/image-20210310171934928.png) 

## js的注释使用

```html
    
    <script>
        // alert('帅哥。。。。。。')    单行注释

        
        // 多行注释
        /*
            alert('OK')
            alert('来快活啊......')
        */
    </script>
```

## 变量的简单应用

```html
    <script>
        // 变量的简单应用
        // 定义一个变量，变量名为an, 变量的值为10; 通过var这个关键词定义变量
        var an = 10;
        var bn = 20;

        console.log(an);    // 打印10
        alert(bn)           // 打印20

    </script>
```

## 数据类型简单介绍

```html
    <script>
        // 10 表示数值类型(Number)
        var an = 10;

        // false 布尔类型(Boolean)
        var bn = false;

        // 字符串类型(String), jS中单引号和双引号都表示字符串
        var cn = '10';
        var dn = "100";
        
        // 总结：不管什么类型的数据，都可以使用var来定义变量接收
    </script>
```

## 函数的简单使用

### 函数的定义与调用

```html
    <script>
        // 定义一个函数, 函数名为showTime, 使用function定义函数
        function showTime() {
            alert('OK')
        }

        // 调用函数, 通过函数名调用函数, 在函数名的加小括号调用
        showTime()

    </script>
```

### 函数的参数使用

```js

        // 在定义函数的时候, 可以在小括号里定义一个参数(形式参数)
        function run(an, bn) {
            alert(an)
            alert(bn)
        }

        // 在调用函数的时候, 可以在小括号传递一个数据值(实际参数), 它会赋值相应的参数
        run(10, 'OK');
```

## 点击事件的简单使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            margin: 0;
            padding: 0;
        }
        div{
            width: 200px;
            height: 200px;
            background: red;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            
            /* 过渡 */
            transition: 2s;
        }
    </style>
</head>
<body>
    <!-- 给div元素添加一个点击事件, 这里的this表示当前点击的这个元素 -->
    <div onclick="showTime(10, this)"></div>

    <script>
        // 点击事件的简单使用
        function showTime(number, el){
            // alert('别点了啊啊啊, 再点就吃人了。。。。。。')
            // console.log(number, el)

            // 给元素调用样式
            el.style.background = 'green'
        }
    </script>
</body>
</html>
```





