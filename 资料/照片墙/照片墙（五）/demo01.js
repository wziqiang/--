/**
 * 目标一：在有碰撞的时候，完成拖拽图片与之碰撞的图片 位置进行交换 （在第四步的基础上完成）
 * 目标二：在没有碰撞的时候，则就拖拽图片还原到原来的位置
 *
 * 注意：在做这里的图片交换时，可能会现出一个或者一些问题，自己想办法找到原因并解决
 */
$(function () {
    //获取所有的li
    var $lis = $("#list li");


    //获取所有的li的坐标值（以便于以后操作，如对图片的重新布局）
    var arr = $lis.map(function () {
        return {    //返回一个对象，对象包含了当前li的坐标属性
            "left": $(this).offset().left,   //获取当前li的左边距
            "top": $(this).offset().top      ////获取当前li的右边距
        }
    });
    console.log(arr);

    //遍历li，给li添加position属性，且给每一个li重新布局
    $.each($lis,function (k,v) {
        this.index = k;             //给当前遍历的li添加一个index属性，属性值为当前li在arr数组中的下标
        $(this).css({
            position: "absolute",   //添加定位属性
            left: arr[k].left,      //把之前存储在arr中的li坐标还原
            top: arr[k].top,
            margin: 0,
            padding: 0
        })
    })

    var zindex = 9999;      //添加一个变量作为图片的层级
    //给#list下的所有的li绑定一个mousedown事件
    $("#list").on("mousedown", "li", function (event) {
        var x = event.pageX - $(this).offset().left;    //获取鼠标按下时与图片相对的横向固定距离
        var y = event.pageY - $(this).offset().top;     //获取鼠标按下时与图片相对的纵向固定距离
        var $this = $(this);                            //把当前按下图片的this赋值给一个变量
        $this.css("zIndex", ++zindex);

        //给document绑定一个mousemove事件
        $(document).mousemove(function (event) {
            $this.css("left", event.pageX - x+"px");   //用当前鼠标的横向坐标减去横向固定距离 赋值给图片的left
            $this.css("top", event.pageY - y+"px");

            //遍历li，检测是否有碰撞
            $.each($lis, function (k,v) {
                if($this[0] == $(v)[0]){   //如果当前遍历的li与当前拖拽li是同一个则就返回，不检测碰撞;
                    return;
                }
                //调用检测碰撞的函数isOverlap，
                var bool = isOverlap($this, $(v));
                if(bool){  //如果有碰撞则就添加col样式
                    fn($this, $(v));    //给最小距离的li添加col样式
                }
            })
            min = 99999;    //还原最小距离
        })

        return false;           //返回false，去掉浏览器的一些默认行为
    })

    //给#list下的所有的li绑定一个mouseup事件
    $("#list").on("mouseup", "li", function () {
        $(document).off("mousemove");   //把document上的mousemove事件移除掉

        var $this = $(this);             //当前拖拽的li
        var $other = $("li[class=col]");//碰撞的距离最小的li


        //如果没有碰撞，则让当前拖拽的图片运动回之前的前置
        if(!$lis.hasClass("col")){
            $(this).animate({
                "left": arr[this.index].left,
                "top": arr[this.index].top
            });
        }else{
            $this.animate({
                "left": arr[$other[0].index].left,
                "top": arr[$other[0].index].top,
            });

            $other.animate({
                "left": arr[$this[0].index].left,
                "top": arr[$this[0].index].top,
            });

            //交换在数组里的下标
            var t = $this[0].index;
            $this[0].index = $other[0].index;
            $other[0].index = t;

            $lis.removeClass("col");
        }
    });


    var min = 99999;    //假设定义的min这个变量就是最小距离
    //自定义一个函数fn，用来求最小距离
    function fn(obj1, obj2) {   //第一个参数为当前拖拽的元素
        //求两条直角边的平方
        var a2 = Math.pow(obj1.offset().top - obj2.offset().top, 2);
        var b2 = Math.pow(obj1.offset().left - obj2.offset().left, 2);
        var c2 = a2+b2;
        var c = Math.sqrt(c2);  //获取到两个li的距离

        if(c < min) {
            //如果当前的这个距离要小于假设的最小距离的话，则给当前碰撞的这个图片给上col样式且移除其它li上的col样式
            obj2.addClass("col").siblings().removeClass("col");
            min = c;     //更新最小距离;
        }
    }


    //碰撞检测函数
    function isOverlap(obj1, obj2) {    //第一个参数是当前拖拽的对象
        var $offset1 = obj1.offset();   //offset()方法 返回一个对象，这个对象里包含调用方法元素对象的top，left属性䐈
        var $offset2 = obj2.offset();

        var left1 =  $offset1.left;
        var leftWidth1 = $offset1.left + obj1.width();
        var top1 = $offset1.top;
        var topheight1 = $offset1.top + obj1.height();

        var left2 =  $offset2.left;
        var leftWidth2 = $offset2.left + obj2.width();
        var top2 = $offset2.top;
        var topheight2 = $offset2.top + obj2.height();

        //检测两个div有没有碰撞，如果没有碰撞返回false，否则返回true
        if(leftWidth1<left2 || left1>leftWidth2 || topheight1<top2 || top1>topheight2){
            return false;
        }
        return true;
    }
})








