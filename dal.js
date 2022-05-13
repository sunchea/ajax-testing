function getImage(pageNumber, successcCallback) {
    $.ajax(`https://repetitora.net/api/JS/images?page=${pageNumber}&count=1`, {
        success: function (data) {
            successcCallback(data);
        }
    });
}