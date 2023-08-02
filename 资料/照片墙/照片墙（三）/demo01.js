/**
 *  #list .col{ border: 1px solid red; }
 * 目标：检测图片的碰撞，给与当前拖拽图片碰撞的其它图片加上一个col样式（在第二步的基础上完成）
 * 思路：检测碰撞与之前的碰撞实例差不多（参照那里即可）
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
                    $(v).addClass("col");
                }
            })

        })

        return false;           //返回false，去掉浏览器的一些默认行为
    })

    //给#list下的所有的li绑定一个mouseup事件
    $("#list").on("mouseup", "li", function () {
        $(document).off("mousemove");   //把document上的mousemove事件移除掉

        //让当前拖拽的图片运动回之前的前置
        $(this).animate({
            "left": arr[this.index].left,
            "top": arr[this.index].top
        });
    });

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








