phantom.outputEncoding="GBK";
// var S = require("string");
var casper = require('casper').create({
    clientScripts:  [
        'includes/jquery.js',      // These two scripts will be injected in remote
        'includes/underscore.js'   // DOM on every request
    ],
    pageSettings: {
        loadImages:  false,        // The WebPage instance used by Casper will
        loadPlugins: false         // use these settings
    },
    logLevel: "info",              // Only "info" level messages will be logged
    verbose: false                  // log messages will be printed out to the console
});

//casper.echo(casper.cli.get(0));
var fetchUrl='https://movie.douban.com/subject/25662329/', fetchNumber;
if(casper.cli.has('url'))
    fetchUrl = casper.cli.get('url');
else if(casper.cli.has('number'))
    fetchNumber = casper.cli.get('number');
casper.echo(fetchUrl);

casper.start(fetchUrl, function () {
    this.capture("1.png");
    //this.echo("启动程序....");
    //this.echo(this.getHTML('div#info span:nth-child(3) a'));
    //this.echo(this.fetchText('div#info span:nth-child(1) a'));

    //抓取导演
    getTextContent('div#info span:nth-child(1) span.attrs a','抓取导演');


});

//get the text content of tag
function getTextContent(strRule, strMesg)
{
    //给evaluate传入参数
    var textinfo = casper.evaluate(function(rule) {
        var valArr = '';
        $(rule).each(function(index,item){
            valArr = valArr + $(this).text() + ',';
        });
        return valArr.substring(0,valArr.length-1);
    }, strRule);
    casper.echo(strMesg);
    require('utils').dump(textinfo.split(','));
    return textinfo.split(',');
};

//get the attribute content of tag
function getAttrContent(strRule, strMesg, Attr)
{
    //给evaluate传入参数
    var textinfo = casper.evaluate(function(rule, attrname) {
        var valArr = '';
        $(rule).each(function(index,item){
            valArr = valArr + $(this).attr(attrname) + ',';
        });
        return valArr.substring(0,valArr.length-1);
    }, strRule, Attr);
    casper.echo(strMesg);
    require('utils').dump(textinfo.split(','));
    return textinfo.split(',');
};

casper.run();