## 图片触屏双指缩放

该组件可以弹出层模拟原生图片的全屏双指缩放功能

### api

* method showImage (config)
	* param {Object} config: 缩放图片配置
		* param {String} config.src: 大图地址
		* param {Number} config.width 大图的最大放大宽度
		* param {Number} config.height 大图的最大放大高度
	
### example

``` javascript
	KISSY.use('kg/image-gesture-zoom/2.0.0/',function(S, imageZoomer){
		imageZoomer.showImage({
			src: 'http://xx.com/big.jpg',
			width: 1200,
			height: 1200
		});
	});
```