function getPokemon() {
  //   fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }

  $.ajax({
    url: "https://freetestapi.com/api/v1/movies/1",
    method: "GET",
    success: function (data) {
      console.log(data);
      //   console.log(respuesta.name);
      //   console.log(respuesta.height);
    },
    error: function (error) {
      console.log(error);
    },
  });
}
