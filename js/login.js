$(function () {
    // show login
    $(".loginButton").click(function () {
            setTimeout(function () {
                $(".loginContainer").css({"mozTransform":"scale(1,1)","webkitTransform":"scale(1,1)","oTransform":"scale(1,1)","transform":"scale(1,1)"});
            },800);
            $(".loginButton").fadeOut(800);
        }
    );
    // close login
    $(".close").click(function () {
        $(".loginContainer").css({"mozTransform":"scale(0,0)","webkitTransform":"scale(0,0)","oTransform":"scale(0,0)","transform":"scale(0,0)"});
        $(".loginButton").css("display","block");
    });
    //show register
    $(".registerButton").click(function () {
        $(".registerContainer").css({"mozTransform":"scale(1,1)","webkitTransform":"scale(1,1)","oTransform":"scale(1,1)","transform":"scale(1,1)"});
        $(".loginContainer").css({"mozTransform":"scale(0,0)","webkitTransform":"scale(0,0)","oTransform":"scale(0,0)","transform":"scale(0,0)"});
        }
    );
    // return login
    $(".return").click(function () {
        $(".registerContainer").css({"mozTransform":"scale(0,0)","webkitTransform":"scale(0,0)","oTransform":"scale(0,0)","transform":"scale(0,0)"});
        $(".loginContainer").css({"mozTransform":"scale(1,1)","webkitTransform":"scale(1,1)","oTransform":"scale(1,1)","transform":"scale(1,1)"});
    });
    // close register
    $(".close2").click(function () {
        $(".registerContainer").css({"mozTransform":"scale(0,0)","webkitTransform":"scale(0,0)","oTransform":"scale(0,0)","transform":"scale(0,0)"});
        $(".loginButton").css("display","block");
    });
})
