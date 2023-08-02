import { a,c}  from './a.js'
const {ccc} =require('./cc.js')
require('./html.css')
require('./html.less')
a()
ccc()
console.log(c);
document.writeln('<img src="./img/2.png" />')
//打包是webpack@3.6.0 版本 因为vue2.版本是用的这个，如果安装了高的版本运行不了，会出错，要去配置一下vue版本才行 用webpack ./main.js ./dist/a.js
//或者 npm init 配置一下，然后建立一个webpack.config.js文件配置一下 运行webpack
//在上一个基础上package.json配置一下运行 npm run build