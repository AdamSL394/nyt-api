$(document).ready(function () {


    $("#search").on('click', function () {
        event.preventDefault();
        
        var search = $("#search-term").val();
        var numRecords = $("#records").val();
        var startYear = $("#start-year").val();
        var endYear = $("#end-year").val();

        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&begin_date" + startYear + "0101&" + endYear + "1231&api-key=BmUf3hV7OkaApowwZneCdxKXANpGPD9m";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            for (var i = 0; i < numRecords; i++){
                var topArticles = $("<div>");
                var name = $("<h1>").text(response.response.docs[i].headline.main);
                var articleName = $("<div>").append(name);
                var articleSum = $("<div>").text(response.response.docs[i].snippet);
                var link = $("<a>").attr('href', response.response.docs[i].web_url);
                link.text("Article Link");
                var articleLink = $("<div>").append(link);
                topArticles.append(articleName, articleSum, articleLink);
                $("#results").append(topArticles);
            }
        });
    });

    $("#clear-result").on('click', function () {
        event.preventDefault();

        $("#results").empty();
    });
});
