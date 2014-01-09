
$(function() {

    //Scroll Animation for About
    var animate = $("#progress");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 300) {
            animate.removeClass('display-none').addClass("display");
        } 
    });

    //Scroll Animation for Chart at Home page
    
    var animate1 = $(".chartImg2");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            $('.chartImg2').show( "slow" );   
        };
    });


    //Hide after resie

    $(window).resize(function() {
        //do something
        var width = $(document).width();
        
        if (width < 570) {
           $("#content").hide();
        };

        if (width > 570) {
           $("#content").show();
        }
    });

    //Swap team images

    $("#hoverImage1")
        .mouseover(function() { 
            var src = $("#swapImage1").attr("src").match(/[^\.]+/) + "1.jpg";
            $("#swapImage1").attr("src", src);
        })
        .mouseout(function() {
            var src = $("#swapImage1").attr("src").replace("1.jpg", ".png");
            $("#swapImage1").attr("src", src);
        });

    $("#hoverImage2")
        .mouseover(function() { 
            var src = $("#swapImage2").attr("src").match(/[^\.]+/) + "1.jpg";
            $("#swapImage2").attr("src", src);
        })
        .mouseout(function() {
            var src = $("#swapImage2").attr("src").replace("1.jpg", ".png");
            $("#swapImage2").attr("src", src);
        });

    $("#hoverImage3")
        .mouseover(function() { 
            var src = $("#swapImage3").attr("src").match(/[^\.]+/) + "1.jpg";
            $("#swapImage3").attr("src", src);
        })
        .mouseout(function() {
            var src = $("#swapImage3").attr("src").replace("1.jpg", ".png");
            $("#swapImage3").attr("src", src);
        });

    $("#hoverImage4")
        .mouseover(function() { 
            var src = $("#swapImage4").attr("src").match(/[^\.]+/) + "1.jpg";
            $("#swapImage4").attr("src", src);
        })
        .mouseout(function() {
            var src = $("#swapImage4").attr("src").replace("1.jpg", ".png");
            $("#swapImage4").attr("src", src);
        });

    $("#hoverImage5")
        .mouseover(function() { 
            var src = $("#swapImage5").attr("src").match(/[^\.]+/) + "1.jpg";
            $("#swapImage5").attr("src", src);
        })
        .mouseout(function() {
            var src = $("#swapImage5").attr("src").replace("1.jpg", ".png");
            $("#swapImage5").attr("src", src);
        });

    $("#hoverImage6")
        .mouseover(function() { 
            var src = $("#swapImage6").attr("src").match(/[^\.]+/) + "1.jpg";
            $("#swapImage6").attr("src", src);
        })
        .mouseout(function() {
            var src = $("#swapImage6").attr("src").replace("1.jpg", ".png");
            $("#swapImage6").attr("src", src);
        });

    $("#hoverImage7")
        .mouseover(function() { 
            var src = $("#swapImage7").attr("src").match(/[^\.]+/) + "1.jpg";
            $("#swapImage7").attr("src", src);
        })
        .mouseout(function() {
            var src = $("#swapImage7").attr("src").replace("1.jpg", ".png");
            $("#swapImage7").attr("src", src);
        });

    $("#hoverImage8")
        .mouseover(function() { 
            var src = $("#swapImage8").attr("src").match(/[^\.]+/) + "1.jpg";
            $("#swapImage8").attr("src", src);
        })
        .mouseout(function() {
            var src = $("#swapImage8").attr("src").replace("1.jpg", ".png");
            $("#swapImage8").attr("src", src);
        });    

    $("#hoverImage9")
        .mouseover(function() { 
            var src = $("#swapImage9").attr("src").match(/[^\.]+/) + "1.jpg";
            $("#swapImage9").attr("src", src);
        })
        .mouseout(function() {
            var src = $("#swapImage9").attr("src").replace("1.jpg", ".png");
            $("#swapImage9").attr("src", src);
        });

    $("#hoverImage10")
        .mouseover(function() { 
            var src = $("#swapImage10").attr("src").match(/[^\.]+/) + "1.jpg";
            $("#swapImage10").attr("src", src);
        })
        .mouseout(function() {
            var src = $("#swapImage10").attr("src").replace("1.jpg", ".png");
            $("#swapImage10").attr("src", src);
        });

    $("#hoverImage11")
        .mouseover(function() { 
            var src = $("#swapImage11").attr("src").match(/[^\.]+/) + "1.jpg";
            $("#swapImage11").attr("src", src);
        })
        .mouseout(function() {
            var src = $("#swapImage11").attr("src").replace("1.jpg", ".png");
            $("#swapImage11").attr("src", src);
        });
});


