const Xray = require('x-ray');

var x = new Xray();

x('https://www.zhihu.com/search?type=content&q=%E6%B3%A2%E7%BD%97%E8%9C%9C', 'li.item', [{
	q: 'div.title a',
	a: '.summary'
}])((err, content) => {
		console.log(content);
	});
