# 字符串

## 字符串的创建

```js
var str = "OK";		//使用双引号
var str = 'OK';		//使用单引号
var str = new String("hello world");	//通过new关键词创建
```



## length属性

```js
//字符串的length属性   可以获取字符串的长度
var str = "hello world";
alert(str.length);   	//打印 11
```



## charAt(n)方法

```js
//charAt(n)  返回指定索引位置的字符
var str = "hello world";
alert(str.charAt(1));

//charCodeAt(n)  	以Unicode编码形式返回指定索引位置的字符
var str = "hello world";
alert(str.charCodeAt(0));    //104
alert("h".charCodeAt());     //104
```



## concat( )方法

```js
// concat()方法  可以把两字符串拼接；
var str = "hello world";
var str1 = str.concat("小明,小哈");
alert(str1);   //hello world小明,小哈
alert(str);    //hello world
```



## slice( )方法

```js
// slice(起始下标,结束下标)方法  可以提取字符串的某个部分返回    （包括起始位,但不包括结束位）;
var str = "hello world";
var str1 = str.slice(1,3);
alert(str1);   //打印el

var str1 = str.slice(8,10);
alert(str1);   //打印rl

var str1 = str.slice(-3,-1);
alert(str1);      //打印rl
```



## substring(n,m)方法

```js
// substring(n,m)  可以提取字符串中指定两个索引间的字符并返回   (但不能以负数做为参数)
var str = "hello world";
var str1 = str.substring(1,3);
alert(str1);   //打印  el

var str = "hello world";
var str1 = str.substring(-3,-1);
alert(str1);    //打印空
```



## substr(n,m)方法

```js
//substr(n,m)   从起始索引提取指定的字符数;
var str = "hello world";
var str1 = str.substr(1,3);
alert(str1);   //打印 ell
```



## indexOf(str,n)方法

```js
//indexOf(str,n)方法   从n开始搜索的第一个str，如果找到返回下标，否则返回-1；
var str = "hello world";
var num = str.indexOf("w");
alert(num);  //打印6

var num = str.indexOf("z");
alert(num);  //打印-1 说明字符不存在

var num = str.indexOf("w",7);
alert(num);   //打印 -1
```



## lastIndexOf("str",n)方法

```js
// lastIndexOf("str",n)  方法可以 从指定位置由后往前找，返回最先找到的那个下标
var str = "hello world";
var num = str.lastIndexOf("l");
alert(num);   //打印9
var num = str.lastIndexOf("l",1);
alert(num);  //打印-1
```



## toLowerCase()方法

```js
// toLowerCase()   //将字符串全部转换成小写
// toUpperCase()   //将字符串全部转换成大写
var str = "Hello World";
alert(str.toLowerCase());     //打印hello world
alert(str.toUpperCase());     //打印HELLO WORLD
```



## match()方法

```js
// match()方法  方法可在字符串内检索指定的值；有就返回，  (可以与正则表达式一起使用)
var str = "hello world";
var str1 = str.match("world");
alert(str1);   //打印world

var str1 = str.match("小天");
alert(str1);   //打印 null   因为没有
```



## replace(pattern,replacement)方法

```js
// replace(pattern,replacement)  把字符串中pattern替换成replacement  并且返回;   (可以与正则表达式一起使用)
var str = "hello world,我是小天,他也是小天";
var str1 = str.replace("小天","小明");
alert(str1);   //hello world,我是小明,他也是小天
alert(str);

var str1 = str.replace("小花","小明");
alert(str1);
```



## search( )方法

```js
// search()  方法可以检索字符串中指定的子字符串位置       (可以与正则表达式一起使用)
var str = "hello world,我是小天,他是小明";
var num = str.search("world");
alert(num);
```



## split( )方法

```js
//split()  方法可以把字符串分割成一个数组并且返回          (可以与正则表达式一起使用)
var str = "大胖-二胖-小胖";
var arr = str.split("-");
alert(arr);
```



## 字符串小案例

1. 找出所有指定字符的下标(小实例)

   ```js
   //需求：找出下字符串中所有字符"o"的下标；
   var str = "hello Girl, You are so Beautiful";
   var arr = [];
   var num = str.indexOf("o");
   while(num >= 0){
       arr.push(num);
       num = str.indexOf("o",num+1);
   }
   alert(arr);   //打印 4,13,21
   ```

   

2. 获取字符串中的所有数字(小实例)

   ```js
   //需求：找出下面字符串中的所有数字
   var str = "ok12htr78rgth74540hyt5uk5yuk45ku555jy789";
   var arr = [];
   var t = "";
   for(var i = 0; i < str.length; i++){
       if(str.charAt(i)>=0 && str.charAt(i)<=9){     //判断字符是不是一个数字
           t += str.charAt(i);
       }
       else{
           if(t){
               arr.push(t);
               t = "";
           }
       }
   }
   
   if(t){ arr.push(t); }
   
   alert(arr);
   ```

   

