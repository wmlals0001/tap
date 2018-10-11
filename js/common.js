	


var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


$(document).ready(function(){

var Top1 = $('.section1').offset().top;
var Top2 = $('.section2').offset().top;
var Top3 = $('.section3').offset().top;
var Top4 = $('.section4').offset().top;
var Top5 = $('.input_wrap').offset().top;
var Top6 = $('.bg_fixed').offset().top;

$( window ).resize( function() {
    Top1 = $('.section1').offset().top;
    Top2 = $('.section2').offset().top;
    Top3 = $('.section3').offset().top;
    Top4 = $('.section4').offset().top;
    Top5 = $('.input_wrap').offset().top;
    Top6 = $('.bg_fixed').offset().top;
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

$('header>ul>li:nth-child(4)').click(function(){
	$("html, body").stop().animate({scrollTop:Top4-65},1000);
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
	$('.sub1 ul').animate({'opacity':'1','left':'40px'},1500);
	$('.sub2 ul').delay(500).animate({'opacity':'1','right':'40px'},1500);
}

if ( sc >= Top1-100 ){
	$('.sub3 ul').animate({'opacity':'1','left':'40px'},1500);
	$('.sub4 ul').delay(500).animate({'opacity':'1','right':'40px'},1500);
}

if (  sc >= Top2-400  ){
	$('.in1').animate({'opacity':'1'},500);
	$('.in2').delay(500).animate({'opacity':'1'},500);
}
if (  sc >= Top2-600  ){
	$('.in3').animate({'opacity':'1'},500);
	$('.in4').delay(500).animate({'opacity':'1'},500);
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


});

