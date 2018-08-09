var search = 'tron';
var qty = 0;
var year_start = '20120306';
var year_end = '20180808';

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&begin_data=" + year_start + "&end_date=" + year_end + "&page=" + qty + "&api-key=768c58e582c1484ab1b6d5bbccf54dd5";
// var url = "http://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?api-key=768c58e582c1484ab1b6d5bbccf54dd5&q=help&begin_date=20120306&end_date=20180808&page=0"
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

$()