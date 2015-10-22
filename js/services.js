angular.module('myAppName.services', []).factory('Ads', function($cordovaDevice) {
  var o = {
  };

  o.getBanner = function(container){

    var device = $cordovaDevice.getDevice();
    var manufacturer = device.manufacturer;
    var model = device.model;
    var uuid = device.uuid;
    // Required parameters. 
    var publisherId = '836491278'; 
    var productId ='929471046'; 
    var width = 320; 
    var height =50; 
    // Optional parameters. 
    var userId = uuid; var packageName = ""; var isp = ""; var contentRating = ""; 
    var gender = ""; var age = ""; var category = ""; var networkType = ""; var geoLongitude = ""; 
    var geoLatitude = ""; var subPublisherId = ""; var subProductId = ""; var domain = ""; var deviceManufacturer = manufacturer; 
    var deviceModel = model; var userAdvertisingId=""; var noAdUrl= ""; 




      // if (typeof startappContainerId === 'undefined' || startappContainerId == null || startappContainerId == ''){
      //   startappContainerId = container;  /*default*/
      // }

      startappContainerId = container;

      //var container = document.getElementById('startappContainer');
      var container = document.getElementById(startappContainerId);

      var Base64 = {
           
          // private property
          _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
       
          // public method for encoding
          encode : function (input) {
              var output = "";
              var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
              var i = 0;
       
              input = Base64._utf8_encode(input);
       
              while (i < input.length) {
       
                  chr1 = input.charCodeAt(i++);
                  chr2 = input.charCodeAt(i++);
                  chr3 = input.charCodeAt(i++);
       
                  enc1 = chr1 >> 2;
                  enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                  enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                  enc4 = chr3 & 63;
       
                  if (isNaN(chr2)) {
                      enc3 = enc4 = 64;
                  } else if (isNaN(chr3)) {
                      enc4 = 64;
                  }
       
                  output = output +
                  this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                  this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
       
              }
       
              return output;
          },
       
          // public method for decoding
          decode : function (input) {
              var output = "";
              var chr1, chr2, chr3;
              var enc1, enc2, enc3, enc4;
              var i = 0;
       
              input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
       
              while (i < input.length) {
       
                  enc1 = this._keyStr.indexOf(input.charAt(i++));
                  enc2 = this._keyStr.indexOf(input.charAt(i++));
                  enc3 = this._keyStr.indexOf(input.charAt(i++));
                  enc4 = this._keyStr.indexOf(input.charAt(i++));
       
                  chr1 = (enc1 << 2) | (enc2 >> 4);
                  chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                  chr3 = ((enc3 & 3) << 6) | enc4;
       
                  output = output + String.fromCharCode(chr1);
       
                  if (enc3 != 64) {
                      output = output + String.fromCharCode(chr2);
                  }
                  if (enc4 != 64) {
                      output = output + String.fromCharCode(chr3);
                  }
       
              }
       
              output = Base64._utf8_decode(output);
       
              return output;
       
          },
       
          // private method for UTF-8 encoding
          _utf8_encode : function (string) {
              string = string.replace(/\r\n/g,"\n");
              var utftext = "";
       
              for (var n = 0; n < string.length; n++) {
       
                  var c = string.charCodeAt(n);
       
                  if (c < 128) {
                      utftext += String.fromCharCode(c);
                  }
                  else if((c > 127) && (c < 2048)) {
                      utftext += String.fromCharCode((c >> 6) | 192);
                      utftext += String.fromCharCode((c & 63) | 128);
                  }
                  else {
                      utftext += String.fromCharCode((c >> 12) | 224);
                      utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                      utftext += String.fromCharCode((c & 63) | 128);
                  }
       
              }
       
              return utftext;
          },
       
          // private method for UTF-8 decoding
          _utf8_decode : function (utftext) {
              var string = "";
              var i = 0;
              var c = c1 = c2 = 0;
       
              while ( i < utftext.length ) {
       
                  c = utftext.charCodeAt(i);
       
                  if (c < 128) {
                      string += String.fromCharCode(c);
                      i++;
                  }
                  else if((c > 191) && (c < 224)) {
                      c2 = utftext.charCodeAt(i+1);
                      string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                      i += 2;
                  }
                  else {
                      c2 = utftext.charCodeAt(i+1);
                      c3 = utftext.charCodeAt(i+2);
                      string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                      i += 3;
                  }
       
              }
       
              return string;
          }
       
      }

      function resolveOs() {
        var OSName = "0";
        if (navigator.userAgent.indexOf("Android") != -1)
          OSName = "0";
        if (navigator.userAgent.indexOf("iPhone") != -1)
          OSName = "1";
        if (navigator.userAgent.indexOf("iPad") != -1)
          OSName = "1";

        return OSName;
      }

      function checkFullscreenValues(){
        // Fix Input values
        
        // Fix fullscreenPadding to integer
        if(typeof fullscreenPadding === "undefined"){fullscreenPadding = 0;}
        fullscreenPadding = parseInt(fullscreenPadding);
        if (isNaN(fullscreenPadding)){fullscreenPadding = 0;}
        
        // Fix FullscreenMode to boolean
        if(typeof fullscreenMode === "undefined"){fullscreenMode = false;} 
        if(fullscreenMode){
          fullscreenMode = true; 
        }else{
          fullscreenMode = false;
        }
      }

      function checkRequiredValues(){
        
        if (publisherId == null || publisherId == '') {
           throw new Error('Error: Publisher ID cannot be NULL or empty');
        } else if (productId == null || productId == '') {
           throw new Error('Error: Product ID cannot be NULL or empty');
        } else if (width == null || width == '') {
           throw new Error('Error: The ad width cannot be NULL or empty');
        } else if (height == null || height == '') {
           throw new Error('Error: The ad height cannot be NULL or empty');
        } 
      }

      function buildRequestString() {
        os = resolveOs();
        placement = 'THIRD_PARTY_API';
        placement = '';
        
        // cookie date
        var expiration_date = new Date();
        var cookie_string = '';
        expiration_date.setFullYear(expiration_date.getFullYear() + 1);
        
        checkFullscreenValues(); 
        checkRequiredValues();
        /* var request = 'http://10.100.100.199:8080/AdPlatform/c2s/1.3/htmlads?sdkType=10&sdkVersion=1.0.0&c=US&partner='+ publisherId */ 
        var request = 'http://c2s.startappnetwork.com/c2s/1.3/htmlads?sdkType=10&sdkVersion=1.0.0&partner='+ publisherId
            + '&prod=' + productId + '&os=' + os + '&placement=' + placement + '&adw='
            + width + '&adh=' + height;

        if(typeof userId !== "undefined"){
          if (userId != null && userId != '') {
            var d = Base64.encode(userId);
            cookie_string = "data_did_tag=" + d + ";path=/;expires=" + expiration_date.toGMTString()+ ";";
            document.cookie = cookie_string;
            
            request += '&dId=' + userId;
          }
        }
        
        if(typeof userAdvertisingId !== "undefined"){
          if (userAdvertisingId != null && userAdvertisingId != '') {
            var adv = Base64.encode(userAdvertisingId);
            cookie_string = "data_adv_tag=" + adv + "; path=/; expires=" + expiration_date.toGMTString()+ ";";
            document.cookie = cookie_string;
            request += '&advId=' + userAdvertisingId;
          }
        }
        
        if(typeof packageName !== "undefined"){
          if (packageName != null && packageName != '') {
            request += '&pckId=' + packageName;
          }
        }
        
        if(typeof isp !== "undefined"){
          if (isp != null && isp != '') {
            request += '&isp=' + isp;
          }
        }
        
        if(typeof contentRating !== "undefined"){
          if (contentRating != null && contentRating != '') {
            request += '&maturity=' + contentRating;
          }
        }
        
        if(typeof gender !== "undefined"){
          if (gender != null && gender != '') {
            cookie_string = "data_gen_tag=" + gender + "; path=/; expires=" + expiration_date.toGMTString()+ ";";
            document.cookie = cookie_string;
            request += '&gen=' + gender;
          }
        }

        if(typeof age !== "undefined"){
          if (age != null && age != '') {
            cookie_string = "data_age_tag=" + age + "; path=/; expires=" + expiration_date.toGMTString()+ ";";
            document.cookie = cookie_string;
            request += '&age=' + age;
          }
        }
        
        if(typeof category !== "undefined"){
          if (category != null && category != '') {
            request += '&cat=' + category;
          }
        }
        
        if(typeof networkType !== "undefined"){
          if (networkType != null && networkType != '') {
            request += '&netType=' + networkType;
          }
        }

        if((typeof geoLatitude !== "undefined") && (typeof geoLongitude !== "undefined")){
          if (geoLatitude != null && geoLatitude != '' && geoLongitude != null && geoLongitude != '') {
            request += '&loc=' + geoLatitude + "," + geoLongitude;
          }
        }
        
        if(typeof subPublisherId !== "undefined"){
          if (subPublisherId != null && subPublisherId != '') {
            request += '&subPublisherId=' + subPublisherId;
          }
        }

        if(typeof subProductId !== "undefined"){
          if (subProductId != null && subProductId != '') {
            request += '&subProductId=' + subProductId;
          }
        }
        
        if(typeof deviceManufacturer !== "undefined"){
          if (deviceManufacturer != null && deviceManufacturer != '') {
            request += '&manufacturer=' + deviceManufacturer;
          }
        }
        
        if(typeof deviceModel !== "undefined"){
          if (deviceModel != null && deviceModel != '') {
            request += '&model=' + deviceModel;
          }
        }
        
        if(typeof noAdUrl !== "undefined"){
          if (noAdUrl != null && noAdUrl != '') {
            request += '&noAdUrl=' + encodeURIComponent(noAdUrl);
          }
        }
        
        //request += '&adType=3';  // 3=INTERSTITIAL
        return request;
      }

      function httpGet(theUrl) {

        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false);
        xmlHttp.send();
        return xmlHttp.responseText;
      }


      var req = buildRequestString();

      ifrmStyle = "overflow:hidden;border:0px;margin:auto;"; 

      ifrm = document.createElement("IFRAME");
      ifrm.setAttribute("src", req);
      ifrm.setAttribute("scrolling", "no");
      ifrm.setAttribute("seamless", "seamless");
      ifrm.setAttribute("style", ifrmStyle); 
      ifrm.style.width = width+"px";
      ifrm.style.height = height+"px";

      if (fullscreenMode) {
        setTimeout('showFullscreen()', 100);  // Need to wait 100ms because of ANDROID bug to get screen size (width&height)
        window.addEventListener("resize", function(){
          resizeToFullscreen();
        });
      }else{
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        container.appendChild(ifrm) ;
      }

      function showFullscreen(){
        resizeToFullscreen();
        container.appendChild(ifrm);
      }

      function resizeToFullscreen(){
        var clientWidth = document.getElementsByTagName('body')[0].clientWidth;
        var clientHeight = document.getElementsByTagName('body')[0].clientHeight;
        
        container.style.position = "fixed";
        container.style.width = clientWidth+"px";
        container.style.height = clientHeight-fullscreenPadding+"px";
        container.style.zIndex = '20';
        container.style.top = fullscreenPadding;
        container.style.left = '0px';
        ifrm.style.width = "100%";
        ifrm.style.height = "100%";
      }

  }
  return o;

});
