//可以利用phantom来实现页面的加载，下面这个例子实现了页面的加载并将页面保存为一张图片
var page = require('webpage').create();
page.viewportSize = {width:1024,height:768};
page.clipRect = {top:0,left:0,width:1024,height:768};
page.open('https://www.baidu.com/', function (status) {
    console.log("Status: " + status);
    if (status === "success") {
        page.render('example.png');
    }
    phantom.exit();
});

//render方法，phantom 经常会用到网页截图的功能