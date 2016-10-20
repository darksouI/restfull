$(document).ready(function() {

    $("#search").submit(function(event){
      event.preventDefault();
    });

    var titolo = $("input[name='titolo']").val();
    $.ajax({
      url: 'http//:www.omdbapi.com/?s='+ titolo,
      method: 'GET'
    }).then(function(data) {
      console.log(data);
    });

});
