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
                    $('#activityTitle').text(val.activityTitle);
                    $('#pic').attr('src', val.pic);
                    $('#location').text(val.location);
                    $('#activityTime').text(val.activityTime);
                    $('#min').text(val.min);
                    $('#max').text(val.max);
                    $('#contact').text(val.contact);
                    $('#reservation').text(val.reservation== 1 ? '已預約' : '未預約');
                    $('#level').text(val.level);
                    $('#description').text(val.description);
                }
            });
        }
    })
})
