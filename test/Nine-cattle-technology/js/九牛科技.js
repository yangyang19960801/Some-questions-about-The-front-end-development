$(function(){
       	// 导航跳转效果插件
       	$(".nav").singlePageNav({
       		offset:70
       	});
       	// 小屏幕导航点击关闭菜单
		 $('.navbar-collapse a').click(function(){
		    $('.navbar-collapse').collapse('hide');
		        });
		        new WOW().init();  
		 })

$('#my_carousel').carousel(
{
//设置自动播放/2 秒
interval : 1000,
pause : 'hover',
//只播一次
wrap : false

}
)
