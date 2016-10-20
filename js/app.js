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
            tr += "<tr title='"+obj.Title+"'>";
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
            $("thead").show();
            $("#table").show();
            $.LoadingOverlay("hide");
        }
        $("#tb_imdb").html(tr);
      //console.log(data);
  });
    });

      $('tbody').on("click", "tr", function(){
        var titleMovie = $(this).attr("title");

        $.ajax({
          url: 'http://www.omdbapi.com/?t='+ titleMovie,
          method: 'GET'
        }).then(function(data){
          //console.log(data);

          var p = "";
          p += "<p class='center'><img src='" + data.Poster + "'/></p>";
          p += "<p>"+data.Title+"</p>";
          p += "<p>"+data.Year+"</p>";
          p += "<p>"+data.imdbRating+"</p>";
          p += "<p>"+data.imdbVotes+"</p>";
          p += "<p>"+data.Runtime+"</p>";
          p += "<p>"+data.Genre+"</p>";
          p += "<p>"+data.Writer+"</p>";
          p += "<p>"+data.Actors+"</p>";
          p += "<p>"+data.Language+"</p>";
          p += "<p>"+data.Country+"</p>";

          $("#tb_dettaglio").html(p);
        });

        $("#table").hide("slow");
        $("#tb_dettaglio").show("slow");
      });

});
