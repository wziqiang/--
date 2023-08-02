/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-01-14 23:02:58
 * @version $Id$
 */
$(function(){

    $("li").each(function(i){

        $(this).css("left",i*51);
        $(this).attr("bool",1);
    });

    $("li").click(function(){

        if($(this).attr("bool") == 1){
            var arr = $(this).nextAll();
            $(this).nextAll().each(function(i){

                $(this).attr("bool",0);
                var num = (arr.length-i)*51-1;
                $(this).animate({
                    left: 730-num
                },500,"easeOutElastic");
            })
        }else{
            var n = $(this).index() + 1;
            var arr = $("li:lt("+n+")");
            arr.each(function(i){
                $(this).attr("bool",1);
                var num = i*51;
                $(this).animate({
                    left:num
                },500,"easeOutElastic");
            });
        }



    });

});

