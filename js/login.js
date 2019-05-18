$(function() {
	$('#btnadpt').on('click', function() {
		// 账号是否为空
		if ($('#user').val() == '') {
			$('#user').addClass('item_account-active');
			$('.tips').css('display', 'block').find('span').html('请输入帐号');
			return false;
		}
		// 密码是否为空
		if ($('#password').val() == '') {
			$('#password').addClass('item_account-active');
			$('.tips').css('display', 'block').find('span').html('请输入密码');
			return false;
		}
		$.ajax({
			type: 'post',
			url: '/inc/login.php',
			data: {
				user: $('#user').val(),
				password: $('#password').val()
			},
			success: function(str) {
				if ($.cookie('usnameId')) {
					alert('你已登陆，请先退出');
				} else {
					if (str == -1) {
						$('#user').addClass('item_account-active');
						$('.tips').css('display', 'block').find('span').html('你是傻逼吗?');
					} else if (str == 0) {
						$('#user').addClass('item_account-active');
						$('.tips').css('display', 'block').find('span').html('账号或用户名错误');
					} else {
						$.cookie('usnameId', str, {
							expires: 7,
							path: '/'
						});
						location.href = $.cookie('url');
					}
				}
			}
		});
		return false;
	});
	$('#user').bind('input', function() {
		$(this).removeClass('item_account-active');
		$('.tips').css('display', 'none')
	});
	$('#password').bind('input', function() {
		$(this).removeClass('item_account-active');
		$('.tips').css('display', 'none')
	});
});
