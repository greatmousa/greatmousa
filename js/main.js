$(document).ready(function(){
    particlesJS("particles-js",{"particles":{"number":{"value":30,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1.6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
                             
    
$('nav .row ul').clone().appendTo('.nav-mobile');
  
/* Skills Animate From Left */    
$('nav ul li:nth-of-type(3), .nav-mobile ul li:nth-of-type(3)').on("click",function(){$('section:nth-of-type(1)').animate({left:0,},1500);
                                                                                    
/* Brogress Animation */                                                                                    
    $('.progress1Bg0').animate({width:'98%'},4000);
    $('.progress1Bg1').animate({width:'97%'},4000);
    $('.progress2Bg0').animate({width:'100%'},4000);
    $('.progress2Bg1').animate({width:'95%'},4000);                                                       $('.progress2Bg2').animate({width:'75%'},4000);
    $('.progress3Bg1').animate({width:'85%'},4000);
});
    
/* Portfolio Animate From Left */    
$('nav ul li:nth-of-type(2), .nav-mobile ul li:nth-of-type(2)').on("click",function(){$('section:nth-of-type(2)').animate({left:0,},1500);});
    
/* Contact Animate From Down */    
$('nav ul li:nth-of-type(1), .nav-mobile ul li:nth-of-type(1)').on("click",function(){if($('.contact').css('display')=='none'){$('.contact').slideDown(1000);}});
                             
$('nav ul li').hover(function(){$(this).css('color','#fff').siblings().css('color','#777');},function(){$('nav ul li').css('color','#fff');});
                             
$('nav .fa-bars').click(function(){$('.nav-mobile ul').slideToggle(600);});
                             
$('nav ul li').click(function(){$('.nav-mobile ul').slideUp(800);});
                             
$('.close').click(function(){$(this).closest('section').animate({left:'-100%',},1500);});
                             
$('.slider').slick({centerMode:true,slidesToShow:1,slidesToScroll:1,arrows:false,});
                             
$('.contact .fa-times').hover(function(){$('.contact').css('opacity','.8');},function(){$('.contact').css('opacity','1');});
                             
$('.contact .fa-times').click(function(){$('.contact').slideUp(1000);});
                             
$(document).mouseup(function(e){if(!$('.contact').is(e.target)&&$('.contact').has(e.target).length===0){$('.contact').slideUp(1000);}});});