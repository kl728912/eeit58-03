$(function () {
    function loadData(sortBy) {
        $.ajax({
            type: 'get',
            url: 'viewPostv1',
            dataType: 'json',
            data: { sortBy: sortBy, sortOrder: "asc" },
            success: function (data) {
                init('pagination', 10, 5, data);
            },
            error: function () {
                alert("出错啦！");
            }
        });
    }

    // Load data on page load
    loadData($("#sort-by").val());

    // Bind change event to select element
    $("#sort-by").change(function () {
        loadData($(this).val());
    });

    function init(id, count, num, data) {
        $('.oPage').twbsPagination({
            totalPages: num,
            startPage: 1,
            visiblePages: count,
            first: '首页',
            prev: '前一页',
            next: '下一页',
            last: '尾页',
            onPageClick: function (event, page) {
                console.log(page);
                $('.joinTeam-card-group').empty();

                var sortedData = data.slice().sort(function (a, b) {
                    if ($("#sort-by").val() === "activityTitle") {
                        return a.activityTitle.localeCompare(b.activityTitle);
                    } else if ($("#sort-by").val() === "activityTime") {
                        return new Date(a.activityTime) - new Date(b.activityTime);
                    } else if ($("#sort-by").val() === "locationSub") {
                        return a.locationSub.localeCompare(b.locationSub);
                    } else {
                        return 0;
                    }
                });

                var str = "";
                $.each(sortedData.slice((page - 1) * count, page * count), function (idx, val) {
                    str += "<div class='card' style='width: 450px;''><a href='activity.html?id=" + val.id + "'><img src='" + val.pic + "'class='card-img-top'></a><div class='card-body'><h5 class='card-title'>" + val.activityTitle + "</h5><p class='card-text'>" + val.description + "</p></div>";
                    str += "<ul class='list-group list-group-flush'><li class='list-group-item'>" + val.activityTime + "</li><li class='list-group-item'>" + val.locationSub + "</li><li class='list-group-item'>" + val.level + "</li></ul>";
                    str += "<div class='card-body'><img src='" + val.Icon + "'style='width: 50px; height:50px; border-radius: 50%;'></a></div></div></div>";
                });
                $('.joinTeam-card-group').append(str);
            }
        })
    }
});