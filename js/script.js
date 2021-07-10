var api_p1 = "https://gateway.marvel.com/v1/public/characters/1009368?ts=1&apikey=0ba85b13f43cf05cc5428fd4a24cbace&hash=5ddc9f14785586ad7dca327636839ed2";

$.ajax({
    type: "GET",
    url: api_p1,
    dataType: "json",
    success: function(dados){
        var nome_p1 = dados.data.results[0]["name"];
        var biografia_p1 = dados.data.results[0]["description"];
        var imagem_p1 = dados.data.results[0].thumbnail["path"]+"."+dados.data.results[0].thumbnail["extension"];
        $("#nome_p1").html(nome_p1);
        $("#biografia_p1").html(biografia_p1);
        $("#imagem_p1").attr("src", imagem_p1);
    }
})


var api_p2 = "https://gateway.marvel.com/v1/public/characters/1009368?ts=1&apikey=0ba85b13f43cf05cc5428fd4a24cbace&hash=5ddc9f14785586ad7dca327636839ed2";

$.ajax({
    type: "GET",
    url: api_p2,
    dataType: "json",
    success: function(dados){
        var nome_p2 = dados.data.results[0]["name"];
        var biografia_p2 = dados.data.results[0]["description"];
        var imagem_p2 = dados.data.results[0].thumbnail["path"]+"."+dados.data.results[0].thumbnail["extension"];
        $("#nome_p2").html(nome_p2);
        $("#biografia_p2").html(biografia_p2);
        $("#imagem_p2").attr("src", imagem_p2);
    }
})