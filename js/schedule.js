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
    let addressStr = "";
    $('.address').click(function () {
        $('#select_icon1').css({"transform":"rotate(180deg)"});
        $('#select_content1').css({"transform":"scale(1,1)"})
    })
    $('.address').mouseleave(function () {
        $('#select_icon1').css({"transform":"rotate(0deg)"});
        $('#select_content1').css({"transform":"scale(0,0)"});
    })
    $('.select1').click(function () {
        addressStr = $('.select1').text();
        $('#address').val(addressStr);
    });
    $('.select2').click(function () {
        addressStr = $('.select2').text();
        $('#address').val(addressStr);
    });
    $('.select3').click(function () {
        addressStr = $('.select3').text();
        $('#address').val(addressStr);
    });
    $('.select4').click(function () {
        addressStr = $('.select4').text();
        $('#address').val(addressStr);
    });
    $('.select5').click(function () {
        addressStr = $('.select5').text();
        $('#address').val(addressStr);
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
        $('#temperature').val("");

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
        //判断日期
        let date = /^\d{4}-\d{2}-\d{2}$/
        $('#Date').blur(function () {
            let dateText = $('#Date').val();
            if (dateText==""){
                $('.date').text("日期不能为空*");
                $('.date').css("color","red");
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
                flag3 = 0;
            }else if(studentId.test(studentIdText)){
                $('.studentID').text("*");
                $('.studentID').css("color","#fff")
                flag3 = 1;
            }else{
                $('.studentID').text("请正确输入学号！*");
                $('.studentID').css("color","red");
                flag3 = 0;
            }
        })
        //判断体温
        let temperature = /^(3[5-9]|4[0-3]).\d$/
        $('#temperature').focus(function () {
            $('.temperature').text("体温需保留一位小数*");
            $('.temperature').css("color","red");
        });
        $('#temperature').blur(function () {
            let tempText = $('#temperature').val();
            if(tempText==""){
                $('.temperature').text("体温不能为空！*");
                flag4 = 0;
            }else if(temperature.test(tempText)){
                $('.temperature').text("*");
                $('.temperature').css("color","#fff")
                flag4 = 1;
            }else{
                $('.temperature').text("体温输入格式不正确！*");
                $('.temperature').css("color","red");
                flag4 = 0;
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