3. 字符串查询小实例

   ```html
   <!DOCTYPE html>
   <html>
   <head>
   	<meta charset="UTF-8">
   	<meta name="description" content="">
   	<meta name="keywords" content="">
   	<title>Examples</title>
   	<style type="text/css">
   		#warp{
   			width: 700px;
   			margin: 50px auto;
   			position: relative;
   		}
   		#div1{
   			width: 700px;
   			border: 1px solid black;
   		}
   		p{
   			position: absolute;
   			left: 232px;
   		}
   	</style>
   </head>
   <body>
   	<div id="warp">
   		<div id="div1">
   			2019新型冠状病毒，2020年1月12日被世界卫生组织命名为2019-nCoV [1]  ，2020年2月11日被国际病毒分类委员会命名为SARS-CoV-2 [2]  。美国《科学》杂志						网站12日报道说，国际病毒分类学委员会冠状病毒研究小组主席约翰·齐布尔表示，他们是根据基因测序等方面的分类学研究提出这个名称，“这一名称与SARS					疾病之间没有关联”。钟南山院士9日在接受媒体采访时也曾表示，新型冠状病毒与SARS冠状病毒是同一类，但不是同一种。 [3]
   			冠状病毒是一个大型病毒家族，已知可引起感冒以及中东呼吸综合征（MERS）和严重急性呼吸综合征（SARS）等较严重疾病。新型冠状病毒是以前从未在人体中发现的冠状						病毒新毒株。 [4-5]
   			2019年12月以来，湖北省武汉市持续开展流感及相关疾病监测，发现多起病毒性肺炎病例，均诊断为病毒性肺炎/肺部感染。 [6]
   					人感染了冠状病毒后常见体征有呼吸道症状、发热、咳嗽、气促和呼吸困难等。在较严重病例中，感染可导致肺炎、严重急性呼吸综合征、肾衰竭，甚至死亡。目						前对于新型冠状病毒所致疾病没有特异治疗方法。但许多症状是可以处理的，因此需根据患者临床情况进行治疗。此外，对感染者的辅助护理可能非常有效。 
   					做好自我保护包括：保持基本的手部和呼吸道卫生，坚持安全饮食习惯，并尽可能避免与任何表现出有呼吸道疾病症状（如咳嗽和打喷嚏等）的人密切接触。 
   		</div>
   		<p>
   			<input id="txt" type="text"/>
   			<input id="btn" type="button" value="查找"/>
   		</p>
   	</div>
       
       
       <script type="text/javascript">
           var oDiv = document.getElementById("div1");
           var oTxt = document.getElementById("txt");
           var oBtn = document.getElementById("btn");
   
           oBtn.onclick = function(){
               oDiv.innerHTML = show(oDiv.innerText,oTxt.value);
           }
           oTxt.onkeyup = function(){
               oDiv.innerHTML = show(oDiv.innerText,oTxt.value);
           }
           function show(html,target) {
               var arr = html.split(target);
               var str = arr.join("<span style='background:red'>"+target+"</span>");
               return str;
           }
   	</script>
   </body>
   </html>
   
   ```



# 正则表达式

## 创建正则表达式

```js
// 创建一个正则有两种方法
// 1：通过new RegExp来创建
var str = "Hi girl,May I have this dance";
var re = new RegExp("May");
var bool =re.test(str);   //test()方法 检索字符串指定的值 返回true或者false, 这里表示str字符串是否包含re正则的片段
// alert(bool);



// 2：通过双斜杠来创建
var str = "Hi girl,May I have this dance";
var re = /May/;
var bool = re.test(str);
alert(bool);
```



## 可选修饰符

```js
//3个可选修饰符（i，g，m）;

//i：表示忽略大小写
var str = "Hi girl,May I have this dance";
//var reg = new RegExp("mAy","i");
var reg = /mAY/i;
alert( reg.test(str) );


//g：表示匹配全局
var str = "Hi girl,May I have this dance";
var reg = /i/g;
// alert(str.match(reg));


//m：表示多行匹配
var str = "ef\na";
var reg = /^a/;   //打印flase;
var reg = /^a/m;  //打印true;
// alert(reg.test(str));
```



## 字符类

```js
var str = "hi girl hi boy";
var reg = /girl|boy|hi/g;		//  |表示或者， 这里的意思是  或者girl，或者boy，或者hi
alert(str.replace(reg,"小明"));


//[abc];					   //   []表示或者，这里的意思	或者a，或者b，或者c
var str = "bug and big bag";
var reg = /b[uia]g/g;
alert(str.match(reg));   		//打印bug,big


//[123456789] 				
var str = "bug and big 123";
// var reg = /[0123456789]/;
var reg = /[0-9]/;				// [0-9] 等同于 [123456789]，[a-z], [A-Z]也是同理
// alert(reg.test(str));


//[a-z]     //查找小写字母
var str = "1a23";
var reg = /[a-z]/;
// alert(reg.test(str));


//[0-9a-z]   //查找数字及小写字母
var str = "123";
var reg = /[0-9a-z]/;
// alert(reg.test(str));


//排除 [^]    		 表示除了什么之外的东西
var str = "...";
var reg = /[^0-9]/;     //匹配除数字以外的所有;
alert(reg.test(str));
```



## 转义字符类

```js
/*
	转义字符
    	.    点表示匹配所有
    	\d   相当于[0-9]           	
    	\D  相当于[^0-9]
    	
    	\w   相当于[0-9a-zA-Z_]       	
    	\W  相当于[^0-9a-zA-Z_]
    	
    	\s   表示空格              	    
    	\S  表示除了空格之外的所有
*/

var str = "897胖S";
var reg = /\d胖\w/;
alert(reg.test(str));


var str = "897胖 ";
var reg = /\d胖\s/;     //一个数字+胖+空格
alert(reg.test(str));


var str = "789胖*";
// var reg = /\d胖\w/;  //打印flase
var reg = /\d胖./;      //打印true;
alert(reg.test(str));


//删除多余空格
var str = "45 kyhu 45yj jyu54 ki45";
var reg = /\s/g;
var str1 = str.replace(reg,"");
alert(str1);
```



## 量词

```js
/*
量词表示某个东西出现的次数
    以大括号的形式
        {n}     表示出现刚好n次
        {n,m}   表示出现n-m次
        {n,}    表示最少出现n次  最多不限
    常用的量词
        ?   零次或者一次
        +   一次或者多次
        *   任意次
*/
var str = "123abc";
var reg = /[0-9]+/;		//表示有一个 或者 多个数字
alert(reg.test(str));


//匹配手机号   11数字
var str = 15023652356;
var reg = /\d{11}/;		  //表示字符串中 是否包含有连续11个数字的片段
var reg = /^1\d{10}$/;    //^放到正则最前方，表示以什么开头  $表示以什么结束； 所以这里并不是表示包含片段，而是匹配了整个字符串
```

## 正则小案例

