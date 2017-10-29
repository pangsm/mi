$(function(){
    var i=0;
    var big_banner_pic = $("#big_banner_pic");
    var allimg=$("#big_banner_pic li").length;
    function img_change(){
        var img_i=i*-250+"px";
        big_banner_pic.animate(0,6000,function(){
            big_banner_pic.css("top",img_i );

        })
    }
    function automatic(){
        i+=1;
        if(i>=allimg){
            i=0;
        }
        img_change();
    }
    change_self_time = setInterval(automatic, 6000);

    $("#big_banner_change_wrap").hover(function(){
        clearInterval(change_self_time);
        $("#big_banner_change_wrap").children().show();
    },function(){
        change_self_time = setInterval(automatic, 6000);
        $("#big_banner_change_wrap").children().hide();
    })

    $("#big_banner_change_next").click(function(){
        i -= 1;
        if (i <= 0) {
            i = allimg - 1;
        }
        img_change();
    })

    $(".right_a").mouseover(function(){
        i=0;
        img_change();
    })
    $(".right_b").mouseover(function(){
        i=1;
        img_change();
    })
    $(".right_c").mouseover(function(){
        i=2;
        img_change();
    })

})

