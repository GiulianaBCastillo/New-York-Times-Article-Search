$("#startBtn").on("click", ".movie", function (event) {
    const movieButton = $(event.target);
    const movieName = movieButton.attr("data-movie");
    const queryURL = 'https://www.omdbapi.com/?t="' + movieName + '"&apikey=';