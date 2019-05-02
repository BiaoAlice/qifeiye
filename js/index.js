let  mySwiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30
})

let titleArr = ['做','一','个','相','应','式','网','站','<br>','让','世','界','更','好','的','了','解','您'];
let num = 0;
let timer = setInterval(function(){
   num ++;
    if(num > titleArr.length-1){
        clearInterval(timer);
        return;
    }
    $(".logo-right-top p").html($(".logo-right-top p").html() + titleArr[num]);
},300)



 function move (ele ,option ,time,flag){
    let top = ele.offset().top;
    let sum = $(window).height() + $(window).scrollTop();
    if(top +30 < sum && flag){
        flag = false;
        ele.animate(option,time)
    }
}
let flag1 =true;
$(window).on("scroll",function(){
    move($('.container-main').eq(0) , {top:0,opacity:1},2000,flag1)
})

let flag2 = true;
$(window).on("scroll",function(){
    move($('.animate2') , {left:0,opacity:1},1500,flag2);
    move($('.animate3') , {top:0,opacity:1},1500,flag2);
})

let flag3 = true;
$(window).on("scroll",function(){
    move($('.animate4') , {top:0,opacity:1},1500,flag3);
    move($('.animate5') , {right:0,opacity:1},1500,flag3);
})

let flag4 = true;
$(window).on("scroll",function(){
    move($('.animate6') , {left:0,opacity:1},1500,flag4);
    move($('.animate7') , {top:0,opacity:1},1500,flag4);
})

let flag5 = true;
$(window).on("scroll",function(){
    move($('.animate8') , {top:0,opacity:1},1500,flag5);
    move($('.animate9') , {right:0,opacity:1},1500,flag5);
})

let flag6 = true;
$(window).on("scroll",function(){
    move($('.animate10') , {opacity:1},1500,flag6);
})


$(".ul-one li").on("mouseenter",function(){
    $(this).css({
        border:'1px solid #58a8f3',
        background:"white"
    })
    $(this).find("img").attr("src" , `./img/index/indexIcon${$(this).index()+1}-1.png`)
})


$(".ul-two li").on("mouseenter",function(){
    $(this).css({
        border:'1px solid #58a8f3',
        background:"white"
    })
    $(this).find("img").attr("src" , `./img/index/indexIcon${$(this).index()+4}-1.png`)
})

$(".qfy-icon li").on("mouseleave",function(){
    $(this).css({
        border:'1px solid #ccc',
        background:'transparent'
    })
})

$(".ul-one li").on("mouseleave",function(){
    $(this).find("img").attr("src" , `./img/index/indexIcon${$(this).index()+1}.png`)
})


$(".ul-two li").on("mouseleave",function(){
    $(this).find("img").attr("src" , `./img/index/indexIcon${$(this).index()+4}.png`)
})

$(window).on("scroll",function(){
    if($(this).scrollTop() > 200){
        $(".hidden").css({
            opacity:1,
            transform:'translateY(0)'
        })
    }
    else{
        $(".hidden").css({
            opacity:0,
            transform:'translateY(-70px)'
        })
    }
})
