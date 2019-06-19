
// create an array to push our theme into
var animals = ["moose","elk", "deer"]

console.log(animals)

$("#addAnimal").on("click", function(event){
    event.preventDefault();
    //This line grabs the input from the textbox
    var animal = $("#animal-input").val();
    var newButton = $("<button></button>");
    newButton.attr("id", "gifBtn");
    newButton.attr("data-name", animal);

    newButton.text(animal);

    $("#animalButtons").append(newButton);
  
})
// add ajax into a funtion

$("#animalButtons").on("click", "#gifBtn" , function(event){
    event.preventDefault(); 

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
        var bootstrapTest = $(``)
        var gifContainer = $(`<div>`
        );
        gifContainer.attr("class", "card");
        
        var gifImage = $("<img>");
        gifImage.attr("class", "card-body")
        gifImage.attr("data-still", result[i].images.fixed_height_still.url);
        gifImage.attr("data-animated", result[i].images.fixed_height.url);
        gifImage.attr("src", result[i].images.fixed_height.url);
        gifImage.attr("data-state", "animated");
        gifContainer.append(gifImage);
        
        gifImage.attr("id", "gifImg");
        
        gifContainer.append(gifImage);
        
        $("#gifs").prepend(gifContainer);
        console.log(gifImage);
    }
    
})
})
$('#gifs').on("click", '#gifImg', function(event){
    event.preventDefault();
    console.log($(this));
    var state = $(this).attr("data-state");
    var stillImg = $(this).attr('data-still')
    var animatedImg = $(this).attr('data-animated')
        if (state === "animated") {
            $(this).attr("src", stillImg);
            $(this).attr("data-state", "still");
        }else{
            $(this).attr("src", animatedImg);
            $(this).attr("data-state", "animated");
        }
        //else animate it again
})


// input an animal