1. 敏感词屏蔽

   ```html
   <textarea id="txt" cols="30" rows="10">
       八百标兵奔北坡，
       炮兵并排北边跑。
       炮兵怕把标兵碰，
       标兵怕碰炮兵炮。
   </textarea>
   <input id="btn" type="button" value="转换">
   <textarea id="txt2" cols="30" rows="10"></textarea>
   
   
   <script type="text/javascript">
       //把文本域串的"炮"，"兵"，替换成"***"
       var oTxt1 = document.getElementById("txt");
       var oTxt2 = document.getElementById("txt2");
       var oBtn = document.getElementById("btn");
       oBtn.onclick = function(){
           var reg = /炮|兵/g;
           oTxt2.value = oTxt1.value.replace(reg,"***");
       }
   </script>
   ```

   

2. 查出字符串中所有数字

   ```js
   var str = "htori78jt74rt8jy77j85kui85";
   var re = /\d+/g;    //\d表示匹配数字   +表示匹配多个   g表示匹配所有
   alert(str.match(re));
   ```

   

3. 匹配邮箱

   ```html
   	<input id="txt" type="text" placeholder="请输入一个邮箱"/>
   	<input id="btn" type="button" value="确定"/>
           
   	<script>
           //匹配邮箱
           // 格式：几个数字||字母||下划线  @   几个字母||数字  .   (2-4)字母
           //         123456789         @      qq         \.      com
           //           \w+             @    [0-9a-z]+    \.    [a-z]{2,4}
           var reg = /^\w+@[0-9a-z]+\.[a-z]{2,4}$/;
           var oBtn = document.getElementById("btn");
           var oTxt = document.getElementById("txt");
           oBtn.onclick = function () {
               if (reg.test(oTxt.value)) {
                   alert("输入成功");
               } else {
                   alert("你输入的不是一个邮箱号");
               }
           };
   	</script>
   ```

## 零宽断言

### 正向断言

### 正向否定断言

### 反向断言

### 反向否定断言

参考文章：https://www.yuque.com/kelisituofuluo/seg637/qbs2i8



# 日期

## 创建一个日期对象

```js
//创建一个日期对象
var oDate = new Date();
console.log(oDate);   //打印当前的时间

//1："时:分:秒 月/日/年";   传入的日期格式(字符串)
var oDate = new Date("11/30/2015");
var oDate = new Date("8:8:8 11/30/2015");
console.log(oDate);

//2：年,月,日,时,分,秒(不是字符串)
var oDate = new Date(2015,11,30,8,8,8);
console.log(oDate);
```



## 日期方法（API）

```js
// getDate() 从 Date 对象返回一个月中的某一天 (1 ~ 31)。
var oDate = new Date();
alert(oDate.getDate());
oDate.setDate(29);
alert(oDate.getDate());
alert(oDate);


// getDay() 从 Date 对象返回一周中的某一天 (0 ~ 6)。
var oDate = new Date();
alert(oDate.getDay());
oDate.setDate(25);
alert(oDate.getDay());


// getMonth() 从 Date 对象返回月份 (0 ~ 11)。
var oDate = new Date();
alert(oDate.getMonth());   //打印11
oDate.setMonth(13);
alert(oDate.getMonth());


// getFullYear() 从 Date 对象以四位数字返回年份。
var oDate = new Date();
alert(oDate.getFullYear());   //打印2016
oDate.setFullYear(0);
alert(oDate.getFullYear());   //打印0
var oDate = new Date(3,8,8);
alert(oDate);


// getHours() 返回 Date 对象的小时 (0 ~ 23)。
var oDate = new Date();
alert(oDate.getHours());
oDate.setHours(24);
alert(oDate.getHours());


// getMinutes() 返回 Date 对象的分钟 (0 ~ 59)。
var oDate = new Date();
alert(oDate.getMinutes());


// getSeconds() 返回 Date 对象的秒数 (0 ~ 59)。
var oDate = new Date();
alert(oDate.getSeconds());


// getMilliseconds() 返回 Date 对象的毫秒(0 ~ 999)。
var oDate = new Date();
alert(oDate.getMilliseconds());


// getTime() 返回 1970 年 1 月 1 日至今的毫秒数。
var oDate = new Date();
alert(oDate.getTime());


//parse()  "月/日/年"
alert(Date.parse("5/5/2015"));  //返回是一个毫秒数
alert(Date.parse());   //打印NaN;
alert(Date.parse("Ok"));  //打印NaN;



//Ps: 除了以上的get方法，还有就想的set方法，用来设置日期时间
var oDate = new Date();
oDate.setFullYear(1990);	//把日期的年份设置为 1990， 其它的set方法是一个道理
console.log(oDate);
```



## 日期小案例（倒计时）

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="description" content="">
	<meta name="keywords" content="">
	<title>Examples</title>
	<style type="text/css"></style>
</head>
<body>
	<strong id="str"></strong>
	
	<script type="text/javascript">

        var oStr = document.getElementById("str");

        var endDate = new Date();     //创建一个目标日期
        endDate.setFullYear(2020);
        endDate.setMonth(10);
        endDate.setDate(11);
        endDate.setHours(0);
        endDate.setMinutes(0);
        endDate.setSeconds(0);

        setInterval(function () {
            var newDate = new Date();
            getDate(newDate, endDate);
        }, 1000);


        function getDate(newDate, endDate) {

            var num = (endDate.getTime() - newDate.getTime()) / 1000; //获取离目标日期的时间差  换成秒
            var days = parseInt(num / (60 * 60 * 24));     //获取天数
            num %= (60 * 60 * 24);
            var hours = parseInt(num / (60 * 60));       //获取还乘多少小时
            num %= (60 * 60);
            var mints = parseInt(num / 60);            //获取还乘多少分钟
            var sends = parseInt(num % 60);

            oStr.innerHTML = "离目标日期还有" + days + "天" + hours + "小时" + mints + "分钟" + sends + "秒";
        }
	</script>
