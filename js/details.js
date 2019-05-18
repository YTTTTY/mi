$(function() {
	// 拿到商品id
	var connect = location.search.slice(1);
	$.ajax({
		type: 'get',
		url: '/inc/details.php',
		data: {
			getid: connect
		},
		success: function(str) {
			var obj = JSON.parse(str);
			$('title').html(obj[0].title);
			$('.J_proName').html(obj[0].title);
			$('.titles').html(obj[0].title);
			$('.sale-desc').html(obj[0].desc);
			$('.price').html(obj[0].price + '元');
			$('.totlePrice').html('总计：' + obj[0].price + '元');
			var objImg = obj[0].childimg;
			var arrImg = objImg.split('|');
			var htm = '';
			htm += '<div class="swiper-wrapper">';
			if (arrImg.length == 1) {
				htm += '<div class="swiper-slide swiper-slide-active"><img src="/images/' + arrImg[0] +
					'" /></div><div class="swiper-shade"></div>';
			} else {
				htm += arrImg.map(function(item) {
					return `<div class="swiper-slide">
										<img src="/images/${item}" />
									</div>`;
				}).join('');
				htm +=
					'<div class="swiper-shade"></div></div><div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div>';
			}
			$('.swiper-container').html(htm);
			var mySwiper = new Swiper('.swiper-container', {
				effect: 'fade',
				loop: true, // 循环模式选项
				autoplay: true,
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				// 如果需要前进后退按钮
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});
			mySwiper.el.onmouseover = function() { //鼠标放上暂停轮播
				mySwiper.autoplay.stop();
			}
			mySwiper.el.onmouseleave = function() {
				mySwiper.autoplay.start();
			}
			// 鼠标进入拿到图片显示放大镜
			$('.swiper-wrapper').on('mouseenter', function() {
				var src = $(this).find('.swiper-slide-active').find('img').attr('src');
				$('.swiper-container-big').css('display', 'block');
				$('.swiper-container-big').find('img').attr('src', src);
				$('.swiper-shade').css('display', 'block');

			});
			// 鼠标移出隐藏放大镜
			$('.swiper-wrapper').on('mouseleave', function() {
				$('.swiper-container-big').css('display', 'none');
				$('.swiper-shade').css('display', 'none');
			});
			// 父盒子左边距离
			var $wrapperLeft = $('.swiper-wrapper').offset().left;
			// 父宽
			var $wrapperWidth = $('.swiper-wrapper').width();
			// 父高
			var $wrapperHeight = $('.swiper-wrapper').height();
			// 遮罩宽
			var $shadeWidth = $('.swiper-shade').width();
			// 遮罩高
			var $shadeHeight = $('.swiper-shade').height();

			$('.swiper-wrapper').on('mousemove', function(e) {
				// 卷曲高
				var $swiperTop = $('.swiper-wrapper').offset().top - $documentScrollTop;
				var $top = e.clientY - $swiperTop - ($shadeHeight / 2);
				var $left = e.clientX - $wrapperLeft - ($shadeWidth / 2);
				$left = $left <= 0 ? 0 : $left;
				$left = $left >= $wrapperWidth - $shadeWidth ? $wrapperWidth - $shadeWidth : $left;
				$top = $top <= 0 ? 0 : $top;
				$top = $top >= $wrapperHeight - $shadeHeight ? $wrapperHeight - $shadeHeight : $top;
				$('.swiper-shade').css('left', $left);
				$('.swiper-shade').css('top', $top);
				// 放大镜移动距离
				var $bigLeft = ($left * ($('.swiper-big').width() - $('.swiper-container-big').width())) / ($wrapperWidth -
					$shadeWidth);
				var $bigTop = ($top * ($('.swiper-big').height() - $('.swiper-container-big').height())) / ($wrapperHeight -
					$shadeHeight);
				$('.swiper-big').css('left', -$bigLeft);
				$('.swiper-big').css('top', -$bigTop);
			});
		}
	});
	if ($.cookie('usnameId')) {
		$('#details').html('加入购物车')
	} else {
		$('#details').html('登录后购买');
	}
	$('#details').on('click', function() {
		if ($.cookie('usnameId')) {
			$.ajax({
				type: 'get',
				url: '/inc/details.php',
				data: {
					connectid: connect,
					usnameId: $.cookie('usnameId')
				},
				success: function(str) {
					if(str){
						alert('加入购物车成功');
						location.reload();
					}
				}
			});
		} else {
			$.cookie('url', location.href, {
				path: '/'
			});
			location.href = '/html/login.html';
		}
	});
	// 默认顶部距离
	var $documentScrollTop = $(document).scrollTop();
	$(window).on('scroll', function(e) {
		fixNarBar();
		$documentScrollTop = $(document).scrollTop();
	});
	$('html,body').animate({
		scrollTop: 139
	}, 800);
	fixNarBar();

	function fixNarBar() {
		if ($(document).scrollTop() >= 140) {
			$('#J_fixNarBar').addClass('nav_fix');
		} else {
			$('#J_fixNarBar').removeClass('nav_fix');
		}
	}
});
