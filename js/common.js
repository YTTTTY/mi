function my$(id) {
	return document.getElementById(id);
}
/**
 * 设置元素的文本内容
 * @param element 任意元素
 * @param text 任意文本内容
 */
function setInnerText(element, text) {
	if (typeof(element.textContent) == 'undefined') {
		element.setInnerText = text;
	} else {
		element.textContent = text;
	}
}

/**
 * 获取元素的文本内容
 * @param element 任意元素
 * @returns {*} 任意元素中的文本内容
 */
function getInnerText(element) {
	if (typeof(element.textContent) == 'undefined') {
		return element.innerText;
	} else {
		return element.textContent;
	}
}

/**
 * 获取父级元素中的第一个子元素
 * @param element 父级元素
 * @returns {*} 父级元素中的子级元素
 */
function getFirstElement(element) {
	if (element.firsElementChild) {
		return element.fristElementChild;
	} else {
		var node = element.firstChild;
		while (node && node.nodeType != 1) {
			node = node.nextSibling;
		}
		return node;
	}
}
/**
 * 获取父级元素中的最后一个子元素
 * @param element 父级元素
 * @returns {*} 最后一个子元素
 */
function getLastElement(element) {
	if (element.lastElementChild) {
		return element.lastElementChild;
	} else {
		var node = element.lastChild;
		while (node && node.nodeType != 1) {
			node = node.previousSibling;
		}
		return node;
	}
}
/**
 * 获取某个元素的前一个兄弟元素
 * @param element 某个元素
 * @returns {*} 前一个兄弟元素
 */
function getPreviousElement(element) {
	if (element.previousElementSibling) {
		return element.previousElementSibling;
	} else {
		var node = element.previousSibling;
		while (node && node.nodeType != 1) {
			node = node.previousSibling;
		}
		return node;
	}
}
/**
 * 获取某个元素的后一个兄弟元素
 * @param element 某个元素
 * @returns {*} 后一个兄弟元素
 */
function getNextElement(element) {
	if (element.nextElementSibling) {
		return element.nextElementSibling
	} else {
		var node = element.nextSibling;
		while (node && node.nodeType != 1) {
			node = node.nextSibling;
		}
		return node;
	}
}
//为任意一个元素绑定事件:元素,事件类型,事件处理函数
function addEventListener(element, type, fn) {
	if (element.addEventListener) {
		element.addEventListener(type, fn, false);
	} else if (element.attachEvent) {
		element.attachEvent("on" + type, fn);
	} else {
		element["on" + type] = fn;
	}
}
//为任意的一个元素解绑某个事件:元素,事件类型,事件处理函数
function removeEventListener(element, type, fn) {
	if (element.removeEventListener) {
		element.removeEventListener(type, fn, false);
	} else if (element.detachEvent) {
		element.detachEvent("on" + type, fn);
	} else {
		element["on" + type] = null;
	}
}

function getScroll() {
	return {
		top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0,
		left: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0
	}
}

function getStyle(element, arr) {
	return window.getComputedStyle ? window.getComputedStyle(element, null)[arr] : element.currentStyle[arr];
}


function animate(element, json, fn) {
	clearInterval(element.timeId);
	element.timeId = setInterval(function() {
		var flag = true;
		for (var attr in json) {
			if (attr == 'opacity') {
				var current = getStyle(element, attr) * 100;
				var target = json[attr] * 100;
				var step = (target - current) / 10;
				step = step >= 0 ? Math.ceil(step) : Math.floor(step);
				current += step;
				element.style[attr] = current / 100;
			} else if (attr == 'zIndex') {
				element.style[attr] = current;
			} else {
				var current = parseInt(getStyle(element, attr));
				var target = json[attr];
				var step = (target - current) / 10;
				step = step >= 0 ? Math.ceil(step) : Math.floor(step);
				current += step;
				element.style[attr] = current + 'px';
			}
			if (current != target) {
				flag = false;
			}
		}
		if (flag) {
			clearInterval(element.timeId);
			if (fn) {
				fn();
			}
		}
	}, 24)
}
function ajax(opt) {
	// 类型转大写
	opt.type = opt.type.toUpperCase();
	// 把数据转成字符串
	var pairs = [];
	for (key in opt.data) {
		pairs.push(key + '=' + opt.data[key]);
	}
	var querystring = pairs.join('&');
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	addEventListener(xhr, 'readystatechange', function () {
		if (xhr.readyState !== 4) return;
		if (xhr.status == 200) {
			try {
				opt.success(JSON.parse(xhr.responseText));
			} catch (e) {
				opt.success(xhr.responseText);
			}
		} else {
			opt.success(xhr.status);
		}
	});
	if (opt.type === 'GET') {
		opt.url += '?' + querystring;
	}
	xhr.open(opt.type, opt.url);
	// 设置send原始值为空
	var datas = null;
	if (opt.type === 'POST') {
		xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		datas = querystring;
	}
	xhr.send(datas);
}