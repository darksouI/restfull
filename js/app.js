$(document).ready(function() {

    $("#search").submit(function(event){
      event.preventDefault();

      $.LoadingOverlay("show", {
        fontawesome: "fa fa-spinner fa-spin"
      });


    var titolo = $("input[name='titolo']").val();
    $.ajax({
      url: 'http://www.omdbapi.com/?s='+ titolo,
      method: 'GET'
    }).then(function(data) {
        var tr = "";
        for (var i = 0; i < data.Search.length; i++) {
            var obj = data.Search[i];
            tr += "<tr"+obj.Title+">";
            if (obj.Poster == 'N/A') {
              tr +='<td class="col-sm-2"><img class="img" src="http://placehold.it/350x150"/></td>'
            }else{
            tr +="<td class='col-sm-2'><img class='img' src='" + obj.Poster + "'/></td>";
          }
          tr +="<td class='col-sm-2'>" + obj.Year + "</td>";
          tr +="<td class='col-sm-2'>" + obj.imdbID + "</td>";
          tr +="<td class='col-sm-2'>" + obj.Type + "</td>";
            tr +="</tr>";

            //console.log(tr);
            $.LoadingOverlay("hide");
        }
        $("#tb_imdb").html(tr);
      //console.log(data);
  });
    });



});