</body>
</html>
```



# Cookie

## Cookie用途与简介

1. Cookie(HTTP Cookie) , Cookie作用于客户端与服务器端会话中，例如：登陆一个网页，第一次登陆后，那以后登陆时就不用再次输入密码，页面会自动给填充，或者自动登陆

2. cookie 是存储于访问者的计算机中的变量。每当同一台计算机通过浏览器请求某个页面时，就会发送这个 cookie。也可以使用 JavaScript 来创建和取回 cookie 的值

3. 谷歌浏览器不可以在客户端操作

4. 浏览器中存储的Cookie个数是有限的，不同的浏览器能存储的个数也不太相同

5. Cookie的存在是有期限的，默认期限是会话结束时，比如当浏览器关闭时，Cookie也会删除掉，但我们可以手动设置它的期限

   

## Cookie的创建与使用

```js
//创建一个cookie  userName=小明
document.cookie = "userName=小明";
document.cookie = "userPassword=123456";			// 这里便是使用JS 给浏览器创建添加了一个Cookie


var oBtn = document.getElementById("btn");
oBtn.onclick = function(){
    // 获取cookie信息;
    alert(document.cookie);   	//打印"userName=小明; userPassword=123456;"，  会把所有的Cookie拼到一起，以一个字符串返回 
}


//cookie有效期设置
var oDate = new Date();
oDate.setDate(oDate.getDate()+2);
document.cookie = "userName=小明;expires="+oDate;		//设置cookie的期限为2天


//修改userName的值;
document.cookie = "userName=小花;expires="+oDate;  	//会把前面那个userName的值修改成“小花”;


//删除Cookie
var oDate = new Date();
oDate.setDate(oDate.getDate() - 1);
document.cookie = "userName=小花;expires="+oDate;		//把期限设置为过期，就相当于删除了
alert(document.cookie);
```



## Cookie封装

```js
//创建一个setCookie方法   	用来创建cookie
function setCookie(name,value,time){
    var oDate = new Date();
    oDate.setDate(oDate.getDate()+time);
    document.cookie = name+"="+value+";expires="+oDate;
}
setCookie("userName","小明",3);			//设置setCookie设置一个cookie，username="小明"，有效期为3天
setCookie("userPassword","123456",3);
setCookie("userSex","男",3);



//创建一个getCookie方法  用来获取cookie
function getCookie(name){

    console.log(document.cookie);   //userName=小明; userPassword=123456; userSex=男

    var str = document.cookie;
    var arr = str.split("; ");
    for(var i = 0; i < arr.length; i++){
        var arr1 = arr[i].split("=");	//把cookie字符串进行分割，找到我们需要的那个cookie值
        if(arr1[0] == name){
            return arr1[1];
        }
    }
}
var userName = getCookie("userName");	//调用getCookie方法，获取userName的值
alert(userName);



//创建一个removeCookie方法 用来删除
function removeCookie(name){
    setCookie(name, "" , -1);		//限把有效期 设置为过期就行了
}
removeCookie("userName");
removeCookie("userPassword");
removeCookie("userSex");
```



# json

## json简介

1. 什么是数据格式，数据格式就是数据保存在文件中或者记录中的编排格式
2. json是一种数据格式，而不是一种编程语言，也不从属于javaScript,也不仅仅只有javaScript才能使用json
3. 与XML相比，在javaScript中json是读写结构化数据更好的方式
4. 在json数据格式中，不允许出现单引号，只能是双引号
5. 在浏览器中，操作json数据格式的对象是 JSON

## JSON序列化使用

序列化是指将对象的状态信息转换为可以存储或传输的形式的过程，比如JSON序列化就是可以把对象变成可传输的字符串形式

1. 序列化 JS 简单值

   ```js
   //简单值：
   // 比如12这个值在JSON中就是一个数值，"小明"它在JSON中就是一个JSON字符串，在一般情况下，简单值只是整个数据结构的一部分
   
   var username = "哈哈";		// 这里 "哈哈" 就是所谓的简单值
   console.log( JSON.stringify(username) );	// 调用stringify方法序列化 username这个变量值
   ```

   

2. 序列化 JS 对象

   ```js
   //2：对象
   var obj = { 			//在javaScript中对象字面量表示法
       name:"小明",
       age:18,
       sex:"男"
   };
   console.log(JSON.stringify(obj));	// 打印一个字符串{"name":"小明","age":18,"sex":"男"}，   这就是一个常见的json格式的数据字符串
   
   //PS: 即便JS对象中使用的是单引号，但是序列化成一个json字符串时，单引号会自动转换成双引号
   ```

   

3. 序列化 JS 数组

   ```js
   // 在json格式的数据中，通常会把数组与对象结合来用，
   var arr = [		// JS数组
       {"name":"小明","age":16},
       {"name":"小花","age":17}
   ]; 
   console.log( JSON.stringify(arr) ); // 打印一个字符串 [{"name":"小明","age":16},{"name":"小花","age":17}]
   ```

   

## JSON解析使用

JSON解析的作用，可以一个json格式的数据字符串，解析成一个JS对象，方便我们在页面使用数据

1. 解析对象形式的 json字符串

   ```js
   var data = '{"name":"小明","age":18,"sex":"男"}';	// 这就是一个json格式的字符串数据， 注意里边的数据不能出现单引号，否则会解析出错
   var obj = JSON.parse(data);		// 通过parse方法进行解析
   console.log(obj.name);			//打印 "小明"
   ```

   

2. 解析数组形式的 json字符串

   ```js
   var data = '[{"name":"小明","age":16},{"name":"小花","age":17}]';
   var arr = JSON.parse(data);		
   console.log(arr[1].name);		//打印 "小花"
   ```



# ajax

## ajax简介

1. 2005年Jesse James Garrett发表了一篇文章，标题为：“Ajax：A new Approach to Web Applications”。他在这篇文章里介绍了一种技术，用他的话说，就叫：Ajax，是Asynchronous JavaScript + XML的简写。这种技术能够想服务器请求额外的数据而无须卸载页面(即刷新)，会带来更好的用户体验
2. Ajax技术核心是XMLHttpRequest对象(简称XHR)，这是由微软首先引入的一个特性，其他浏览器提供商后来都提供了相同的实现。在XHR出现之前，Ajax式的通信必须借助一些hack手段来实现，大多数是使用隐藏的框架或内嵌框架。
3. XHR的出现，提供了向服务器发送请求和解析服务器响应提供了流畅的接口。能够以异步方式从服务器获取更多的信息，这就意味着，用户只要触发某一事件，在不刷新网页的情况下，更新服务器最新的数据。
4. 虽然Ajax中的x代表的是XML，但Ajax通信和数据格式无关，也就是说这种技术不一定使用XML，比如可以是文本，json

## XMLHttpRequest对象兼容处理

1. XMLHttpRequest对象是做 ajax请求的核心对象，也就是说我们需要用到这个对象做ajax请求

2. 兼容处理代码

   ```js
   //创建一个createXML函数兼容
   function createXML(){
       if(typeof XMLHttpRequest != "undefined"){
           return new XMLHttpRequest();
       }
       else if(typeof ActiveXObject != "undefined"){
           var varsions = [
               "MSXML2.XMLHttp.6.0",
               "MSXML2.XMLHttp.3.0",
               "MSXML2.XMLHttp",
           ]
           for(var i = 0; i < varsions.length; i++){
               try{
                   return new ActiveXObject(varsions[i]);
               }catch(e){
                   //处理异常：跳过异常
               }
           }
       }
       else{
           throw new Error("浏览器不支持XHR对象");
       }
   }
   ```



## 发送第一个ajax（同步请求）

```js
//通过点击事件，不断的向服务器发送请求，服务器返回最新的数据来更新页面(而不刷新页面) 这个就是ajax的功能
//需求：点击页面就向后台请求一个数据回来，在页面中显示；

