$(function () {
    $.ajax({
        type: "get",
        url: "viewPostv1",
        dataType: "json",
        success: function (res) {
            var str = "";
            //遍歷JSON的Data渲染(append)到頁面上
            $.each(res, function (idx, val) {
                    if (idx < 4) {
                        str += "<div class='card' style='width: 450px;''><a href='activity.html?id=" + val.id + "'><img src='" + val.pic + "'class='card-img-top'></a><div class='card-body'><h5 class='card-title'>" + val.activityTitle + "</h5><p class='card-text'>" + val.description + "</p></div>";
                        str += "<ul class='list-group list-group-flush'><li class='list-group-item'>" + val.activityTime + "</li><li class='list-group-item'>" + val.locationSub + "</li><li class='list-group-item'>" + val.level + "</li></ul>";
                        str += "<div class='card-body'><img src='" + val.icon + "'style='width: 50px; height:50px; border-radius: 50%;'></a></div></div></div>";
                    }
            });

            $('.joinTeam-card-group').append(str);
        },
        error: function () {
            alert(error);
        }
    });
});