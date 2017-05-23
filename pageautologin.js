//casperjs 自动登录百度账号
// var casper = require('casper').create();
// casper.start('https://passport.baidu.com/v2/?login',function () {
//     this.fill('form[id="TANGRAM__PSP_3__form"]',{
//         'userName':'18614020970',
//         'password':'df36882215'
//     },false);
// });
//
// casper.then(function () {
//    this.click('input[class="pass-button pass-button-submit"]');
//    this.echo('login...');
// })
// casper.then(function () {
//     this.wait(3000,function () {
//         this.capture("baidu.png")
//     });
// });
//
// casper.run();


// //登录销售易账号
var x = require('casper').selectXPath;
var casper = require('casper').create();
casper.start('https://crm.xiaoshouyi.com/global/login.action',function () {
    this.fill('section[id="div_main"]',{
        'loginName':'dengfang@xiaoshouyi.com',
        'password':'*********'
    },false);
});

casper.then(function () {
    this.click('a[class="pg-btn-submit dinline-block "]');
    this.echo('login1...');
})

casper.then(function () {
    this.wait(2000,function () {
        this.click('li[class="selected"]');
        this.echo('login2...');
    })
})
casper.then(function () {
    this.echo('login3...');
    this.wait(10000,function () {
        this.capture("xiaoshouyi.png")
    });
});

casper.then(function () {
    this.echo('login4...');
    this.mouse.move('ul[class="crm-page all-menu"]');
    this.wait(5000,function () {
        this.capture("xsy.png")
    })
})

casper.then(function () {
    this.echo('login5...');
    this.click('a[href="/account.action"]');
    this.wait(5000,function () {
        this.capture('account.png');
    })
})

casper.then(function () {
    this.echo('login6...');
    this.click('div.jqx-grid-cell:nth-child(3) .jqx_grid_td  a.entry_name span.name');
    this.wait(10000,function () {
        this.capture('detail.png')
    })
})
casper.run();


//自动登录微博
// phantom.outputEncoding = "GBK";//解决乱码问题
// var casper = require("casper").create({
// //verbose: true,//记录日志到控制台   //logLevel: 'debug',//日志等级
//     pageSettings: {
//         loadImages: false, // The WebPage instance used by Casper will
//         loadPlugins: false
//     }
// });
//
// casper.start('http://www.weibo.com/login.php', function() {
//        this.echo(this.getTitle()); //获取页面标题
// });
// casper.then(function() {
//         this.fill('#pl_login_form', {
//             "username": "36882215@qq.com",
//             "password": "********"
//         }, false); //为true时登录
//           this.click('div[class="info_list login_btn"]'); //点击登录按钮
//           this.echo("login....")
//       });
//       casper.wait(10000, function() {
//             this.echo('new location is:' + this.getCurrentUrl());
//             this.capture("1.png"); //捕捉屏幕，并保存名为1的png格式的图片
//              this.echo("登陆成功");
//       });
//       //搜索单个用户
//        casper.wait(5000, function() {
//                 this.click('a[class="W_ficon ficon_search S_ficon"]');
//                 this.wait(5000, function() {
//                     this.capture('2.png');
//                     this.echo("搜索单个用户");
//                 });
//        });
// casper.run();