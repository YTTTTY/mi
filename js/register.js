// 手机号码判断
var phone1 = false;
// 安全条款判断
var clause = false;
// 手机号码正则判断
function phone() {
	if ($('#phone').val() == '') {
		$('#phone').addClass('input-active');
		$('#phone-hint').css('display', 'block')
			.children('span').html('请输入手机号码');
		return phone1 = false;
	}
	var phoneZ = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
	if (!phoneZ.test($('#phone').val())) {
		$('#phone').addClass('input-active');
		$('#phone-hint').css('display', 'block')
			.children('span').html('手机号码格式错误');
		return phone1 = false;
	}
	phone1 = true;
}
// 安全条款点击
$('.select-privacy').on('click', function() {
	clause = !clause;
	if (clause) {
		$('#clause').css('display', 'none');
		$(this).children('.icon_select').addClass('icon_select-active');
	} else {
		$(this).children('.icon_select').removeClass('icon_select-active');
	}
}); 
// 手机输入框失焦
$('#phone').on('blur', function() {
	phone();
});
// 手机输入框内容改变
$('#phone').bind('input', function() {
	$('#phone').removeClass('input-active');
	$('#phone-hint').css('display', 'none');
});
var promise1 = new Promise(function(resolve) {
	// 注册按钮
	$('.btn_reg_1').on('click', function() {
		phone();
		if (!clause) {
			$('#clause').css('display', 'block');
		}
		if (clause) {
			$('#clause').css('display', 'none');
		}
		if (phone1 && clause) {
			$.ajax({
				type: 'post',
				url: '/inc/register.php',
				data: {
					phone: parseInt($('#phone').val())
				},
				success: function(str) {
					if (str == 1) {
						$('#phone-hint').css('display', 'block')
							.children('span').html('改手机号码已被注册');
					} else {
						resolve(parseInt($('#phone').val()));
						$('#phone').val('');
					}
				}
			});
		}
	});
});
promise1.then(function(str) {
	$('.registerone').css('display', 'none');
	$('.registertwo').css('display', 'block');
	$('.registerthree').css('display', 'none');
	$('.registerfour').css('display', 'none');
	$('.address-place').html('+86  ' + str);
	var resendcode = false;
	// 验证码判断
	function code() {
		if ($('#resendcode').val() == '') {
			$('#resendcode').addClass('input-active');
			$('#phone-hint2').css('display', 'block')
				.children('span').html('请输入验证码');
			return resendcode = false;
		}
		var phoneZ = /^\d{4,8}$/;
		if (!phoneZ.test($('#resendcode').val())) {
			$('#resendcode').addClass('input-active');
			$('#phone-hint2').css('display', 'block')
				.children('span').html('验证码错误或已过期');
			return resendcode = false;
		}
		return resendcode = true;
	}
	$('#resendcode').on('blur', function() {
		code();
	});
	$('#resendcode').bind('input', function() {
		$('#resendcode').removeClass('input-active');
		$('#phone-hint2').css('display', 'none');
	});
	var tr = true;
	// 定时器
	var time = '';
	// 验证码
	var verification = 11;
	// 重新发送
	$('#sendout').on('click', function() {
		if (tr) {
			var tim = 60;
			tr = false;
			$('.remain').addClass('remain-active');
			$('#sendout').html('重新发送(' + tim + ')');
			time = setInterval(function() {
				tim--;
				$('#sendout').html('重新发送(' + tim + ')');
				if (tim <= 0) {
					$('#sendout').html('重新发送');
					clearInterval(time);
					$('.remain').removeClass('remain-active');
					tr = true;
				}
			}, 1000);
			$.ajax({
				type: 'post',
				url: '/inc/register.php',
				data: {
					resendcode: str
				},
				success: function(str1) {
					console.log(str1);
					verification = str1;
				}
			});
		}
	});
	// 返回
	$('#sendout').trigger('click');
	$('.btn_reg_3').on('click', function() {
		location.reload();
	});
	var promise2 = new Promise(function(resolve) {
		// 下一步点击判断
		$('.btn_reg_2').on('click', function() {
			code();
			if ($('#resendcode').val() == verification) {
				resolve(str);
			} else if ($('#resendcode').val()) {
				$('#resendcode').addClass('input-active');
				$('#phone-hint2').css('display', 'block')
					.children('span').html('验证码错误或已过期');
			}
		});
	});
	promise2.then(function(str) {
		$('.set-phone').html(str);
		$('.registerone').css('display', 'none');
		$('.registertwo').css('display', 'none');
		$('.registerthree').css('display', 'block');
		$('.registerfour').css('display', 'none');
		// 密码是否通过
		var passwordInp = false;
		// 确认密码是否通过
		var SetpasswordInp = false;
		// 安全正则
		function padRegular(val) {
			var sice = 0;
			if (/[0-9]/.test(val)) {
				sice++;
			}
			if (/[a-zA-z]/.test(val)) {
				sice++;
			}
			if (/[^A-z0-9a-z_]/.test(val)) {
				sice++;
			}
			return sice;
		}
		// 密码判断
		function password() {
			if ($('#password').val() == '') {
				$('#dis_box').css('display', 'none')
				$('#phone-hint3').css('display', 'block')
					.children('span').html('请输入密码');
				return passwordInp = false;
			}
			var security = padRegular($('#password').val());
			if ($('#password').val().length < 8 || $('#password').val().length > 16 || security == 0 || security == 1) {
				$('#dis_box').css('display', 'none')
				$('#phone-hint3').css('display', 'block')
					.children('span').html('密码长度8~16位，数字、字母、字符至少包含两种');
				return passwordInp = false;
			}
			if ($('#set-password').val() != $('#password').val() && $('#set-password').val() != '') {
				$('#dis_box').css('display', 'none')
				$('#phone-hint3').css('display', 'block')
					.children('span').html('密码输入不一致');
				return passwordInp = false;
			}
			return passwordInp = true;
		}
		// 确认密码判断
		function setPassword() {
			if ($('#set-password').val() == '') {
				$('#dis_box').css('display', 'none')
				$('#phone-hint3').css('display', 'block')
					.children('span').html('请输入确认密码');
				return SetpasswordInp = false;
			}
			if ($('#set-password').val() != $('#password').val()) {
				$('#dis_box').css('display', 'none')
				$('#phone-hint3').css('display', 'block')
					.children('span').html('密码输入不一致');
				return SetpasswordInp = false;
			}
			var security = padRegular($('#set-password').val());
			if ($('#set-password').val().length < 8 || $('#set-password').val().length > 16 || security == 0 || security ==
				1) {
				if ($('#set-password').val() == $('#password').val()) {
					$('#phone-hint3').css('display', 'none');
					$('#dis_box').css('display', 'block');
					return SetpasswordInp = false;
				}
				$('#dis_box').css('display', 'none');
				$('#phone-hint3').css('display', 'block')
					.children('span').html('密码长度8~16位，数字、字母、字符至少包含两种');
				return SetpasswordInp = false;
			}
			return SetpasswordInp = true;
		}
		// 密码失焦
		$('#password').on('blur', function() {
			password();
		});
		// 密码内容改变触发
		$('#password').bind('input', function() {
			$('#phone-hint3').css('display', 'none');
			$('#dis_box').css('display', 'block');
		});
		// 确认密码失焦
		$('#set-password').on('blur', function() {
			setPassword();
		});
		// 确认密码内容改变触发
		$('#set-password').bind('input', function() {
			$('#phone-hint3').css('display', 'none');
			$('#dis_box').css('display', 'block');
		});
		$('.submit-step').on('click', function() {
			password();
			if (!passwordInp) {
				return;
			}
			setPassword();
			// 正确后执行
			if (SetpasswordInp && passwordInp) {
				var promise3 = new Promise(function(resolve) {
					$.ajax({
						type: 'post',
						url: '/inc/register.php',
						data: {
							password: $('#set-password').val(),
							suphone: str
						},
						success: function(str1) {
							if (str1 == 1) {
								resolve(str);
							} else {
								alert('注册失败')
							}
						}
					});
				});
				// 成功页
				promise3.then(function(str) {
					$('.registerone').css('display', 'none');
					$('.registertwo').css('display', 'none');
					$('.registerthree').css('display', 'none');
					$('.registerfour').css('display', 'block');
					$.ajax({
						type: 'post',
						url: '/inc/register.php',
						data: {
							getphone: str
						},
						success: function(str1) {
							$('.get-id').html(str1);
							$('#register-login').on('click', function() {
								if ($.cookie('usnameId')) {
									alert('你已登陆，请先退出');
								} else {
									$.cookie('usnameId', str1, {
										expires: 7,
										path: '/'
									});
									location.href = $.cookie('url');
								}
							});
						}
					});
				});
			}
		});
	});
});
