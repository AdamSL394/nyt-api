
// $("#search").on("click",function(){

//     console.log("hi")

// var search = $(this).attr("data-type");


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=search&fq=pub_year:(2018)&api-key=BmUf3hV7OkaApowwZneCdxKXANpGPD9m"


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
