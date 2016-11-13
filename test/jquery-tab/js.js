$('.ct .tab li').on('click',function(e){
        e.preventDefault();
        $(this).find('a').css({'color':'red',});
        $(this).siblings().find('a').css({'color':'#666',});
        $(this).css({'background-color':'#ccc'});
        $(this).siblings().css({'background-color':'white'});

        var i=$(this).index();
        $(this).parents('.ct').find('.wrap').eq(i).show();
        $(this).parents('.ct').find('.wrap').eq(i).siblings().hide();
      })


      $('.wrap li').on('mouseover',function(){
        $(this).find('.modal').show();
        $(this).find('.buy').show();
      })
      $('.wrap li').on('mouseout',function(){
        $(this).find('.modal').hide();
        $(this).find('.buy').hide();
      })