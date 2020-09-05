$(function () {
    // 汉堡菜单
    $('#burger').mousedown(function() {
        $('.bun').velocity({
            scaleY: 0.85,
            translateY: 5
        }, {
            duration: 50
        })
    });


    $('#burger').mouseup(function() {

        $('.bun').velocity({
            scaleY: 1,
            translateY: 0
        }, {
            duration: 50
        });


        $('#burger').velocity({
            opacity: 0,
            translateY: -400,
            scale: 1.5
        }, {
            duration: 100
        }, [50, 5]);

        $('#chip-no-sauce, #chip-with-sauce').delay(150);

        $('#chip-no-sauce').velocity({
            rotateZ: "-45deg",
            transformOriginX: 35,
            transformOriginY: 26
        }, {
            duration: 100
        }, [250, 15]);

        $('#chip-with-sauce').velocity({
            rotateZ: "45deg",
            transformOriginX: 38,
            transformOriginY: 26
        }, {
            duration: 100
        }, [250, 15]);
    });

    $('#chips').mousedown(function() {
        $('#chip-no-sauce').velocity({
            rotateZ: "0deg",
            transformOriginX: 35,
            transformOriginY: 28
        }, {
            duration: 100
        }, [250, 15]);
        $('#chip-with-sauce').velocity({
            rotateZ: "0deg",
            transformOriginX: 35,
            transformOriginY: 28
        }, {
            duration: 100
        }, [250, 15]);
    });

    $('#chips').mouseup(function() {
        $('#burger').velocity({
            opacity: 1,
            translateY: 0
        }, [50, 8]);
    });


    //div切换效果
    let info_btn1 = $("#switch_icon1");
    let info_btn2 = $("#switch_icon2");
    let info1 = $("#info1");
    let info2 = $("#info2");
    info_btn1.click(function () {
        info1.css({"transform":"rotateY(-30deg)","box-shadow":"none"});
        setTimeout(function () {
            info2.css({"transform":"translateX(350px)"});
        },800)
        setTimeout(function () {
            info1.css({"transform":"rotateY(0deg)","z-index":"1"});
        },1600)
        setTimeout(function () {
            info2.css({"transform":"translateX(0px)","box-shadow":"-10px -10px 10px gray","z-index":"2"});
        },2400)
    })

    info_btn2.click(function () {
        info2.css({"transform":"rotateY(30deg)","box-shadow":"none"});
        setTimeout(function () {
            info1.css({"transform":"translateX(-350px)"});
        },800)
        setTimeout(function () {
            info2.css({"transform":"rotateY(0deg)","z-index":"1"});
        },1600)
        setTimeout(function () {
            info1.css({"transform":"translateX(0px)","box-shadow":"10px 10px 10px gray","z-index":"2"});
        },2400)
    })


    //更新按钮
    //btn
    let id_btn = $(".update1");
    let studentID1_btn = $(".update2");
    let body_btn = $(".update3");
    let address_btn = $(".update4");
    let condition_btn = $(".update5");
    let contact_btn = $(".update6");
    let date_btn = $(".update7");
    //input
    let id_input = $("#id1");
    let studentID1_input = $("#studentID1");
    let body_input = $("#body");
    let address_input = $("#address1");
    let condition_input = $("#condition");
    let contact_input = $("#contact");
    let date_input = $("#date1");
    id_btn.click(function () {
        id_btn.css({"transform":"rotate(360deg)"});
        id_input.removeAttr("readonly","false");
    })
    studentID1_btn.click(function () {
        studentID1_btn.css({"transform":"rotate(360deg)"});
        studentID1_input.removeAttr("readonly","false");
    })
    body_btn.click(function () {
        body_btn.css({"transform":"rotate(360deg)"});
        body_btn.removeAttr("readonly","false");
        body_input.removeAttr("readonly","false");
    })
    address_btn.click(function () {
        address_btn.css({"transform":"rotate(360deg)"});
        address_input.removeAttr("readonly","false");
    })
    condition_btn.click(function () {
        condition_btn.css({"transform":"rotate(360deg)"});
        condition_input.removeAttr("readonly","false");
    })
    contact_btn.click(function () {
        contact_btn.css({"transform":"rotate(360deg)"});
        contact_input.removeAttr("readonly","false");
    })
    date_btn.click(function () {
        date_btn.css({"transform":"rotate(360deg)"});
        date_input.removeAttr("readonly","false");
    })

    //日程轨迹
    //btn
    let id_btn2 = $(".update2_1");
    let studentID1_btn2 = $(".update2_2");
    let date_btn2 = $(".update2_3");
    let temperature_btn = $(".update2_4");
    let address_btn2 = $(".update2_5");
    //input
    let id_input2 = $("#id2");
    let studentID1_input2 = $("#studentID2");
    let date_input2 = $("#date2");
    let temperature_input = $("#temperature");
    let address_input2 = $("#address2");
    id_btn2.click(function () {
        id_btn2.css({"transform":"rotate(360deg)"});
        id_input2.removeAttr("readonly","false");
    })
    studentID1_btn2.click(function () {
        studentID1_btn2.css({"transform":"rotate(360deg)"});
        studentID1_input2.removeAttr("readonly","false");
    })
    date_btn2.click(function () {
        date_btn2.css({"transform":"rotate(360deg)"});
        date_input2.removeAttr("readonly","false");
    })
    temperature_btn.click(function () {
        temperature_btn.css({"transform":"rotate(360deg)"});
        temperature_input.removeAttr("readonly","false");
    })
    address_btn2.click(function () {
        address_btn2.css({"transform":"rotate(360deg)"});
        address_input2.removeAttr("readonly","false");
    })
})