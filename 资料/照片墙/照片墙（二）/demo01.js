/**
 * 目标：完成图片拖拽后，让其运动到原来的位置，且让当前拖拽的图片的层级最高 （在第一步的基础上完成）
 * 思路：在鼠标抬起时，让div回到之前的位置（可以利用之前存储到数组里的坐标）
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
        })

        return false;           //返回false，去掉浏览器的一些默认行为
    })

    //给#list下的所有的li绑定一个mouseup事件
    $("#list").on("mouseup", "li", function () {
        $(document).off("mousemove");   //把document上的mousemove事件移除掉

        $(this).animate({
             "left": arr[this.index].left,
             "top": arr[this.index].top
        });
    });

})








