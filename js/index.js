$(function () {

    //头像DOM
    $('.head_modify').click(function(){
        $('.tips').css({"transform":"scale(1,1)"});
    })
    $('.tips_close').click(function(){
        $('.tips').css({"transform":"scale(0,0)"});
    })

    let _file = $('#file');
    let tip = "";
    _file.change(function(){
        let files = this.files;
        if(!files.length) {
            return;
        }
        tip = getFileURL(files[0]);

        $('.preview').attr("src",tip);
    })

    function getFileURL(file) {
        let getUrl = null;
        if (window.createObjectURL != undefined) { // basic
            getUrl = window.createObjectURL(file);
        } else if (window.URL != undefined) { // mozilla(firefox)
            getUrl = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) { // webkit or chrome
            getUrl = window.webkitURL.createObjectURL(file);
        }
        return getUrl;
    }

    // 信息栏伸缩
    $('.shrink').click(function (){
        $('.left').stop().animate({height:"74px"},1000);
        $('.modify').stop().fadeOut(500);
        $('.shrink').stop().css({"transform":"scale(0,0)"});
        $('.stretching').stop().css({"transform":"scale(1,1)"});
        $('.line').stop().css({width:"100%"});
    });
    //信息栏展开
    $('.stretching').click(function () {
        $('.line').stop().css({width:"80%"});
        $('.left').stop().animate({height:"600px"},1000);
        $('.shrink').stop().css({"transform":"scale(1,1)"});
        $('.stretching').stop().css({"transform":"scale(0,0)"});
        $('.modify').stop().fadeIn(1000);

    });
    //时间框
    fillTime();
    setInterval(fillTime,1000);

    function fillTime(){
        //创建Date对象
        let myDate = new Date();
        let year = myDate.getFullYear();
        let month = myDate.getMonth()+1;
        let day = myDate.getDate();
        let hour = myDate.getHours();
        let min = myDate.getMinutes();
        $('.year').text(year);
        $('.month').text(timeFormat(month));
        $('.day').text(timeFormat(day));
        $('.hour').text(timeFormat(hour));
        $('.min').text(timeFormat(min));
    }
    //格式化时间
    function timeFormat($time){

        if ($time<10){
            $time= '0'+ $time;
        }
        return $time;
    }

    //梅花装饰开关
    const button = $('.switchIcon');
    $('.switch_right').click(function () {
        if(Math.round(button.offset().left-button.offsetParent().offset().left-2)<25){
            button.animate({left:"28px"},500);
            $('#flowers').fadeOut(1000);
        }
    })
    $('.switch_left').click(function (e) {
        if(Math.round(button.offset().left-button.offsetParent().offset().left-2)>25){
            button.animate({left:"2px"},500);
            $('#flowers').fadeIn(1000);
        }
    })
    //梅花特效
    const branchesRandomOrder = $('[id^=BranchGroup]').toArray().sort(function(){return 0.5-Math.random()});
    const branchesRandomOrderLeft = $('[id^=BranchGroup-left]').toArray().sort(function(){return 0.5-Math.random()});
    const branchesRandomOrderRight = $('[id^=BranchGroup-right]').toArray().sort(function(){return 0.5-Math.random()});
    const branchesRandomOrderBottom = $('[id^=BranchGroup-bottom]').toArray().sort(function(){return 0.5-Math.random()});

    const master = new TimelineMax();
    master
        .add(mainSetUp)
        .add(branchMaster);


    function mainSetUp() {
        const tl = new TimelineMax();
        tl
            .set('[id^=petal-]', { fill: "#e5d081" })
            .set(['[id^=flower-]', '[id^=bud-]', '[id^=bloom-]'], {scale: 0,  transformOrigin: 'center center'})
            .set(branchesRandomOrderLeft, {transformOrigin: 'bottom left'})
            .set(branchesRandomOrderRight, {transformOrigin: 'bottom right'})
            .set(branchesRandomOrderBottom, {transformOrigin: 'bottom center'})
            .set('#BranchGroup-left-1', {transformOrigin: '0% 20%'})
            .set('#BranchGroup-right-16', {transformOrigin: '100% 20%'})
            .set(branchesRandomOrder, {scale: 0})
            .set(".container", {autoAlpha: 1});

        return tl;
    }

    function branchMaster() {
        const tl = new TimelineMax();
        tl
            .add(wholeBranchGrowIn)
            .add(smallBranchesSway);

        return tl;
    }

    function wholeBranchGrowIn() {
        const tl = new TimelineMax();
        tl.staggerTo(branchesRandomOrder, 3, {scale: 1, ease: Power1.easeOut, onStart: flowersBloom, onComplete: currentBranchSwaying }, 0.25);

        return tl;
    }

    function flowersBloom() {
        const tl = new TimelineMax({delay: 1.5});
        const currentBranch = $(this.target);
        const petals = currentBranch.find('[id^=petal-]');
        const flowers = currentBranch.find('[id^=flower-]');
        const buds = currentBranch.find('[id^=bud-]');
        const blooms = currentBranch.find('[id^=bloom-]');

        tl
            .staggerTo([flowers, buds, blooms], 2,{ scale: 1, ease: Back.easeOut.config(2) }, 0.5, 0)
            .to(flowers, 3, { rotation: 45, ease: Sine.easeOut }, 0)
            .to(petals, 1, { fill: "#fff" }, 0)

        return tl;
    }

    function currentBranchSwaying() {
        const tl = new TimelineMax({yoyo: true, repeat: -1});
        const currentBranch = $(this.target);
        var currentBranchRotation;

        if (currentBranch.data('position') === "left") {
            currentBranchRotation = -10;
        } else if (currentBranch.data('position') === "right") {
            currentBranchRotation = 5;
        } else {
            currentBranchRotation = 10;
        }

        tl.staggerTo(currentBranch, 2 + Math.random(), {rotation: currentBranchRotation, ease: Sine.easeInOut}, Math.random() / 1.2);

        return tl;
    }


    function smallBranchesSway() {
        const smallBranches = $('[id^=smallbranch-group]').toArray();
        const tl = new TimelineMax({yoyo: true, repeat: -1});

        tl
            .staggerTo(smallBranches, 2 + Math.random(), { rotation: 5, ease: Sine.easeInOut}, Math.random() / 1.2, 'smallBranchSway')
            .to('#smallbranch-group-3-B, #smallbranch-group-8-A', 1 + Math.random(), {rotation: -5, transformOrigin: '100% 50%'}, 'smallBranchSway')
            .to('#smallbranch-group-5-A', 2 + Math.random(), {rotation: -5, transformOrigin: '50% 100%'}, 'smallBranchSway')
            .to('#smallbranch-group-2-C, #smallbranch-group-A, #smallbranch-group-12-A', 2 + Math.random(), {rotation: -5, transformOrigin: '100% 100%'}, 'smallBranchSway');

        return tl;
    }


    //3D 轮播图
    $('figure').on('click', function(){
        var nx = $(this).next().data('number') -1;
        if(nx<0){nx =0;}
        var delta =  -360 /9 * nx;

        $(this).parent().css("transform", "translateZ( -288px ) rotateY(" + delta + "deg )");

    });

    //脚注动画
    var animationTime = 20,
        days = 7;

    $(document).ready(function(){

        // timer arguments:
        //   #1 - time of animation in mileseconds,
        //   #2 - days to deadline

        $('#progress-time-fill, #death-group').css({'animation-duration': animationTime+'s'});

        var deadlineAnimation = function () {
            setTimeout(function(){
                $('#designer-arm-grop').css({'animation-duration': '1.5s'});
            },0);

            setTimeout(function(){
                $('#designer-arm-grop').css({'animation-duration': '1s'});
            },4000);

            setTimeout(function(){
                $('#designer-arm-grop').css({'animation-duration': '0.7s'});
            },8000);

            setTimeout(function(){
                $('#designer-arm-grop').css({'animation-duration': '0.3s'});
            },12000);

            setTimeout(function(){
                $('#designer-arm-grop').css({'animation-duration': '0.2s'});
            },15000);
        };

        function timer(totalTime, deadline) {
            var time = totalTime * 1000;
            var dayDuration = time / deadline;
            var actualDay = deadline;

            var timer = setInterval(countTime, dayDuration);

            function countTime() {
                --actualDay;
                $('.deadline-days .day').text(actualDay);

                if (actualDay == 0) {
                    clearInterval(timer);
                    $('.deadline-days .day').text(deadline);
                }
            }
        }

        var deadlineText = function () {
            var $el = $('.deadline-days');
            var html = '<div class="mask-red"><div class="inner">' + $el.html() + '</div></div><div class="mask-white"><div class="inner">' + $el.html() + '</div></div>';
            $el.html(html);
        }

        deadlineText();

        deadlineAnimation();
        timer(animationTime, days);

        setInterval(function(){
            timer(animationTime, days);
            deadlineAnimation();

            console.log('begin interval', animationTime * 1000);

        }, animationTime * 1000);

    });

    //页面跳转
    let dailyPunch = document.getElementsByClassName("menu1")[0];
    let scheduleTrack = document.getElementsByClassName("menu2")[0];

    dailyPunch.addEventListener("click",function () {
        window.location.href = "dailyPunch.html";
    })
    scheduleTrack.addEventListener("click",function () {
        window.location.href = "schedule.html";
    })
})





