$(function(){
    var i=0;
    var big_banner_pic = $(".nav_c_img_left");
    var allimg=$(".nav_c_img_left li").length;
    function img_change(){
        var img_i=i*-450+"px";
        big_banner_pic.animate(0,5000,function(){
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
    window.setInterval(automatic, 5000);


    var k=0;
    var mi_stars_content = $(".mi_stars_content");
    var alldiv=$(".mi_stars_content>div").length;
    function div_change(){
        var div_k=k*-360+"px";
        mi_stars_content.animate(0,5000,function(){
            mi_stars_content
                .css("top",div_k );

        })
    }
    function div(){
        k+=1;
        if(k>=alldiv){
            k=0;
        }
        div_change();
    }
    window.setInterval(div, 5000);


    var dp_content_right = $(".dp_content_right");
    $(".dp_title_r_a").mouseover(function(){
        dp_content_right.css("top","0px");
    })
    $(".dp_title_r_b").mouseover(function(){
        dp_content_right.css("top","-658px");
    })
    $(".dp_title_r_c").mouseover(function(){
        dp_content_right.css("top","-1316px");
    })
    $(".dp_title_r_d").mouseover(function(){
        dp_content_right.css("top","-1974px");
    })

    var pj_content_right = $(".pj_content_right");
    $(".pj_title_r_a").mouseover(function(){
        pj_content_right.css("top","0px");
    })
    $(".pj_title_r_b").mouseover(function(){
        pj_content_right.css("top","-658px");
    })
    $(".pj_title_r_c").mouseover(function(){
        pj_content_right.css("top","-1316px");
    })
    $(".pj_title_r_d").mouseover(function(){
        pj_content_right.css("top","-1974px");
    })


    var zb_content_right = $(".zb_content_right");
    $(".zb_title_r_a").mouseover(function(){
        zb_content_right.css("top","0px");
    })
    $(".zb_title_r_b").mouseover(function(){
        zb_content_right.css("top","-658px");
    })
    $(".zb_title_r_c").mouseover(function(){
        zb_content_right.css("top","-1316px");
    })
    $(".zb_title_r_d").mouseover(function(){
        zb_content_right.css("top","-1974px");
    })
    $(".zb_title_r_e").mouseover(function(){
        zb_content_right.css("top","-2632px");
    })



})
var bt=1;
function nr_content_bottom() {

    if (bt<3){
        var nr_content_bottom_l_1_top=bt*(-400)+"px";
        $("#nr_content_a_top").css("margin-top",nr_content_bottom_l_1_top);
    }else if (bt == 3){
       bt = -1;
    }
    ++bt;
    console.log(bt);

}

function nr_content_bottom2() {

    if (bt<3){
        var nr_content_bottom_l_1_top=bt*(-400)+"px";
        $("#nr_content_a_top").css("margin-top",nr_content_bottom_l_1_top);
    }else if (bt == 3){
        bt = -1;
    }
    ++bt;

}
