$(function(){
		if($.browser.msie && $.browser.version < 10){
			$('body').addClass('ltie10');
		}
		$(function(){
			$('#dowebok').fullpage({
				sectionsColor: ['#fff', '#fff'],
				anchors:['page1','page2'],
				resize:true,
				slidesNavigation:true,
				afterLoad: function(anchorLink, index){
					//index是从1开始计算
					if(index == 2){
						//到section2开始播放
						if($("#video").parent().parent().parent().hasClass("active")){
							$('#video')[0].play();
							$(".logo").hide();
							$(".mean-btn").hide();
							$(".fp-slidesNav").hide();
							$(".share").hide();
							$(".fp-prev").hide();
							$(".fp-next").hide();
							$(".language").hide();
						}
						if($(document).width() >= 720){
							$.fn.fullpage.setAllowScrolling(false);
						}else{
							$.fn.fullpage.setAllowScrolling(true);
						}
					}
					if(index == 1){
						$('#video')[0].pause();
						$(".logo").show();
						$(".mean-btn").show();
						$(".share").show();
						$(".fp-prev").show();
						$(".fp-next").show();
						$(".language").show();
						$(".section2 .slide").first().toggleClass("active");
						$(".section2 .slide").first().siblings().removeClass("active");
						$(".fp-slidesContainer").css("transform","translate3d(0px,0px,0px)")
						$.fn.fullpage.setAllowScrolling(true);
					}
				},
				afterSlideLoad:function (anchorLink,index,slideIndex,direction){
					//slideIndex是从0开始计算
					if(slideIndex == 0){
						//滑块切换到视频页时播放视频
						$('#video')[0].play();
						//图标隐藏
						$(".logo").hide();
						$(".mean-btn").hide();
						$(".fp-slidesNav").hide();
						$(".share").hide();
						$(".fp-prev").hide();
						$(".fp-next").hide();
						$(".language").hide();
					}
					if(slideIndex != 0){
						//滑块切换到视频以外，视频暂停
						$('#video')[0].pause();
						//图标出现
						$(".logo").show();
						$(".mean-btn").show();
						$(".fp-slidesNav").show();
						$(".share").show();
						$(".fp-prev").show();
						$(".fp-next").show();
						$(".language").show();
					}
					//图片模糊效果
					if(slideIndex == 6){
						$(".pic5").eq(0).addClass("blur-8");
						$(".pic6").eq(0).addClass("blur-8");
						$(".pic3").eq(0).addClass("blur-2");
						$(".pic4").eq(0).addClass("blur-2");
						$(".pic4-m").eq(0).addClass("blur-8");
						$(".pic3-m").eq(0).addClass("blur-3");
						$(".pic2-m").eq(0).addClass("blur-1");
					}
					if(slideIndex != 6){
						$(".pic5").eq(0).removeClass("blur-8");
						$(".pic6").eq(0).removeClass("blur-8");
						$(".pic3").eq(0).removeClass("blur-2");
						$(".pic4").eq(0).removeClass("blur-2");
						$(".pic4-m").eq(0).removeClass("blur-8");
						$(".pic3-m").eq(0).removeClass("blur-3");
						$(".pic2-m").eq(0).removeClass("blur-1");
					}
				}

			});
		});

	});
	//菜单栏点击
	$(".list").each(function (index){
		$(".list").eq(index).click(function (){
			$(".mean-list").find("li").removeClass("listActive")
			$(this).toggleClass("listActive");
		})
	})
	
	//鼠标微动
	function MouseMove(ele,num){
		var x,y;
		var h=$(".section1").eq(0).height()/2;
		var w=$("body").outerWidth()/2;
		$(window).resize(function(){
			h=$("body").height()/2;
			
			w=$("body").outerWidth()/2;
		});
		$("body").mousemove(function(event){
			x=event.clientX;
			y=event.clientY;
			ele.css({'transform':"translate("+Math.floor((x-w)*0.04*num)+"px,"+Math.floor((y-h)*0.06*num)+"px)"});
		});
		//重力感应事件
		if(window.DeviceMotionEvent) {
			var x1,y1;
			window.addEventListener('devicemotion', function(event){
				var acceleration =event.accelerationIncludingGravity;
				x1 = acceleration.x;
				y1 = acceleration.y;
				ele.css({'transform':"translate("+Math.floor((x-w)*0.04*num)+"px,"+Math.floor((y-h)*0.06*num)+"px)"});
			}, false);
		}
	}
	MouseMove($(".bike-pic"),0.6);
	MouseMove($(".bike"),-0.2);
//	MouseMove($(".page2_smallMan"),1);
//	MouseMove($(".page2_bigMan"),-2);
	//视频播放暂停
	$('#video').click(function(){
	   if($(this).hasClass('pause')){
		    $('video').trigger('play');
		    $(this).removeClass('pause');
		    $(this).addClass('play');
		    //播放按钮
		    $(".play-btn").css({
		    	"display":"block",
		    	"backgroundPosition":"0 0"
		    });
		    $(".play-btn").fadeOut(1000);
	   }else{
		    $('#video').trigger('pause');
		    $(this).removeClass('play');
		    //播放按钮
		    $(".play-btn").css({
		    	"display":"block",
		    	"backgroundPosition":"4.166667rem 0"
		    });
		    $(".play-btn").fadeOut(1000);
		    $(this).addClass('pause');
	    }
	})
	//
	window.onresize = function (){
		$(".fp-slidesContainer").css("transition","none")
	}
	//菜单栏
	$(".mean-btn").hover(function (){
		$(".mean").addClass("mean-show")
	},function (){
		$(".mean").removeClass("mean-show")
	})
	$(".mean").hover(function (){
		$(".mean").addClass("mean-show")
	},function (){
		$(".mean").removeClass("mean-show")
	})
	//更多选项一如颜色改变
	$(".moreBtn").hover(function(){
		$(this).addClass("deep-red");
	},function(){
		$(this).removeClass("deep-red");
	})