document.onclick = function(){

    var xhr = new XMLHttpRequest(); // 首先创建一个xhr对象

    var method = "get"; // 设置请求的类型为get请求
    
    var url = "https://api.github.com/search/users?q=aa";   // 设置要请求的资源路径

    // 调用open方法表示准备发送请求（注意只是准备发送）
    xhr.open(method,url,false);   // 把第三个参数设置false 表示同步请求,  默认值为true (异步请求)

    // 调用send方法表示开始发送请求，如果post请求，里边的参数可以是一个String类型的数据，作为请求发送的数据；如果是get请求，设置为null就行
    xhr.send(null);

    
    // alert(xhr.responseText);    //可以直接在这里，打印后台返回的文本数据
    
    // 也可以先判断一下，后台返回状态码，如果是200，则说明数据返回成功了
    if(xhr.status === 200){
        var str = xhr.responseText;
        alert(str);
    }else{
        alert("数据响应失败");
        alert("状态码:"+xhr.status+"   状态信息:"+xhr.statusText);
    }
}
```



## 发送异步ajax请求

1. 异步请求即发送请求后代码可以接着往后执行, 也就是ajax请求后面的js代码并不会等待ajax请求的完成, 而会继续执行

2. open()方法默认设置为异步请求

   ```js
   document.onclick = function(){
   
       var xhr = new XMLHttpRequest();  // 首先创建一个xhr对象
   
       var method = "get";           // 设置请求的类型
       var url = "https://api.github.com/search/users?q=aa"; // 设置要请求的资源路径
   
       
       // console.log(xhr.readyState) 打印0
       // 调用open方法表示准备发送请求（注意是准备发送）
       xhr.open(method,url,true);   // 把第三个参数async设置false表示同步请求,  默认为true (异步请求)
   
       // console.log(xhr.readyState) 打印1
       //调用send方法表示发送请求  里边的参数可以一个String 仅用于post请求　作为请求发送的数据
       xhr.send(null);
      
       
       // console.log(xhr.responseText) 在这里是直接获取不到后台返回的数据的，因为是异步请求，程序在执行这句代码时，ajax请求肯定并没有完成
   
   
       // xhr对象的onreadystatechange属性(存储函数或函数名)，这个属性是一个函数，每当xhr.readyState属性的值发生变化时，这个函数就会触发调用
       // xhr.readyState属性表示xhr的状态。从 0 到 4 发生变化。
       // xhr.readyState === 0: 表示请求未初始化，就是没有做好准备发送
       // xhr.readyState === 1: 表示服务器连接已建立，已经准备发送请求
       // xhr.readyState === 2: 表示请求已接收
       // xhr.readyState === 3: 表示请求处理中
       // xhr.readyState === 4: 表示请求响应已完成
       
       xhr.onreadystatechange = function(){
           if(xhr.readyState === 4){    // 当xhr.readyState属性值为4时: 请求响应已完成
               if(xhr.status === 200){  // 响应状态码为200，说是请求是成功的，就打返回数据;
                   var str = xhr.responseText;
                   alert(str);
               }else{
                   alert("数据响应失败");
                   alert("状态码:"+xhr.status+"   状态信息:"+xhr.statusText);
               }
           }
       };
   
       console.log(111111);	// 如果是异步请求，则这里的执行打印就不会等待上面的ajax请求完成，而是马上执行
   }
   ```



## 发送同步ajax请求

1. 同步请求，即发送请求后，ajax请求后面的代码并不会马上执行，而是会停留等待整个ajax请求响应的完成，然后才执行

2. 如果使用同步模式， 请不要编写onreadystatechange函数，  直接把代码写在send()语句后就行

   ```js
   document.onclick = function(){
   
       var xhr = new XMLHttpRequest(); // 首先创建一个xhr对象
   
       var method = "get"; // 设置请求的类型为get请求
       
       var url = "https://api.github.com/search/users?q=aa";   // 设置要请求的资源路径
   
       // 调用open方法表示准备发送请求（注意只是准备发送）
       xhr.open(method, url, false);   // 把第三个参数设置false 表示同步请求,  默认值为true (异步请求)
   
       // 调用send方法表示开始发送请求，如果post请求，里边的参数可以是一个String类型的数据，作为请求发送的数据；如果是get请求，设置为null就行
       xhr.send(null);
   
       
   
       // 可以直接在这里，打印后台返回的文本数据，因为是同步请求，所以这里必需要等待上面ajax请求完成时才会被执行
       // console.log(xhr.responseText); 
       
       // 也可以先判断一下，后台返回状态码，如果是200，则说明数据返回成功了
       if(xhr.readyState === 4){    //当readyState属性值为4: 表示请求已完成，且响应已就绪
           if(xhr.status === 200){  //响应状态为200 就打返回数据;
               var str = xhr.responseText;
               alert(str);
           }else{
               alert("数据响应失败");
               alert("状态码:"+xhr.status+"   状态信息:"+xhr.statusText);
           }
       }
   
       console.log(111);		
   }
   ```



## 发送GET请求

1. get请求，即可以把字符串参数追加到URL的尾部，以这种方法提交给服务器

   ```js
   document.onclick = function(){
   
       var xhr = new XMLHttpRequest();
       var method = "get";
   
       // 如果第二次请求时，出现了页面缓存问题，可以加在url后加一个随机字符解决，也可以加一个日期（因为日期也相当是随机的）
       // var url = "https://api.github.com/search/users?date="+new Date();
   
       // var url = "https://api.github.com/search/users?q=aa";
       var url = "https://api.github.com/search/users";
       url = params(url,"q","aa");		// 调用params方法，设置get请求的请求参数
   
       xhr.open(method,url,true);
       xhr.send(null);
       xhr.onreadystatechange = function(){
           if(xhr.readyState === 4){
               if(xhr.status === 200){
                   var str = xhr.responseText;
                   alert(str);
               }else{
                   alert("数据响应失败");
                   alert("状态码:"+xhr.status+"   状态信息:"+xhr.statusText);
               }
           }
       };
   
       // 封装一个params函数，用于给get请求url后面添加参数
       function params(url,name,value){
           url += url.indexOf("?") === -1?"?":"&";
           url += ""+name+"="+value+"";
           return url;
       }
   }
   ```



## 发送POST请求

1. POST请求

2. 后台demo3.jsp代码

   ```jsp
   <%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
   <%
   String path = request.getContextPath();
   String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
   
   	String data = "[\"username\",\"userage\"]";
   	String jsoncallback = request.getParameter("jsoncallback");
   	
   	System.out.println(  request.getParameter("name")  );
   	System.out.println(  request.getParameter("age")  );
   %>
   ```

   

3. 前端代码

   ```js
   document.onclick = function(){
   
       var xhr = new XMLHttpRequest();
   
       var method = "post";            		//这里设置为post请求类型
       var url = "http://localhost:8080/aaa/demo3.jsp?date="+new Date();
       xhr.open(method,url);					
       
       // form表单中可以做post请求，可服务器对POST 请求和提交Web 表单的请求并不会一视同仁， 但是我们可以模拟表单提交，如下
       xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');   
       xhr.send("name=ajax&age=123");      	//把键值对放入send方法
   
       xhr.onreadystatechange = function(){
           if(xhr.readyState === 4){
               if(xhr.status === 200){
                   var str = xhr.responseText;
                   alert(str);
               }else{
                   alert("数据响应失败");
                   alert("状态码:"+xhr.status+"   状态信息:"+xhr.statusText);
               }
           }
       }
   
   }
   ```



## 请求头设置

1. 默认情况下，在发送XHR 请求的同时，还会发送下列头部信息

   1.  Accept：浏览器能够处理的内容类型。
   2.  Accept-Charset：浏览器能够显示的字符集。
   3.  Accept-Encoding：浏览器能够处理的压缩编码。
   4.  Accept-Language：浏览器当前设置的语言。
   5.  Connection：浏览器与服务器之间连接的类型。
   6.  Cookie：当前页面设置的任何Cookie。
   7.  Host：发出请求的页面所在的域 。Referer：发出请求的页面的URI。注意，HTTP 规范将这个头部字段拼写错了，而为保证与规
      范一致，也只能将错就错了。（这个英文单词的正确拼法应该是referrer。）
   8.  User-Agent：浏览器的用户代理字符串。
   9. PS：虽然不同浏览器实际发送的头部信息会有所不同，但以上列出的基本上是所有浏览器都会发送的。

2. 设置自定义头信息

   ```js
   //两种头信息
   //响应头信息：服务器返回的信息，客户端可以获取，但不可以设置
   //请求头信息：客户端发送的信息，客户端可以设置，但不可以获取
   document.onclick = function(){
   
       var xhr = new XMLHttpRequest();
       xhr.open("get","demo2.jsp");
   
       //设置请求头信息   一般用post提交请求时  在发送前设置
       xhr.setRequestHeader("myName","MyAjax");
   
       xhr.send(null);
       xhr.onreadystatechange = function(){
           if(xhr.readyState === 4){
               if(xhr.status === 200){
                   var str = xhr.responseText;
                   console.log(str);
                   console.log(xhr.getResponseHeader("Content-Type"));	// 获取单个响应头信息
                   console.log(xhr.getAllResponseHeaders());			// 获取整个的响应头信息
               }else{
                   alert("数据响应失败");
                   alert("状态码:"+xhr.status+"   状态信息:"+xhr.statusText);
               }
           }
       }
   }
   ```

   

# 跨域请求

1. 什么是页面跨域请求：在一个域名下的网页中，去请求另一个域名下的资源
2. 什么是同源策略：它是由 Netscape 提出的一个著名的安全策略，现在所有支持 JavaScript 的浏览器都会使用这个策略；所谓同源是指，域名，协议，端口均相同；其中只要有一个不同，则就是不同源

## JSONP跨域请求

1. 后台代码设置

   ```jsp
   <%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
   <%
   	String path = request.getContextPath();
   	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
   
   	// 后台要返回到前端数据
   	String data = "[\"username\",\"userage\"]";
   	
   	// 获取到前端发送过来的 回调函数名
   	String jsoncallback = request.getParameter("jsoncallback");
   	
   	// 以一个字符串的形式拼接好（调用回调函数，且把数据传入），返回前端
   	out.println(jsoncallback+"("+data+")");
   %>
   ```

   

2. 前台代码（使用JavaScript）

   ```html
   <script type="text/javascript">
       function callbackFunction(result, methodName) {
           console.log(result, 11111111)
       }
   </script>
   <!--
   	通过script标签请求后台资源，且把回调函数callbackFunction作为参数传过去，后台处理后则会返回一个调用回调函数的JS代码：
   	callbackFunction(data)
   	接着就调用我们写的回调函数，获取到数据
   	
   	PS：这里主要是利用到了script标签请求后台，然后调用后台返回的js代码
   -->
   <script type="text/javascript" src="http://localhost:8080/aaa/demo3.jsp?jsoncallback=callbackFunction"></script>
   ```

   

3. 前台代码（使用Jquery）

   ```jsp
   <script src="https://cdn.static.runoob.com/libs/jquery/1.8.3/jquery.js"></script>
   <script>
       // 使用Jquery做 jsonp时，Jquery会自动生成一个回调函数名，所以我们在写的时候只写一个?就行
       $.getJSON("http://localhost:8080/aaa/demo3.jsp?jsoncallback=?", function(data) {
           console.log(data);
       }); 
   </script>
   ```


# 对象

## 对象

### 对象的创建

1. 第一种创建方式

   ```js
       //对象的第一种创建方式：通过对象直接量创建;
       var obj = {
           name:"小明",   //对象的属性;
           age:18,	
           sex:"男",
           count:function(){
               var sum = null;
               for(var i = 0; i < arguments.length; i++){
                   sum += arguments[i];
               }
               alert(sum);
           },
           clothing:{       //给对象添加一个属性，它的值也为一个对象；
               color:"red",
               width:"100",
               height:"100"
           }
       };
   
       alert(obj.name);				//拿到对象的属性
       alert(   obj["name"]   );    	//获取对象的属性的第二方式;
       alert(obj.age);
       alert(obj.sex);
       alert(obj.count);
       obj.count(1,2,3);
       alert(obj.clothing.color);   	//获取对象内部对象的属性;
   
       obj.name = "小红";			  //修改对象的属性
       alert(obj.name);
   
       delete obj.sex;					//删除属性
       alert(obj.sex);
   ```

2. 第二种创建方式

   ```js
       //javaScript中对象的第二种创建方式；通过new Object来创建一个对象
   
       var obj = new Object();   //这里就是创建了一个对象;
       obj.name = "胖胖";
       obj.age = 18;
       obj.sex = "男";
       alert(obj.name);
       obj.eat = function(){
           alert("胖胖在吃饭");
       }
       obj.eat();
   
   
       var obj1 = new Object();
       obj1.name = "小明";
       obj1.age = 18;
       obj1.sex = "男";
   ```

3. 第三种创建方式（工厂模式）

   ```js
       //工厂模式，可以解决第二种创建对象的缺点;
       //缺点：不能识别创建的对象是哪个类的实例;
       function Person(name,age,sex){   //这里是一个工厂Person类;
           var obj = new Object;
           obj.name = name;
           obj.age = age;
           obj.sex = sex;
           return obj;
       }
   
       // var obj1 = Person("胖胖",18,"男");   //简单的调用函数返回一个对象
       // alert(obj1.name);
       // var obj2 = Person("小明",18,"男");
       // alert(obj2.name);
   
       var obj1 = new Person("胖胖",18,"男");
       // alert(obj1.name);
       // alert(typeof obj1);
       alert(obj1 instanceof Person);
   ```

### for in的使用

```js
/*for in 可以用来遍历一个对象的属性名*/
	var obj = {
        name:"小明",
        age:18,
        sex:"男"
    };
    for(var i in obj){		//遍历对象属性名
        // alert(i); 
        alert(obj[i]);   	//遍历对象的属性值;
    }

    var arr = [1,3,6,9,4,8];
    for(var i in arr){
        // alert(i);   		//如果是数组，则遍历的是数据元素的下标
        alert(arr[i]);
    }
