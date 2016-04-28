var exec = require("cordova/exec");
var echoExport={};


echoExport.getMessage=function(successCallback,errorCallback,options){

	exec(successCallback,errorCallback,"Echo","echo",options);
}

module.exports=echoExport;