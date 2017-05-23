phantom.outputEncoding = "GBK";
var casper = require('casper').create({
    pageSetting:{
        loadImages:false,
        loadPlugins:false
    },
    logLevel:"info",
    verbose:false
});
casper.start("https://movie.douban.com/explore#!type=movie&tag=%E7%BB%8F%E5%85%B8&sort=recommend&page_limit=20&page_start=0",function () {
    this.echo("start....")
    this.capture("1.png");
});


  casper.wait(10000,function () {
       this.echo("click...");
       this.capture("click.png");
       this.click("a.more",10,10);
       var i = 0;
       do{
           i++;
           casper.waitForText("加载更多",function () {
               this.click('a.more',10,10)
           });
       }
       while(i<50);
   });


// casper.then(function () {
//     require('utils').dump(this.getElementsAttribute('div.list-wp div.list a.item','href'));
// });
casper.wait(10000,function () {
    casper.waitForText('加载更多',function () {
        this.echo("loading more ...");
        this.capture("loading.png")
    });
})

casper.run();