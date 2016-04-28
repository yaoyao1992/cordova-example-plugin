var exec = require("cordova/exec");



echoExport.getMessage=function(successCallback,errorCallback,options){

	cordova.exec(successCallback,errorCallback,"echo","getMessage",options);
}

module.exports=echoExport;