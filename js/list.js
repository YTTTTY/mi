$(function() {
	// 手风琴
	var search = decodeURI(location.search.slice(1));
	if (search) {
		var h =
			'<a href="/index.html">首页</a><span class="sep">&gt;</span><a href="/html/list.html">所有商品</a><span class="sep">&gt;</span><span>' +
			search + '</span>';
		$('title').html('【' + search + '及' + search + '相关产品】-小米商城');
	} else {
		var h = '<a href="/index.html">首页</a><span class="sep">&gt;</span><span>所有商品</span>';
	}
	$('.breadcrumbs').children('.container').html(h);
	var tre = false;
	$('.J_filterToggle').on('click', function() {
		if ($(this).prev().innerHeight() < 50) {
			$(this).prev().css('height', Math.floor($(this).prev().children().length / 6) * 45);
		} else {
			$(this).prev().removeAttr('style');
		}
	});
	var num = 1;
	var des = '';
	var data = '';

	function list(page, option, search,data) {
		$.ajax({
			type: 'get',
			url: '/inc/list.php',
			data: {
				page: page,
				number: 12,
				option: option,
				search: search,
				data:data
			},
			success: function(str) {
				if (str !=0) {
					var obj = JSON.parse(str);
					var generalBut = Math.ceil(obj[1] / 12);
					var htm = obj[0].map(function(item) {
						var h = '';
						if (item.product == "saleoff") {
							h = `<div class="flag flag-saleoff">9折促销</div>`;
						}
						return `<div class="goods-item">
							<div class="figure figure-img">
								<a href="/html/details.html?${item.id}">
									<img src="/images/${item.images}" width="200" height="200" />
								</a>
							</div>
							<p class="desc"></p>
							<h2 class="title">
								<a href="/html/details.html?${item.id}">${item.title}</a>
							</h2>
							<p class="prive">${item.price}元 </p>
							<div class="thumbs">
								<ul class="thumb-list clearfix">
									<li>
										<img src="/images/${item.images}" />
									</li>
								</ul>
							</div>
							<div class="actions clearfix">
								<a href="javascript:;" class="btn-like J_likeGoods">
									<i class="iconfont">&#xe656;</i>
									<span>喜欢</span>
								</a>
								<a href="/html/details.html?${item.id}" class="btn-buy btn-buy-detail">
									<span>查看详情</span>
									<i class="iconfont">&#xe910;</i>
								</a>
							</div>
							<div class="flags">` +
							h +
							`<div class="flag flag-gift">有赠品</div>
							</div>
						</div>`;
					}).join('');
					$('.goods-list').html(htm);
					var htm1 = '';
					// 首页取消上一页
					if (num <= 1) {
						htm1 += '<div class="xm-pagenavi"><span class="numbers iconfont">&#xe606;</span>';
					} else {
						htm1 += '<div class="xm-pagenavi"><a href="javascript:void(0);" class="numbers first iconfont">&#xe606;</a>';
					}
					// 按钮显示数量
					var buttonNum = 8;
					// 按钮循环遍历
					function fors(min, max) {
						for (var i = min; i <= max; i++) {
							if (num == i) {
								htm1 += '<span class ="numbers current pagenavi-num">' + i + '</span>';
							} else {
								htm1 += '<a href="javascript:void(0);" class ="numbers pagenavi-num">' + i + '</a>';
							}
						}
					}
					// 按钮总数小于显示按钮书判断
					if (generalBut <= buttonNum) {
						fors(1, generalBut);
					} else {
						// 按钮总数大于显示按钮书判断
						if (num < buttonNum) {
							fors(1, buttonNum);
							htm1 += '<span class="numbers">...</span>';
						} else if (num >= buttonNum && num < generalBut - buttonNum + 3) {
							htm1 +=
								'<a href="javascript:void(0);" class ="numbers pagenavi-num">1</a><a href="javascript:void(0);" class ="numbers pagenavi-num">2</a><span class="numbers">...</span>';
							fors(num - Math.ceil(((buttonNum - 4) / 2)), num + Math.floor(((buttonNum - 4) / 2)));
							htm1 += '<span class="numbers">...</span>';
						} else {
							htm1 +=
								'<a href="javascript:void(0);" class ="numbers pagenavi-num">1</a><a href="javascript:void(0);" class ="numbers pagenavi-num">2</a><span class="numbers">...</span>';
							fors(generalBut - buttonNum + 3, generalBut);
						}
					}
					// 尾页取消下一页
					if (num >= generalBut) {
						htm1 += '<span class="numbers iconfont">&#xe602;</span></div>';
					} else {
						htm1 +=
							'<a href="javascript:void(0);" class="numbers last iconfont">&#xe602;</a></div>';
					}
					$('.xm-pagenavi').html(htm1);
					$('a.pagenavi-num').on('click', function() {
						num = parseInt($(this).html());
						list(num, des, search,data);
					});
					$('a.first').on('click', function() {
						if (num <= 1) {
							num = 1;
						} else {
							num--;
							list(num, des, search,data);
						}
					});
					$('a.last').on('click', function() {
						if (num >= generalBut) {
							num = generalBut
						} else {
							num++;
							list(num, des, search,data);
						}
					});
				} else {
				}
			}
		});
	}

	// 选项卡样式
	function optionStyle($this) {
		$this.parent().addClass('active').siblings().removeClass('active');
	}
	var liftingTr = true;
	// 价格排序
	function liftingTrs() {
		if (liftingTr) {
			$('#lifting').children().html('&#xe704;');
			liftingTr = false;
		} else {
			$('#lifting').children().html('&#xe71a;');
			liftingTr = true;
		}
	}
	// 价格点击
	$('#lifting').on('click', function() {
		optionStyle($(this));
		data = '';
		if (liftingTr) {
			des = 'desc';
			list(1, des, search,data);
		} else {
			des = 'asc';
			list(1, des, search,data);
		}
		liftingTrs();
		num = 1;
	});
	$('#recommend').on('click', function() {
		optionStyle($(this));
		liftingTr = false;
		liftingTrs();
		des = '';
		data = '';
		num = 1;
		list(1, des, search,data);
	});
	$('#now').on('click', function() {
		optionStyle($(this));
		liftingTr = false;
		liftingTrs();
		des = '';
		num = 1;
		data = 1;
		list(1, des, search,data);
	});
	list(1, '', search,'');

});
