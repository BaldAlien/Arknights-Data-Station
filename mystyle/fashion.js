 $(function () { 
            $("#all li").mouseover(function () {//鼠标进入离开事件  
                $(this).css("background-color", "#ff00ff").siblings().css("background-color", "white");  
                $(this).css({ "background-color": "red", "font-size": "9px" }).siblings().hide();  
            });
  
            $(window).scroll(function () {//鼠标滚动事件
                var _top = $(window).scrollTop(); //获得鼠标滚动的距离 
            });

            $(this).find(".pic img").hover(function () { 
                 $(this).addClass("one").siblings().removeClass("one");
                index = $(this).index();
                i = index;
                $(".pic img").eq(index).stop().fadeIn(800).show().siblings().stop().fadeIn(800).hide();
            });

  
  
            $(".btn ul li").hover(function () {  
                $(this).addClass("one").siblings().removeClass("one");  
                index = $(".btn ul li").index(this); 
                i = index; 
                $(".pic a").eq(index).stop().fadeIn(200).show().siblings().stop().fadeIn(200).hide();  
            });
  
  
            var i = 0;  
            var t = setInterval(autoplay, 1000);
  
            function autoplay() {  
                i++; 
                if (i > 22) i = 0;  
                $(".btn ul li").eq(i).addClass("one").siblings().removeClass("one");  
                $(".pic a").eq(i).stop().fadeIn(800).show().siblings().stop().fadeIn(800).hide();  
            }
  
            $(".banner").hover(function () {
                clearInterval(t);
            }, function () { 
              t = setInterval(autoplay, 1000);
            });
        });

        $(document).ready(function(){
        $(".no").click(function (){
            alert("暂未开放此功能");
        });
    });