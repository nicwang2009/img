  //全屏滚动
  if($.fn.fullpage){
        $.fn.fullpage({
          anchors: ['page1', 'page2', 'page3', 'page4','page5','page6','page7'],
          menu: '#menu',
          navigation: true,  
          normalScrollElements:'scrollable-element',
          verticalCentered:'false',
          resize:'true',
          navigationTooltips: ['进入游戏', '课程介绍', '课程特点', '用户反馈','常见问题','购买方式','合作荣誉'],
          afterLoad: function (anchorLink, index) {
              if (index == 2) {
                  $('.section2').find('.computer').delay(500).animate({
                      left: '0'
                  }, 1500, 'easeOutExpo');
                  
                  $('.section2').find('.howToContent .top h4').delay(500).animate({
                      right: '0'
                  }, 1500, 'easeOutExpo');
                  
                  $('.section2').find('.howToContent .top h6').delay(500).animate({
                      right: '0'
                  }, 1500, 'easeOutExpo');
                  
                  $('.section2').find('.howToContent .top hr').delay(1000).animate({
                      right: '0'
                  }, 1500, 'easeOutExpo');
                  
                  $('.section2').find('.howToContent .top h5').delay(1000).animate({
                      right: '0'
                  }, 1500, 'easeOutExpo');
                  
                  $('.section2').find('.howToContent .bottom').delay(2000).animate({
                      right: '0'
                  }, 1500, 'easeOutExpo');
                  
              }
              if (index == 3) {
                  $('.section3').find('.pic .outer_content_one').delay(1000).animate({
                      left: '0'
                  }, 1500, 'easeOutExpo');
                  
                  $('.section3').find('.pic .outer_content_two').delay(500).animate({
                      left: '25%'
                  }, 1500, 'easeOutExpo');
                  
                  $('.section3').find('.pic .outer_content_three').delay(500).animate({
                      right: '-50%'
                  }, 1500, 'easeOutExpo');
                  
                  $('.section3').find('.pic .outer_content_four').delay(1000).animate({
                      right: '-75%'
                  }, 1500, 'easeOutExpo');
                  
              }
          },
        });
      }