angular.module('myAppName.controllers', ['ionic', 'myAppName.services'])

.controller('TopPicsCtrl', function($scope, Ads) {


 	Ads.getBanner('myBannerLocation1');

 	// if you would like the add to reload a new ad, you can use the code bellow (it is set to refresh every 20 seconds). comment it out if you do not want to refresh the ad.
	setTimeout(function(){ Ads.getBanner('myBannerLocation1'); }, 20000);
 	
});
