

navigator.geolocation.getCurrentPosition(success, error)

  function success(pos){
    console.log("Ll", pos);
    var ll = pos.coords.latitude + "," + pos.coords.longitude;
    var url = "https://api.weatherapi.com/v1/current.json?key=1a9d8295bcfd4ba39ac141951201411&q=" + ll;


    $.get(url, callBackGetSuccess).done(function() {
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        
      });

  }
  function error() {
    console.log("pas loc");
  }


  var callBackGetSuccess = function(data) {
    console.log("api", data);
    var hum = 440 - ( 440 * data.current.humidity ) / 100;
    var x = data.current.condition.icon.substr(35, 400);
    var icon = "http://cdn.weatherapi.com/weather/128x128/" + x;
    var element = document.getElementById("temp");
    element.innerHTML =  data.current.temp_c + "°C" ;
    var element = document.getElementById("city");
    element.innerHTML =  data.location.name ;
    var element = document.getElementById("pres");
    element.innerHTML =  data.current.pressure_mb + "MB" ;
    var element = document.getElementById("hum");
    element.innerHTML =  data.current.humidity + "%" ;
    var image =document.getElementById('icon');
    image.src = icon;
    var element = document.getElementById("wind");
    element.innerHTML =  data.current.wind_kph + "km/h" ;
    document.getElementById("arrow").style.transform = "rotate("+ data.current.wind_degree + "deg)";
    document.getElementById("bar").style.strokeDashoffset = hum;

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