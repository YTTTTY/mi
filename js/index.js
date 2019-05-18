$(function() {
	// 手机页渲染
	$.ajax({
		type: 'get',
		url: '/inc/index.php',
		data: {
			phone: 'phone'
		},
		success: function(str) {
			var st = JSON.parse(str);
			var p = '';
			var htm = st.map(function(item) {
				if (item.product == 'now') {
					p = `<div class="flag flag-now">
								新品
							</div>`;
				} else if (item.product == 'saleoff') {
					p = `<div class="flag flag-saleoff">
								${item.productcon}
							</div>`;
				} else {
					p = ''
				}
				return `<li class="brick-item brick-item-m">
							<div class="figure">
								<a href="/html/details.html?${item.id}">
									<img src="${'/images/' + item.images}" />
								</a>
							</div>
							<h3 class="title">
								<a href="/html/details.html?${item.id}">
									${item.title}
								</a>
							</h3>
							<p class="desc">${item.desc}</p>
							<p class="price">${item.price + '元'}</p>
							` +
					p + `
						</li>`;
			}).join('');
			$('#phone .brick-list').html(htm);
			// 盒子移入显示阴影
			$('.brick-item').on('mouseenter', function() {
				$(this).addClass('brick-item-active');
			});
			// 盒子移出取消阴影
			$('.brick-item').on('mouseleave', function() {
				$(this).removeClass('brick-item-active');
			});
			$('.review-item').on('mouseenter', function() {
				$(this).addClass('brick-item-active');
			});
			// 盒子移出取消阴影
			$('.review-item').on('mouseleave', function() {
				$(this).removeClass('brick-item-active');
			});
			$('.content-item').on('mouseenter', function() {
				$(this).addClass('brick-item-active');
			});
			// 盒子移出取消阴影
			$('.content-item').on('mouseleave', function() {
				$(this).removeClass('brick-item-active');
			});
			$('.video-item').on('mouseenter', function() {
				$(this).addClass('brick-item-active');
			});
			// 盒子移出取消阴影
			$('.video-item').on('mouseleave', function() {
				$(this).removeClass('brick-item-active');
			});
		}
	});
	if ($.cookie('usnameId')) {
		// 购物车数量渲染
		$.ajax({
			type: 'get',
			url: '/inc/index.php',
			data: {
				cartid: $.cookie('usnameId')
			},
			success: function(str) {
				var obj = JSON.parse(str);
				var cartNum = 0;
				obj.forEach(function(item) {
					cartNum += parseInt(item.number)
				});
				if (cartNum >= 1) {
					$('.J_barLMum').css('display', 'block').html(cartNum);
				} else {
					$('.J_barLMum').css('display', 'none');
				}
			},
		});
	}
	//家电页渲染
	$('.J_brickTabSwitch li').on('mouseenter', function() {
		$(this).addClass('tab-active').siblings().removeClass('tab-active');
		homeelec($(this).index() + 1);
	});

	function homeelec(index) {
		$.ajax({
			type: 'get',
			url: '/inc/index.php',
			data: {
				homeelec: index,
			},
			success: function(str) {
				var st = JSON.parse(str);
				var p = '';
				var htm = st.map(function(item, index) {
					var h = '';
					if (index < 7) {
						if (item.product == 'now') {
							p = `<div class="flag flag-now">
										新品
									</div>`;
						} else if (item.product == 'saleoff') {
							p = `<div class="flag flag-saleoff">
										${item.productcon}
									</div>`;
						} else {
							p = ''
						}

						h +=
							`<li class="brick-item brick-item-m">
									<div class="figure">
										<a href="/html/details.html?${item.id}">
											<img src="${'/images/' + item.images}" />
										</a>
									</div>
									<h3 class="title">
										<a href="/html/details.html?${item.id}">
											${item.title}
										</a>
									</h3>
									<p class="desc">${item.desc}</p>
									<p class="price">${item.price + '元'}</p>
									<p class="comment">${item.comment + '人评价'}</p>
									<div class="review-wrapper">
										<a href="#">
											<span class="review">质量非常好，与卖家描述的完全一致，非常满意,真的完全...</span>
											<span class="author"> 来自于 ╭ァ髙鮱三ヤ 的评价 </span>
										</a>
									</div>
									` +
							p + `
								</li>`;
					} else {
						h +=
							`<li class="brick-item brick-item-s">
									<div class="figure-img">
										<a href="#">
											<img src="${'/images/' + item.images}" />
										</a>
									</div>
									<h3 class="title1">
										<a href="#">${item.title}</a>
									</h3>
									<p class="num">${item.price + '元'}</p>
								</li>
								<li class="brick-item brick-item-s">
									<div class="figure-img">
										<a href="#">
											<i class="iconfont">&#xe663;</i>
										</a>
									</div>
									<h3 class="title1">
										<a href="#">浏览更多</a>
									</h3>
									<p class="num">热门</p>
								</li>`;
					}
					return h;
				}).join('');
				$('#homeelec .brick-list').html(htm);
				// 盒子移入显示阴影
				$('.brick-item').on('mouseenter', function() {
					$(this).addClass('brick-item-active');
				});
				// 盒子移出取消阴影
				$('.brick-item').on('mouseleave', function() {
					$(this).removeClass('brick-item-active');
				});
			}
		});
	}
	homeelec(1);

	// 推荐区渲染
	var $wid = $('#recommend .brick-item').width() + 14;
	$('#recommend .brick-list1').width($wid * 20);
	$.ajax({
		type: 'get',
		url: '/inc/index.php',
		data: {
			recommend: 'recommend',
		},
		success: function(str) {
			var st = JSON.parse(str);
			var p = '';
			var numMax = st.length / 5;
			var num = 0;
			var htm = st.map(function(item, index) {
				if (item.product == 'now') {
					p = `<div class="flag flag-now">
									新品
								</div>`;
				} else if (item.product == 'saleoff') {
					p = `<div class="flag flag-saleoff">
									${item.productcon}
								</div>`;
				} else {
					p = ''
				}

				return `<li class="brick-item brick-item-m">
								<div class="figure">
									<a href="/html/details.html?${item.id}">
										<img src="${'/images/' + item.images}" />
									</a>
								</div>
								<h3 class="title">
									<a href="/html/details.html?${item.id}">
										${item.title}
									</a>
								</h3>
								<p class="desc">${item.desc}</p>
								<p class="price">${item.price + '元'}</p>
								<p class="comment">${item.comment + '人评价'}</p>
								` +
					p + `
							</li>`;
			}).join('');
			$('#recommend .brick-list').html(htm);
			// 盒子移入显示阴影
			$('.brick-item').on('mouseenter', function() {
				$(this).addClass('brick-item-active');
			});
			// 盒子移出取消阴影
			$('.brick-item').on('mouseleave', function() {
				$(this).removeClass('brick-item-active');
			});
			$('#recommend .control-next').on('click', function() {
				if (num >= numMax - 1) {
					num = numMax - 1;
				} else {
					num++;
					$('#recommend .control-prev').css('cursor', 'pointer');
					$('#recommend .control-prev').removeClass('control-disabled');
					if (num == numMax - 1) {
						$('#recommend .control-next').css('cursor', 'default');
						$('#recommend .control-next').addClass('control-disabled');
					}
					$('#recommend .brick-list1').css({
						left: -$wid * 5 * num - 14
					});
				}
			});
			$('#recommend .control-prev').on('click', function() {
				if (num <= 1) {
					num = 0;
					$('#recommend .control-prev').css('cursor', 'default');
					$('#recommend .brick-list1').css({
						left: -14
					});
					$('#recommend .control-prev').addClass('control-disabled');
				} else {
					num--;
					$('#recommend .control-next').removeClass('control-disabled');
					$('#recommend .control-next').css('cursor', 'pointer');
					$('#recommend .brick-list1').css({
						left: -$wid * 5 * num - 14
					});
				}
			});
		}
	});
	// 内容区块
	$('#content').find('.item-list').each(function(item) {
		var $this = $(this);
		var $index = 0;
		var $length = $(this).children().length;
		var $width = $(this).children().eq(0).width();
		var htm = '';
		// 按钮遍历
		$(this).css('width', $width * $length);
		for (var i = 0; i < $length; i++) {
			if (i == 0) {
				htm += '<li class="pagers pager-active"><span>1</span></li>';
			} else {
				htm += '<li class="pagers"><span>' + (i + 1) + '</span></li>';
			}
		}
		$(this).parents('.content-item').find('.xm-pagers').html(htm);
		// 点击按钮效果
		$(this).parents('.content-item').find('.xm-pagers').children().on('click', function() {
			$(this).addClass('pager-active').siblings().removeClass('pager-active');
			$index = $(this).index();
			$this.css('left', -$width * $index);

		});
		// 上一页
		$(this).parents('.content-item').find('.control-prev').on('click', function() {
			if ($index == 0) {
				$(this).css('left', 0);
			} else {
				$index--;
				$(this).parents('.content-item').find('.xm-pagers').children().eq($index).addClass('pager-active').siblings()
					.removeClass('pager-active');
				$this.css('left', -$width * $index);
			}
		});
		// 下一页
		$(this).parents('.content-item').find('.control-next').on('click', function() {
			if ($index == $length - 1) {
				$index = $length - 1;
			} else {
				$index++;
				$(this).parents('.content-item').find('.xm-pagers').children().eq($index).addClass('pager-active').siblings()
					.removeClass('pager-active');
				$this.css('left', -$width * $index);
			}
		});
	});
	$('.bar-totop').on('click', function() {
		$(document).scrollTop(0);
	});
	if ($(document).scrollTop() > 800) {
		$('#bar-totop').css('display', 'block').stop().animate({
			opacity: 1
		}, 300);
	}
	$(window).on('scroll', function() {

		if ($(document).scrollTop() <= 800) {
			$('#bar-totop').stop().animate({
				opacity: 0
			}, 300, function() {
				$('#bar-totop').css('display', 'none');
			});
		} else {
			$('#bar-totop').css('display', 'block').stop().animate({
				opacity: 1
			}, 300);
		}
	});
});
