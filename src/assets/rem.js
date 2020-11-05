(function flexible (window, document) {
    var docEl = document.documentElement    	//获取文档根节点
    var dpr = window.devicePixelRatio || 1     // 获取当前手机dpr值
    
    //设置1rem = viewWidth / 10
    function setRemUnit () {
      var rem = docEl.clientWidth / 10					// 当前视宽 / 10
      docEl.style.fontSize = rem + 'px'				   // 重置根节点字体大小
    }
  
    setRemUnit()
  
    // 在页面上重置rem单元调整大小
    window.addEventListener('resize', setRemUnit)				//绑定resize事件
    window.addEventListener('pageshow', function (e) { 		//页面进入的触发，pageshow事件在onload之后
      if (e.persisted) {
        setRemUnit()
      }
    })
  
    // 检测0.5px支持
    if (dpr >= 2) {
      var fakeBody = document.createElement('body')
      var testElement = document.createElement('div')
      testElement.style.border = '.5px solid transparent'
      fakeBody.appendChild(testElement)
      docEl.appendChild(fakeBody)
      if (testElement.offsetHeight === 1) {
        docEl.classList.add('hairlines')
      }
      docEl.removeChild(fakeBody)
    }
  }(window, document))