$(function() {
	// 三级导航
	$('.J_navCategory').on('mouseenter', function() {
		$('.site-category').css('display', 'block');
	});
	$('.J_navCategory').on('mouseleave', function() {
		$('.site-category').css('display', 'none');
	});
	// 盒子移入移出显示橙色字效果
	$('.category-item').on('mouseenter', function() {
		$(this).addClass('category-item-active');
	});
	$('.category-item').on('mouseleave', function() {
		$(this).removeClass('category-item-active');
	});
	// 用户界面效果
	$('.user').on('mouseenter', function() {
		$(this).addClass('user-active');
		$('.user-menu').css({
			display: 'block',
			overflow: 'hidden',
			marginTop: -7,
			height: 0,
			opacity: 0
		}).stop().animate({
			marginTop: '0',
			height: 164,
			opacity: 1
		}, 300, function() {
			$(this).removeAttr('style').css('display', 'block');
		});
	});
	$('.user').on('mouseleave', function() {
		$('.user-menu').css({
			display: 'block',
			overflow: 'hidden',
			marginTop: 0,
			height: 164,
			opacity: 1
		}).stop().animate({
			marginTop: '-7px',
			height: 0,
			opacity: 0
		}, 300, function() {
			$(this).removeAttr('style').css('display', 'none');
			$('.user').removeClass('user-active');
		});
	});
	// 判断是否登陆
	if (!$.cookie('usnameId')) {
		$('.head_info').css('display', 'block');
		$('.topbar-info').css('display', 'none');
		$('.cart-total').css('display', 'none');
	} else {
		$('.head_info').css('display', 'none');
		$('.topbar-info').css('display', 'block');
		$('#username').html($.cookie('usnameId'));
		// 购物车数据
		var port4 = new Promise(function(restive) {
			$.ajax({
				type: 'get',
				url: '/inc/index.php',
				data: {
					cartuserid: $.cookie('usnameId')
				},
				success: function(str) {
					var obj = JSON.parse(str);
					if (obj) {
						$('.cart').addClass('cart-mini');
						$('.loading').css('display', 'none');
						$('.cart-list').css('display', 'block');
						$('.cart-total').css('display', 'block');
						var num = 0;
						var price = 0;
						var htm = obj.map(function(item) {
							return `<li>
										<div class="cart-item clearfix">
											<a href="/html/details.html?${item.id}" class="thumb">
												<img src="/images/${item.images}" />
											</a>
											<a href="/html/details.html?${item.id}" class="name">${item.title}</a>
											<span class="price">${item.price} × ${item.number}</span>
											<a href="javascript:;" class="btn-del J_delItem"data-price="${item.price}" data-num="${item.number}" data-id="${item.id}">
												<i class="iconfont">&#xe60b;</i>
											</a>
										</div>
									</li>`;
						});
						obj.forEach(function(item) {
							num += parseInt(item.number);
						});
						obj.forEach(function(item) {
							price += parseInt(item.number * item.price);
						});
						// 内容渲染
						$('#cart-num').html('(' + num + ')');
						$('.cart-list').html(htm);
						$('.cart-total').find('.total').children('em').html(num);
						$('.cart-total').find('.price').children('em').html(price);
						$('.cart-list').find('.cart-item:eq(0)').addClass('bt');
						restive();
					} else {
						$('.cart').removeClass('cart-mini');
						$('.loading').css('display', 'block');
						$('.cart-list').css('display', 'none');
						$('.cart-total').css('display', 'none');
					}
				}
			});
		});
		port4.then(function() {
			// 删除事件
			$('.J_delItem').on('click', function() {
				tre = false;
				$.ajax({
					type: 'get',
					url: '/inc/index.php',
					data: {
						deleuseId: $.cookie('usnameId'),
						deletId: $(this).attr('data-id')
					}
				});
				// 删除商品数量
				var index = parseInt($(this).attr('data-num'));
				// 商品数量
				var num = $('#cart-num').html().slice(1, -1);
				// 总价
				var totalprive = $('#totleprice').html();
				//删除商品价格
				var price = parseInt($(this).attr('data-price'));
				// 渲染
				$('.cart-total').find('.total').children('em').html(num - index);
				$('.cart-total').find('.price').children('em').html(totalprive - price * index);
				
				$('#cart-num').html('(' + (num - index) + ')');
				$(this).parents('li').remove();
				$('.cart-list').find('.cart-item:eq(0)').addClass('bt');
				if ($('.cart-list').html().trim() == null || $('.cart-list').html().trim().length == 0) {
					$('.cart').removeClass('cart-mini');
					$('.loading').css('display', 'block');
					$('.cart-list').css('display', 'none');
					$('.cart-total').css('display', 'none');
				}
			});
		});
	}
	// 购物车鼠标移入渲染效果
	var tre = true;
	var hh = '';
	$('.head-cart').on('mouseenter', function() {
		clearTimeout(cartStop);
		if (tre) {
			hh = $('#J_miniCartMenu').innerHeight();
			$('.cart').addClass('cart-active');
			$('#J_miniCartMenu').css({
				display: 'block',
				overflow: 'hidden',
				height: 0,
				opacity: 0
			}).stop().animate({
				height: hh,
				opacity: 1
			}, 300, function() {
				$(this).removeAttr('style').css('display', 'block');
			});
		}
	});
	var cartStop = '';
	// 购物车鼠标移出渲染效果
	$('.head-cart').on('mouseleave', function() {
		clearTimeout(cartStop);
		tre = false;
		cartStop = setTimeout(function() {
			hh = $('#J_miniCartMenu').innerHeight();
			$('#J_miniCartMenu').css({
				display: 'block',
				overflow: 'hidden',
				height: hh,
				opacity: 1
			}).stop().animate({
				height: 0,
				opacity: 0
			}, 300, function() {
				$(this).removeAttr('style').css('display', 'none');
				$('.cart').removeClass('cart-active');
				tre = true;
			});
		}, 300);
	});
	// 退出
	$('#signout').on('click', function() {
		$.removeCookie('usnameId', {
			path: '/'
		});
		location.reload();
	});
	// 点击登陆
	$('#login').on('click', function() {
		$.cookie('url', location.href, {
			path: '/'
		});
		location.href = '/html/login.html';
	});
	// 点击注册
	$('#register').on('click', function() {
		$.cookie('url', location.href, {
			path: '/'
		});
		location.href = '/html/register.html';
	});
	var time = '';
	$('.xm_nav .nav-item:lt(8)').on('mouseenter', function() {
		$(this).addClass('nav-item-active');
		// 请求菜单数据
		$.ajax({
			type: 'get',
			url: '/inc/index.php',
			data: {
				navMenuIndex: $(this).index()
			},
			success: function(str) {
				var abj = JSON.parse(str);
				var htm = abj.map(function(item, index) {
					var p = '';
					if (item.product == 'now') {
						p = `
								<div class="header-menu-now">
									<span class="now">新品</span>
								</div>`
					}
					return `<li>` + p +
						`<div class="hildren-img">
									<a href="/html/details.html?${item.id}">
										<img src="${'/images/' + item.images}" />
									</a>
								</div>
								<div class="title">
									<a href="/html/details.html?${item.id}">${item.title}</a>
								</div>
								<p class="price">￥${item.price}</p>
							</li>`;
				}).join('');
				$('.header-nav-menu .children-list').html(htm);
				$('.header-nav-menu .children-list li:first-child').find('.hildren-img').addClass('bl');
			}
		});
		down();
	});
	// 菜单的下拉效果
	$('.xm_nav .nav-item').on('mouseleave', function() {
		$(this).removeClass('nav-item-active');
		clearTimeout(time);
	});
	$('.xm_nav').on('mouseleave', function() {
		up();
	});
	$('.xm_nav .nav-item:gt(7)').on('mouseenter', function() {
		$(this).addClass('nav-item-active');
		up();
	});
	$('.J_navCategory').on('mouseenter', function() {
		up();
	});
	// 头部导航出
	function down() {
		clearTimeout(time);
		time = setTimeout(function() {
			$('.header-nav-menu').stop().slideDown(150);
		}, 300);
	}
	// 头部导航收
	function up() {
		$('.header-nav-menu').stop().slideUp(250);
	}
	// 搜索框获取焦点事件
	$('.head_search').on('focus', function() {
		$(this).addClass('head_search_action');
		$(this).next().addClass('head_search_action');
		$(this).next().next().animate({
			opacity: 0
		}, 150, function() {
			$(this).css('display', 'none');
		});
		$('#J_keywordList').css('display','block');
	});
	// 搜索框失焦事件
	$('.head_search').on('blur', function() {
		
		$(this).removeClass('head_search_action');
		$(this).next().removeClass('head_search_action');
		$(this).next().next().css('display', 'block').animate({
			opacity: 1
		}, 150,function(){
			$('#J_keywordList').css('display','none');
		});
	});
	// 搜索框按钮点击事件
	$('#search').on('click',function(){
		var $val = $(this).prev().val();
		if($val){
			location.href = '/html/list.html?' + $val;
		}
	});
	// 左侧导航栏菜二级菜单
	$('.category-item').on('mouseenter', function() {
		$(this).find('.children').css('display', 'block');
	});
	// 左侧导航栏菜二级菜单
	$('.category-item').on('mouseleave', function() {
		$(this).find('.children').css('display', 'none');
	});
});
