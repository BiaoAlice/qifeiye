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




let move = function(ele ,option ,time,flag){
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
    move($('.animate2') , {left:0,opacity:1},1500,flag2)
})

let flag3 = true;
$(window).on("scroll",function(){
    move($('.animate3') , {top:0,opacity:1},1500,flag3)
})

