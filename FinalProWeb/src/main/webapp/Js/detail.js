$(function () {
    //獲取url的參數
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //創立一個含有目標參數正規表達式的物件
        var r = window.location.search.substr(1).match(reg);  //匹配目標參數
        if (r != null) return unescape(r[2]);
        return null; //返回參數
    }

    //接收URL中的參數id
    var id = getUrlParam('id');
    console.log('id:' + id);

    $.ajax({
        type: 'get',
        url: 'viewPostv1',
        dataType: 'json',
        success: function (res, status) {
            console.log(status)
            $.each(res, function (idx, val) {
                //根據id獲取相對資訊
                if (id == val.id) {
                    var str = "<img src='" + val.pic + "'/><p>團名：" + val.activityTitle + "</p><p>揪團資訊：" + val.description + "</p><p>日期：" + val.activityTime + "</p><p>地點：" + val.locationSub + "</p><p>等級：" + val.level + "</p>";
                    console.log('index:' + idx);
                }
                $('.detail').append(str);
            });
        }
    })
})
