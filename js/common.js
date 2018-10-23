	



$(document).ready(function(){

    var Top1 = $('.section1').offset().top;
    var Top2 = $('.section2').offset().top;
    var Top3 = $('.section3').offset().top;
    var Top4 = $('.section4').offset().top;
    var Top5 = $('.input_wrap').offset().top;
    var Top6 = $('.bg_fixed').offset().top;
    var Top7 = $('.footer').offset().top;

$( window ).resize( function() {
    Top1 = $('.section1').offset().top;
    Top2 = $('.section2').offset().top;
    Top3 = $('.section3').offset().top;
    Top4 = $('.section4').offset().top;
    Top5 = $('.input_wrap').offset().top;
    Top6 = $('.bg_fixed').offset().top;
    Top7 = $('.footer').offset().top;
});


    $('header>ul>li:nth-child(1)').click(function(){
        $("html, body").stop().animate({scrollTop:-65},1000);
    });

    $('header>ul>li:nth-child(2)').click(function(){
        $("html, body").stop().animate({scrollTop:Top1-65},1000);
    });

    $('header>ul>li:nth-child(3)').click(function(){
        $("html, body").stop().animate({scrollTop:Top3-65},1000);
    });

    $('.main_text button').click(function(){
        $("html, body").stop().animate({scrollTop:Top3-65},1000);
    });



    $('header>ul>li:nth-child(4)').click(function(){
        $("html, body").stop().animate({scrollTop:Top7-65},1000);
    });



$('.top_img').click(function(){
	$("html, body").stop().animate({scrollTop:Top1-65},1000);
});


$(window).scroll(function(){
	sc = $(window).scrollTop();
if ( sc >= Top1 ){
	$('header').css({'background-color':'#111','border-bottom':'1px solid #e6e2d9'});
}else if ( sc < Top1 ){
	$('header').css({'background-color':'rgba(0,0,0,0)','border-bottom':'none'});
}

if ( sc >= Top1-500 ){
	$('.sub1 ul').animate({'opacity':'1','left':'30px'},1500);
	$('.sub2 ul').delay(500).animate({'opacity':'1','right':'30px'},1500);
}

if ( sc >= Top1-100 ){
	$('.sub3 ul').animate({'opacity':'1','left':'30px'},1500);
	$('.sub4 ul').delay(500).animate({'opacity':'1','right':'30px'},1500);
}

if (  sc >= Top2-400  ){
	$('.in1').animate({'opacity':'1','padding-top':'3%'},500);
	$('.in2').delay(300).animate({'opacity':'1','padding-top':'3%'},500);
    $('.in3').delay(600).animate({'opacity':'1','padding-top':'3%'},500);
    $('.in4').delay(900).animate({'opacity':'1','padding-top':'3%'},500);
}

if (  sc >= Top6-400  ){
	$('.fi1').animate({'opacity':'1'},500);
	$('.fi2').delay(500).animate({'opacity':'1'},500);
}

if (  sc >= Top6-600  ){
	$('.fi3').animate({'opacity':'1'},500);
	$('.fi4').delay(500).animate({'opacity':'1'},500);
}

});


$('.top_img').animate({'bottom':'20px','opacity':'1'},1000);
$('.top_img').delay(500).animate({'bottom':'10px','opacity':'0.3'},1000);
setInterval(function(){
	$('.top_img').animate({'bottom':'20px','opacity':'1'},1000);
	$('.top_img').delay(500).animate({'bottom':'10px','opacity':'0.3'},1000);
},4000);

    //삭제
    $('.skill_wrap>figure').click(function(){
        alert("준비 중입니다. 조금만 기다려주세요!");
    });


});


