## 图片触屏双指缩放

该组件可以弹出层模拟原生图片的全屏双指缩放功能

* 版本：1.0
* 教程：[http://gallery.kissyui.com/image-gesture-zoom/1.0/guide/index.html](http://gallery.kissyui.com/image-gesture-zoom/1.0/guide/index.html)
* demo：[http://gallery.kissyui.com/image-gesture-zoom/1.0/demo/index.html](http://gallery.kissyui.com/image-gesture-zoom/1.0/demo/index.html)


### api

* method showImage (config)
	* param {Object} config: 缩放图片配置
		* param {String} config.src: 大图地址
		* param {Number} config.width 大图的最大放大宽度
		* param {Number} config.height 大图的最大放大高度
	
### example

``` javascript
	KISSY.use('gallery/image-gesture-zoom/1.0/',function(S, imageZoomer){
		imageZoomer.showImage({
			src: 'http://xx.com/big.jpg',
			width: 1200,
			height: 1200
		});
	});
```

### 注意

该组件依赖将要发布的 KISSY 1.4 中的 scroll-view 模块，此时仅供预览

## changelog

### V1.0

    [!] initial commit


