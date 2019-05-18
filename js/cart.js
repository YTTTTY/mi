$(function() {
	// 用户界面效果
	$('.user').on('mouseenter', function() {
		$(this).addClass('user-active');
		$('.user-menu').css({
			display: 'block',
			overflow: 'hiddex',
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
			overflow: 'hiddex',
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
	// 退出
	$('#signout').on('click', function() {
		$.removeCookie('usnameId', {
			path: '/'
		});
		location.reload();
	});
	// 点击登陆或注册
	$('#login').on('click', function() {
		$.cookie('url', location.href, {
			path: '/'
		});
		location.href = '/html/login.html';
	});
	$('#J_loginBtn').on('click', function() {
		$.cookie('url', location.href, {
			path: '/'
		});
		location.href = '/html/login.html';
	});
	$('#register').on('click', function() {
		$.cookie('url', location.href, {
			path: '/'
		});
		location.href = '/html/register.html';
	});
});
// 判断是否登陆
if (!$.cookie('usnameId')) {
	$('#cart-empty').css('display', 'block');
	$('.page-main').css('display', 'none');
	$('.head_info').css('display', 'block');
	$('.topbar-info').css('display', 'none');
	$('#login-empty').css('display', 'none');

} else {
	$('#cart-empty').css('display', 'none');
	$('.head_info').css('display', 'none');
	$('.topbar-info').css('display', 'block');
	$('#username').html($.cookie('usnameId'));

	// 渲染
	var promise = new Promise(function(resolve) {
		$.ajax({
			type: 'get',
			url: '/inc/cart.php',
			data: {
				usnameId: $.cookie('usnameId')
			},
			success: function(str) {
				if (str != 0) {
					$('#login-empty').css('display', 'none');
					$('.page-main').css('display', 'block');
					var obj = JSON.parse(str);
					var htm = obj.map(function(item) {
						return `<div class="item-box">
								<div class="item-table J_cartGoods">
									<div class="item-row clearfix">
										<div class="col col-check clearfix">
											<i class="iconfont icon-checkbox J_itemCheckbox" data-id="${item.id}" data-status="${item.choice}">&#xe6cc;</i>
										</div>
										<div class="col col-img">
											<a href="javascript:;">
												<img src="/images/${item.images}" width="80" height="80" />
											</a>
										</div>
										<div class="col col-name">
											<h3 class="name">
												<a href="javascript:;">${item.title}</a>
											</h3>
										</div>
										<div class="col col-price">${item.price}元</div>
										<div class="col col-num">
											<div class="change-goods-num J_changeGoodsNum">
												<a href="javascript:;" class="J_minus" data-id="${item.id}">
													<i class="iconfont">&#xe63d;</i>
												</a>
												<input type="text" value="${item.number}" class="J_input" data-id="${item.id}" data-buylimit="${item.stock}"/>
												<a href="javascript:;" class="J_plus" data-id="${item.id}">
													<i class="iconfont">&#xe61f;</i>
												</a>
												<div class="msg J_canBuyLimit"></div>
											</div>
										</div>
										<div class="col col-total">${item.price * item.number}元</div>
										<div class="col col-action">
											<a href="javascript:;" class="J_delete" data-id="${item.id}">
												<i class="iconfont">&#xe60b;</i>
											</a>
										</div>
									</div>
								</div>
							</div>`;
					}).join('');
					$('#J_cartListBody').html(htm);
					resolve();
				} else {
					$('#login-empty').css('display', 'block');
					$('.page-main').css('display', 'none');
				}
			}
		});
	});
	promise.then(function() {
		// 全选按钮
		var $jSelectAll = $('#J_selectAll');
		// 全选
		var $iconCheckboxAll = $('.icon-checkbox');
		// 子选全部按钮
		var $jItemCheckbox = $('.J_itemCheckbox');
		// 全部输入框
		var $jInput = $('.J_input');

		// 点击显示按钮
		var all = false;
		var num = 0;
		// 渲染添加选中样式
		$jItemCheckbox.each(function() {
			if ($(this).attr('data-status') != 0) {
				$(this).addClass('icon-checkbox-selected');
				num++;
			} else {
				$(this).removeClass('icon-checkbox-selected');
			}
			// 小计
			var $unitPrice = $(this).parents('.item-row').find('.col-price').html().slice(0, -1);
			var $number = $(this).parents('.item-row').find('.J_input').val();
			$(this).parents('.item-row').find('.col-total').html($unitPrice * $number + '元');
			total();
		});
		$jInput.each(function() {
			var now = $(this).val();
			var plussbuylimit = parseInt($(this).attr('data-buylimit'));

			if (now <= 1 || now >= plussbuylimit) {
				$(this).parents('.J_changeGoodsNum').find('.J_canBuyLimit').css('display', 'none');
			} else {
				$(this).parents('.J_changeGoodsNum').find('.J_canBuyLimit').css('display', 'block');
				$(this).parents('.J_changeGoodsNum').find('.J_canBuyLimit').html('还可买 ' + (plussbuylimit - now) + ' 件');
			}
		});
		// 渲染是否全选
		function alls() {
			if (num == $jItemCheckbox.length) {
				all = true;
				$jSelectAll.addClass('icon-checkbox-selected');
			}
		}
		alls();

		function choice(parcid, status) {
			$.ajax({
				type: 'get',
				url: '/inc/cart.php',
				data: {
					userprid: $.cookie('usnameId'),
					parcid: parcid,
					choice: parseInt(status)
				}
			});
		}
		// 单选与全选
		$jItemCheckbox.on('click', function() {
			if ($(this).attr('data-status') != 0) {
				$(this).attr('data-status', 0).removeClass('icon-checkbox-selected');
			} else {
				$(this).attr('data-status', 1).addClass('icon-checkbox-selected');
			}
			choice($(this).attr('data-id'), $(this).attr('data-status'));
			var index = 0;
			$jItemCheckbox.each(function() {
				if ($(this).attr('data-status') != 0) {
					index++;
				}
			});
			if (index == $jItemCheckbox.length) {
				all = true;
				$jSelectAll.addClass('icon-checkbox-selected');
			} else {
				$jSelectAll.removeClass('icon-checkbox-selected');
				all = false;
			}
			total();
		});
		// 全选与单选
		$jSelectAll.on('click', function() {
			if (all) {
				$(this).removeClass('icon-checkbox-selected');
				$jItemCheckbox.each(function() {
					$(this).attr('data-status', 0).removeClass('icon-checkbox-selected');
					choice($(this).attr('data-id'), $(this).attr('data-status'));
				});
				all = false;
			} else {
				$(this).addClass('icon-checkbox-selected');
				$jItemCheckbox.each(function() {
					$(this).attr('data-status', 1).addClass('icon-checkbox-selected');
					choice($(this).attr('data-id'), $(this).attr('data-status'));
				});
				all = true;
			}
			total();
		});
		// 小计
		function subtotal($this, num) {
			var $unitPrice = $this.parents('.item-row').find('.col-price').html().slice(0, -1);
			$this.parents('.item-row').find('.col-total').html($unitPrice * num + '元');
		}

		function numberAjax(parcid, num) {
			$.ajax({
				type: 'get',
				url: '/inc/cart.php',
				data: {
					userprid: $.cookie('usnameId'),
					parcid: parcid,
					number: num
				}
			});
		}

		function buylimit($this, num) {
			var $thismax = $this.parents('.J_changeGoodsNum').find('.J_input').attr('data-buylimit');
			if (num <= 1 || num >= $thismax) {
				$this.parents('.J_changeGoodsNum').find('.J_canBuyLimit').css('display', 'none');
			} else {
				$this.parents('.J_changeGoodsNum').find('.J_canBuyLimit').css('display', 'block');
				$this.parents('.J_changeGoodsNum').find('.J_canBuyLimit').html('还可买 ' + ($thismax - num) + ' 件');
			}
		}

		// 商品数量减减
		$('.J_minus').on('click', function() {
			var reduce = parseInt($(this).next().val());
			reduce--;
			if (reduce < 1) {
				reduce = 1;
			}
			buylimit($(this), reduce);
			$(this).next().val(reduce);
			subtotal($(this), reduce);
			total();
			numberAjax($(this).attr('data-id'), reduce);
		});
		// 商品数量加加
		$('.J_plus').on('click', function() {
			var pluss = parseInt($(this).prev().val());
			var plussbuylimit = parseInt($(this).prev().attr('data-buylimit'));
			pluss++;
			if (pluss > plussbuylimit) {
				pluss = plussbuylimit;
				$('.modal-backdrop').css('display', 'block').addClass('fade');
				$('#J_modalAlert1').addClass('in');
				$('#J_alertCancel1').click(function() {
					$('#J_modalAlert1').removeClass('in');
					$('.modal-backdrop').removeClass('fade').css('display', 'none');
				});
			}
			buylimit($(this), pluss);
			$(this).prev().val(pluss);
			subtotal($(this), pluss);
			total();
			numberAjax($(this).attr('data-id'), pluss);
		});
		// 输入框数量
		$jInput.on('blur', function() {
			var now = $(this).val();
			var plussbuylimit = parseInt($(this).attr('data-buylimit'));
			if (now > plussbuylimit) {
				now = plussbuylimit;
			}
			buylimit($(this), now);
			$(this).val(now);
			subtotal($(this), now);
			total();
			numberAjax($(this).attr('data-id'), now);
		});
		var $jDelete = $('.J_delete');
		// 删除事件
		$($jDelete).on('click', function() {
			var $this = $(this);
			$('.modal-backdrop').css('display', 'block').addClass('fade');
			$('#J_modalAlert').addClass('in');
			$('#J_alertCancel').click(function() {
				$('#J_modalAlert').removeClass('in');
				$('.modal-backdrop').removeClass('fade').css('display', 'none');
			});
			$('#J_alertOk').click(function() {
				$this.parents('.item-box').remove();
				$('#J_modalAlert').removeClass('in');
				$('.modal-backdrop').removeClass('fade').css('display', 'none');
				total();
				alls();
				$.ajax({
					type: 'get',
					url: '/inc/cart.php',
					data: {
						userprid: $.cookie('usnameId'),
						parcid: $this.attr('data-id'),
						deletes: 1
					}
				});
			});
		});
		// 总计
		function total() {
			// 全部商品
			var $itemBox = $('.item-box');
			// 选中总价
			var $totalPrice = 0;
			// 总件数
			var $total = 0;
			// 选中件数
			var $selectionnum = 0;
			$itemBox.each(function() {
				$total += parseInt($(this).find('.J_input').val());
				if ($(this).find('.J_itemCheckbox').attr('data-status') == 1) {
					$selectionnum += parseInt($(this).find('.J_input').val());
					$totalPrice += parseInt($(this).find('.col-total').html().slice(0, -1));
				}
			});

			// 总件
			$('#J_cartTotalNum').html($total);
			// 选中
			$('#J_selTotalNum').html($selectionnum);
			// 选中总价
			$('#J_cartTotalPrice').html($totalPrice);
			if ($selectionnum >= 1) {
				$('#J_goCheckout').removeClass('btn-disabled').addClass('btn-primary');
				$('#J_noSelectTip').css('display', 'none');
			} else {
				$('#J_goCheckout').removeClass('btn-primary').addClass('btn-disabled');
				$('#J_noSelectTip').css('display', 'block');
			}
			if ($total == 0) {
				$('.page-main').remove();
				$('#login-empty').css('display', 'block');
			} else {
				$('#login-empty').css('display', 'none');
			}
		}
		total();
	});
}
