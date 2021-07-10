var url_api = "https://gateway.marvel.com/v1/public/characters/1009368?ts=1&apikey=0ba85b13f43cf05cc5428fd4a24cbace&hash=5ddc9f14785586ad7dca327636839ed2";

$.ajax({
    type: "GET",
    url: url_api,
    dataType: "json",
    success: function(dados){

        var nome = dados.data.results[0]["name"];

        console.log(nome);

        

       
    }
})