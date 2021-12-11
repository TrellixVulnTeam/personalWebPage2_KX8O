$(document).ready(function(){
    var htmls = ["musica.html", "index.html", "libros.html", "aficiones.html"];
    var buttonBuscar = document.querySelector('.buttonBuscar');

    //Se añade el onClick al botón de buscar
    buttonBuscar.addEventListener('click', function () {
        var buscando = $('.buscar').val();
        var searches=[];
        var urls=[];
        var searchesParsed="";
        var urlsParsed="";

        for(var i=0; i < htmls.length; i++){
            $.get("https://sarav22.github.io/personalWebPage2/"+htmls[i], function(data){
                
                var fileDom = $(data);
                var result= fileDom.val();
               var result2= fileDom.$(":contains("+buscando+")");
                console.log(result);
                console.log(result2);

                fileDom.find('h2').each(function(){
                    console.log($(this).text());

                });/*
                //Se guardan los resultados en un array y las url de dichos resultados
                for(var j=0; j<result.length; j++){
                    if(result[j].localName=="p"|| result[j].localName == "h1"|| result[j].localName == "h2"|| result[j].localName == "h3" || result[j].localName=="table"){
                        searches.push(result[j].innerHTML);
                        urls.push(htmls[i]);
                    }
                }*/
            });
        }
  /*      //Se pasan los resultados encontrados a una string separada por ; para poder parsearla posteriormente
        //ya que la que se genera por defecto es con , y no se parsearía porque el texto contiene comas.
        for(var i=0; i<searches.length; i++){
            if(i==searches.length-1){
                searchesParsed= searchesParsed + searches[i];
                urlsParsed= urlsParsed + urls[i];
            }else{
                searchesParsed= searchesParsed + searches[i] + ";";
                urlsParsed= urlsParsed + urls[i] + ";";
            }
        }
        //Se guardan en localStorage las variables
        localStorage.setItem("busqueda", buscando);
        localStorage.setItem("searches", searchesParsed);
        localStorage.setItem("urls", urlsParsed);
        //Se redirige a la página donde se mostrarán los resultados encontrados
      //  window.location.href = "resultado.html"; */
    });
});