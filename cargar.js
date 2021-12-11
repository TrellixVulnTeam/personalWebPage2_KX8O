document.addEventListener('DOMContentLoaded', function () {
  //Se escribe el título con la búsqueda que se ha hecho
  $(".is-1").text("Búsqueda: \""+ localStorage.getItem("busqueda") + "\"");
  var searches = localStorage.getItem("searches").split(";");
  var url = localStorage.getItem("urls").split(";");
  //Se comprueba si se ha encontrado algún resultado
  if(localStorage.getItem("busqueda").trim() == "" || (searches.length==1 && searches[0] == "")){
    $("#search").append("<p>No se han encontrado resultados.</p>");
  }else{
    //Si hay resultados, se muestran junto con el enlace a la página donde se encuentran
    for(var i=0; i<searches.length; i++){
      $("#search").append("<p><strong>Resultado "+ (i+1) +" - <a class=\"has-text-danger\" href=\""+ url[i]+"\">"+ url[i]+"</a></strong></p>");
      $("#search").append("<p>\""+searches[i]+"\"</p><br>");
    
    }
  }
});