```

### with的使用

```js
    var obj = {
        name:"小明",
        age:18,
        sex:"男"
    };
    var n = obj.name;
    var a = obj.age;
    var s = obj.sex;

	/*with的作用：可以直接获取对象的属性值*/
    with(obj){
        var n = name;   //前面可以省略obj.
        var a = age;
        var s = sex;
    }
    alert(n);
    alert(a);
    alert(s);
```

### instaceof关键词

1. instanceof 关键词  可以 用来判断一个对象是不是某一个类的实例;

   ```js
       var obj = new Array();   //创建一个数组的实例,其实就是一个数组对象
       //alert(typeof obj);     //打印object；
   
   	//通过instanceof可知道 obj 是一个Array实例对象
       alert(obj instanceof Date);  //打印true ，说明对象是Array的一个实例;
   ```

### 对象中的this

```js
    var obj = {
        name:"小明",
        age:18,
        sex:"男",
        eat:function(){
            console.log(this);		//这里的this 指的是obj对象
            alert(this.name);		//打印小明;
        },
        clothing:{
            name:"衣服",
            color:"red",
            fin:function(){
                console.log(this);	 //这里的this 指的是clothing对象（就近原则）
                alert(this.name);    //打印衣服
            }
        }
    };
    obj.eat();
    obj.clothing.fin();
