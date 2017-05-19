//程序判断了参数的多少，如果参数不够，那么终止运行，然后记录了打开页面的时间，请求页面之后，在记录当前时间，二者只差就是页面加载速度
var page = require('webpage').create(),
    system = require('system'),
    t,address;

if(system.args.length === 1){
    console.log('Usage:loadspeed.js <some URL>');
    phantom.exit();
}
t = Date.now();
address = system.args[1];
page.open(address,function (status) {
    if(status !== 'success'){
        console.log('FAIL to load the address');
    }else{
        t = Date.now() - t;
        console.log('loading' + system.args[1]);
        console.log('loading time' + t + 'mesc');
    }
    phantom.exit();
})
