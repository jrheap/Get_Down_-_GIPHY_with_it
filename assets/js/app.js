
// create an array to push our theme into
var animals = ["moose","elk", "deer"]

console.log(animals)

$("#addAnimal").on("click", function(event){
    event.preventDefault();
    //This line grabs the input from the textbox
    var animal = $("#animal-input").val();
    var newButton = $("<button></button>");
    newButton.attr("id", "gifBtn");
    newButton.text(animal);

    $("#animalButtons").append(newButton);
  
})
// add ajax into a funtion

// $("#gifBtn").on("click", function(event){
//     event.preventDefault(); 

// grab the data of the 
var animal = $(this).attr("data-name");
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=Zbah1NjzGiKa97byAt6oYHiboUwVFi94&limit=10";

$.ajax ({
    url: queryURL,
    method: "GET",
}).then(function(response){

    var result = (response.data);
    console.log(result);

    for (var i = 0; i < result.length; i++) {

        var gifContainer = $("<div>");
        gifContainer.attr("class", "container");

        var gifImage = $("<img>");
        gifImage.attr("src", result[i].images.fixed_height.url);
        
        gifContainer.append(gifImage);

        $("#gifs").append(gifContainer);
        $("#gifBtn").append(gifContainer);
        console.log(gifImage);
    }

})
// })


// input an animal