```

### JS中的构造函数

```js
    //创建一个构造函数，再通过new这个函数创建对象；
    function Person(name,age,sex){    //函数可以是一个构造函数
        this.name = name;    		  //这里的this指的是当前new 的对象;
        this.age = age;
        this.sex = sex;
    };
	
    var obj = new Person("小明",18,"男");   //通过new一个构造函数创建对象;
    alert(obj.name);
    alert(obj instanceof Person);   //打印一个true  就明obj是Person的一个实例;


    // function Array(){}
    // var arr = new Array();
```

### prototype 原型

1. prototype原型上的东西是所有对象共有的

   ```js
       function Person(name,age,sex){
           this.name = name;
           this.age = age;
           this.sex = sex;
       }  
   
   	// 在Person 原型添加一个方法;
       Person.prototype.fin = function(){  	// 这里的方法是每一个Person对象都共有的;
           alert(this.name+"在吃饭");
       };
   
       var obj = new Person("小明",25,"男");
       obj.fin();
       var obj1 = new Person("小花",18,"女");
       obj1.fin();
   ```

### 实例对象 与 函数对象

1. 如果我们把一个函数当成对象使用，则可以称为函数对象

   ```js
       function Person(name,age,sex){
           this.name = name;
           this.age = age;
           this.sex = sex;
       }
   	Person.showTime = function(){}	//直接给Person上添加一个showTime属性，所以这里我们就可以把Person这个函数看成是一个对象（函数对象）
   	Person.showTime();			//调用
   	new Person().showTime();	//报错，实例对象不能调用函数对象上的属性
   ```

2. 通过new 函数名()，得到的对象，就叫做实例对象

   ```js
       function Person(name,age,sex){
           this.name = name;
           this.age = age;
           this.sex = sex;
       }
   	Person.prototype.fin = function(){}
   	Person obj = new Person();		//通过new关键词创建一个对象，这样的对象叫做实例对象
   	obj.fin();						//原型上的属性/方法，是属性实例对象的
   	Person.fin();					//报错；函数对象不能使用实例对象上属性
   ```

### 给数组添加去重方法

```js
    //第一种方式
    Array.prototype.removeRepetition = function(){

        var arr1 = [];
        for(var i = 0; i < this.length; i++){

            if(this.indexOf(this[i])  == i){
                arr1.push(this[i]);
            }
        }
        return arr1;
    }
    var arr = [1,2,2,2,2,2,6,3,6,4,85,4];
    var arr1 = arr.removeRepetition();
    alert(arr1);
    alert(arr);   //原来的数组 没有变

	//第二种方式
    Array.prototype.removeRepetition = function(){

        var arr1 = [];
        for(var i = 0; i < this.length; i++){

            if(this.indexOf(this[i])  == i){
                arr1.push(this[i]);
            }
        }
        this.length = 0;   //这里就相当于 arr.length = 0
        for(var i = 0; i < arr1.length; i++){
            this[i] = arr1[i];
        }
    }
    var arr = [1,2,2,2,2,2,6,3,6,4,85,4];
    arr.removeRepetition();
    alert(arr);
