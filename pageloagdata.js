var casper = require("casper").create({
   waitTimeout:10000,
   stepTimeout:10000,
    verbose:true,
    pageSettings:{
        webSecurityEnabled:false
    },
    onWaitTimeout:function () {
        this.echo('** Wait-TimeOut **');
    },
    onStepTimeout:function () {
        this.echo('** Step-TimeOut **');
    },
});
casper.start();
casper.open('http://techmeme.com');

casper.then(function () {
    this.test.asserExits('#topcol1');
    this.waitForSelector('#topcol1',
        function pass() {
         console.log('Continue');
         },
        function fail() {
            this.die("Did not load element... something is wrong");
        }
    );
})