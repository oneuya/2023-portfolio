$(function(){
    // loder 영역

    $(document).ready(function() {
      // 3초 후에 요소의 투명도를 0으로 설정
      setTimeout(function() {
        $("body").removeClass('hide')
        $(".sc-loader").fadeOut(1500);
      },30); // 3000밀리초 = 3초
    });

      // 커서 커스텀
      //구글 : cursor custom codepen

      $(document)
      .mousemove(function(e) {
      $('.cursor')
        .eq(0)
        .css({
          left: e.pageX,
          top: e.pageY
    });

  $('.btn-box, .sns-area, .fix-btn, .gnb-item, .sns-item, .logo, .work-sns').on({
    mouseover: function(){
        $('.cursor').css({scale : '3',transition: 'scale 0.2s ease'});
    },
     mouseleave: function(){
        $('.cursor').css({scale : '1'});
    },
    click: function(){
        $('.cursor').off('mouseleave');
    }
});
})

   // 사이드메뉴

   $('.fix-btn').click(function(){

    $('.side-area, .side-item').toggleClass('on')
  });

  gsap.to('.fix-btn',{ 

    scrollTrigger: {
      trigger: 'main', 
      scrub:0.5,
      start: '5% 0%', 
      end: '5% 100%', 
      /* markers:true */
  },
      opacity:1,
      display:"block"
  })

  // about 스와이퍼
  var swiper = new Swiper(".top-swiper", {
    slidesPerView: "auto", 
    loop: true,
    loopAdditionalSlides : 1,
    effect:'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  if (matchMedia("screen and (min-width: 681px)").matches) {

    //work 영역
    const work = gsap.timeline({

      scrollTrigger: {
        trigger: 'main',
        scrub:1, 
        start: '-2% 0%', 
        end: '95% 100%',
        /* markers:true,  */
    },
    })
    
    work.from('.sc-work .work-item:nth-child(2)',2,{opacity:0 ,yPercent:50}),
    work.from('.sc-work .work-item:nth-child(1)',2.5,{opacity:0 ,xPercent:-50}),
    work.from('.sc-work .work-item:nth-child(6)',3,{opacity:0 ,xPercent:50}),
    work.from('.sc-work .work-item:nth-child(4)',3,{opacity:0 ,yPercent:50}),
    work.from('.sc-work .work-item:nth-child(3)',3,{opacity:0 ,xPercent:-50}),
    work.from('.sc-work .work-item:nth-child(5)',3,{opacity:0 ,xPercent:50})

    // 680px 이상에서 사용할 스크립트
  } else {
    
      //모바일 gnb
      $('.m-gnb .m-btn').click(function(){
        $('.header-inner .m-menu').slideToggle()
      });
    const mwork = gsap.timeline({

      scrollTrigger: {
        trigger: 'main',
        scrub:1, 
        start: '0% 0%', 
        end: '95% 100%',
        /* markers:true,  */
    },
    })
    mwork.from('.sc-work .work-item:nth-child(1)',3,{opacity:0 ,xPercent:50}),
    mwork.from('.sc-work .work-item:nth-child(2)',3,{opacity:0 ,xPercent:-50}),
    mwork.from('.sc-work .work-item:nth-child(3)',3,{opacity:0 ,xPercent:50}),
    mwork.from('.sc-work .work-item:nth-child(4)',3,{opacity:0 ,xPercent:-50}),
    mwork.from('.sc-work .work-item:nth-child(5)',3,{opacity:0 ,xPercent:50}),
    mwork.from('.sc-work .work-item:nth-child(6)',3,{opacity:0 ,xPercent:-50})

    // 680px 미만에서 사용할 스크립트
  }

  //footer 영역 
    const footer = gsap.timeline({

      scrollTrigger: {
        trigger: 'main',
        scrub:1, 
        start: '82% 0%', 
        end: '82.5% 100%', 
       /* markers:true, */
    },
    })

    footer.from('.sc-contact','.footer-bg',{opacity:0})
    


    lastWidth = window.innerWidth;
    $(window).resize(function(){
    if(window.innerWidth != lastWidth){
            location.reload();
            scrollTrigger.refresh();
    }
    lastWidth = window.innerWidth;
    });

    $(window).scroll(function(){
        ScrollTrigger.refresh(true)
    })

})
