$(document).ready(function() {

    $("#search").submit(function(event){
      event.preventDefault();


    var titolo = $("input[name='titolo']").val();
    $.ajax({
      url: 'http://www.omdbapi.com/?s='+ titolo,
      method: 'GET'
    }).then(function(data) {
        var tr = "";
        for (var i = 0; i < data.Search.length; i++) {
            var obj = data.Search[i];
            tr += "<tr"+obj.Title+">";
            tr +="<td>" + obj.Year + "</td>";
            tr +="<td>" + obj.imdbID + "</td>";
            tr +="<td>" + obj.Type + "</td>";
            if (obj.Poster == 'N/A') {
              tr +='<td><img class="img" src="http://placehold.it/350x150"/></td>'
            }else{
            tr +="<td><img class='img' src='" + obj.Poster + "'/></td>";
          }
            tr +="</tr>";

            //console.log(tr);
            //$.LoadingOverlay("hide");
        }
        $("#tb_imdb").html(tr);
      //console.log(data);
  });
    });

});
