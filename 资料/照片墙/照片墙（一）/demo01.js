/**
 * 目标：完成图片的重新布局，还有拖拽功能
 *
 * 问题： 想要完成拖拽，需要给li添加position定位， 但如果添加这个属性，那所有的li会重叠到一起
 *
 * 解决思路：别在css样式表中加position定位，可以先通过jquery拿到所有li的坐标放入一个数组，
 *          然后使用css()方法添加position定位属性，且把之前放入数组里的li坐标赋值给相应的每一个li
 *
 *  关键代码：
 *      var arr = $lis.map(function () {
        //使用map()方法把每一个li对象的left，top值装入一个对象返回到数组中
            return {
                "left": $(this).offset().left,
                "top": $(this).offset().top
            }
        })
 *
 */


$(function () {

    //获取所有的li
    var $lis = $("#list li");


    //获取所有的li的坐标值
    var arr = $lis.map(function () {
        return {    //返回一个对象，对象包含了当前li的坐标属性
            "left": $(this).offset().left,   //获取当前li的左边距
            "top": $(this).offset().top      ////获取当前li的右边距
        }
    });
    console.log(arr);

    //遍历li，给li添加position属性，且给每一个li重新布局
    $.each($lis,function (k,v) {
        this.index = k;
        $(this).css({
            position: "absolute",
            left: arr[k].left,
            top: arr[k].top,
            margin: 0,
            padding: 0
        })
    })


    $("#list").on("mousedown", "li", function (event) {
        var x = event.pageX - $(this).offset().left;
        var y = event.pageY - $(this).offset().top;
        var $this = $(this);
        
        $(document).mousemove(function (event) {
            $this.css("left", event.pageX - x+"px");
            $this.css("top", event.pageY - y+"px");
        })

        return false;
    })
    
    $("#list").on("mouseup", "li", function () {
        $(document).off("mousemove");
    })
})








