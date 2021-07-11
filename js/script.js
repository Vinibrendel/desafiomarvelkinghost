var api_p1 = "https://gateway.marvel.com/v1/public/characters/1009368?ts=1&apikey=0ba85b13f43cf05cc5428fd4a24cbace&hash=5ddc9f14785586ad7dca327636839ed2";

$.ajax({
    type: "GET",
    url: api_p1,
    dataType: "json",
    success: function(dados_p1){
        var nome_p1 = dados_p1.data.results[0]["name"];
        var biografia_p1 = dados_p1.data.results[0]["description"];
        var imagem_p1 = dados_p1.data.results[0].thumbnail["path"]+"."+dados_p1.data.results[0].thumbnail["extension"];
        var historia_1_p1 = dados_p1.data.results[0].comics.items[7].name;
        var historia_2_p1 = dados_p1.data.results[0].comics.items[8].name;
        $("#nome_p1").html(nome_p1);
        $("#biografia_p1").html(biografia_p1);
        $("#historia_1_p1").html(historia_1_p1);
        $("#historia_2_p1").html(historia_2_p1);
        $("#imagem_p1").attr("src", imagem_p1);

        
    }
})


var api_p2 = "https://gateway.marvel.com/v1/public/characters/1009220?ts=1&apikey=0ba85b13f43cf05cc5428fd4a24cbace&hash=5ddc9f14785586ad7dca327636839ed2";

$.ajax({
    type: "GET",
    url: api_p2,
    dataType: "json",
    success: function(dados_p2){
        var nome_p2 = dados_p2.data.results[0]["name"];
        var biografia_p2 = dados_p2.data.results[0]["description"];
        var imagem_p2 = dados_p2.data.results[0].thumbnail["path"]+"."+dados_p2.data.results[0].thumbnail["extension"];
        var historia_1_p2 = dados_p2.data.results[0].comics.items[14].name;
        var historia_2_p2 = dados_p2.data.results[0].comics.items[15].name;
        $("#nome_p2").html(nome_p2);
        $("#biografia_p2").html(biografia_p2);
        $("#imagem_p2").attr("src", imagem_p2);
        $("#historia_1_p2").html(historia_1_p2);
        $("#historia_2_p2").html(historia_2_p2);

        console.log(dados_p2.data.results[0].comics.items);

       }
})