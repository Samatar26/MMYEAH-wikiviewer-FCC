
$(document).ready(function() {
  $("#searchButton").click(function() {
    var searchTerm = $("#searchBar").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?"
    
    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data){
        $("#resultContainer").html("");
        for(var i=0; i<=data[1].length; i++ ){
          if(data[3][i] !== undefined){
            $("#resultContainer").prepend("<li><a target=\"_blank\"href= "+ data[3][i]+">"+data[1] [i]+"</a><p>"+data[2][i]+"</p></li>");
          }
      }
      },
      error: function(errorMessage){
        alert("Error");
      } 
    });
  });
});

$('#searchBar').keypress(function(e) {
  if ( e.which == 13 ) {
    $("#searchButton").click();
  }
});