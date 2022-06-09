//movie api url
//https://api.themoviedb.org/3/search/movie?api_key=1de8557f26f4d177fcb5b21811677161&language=en-US&query=findingdory

//movie poster url
//https://image.tmdb.org/t/p/w500${moviePosterData}

//www.omdbapi.com/?i=tt3896198&apikey=31e08450

// https://api.themoviedb.org/3/search/movie?api_key=1de8557f26f4d177fcb5b21811677161&language=en-US&query=matilda

//declare global variables

//include a click handler for search bar
http: $(".submit").click(function () {
  let userinput = $(".searchInput").val();
  let apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=1de8557f26f4d177fcb5b21811677161&language=en-US&query=${userinput}`;
  let imageUrl = "https://www.themoviedb.org/t/p/original"
  
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      $(".Movie").text(data.results[0].title)
    let fullImageUrl = imageUrl + data.results[0].poster_path;
    console.log(fullImageUrl);
      $(".moviePoster").html(`<img src="${fullImageUrl}">`)
    $(".release").text(data.results[0].release_date)
    
   $(".lore").text(data.results[0].overview)
    $(".rating").text(data.results[0].vote_average)
    });
      
  //https://www.themoviedb.org/t/p/original/t3HVA7XdVnQneMjI5hYjEhXmHY3.jpg
    
    });

//save user input for city
//save user input for state

//update movie api

//add fetch request using movie api

//then with function that returns an api response in json

//then with function that displays data to page
//loop over data to show multiple movies
