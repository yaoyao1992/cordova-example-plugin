#cordova-example-plugin


cordova 插件的demo实例

插件安装

cordova plugin add https://github.com/yaoyao1992/cordova-example-plugin.git --save

文件目录
	/www
	/src
		/android
		/ios
	plugin.xml

使用方法

<!-- deviceready后调用该方法与native端通信
args数组,数组第一个参数传string来通知native端 -->

echo.getMessage(successCallBack,errorCallBack,args)