```

# 作用域

## 作用域

1. 作用域：一段代码的一个执行范围

2. 变量可以分全局变量，局部变量两种

3. 全局变量：特点-在代码的任何地方可以访问得到，有全局的作用域

   1. 最外层函数外面定义的变量
   2. 没有用var操作符直接赋值的变量，也有全局的属性

4. 局部变量：特点-只能在特定的函数段中访问得到，只有局部的作用域

   1. 在函数内部定义的变量就是局部变量；
   2. 参数它也是局部变量；

   ```js
       var an = 12;  //全局变量
       function show(){
           var str = "小明";   //局部变量;
           function aa(){
   
           }
       }
   
   
       var an = 12;  //全局变量
       function show(){
           var str = "小明";   //局部变量;
           alert(an);
           alert(str);
       }
       show();
       // alert(str);  //访问不到str；
   
   
   
   
       var an = 12;  //全局变量
       function show(){
           var str = "小明";    //局部变量;
           bn = 19;   			//没有用var操作符直接赋值的变量，也有全局的属性
       }
       show();
       alert(bn);  //可以访问到；没有用var操作符直接赋值的变量，也有全局的属性
   
   
   
       function show(age){   //参数它也是局部变量；
           alert(age);
       }
       show(18);
       alert(age);  //访问不到;
   ```

# 执行环境

## 执行环境

### 环境

1. 宿主环境  (浏览器)

2. 执行环境：决定变量和函数的访问权限;

   1. 全局环境 - 全局环境就是外围的执行环境，在Web中，全局执行环境被认为是window对象;
   2. 局部环境 - 每一个函数都有自己的一个执行环境（函数执行环境）;
   3. eval()环境;

3. 函数执行环境中的所有代码执行完毕后，该环境被销毁，保存在其中的所有变量和函数定义也随之销毁（全局执行环境直到应用程序退
   出——例如关闭网页或浏览器——时才会被销毁）。

   ```js
       var an = 12;				 //全局环境下定义的变量-->全局变量
       alert(an);
       alert(window.an);            //在Web中，全局执行环境被认为是window对象;
       alert(this.an);
   
   
       function show(){             //函数的执行完后，执行环境就会被销毁;定义的变量等会清空;
           var str = "小明";         //全局环境要等关闭页面或者浏览器补销毁;
       }
       show();
       alert(str);
   ```

### JS代码预解析 与 执行

**预解析：**

1. script块的解析
2. 解析代码的执行环境;
3. 对(关键字) var function 进行解析, 把它们解析到相对应的环境下;
4. 如果下面还有script块，重复上面的操作;

**执行：**

1. 定义(预解析);
2. 解析完成后，然后代码从上往下执行

```js
    var str = "小明";
    alert(an);
    var an = 12;
	/*
		解析与执行过程：
			解析：var an; var str;
			执行：
				alert(an);
				an = 12；
	*/
```

```js
    var str = "小明";
    function show(){
         var an = 12;
         alert(an);
    }
    show();
	
	/*
		定义: var str; 
			 function show;
			 
		执行：str = "小明";
			 show();
			 	show函数内部作用域定义：var an;
			 	show函数内部作用域执行：an = 12;
			 		 				 alert(an);
	*/
```

### 作用域链;

```js
        var str = "小天";

        function show(){
            var an = 12;
            var str = "小明";
            alert(an);				//打印12
            function aaa(){
                alert(str);			//打印undefined；当我们使用一个变量时，系统会在当前的作用域查找这个变量，如果当前作用域没有定义过这个变量城，则就依次													到上级作用域中查找，直到找到为止；如果没有找到，则会报错
                var str = "小花";
            }
            aaa();
        }
        show();
```





