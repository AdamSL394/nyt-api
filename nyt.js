$(document).ready(function() {
    $("#search").on("click", function(event) {
        event.preventDefault();
        var search = $("#search-term").val().trim();
        var startYear = $("#start-year").val().trim();
        var endYear = $("#end-year").val().trim();
        var records = $("#records").val()

        var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=BmUf3hV7OkaApowwZneCdxKXANpGPD9m`;
        if (search) queryURL += ("&q="+search);
        if (startYear) queryURL += ("&fq="+startYear);
        if (endYear) queryURL += ("&fq="+endYear);
        if (records) queryURL += ("&fl="+records);
        
        console.log(queryURL);

        $.ajax({
            url:queryURL,
            method:"GET"
        }).then(function(response){
            console.log(response);
            var result=(response.response.docs)

            for(var i = 0; i <result.length; i++){
                var div = $("<div>");
                
                $("#results").text(result[i].headline.main);
            }
            var title;
        })

    })
});
