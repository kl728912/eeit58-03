function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: { lat: 23.858987, lng: 120.917631 } //default position
  });

//設置InfoWindow 
  var infoWindow = new google.maps.InfoWindow({
    maxWidth: 800,

  });


//載入鄉鎮市區GeoJson
  map.data.loadGeoJson('./Data/town.json');
//繪製鄉鎮市區行政區域界線及預設樣式
  map.data.setStyle({
    strokeWeight: 1,
    strokeOpacity: .5,
    strokeColor: '#0000FF',
    fillColor: '#fff',
    fillOpacity: .3
  });
  //滑鼠hover事件
  map.data.addListener('mouseover', function (event) {
    //當滑鼠hover在該行政區會變色
    map.data.revertStyle();
    map.data.overrideStyle(event.feature, { fillColor: '#0000FF' });

    //顯示對應區名及羽球場館數量
    var town = event.feature.getProperty('T_Name');
    var count = event.feature.getProperty('Add_Accept');
    var content = '<div><h3>' + town + '</h3></div>' + '<div><strong>' + '<span>羽球場館數量:</span>' + count + '</strong></div>';
    infoWindow.setContent(content);
    infoWindow.setPosition(event.latLng);
    infoWindow.open(map);

  });
  //當滑鼠點擊區域時關閉infoWindow
  map.data.addListener('click', function (event) {
    infoWindow.close();
  });
  //滑鼠離開回復預設樣式
  map.data.addListener('mouseout', function (event) {
    map.data.revertStyle();
    infoWindow.close();
  });



// 載入markers JSON file
  var markers = [];
  var request = new XMLHttpRequest();
  request.open('GET', './Data/markers.json', true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      // 解析JSON DATA
      var data = JSON.parse(request.responseText);

      // 遍歷所有marker data，並加入到地圖中
      for (var i = 0; i < data.length; i++) {
        var marker = new google.maps.Marker({
          position: { lat: data[i].Latitude, lng: data[i].Longitude },
          map: map,
          title: data[i].gymName,
          address: data[i].Address,
          photo: data[i].Photo,
          tel: data[i].Tel,
          icon: './Images/marker.png' // 替換default marker icon
        });


        marker.addListener('click', function () {
          // 清除上一次的點擊（關閉infoWindow）
          infoWindow.close();

          // 顯示場館所有資訊
          infoWindow.setContent('<h3>' + this.title + '</h3><strong><p>地址：' + this.address +
              '</strong><p><strong>電話：' + this.tel + '<strong></p>' + '</p><img class="info-window-img" src="' +
              this.photo + '"><br><button onclick="window.open(\'https://www.google.com/maps/search/?api=1&query=' +
              this.position.lat() + ',' + this.position.lng() + '\')">在google地圖中開啟</button>');
          infoWindow.open(map, this);
        });
        markers.push(marker);
      }

      //設置鍵盤事件按下enter切換開啟或關閉所有marker
      document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {

          if (markers[0].getMap() === null) {

            for (var i = 0; i < markers.length; i++) {
              markers[i].setMap(map);
            }
          } else {

            for (var i = 0; i < markers.length; i++) {
              markers[i].setMap(null);
            }
          }
        }
      });

      // 加入標記叢集
      var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
      });
    }
  };
  request.send();
}
