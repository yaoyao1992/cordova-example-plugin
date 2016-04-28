var exec = require("cordova/exec");



echoExport.getMessage=function(successCallback,errorCallback,options){

	exec(successCallback,errorCallback,"echo","getMessage",options);
}

module.exports=echoExport;