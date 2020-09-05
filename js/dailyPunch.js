
$(function(){
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

    //下拉框
    let bodyText1 = "";
    let bodyText2 = "";
    let bodyText3 = "";
    //身体状况
    $('.condition').click(function () {
        $('#select_icon1').css({"transform":"rotate(180deg)"});
        $('#select_content1').css({"transform":"scale(1,1)"})
    })
    $('.condition').mouseleave(function () {
        $('#select_icon1').css({"transform":"rotate(0deg)"});
        $('#select_content1').css({"transform":"scale(0,0)"});
    })
    $('.select1').click(function () {
        bodyText1 = $('.select1').text();
        $('#body').val(bodyText1);
    });
    $('.select2').click(function () {
        bodyText1 = $('.select2').text();
        $('#body').val(bodyText1);
    });
    $('.select3').click(function () {
        bodyText1 = $('.select3').text();
        $('#body').val(bodyText1);
    });
    $('.select4').click(function () {
        bodyText1 = $('.select4').text();
        $('#body').val(bodyText1);
    });
    $('.select5').click(function () {
        bodyText1 = $('.select5').text();
        $('#body').val(bodyText1);
    });

    //返校情况
    $('.returnSchool').click(function () {
        $('#select_icon2').css({"transform":"rotate(180deg)"});
        $('#select_content2').css({"transform":"scale(1,1)"})
    })
    $('.returnSchool').mouseleave(function () {
        $('#select_icon2').css({"transform":"rotate(0deg)"});
        $('#select_content2').css({"transform":"scale(0,0)"});
    })
    $('.select6').click(function () {
        bodyText2 = $('.select6').text();
        $('#return').val(bodyText2);
    });
    $('.select7').click(function () {
        bodyText2 = $('.select7').text();
        $('#return').val(bodyText2);
    });

    //contact
    $('.contact').click(function () {
        $('#select_icon3').css({"transform":"rotate(180deg)"});
        $('#select_content3').css({"transform":"scale(1,1)"})
    })
    $('.contact').mouseleave(function () {
        $('#select_icon3').css({"transform":"rotate(0deg)"});
        $('#select_content3').css({"transform":"scale(0,0)"});
    })
    $('.select8').click(function () {
        bodyText3 = $('.select8').text();
        $('#contact').val(bodyText3);
    });
    $('.select9').click(function () {
        bodyText3 = $('.select9').text();
        $('#contact').val(bodyText3);
    });
    //获取当前日期
    let myDate = new Date();
    let year = myDate.getFullYear();
    let month = myDate.getMonth()+1;
    let day = myDate.getDate();
    $("#Date").val(timeFormat(year,month,day));
    //格式化时间
    function timeFormat(year,month,day){
        if (month<10){
            month= '0'+ month;
        }
        if (day<10){
            month= '0'+ month;
        }
        return year+"-"+month+"-"+day;
    }


    //正则表达是判断
    Judge();
    function Judge(){
        //设置flag
        let flag1 = 0;
        let flag2 = 1;
        let flag3 = 0;
        let flag4 = 0;
        //初始化input的值
        $('#studentID').val("");
        $('#No').val("");
        $('#address').val("");
        //判断序号
        let id = /\b\d{2}\b/;
        $('#No').focus(function () {
            $('.No').text("序号为两位数字*");
            $('.No').css("color","red");
        });
        $('#No').blur(function () {
            let noText = $('#No').val();
            if (noText==""){
                $('.No').text("序号不能为空*");
                flag1 = 0;
            }else if (id.test(noText)){
                $('.No').text("*");
                $('.No').css("color","#fff");
                flag1 = 1;
            }else{
                $('.No').text("请正确输入序号！");
                $('.No').css("color","red");
                flag1 = 0;
            }
        })
        // 判断学号
        let studentId = /\b\d{12}\b/;
        $('#studentID').focus(function () {
            $('.studentID').text("学号12位数字*");
            $('.studentID').css("color","red");
        });
        $('#studentID').blur(function () {
            let studentIdText = $('#studentID').val();
            if (studentIdText==""){
                $('.studentID').text("学号不能为空*");
                flag4 = 0;
            }else if(studentId.test(studentIdText)){
                $('.studentID').text("*");
                $('.studentID').css("color","#fff")
                flag4 = 1;
            }else{
                $('.studentID').text("请正确输入学号！*");
                $('.studentID').css("color","red");
                flag4 = 0;
            }
        })
        //判断日期
        let date = /^\d{4}-\d{2}-\d{2}$/
        $('#Date').blur(function () {
            let dateText = $('#Date').val();
            if (dateText==""){
                $('.date').text("日期不能为空*");
                flag2 = 0;
            }else if(date.test(dateText)){
                $('.date').text("*（以”-“分隔）");
                $('.date').css("color","#fff");
                flag2 = 1;
            }else{
                $('.date').text("日期格式不正确！*");
                $('.date').css("color","red");
                flag2 = 0;
            }
        })
        //判断地址
        $('#address').focus(function () {
            $('.address').text("地址填写到“市”即可*");
            $('.address').css("color","red");
        });
        let address = /^[1-4]{1}$/
        $('#address').blur(function () {
            let addressText = $('#address').val();
            if (addressText==""){
                $('.address').text("地址不能为空*");
                flag3 = 0;
            }else if(address.test(addressText)){
                $('.address').text("*");
                $('.address').css("color","#fff")
                flag3 = 1;
            }else{
                $('.address').text("输入的地址格式不对！*");
                $('.address').css("color","red");
                flag3 = 0;
            }
        })

        //阻止提交
        $("#submit").click(function () {
            if (flag1&&flag2&&flag3&&flag4){
                return true;
            }else{
                alert("信息填写有误，请修改后再提交！");
                return false;
            }
        });
    }
})
