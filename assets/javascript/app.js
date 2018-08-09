var search = '';
var qty = 0;
var year_start = '20120306';
var year_end = '20180808';
$('#runSearch').on('click', function (event) {
    event.preventDefault();

    //clear container
    //$('#cartoonsView').html("");     

    // This line of code will grab the input from the textbox
    var topic = $('#searchTerm').val().trim();
    console.log(topic);
    var search = topic;
    lookup(topic);
});

var lookup = function (searching) {

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searching + "&begin_data=" + year_start + "&end_date=" + year_end + "&page=" + qty + "&api-key=768c58e582c1484ab1b6d5bbccf54dd5";
    console.log(url);

    // var url = "http://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?api-key=768c58e582c1484ab1b6d5bbccf54dd5&q=help&begin_date=20120306&end_date=20180808&page=0"
    $.ajax({
        url: url,
        method: 'GET',
    }).then(function (result) {
        console.log(result);
        var results = result.response.docs;
        console.log(results);
        for (var i = 0; i < results.length; i++) {
            console.log(i);
            var nytDiv = $("<div>");
            var p = $("<p>").text(results[i].headline.main);
            nytDiv.append(p);
            // $("#gifs-appear-here").prepend(nytDiv);
            $("#wellSection").prepend(nytDiv);
        }
});
}
