$(document).ready(function () {


//     console.log("hi")

// var search = $(this).attr("data-type");

$(document).ready(function() {
    $("#search").on("click", function(event) {
        event.preventDefault();
        var search = $("#search-term").val().trim();
        var startYear = $("#start-year").val().trim();
        var endYear = $("#end-year").val().trim();
        var records = $("#records").val()

        var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=BmUf3hV7OkaApowwZneCdxKXANpGPD9m`;
        if (search) queryURL += ("&q="+search);
        if (startYear) queryURL += ("&fq="+startYear+"0101");
        if (endYear) queryURL += ("&fq="+endYear+"0101");
        if (records) queryURL += ("&fl="+records);
        
        console.log(queryURL);
        //https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=BmUf3hV7OkaApowwZneCdxKXANpGPD9m&q=a&fq=1900&fq=2019&fq=2

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
