var autoRefresh = setInterval(refresh, 1000*60*60);
var launch = setTimeout(refresh, 300);
var callBackGetSuccess = function(data) {
  console.log("api", data);
  chrome.browserAction.setIcon({path: "http:" + data.current.condition.icon});
  chrome.browserAction.setBadgeText({text: data.current.temp_c + '°C'});
  var tmp = data.current.temp_c
  if (tmp >= -273 && tmp < 10){

  }else {
    if (tmp >= 10 && tmp < 20) {
      chrome.browserAction.setBadgeBackgroundColor({ color: [232, 177, 37, 1] });
    }else {
        chrome.browserAction.setBadgeBackgroundColor({ color: [230, 126, 34, 1] });
      }
    }
  }

function refresh() {
navigator.geolocation.getCurrentPosition(success);
}
  function success(pos){
    console.log("Ll", pos);
    var ll = pos.coords.latitude + "," + pos.coords.longitude;
    var url = "https://api.weatherapi.com/v1/current.json?key=1a9d8295bcfd4ba39ac141951201411&q=" + ll;

    $.get(url, callBackGetSuccess).done(function() {
      })
      .fail(function() {
        
      })
      .always(function() {

      });

  }
