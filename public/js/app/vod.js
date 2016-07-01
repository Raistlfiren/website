$(document).ready( function() {

    var apiKEY = process.env.YOUTUBE_API_KEY;

    var gyleID = 'UCzY7MBSgNLZOMxMIFwtf2bw';
    var brinkID = 'UCsNXeQxAP1OfDxvcP6Pw9gw';
    var zockID = 'UCK9yzeiZOnGLwT7dX8-lOrw';

    var order = "date";
    var parts = "snippet";
    var totalResults = 25;

    var url = "https://www.googleapis.com/youtube/v3/search?order=" + order + "&part=" + parts + "&channelId=" + gyleID + "&maxResults=" + totalResults + "&key=" + apiKEY;

    $.get(url, function(data) {
        console.log(data);
        $.each(data.items, function(index, value){
            var thumbnail = value.snippet.thumbnails.medium.url;
            console.log(index, value);
            $("#video").append("<div class='grid-item gyle' data-category='gyle'><img src='" + thumbnail + "' /></div>")
        });
    });

    $("#video").isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        filter: '*'
    });

});