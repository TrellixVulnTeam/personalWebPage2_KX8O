$(document).ready(function(){
   
   
    var buttonBuscar = document.querySelector('.buttonBuscar');
    //Se añade el onClick al botón de buscar
    buttonBuscar.addEventListener('click', function () {
        $.get("file:///C:/Users/sveci/OneDrive/Escritorio/MIW/UAAW/PersonalWebPageBulma/aficiones.html", function(data){
            var fileDom = $(data);
            fileDom.find('h2').each(function(){
                console.log($(this).text());
            });
        });

         /** 
        var buscando = $('.buscar').val();
        var result= $("*:contains("+buscando+")");
        var searches=[];
        var urls=[];
        //Se guardan los resultados en un array y las url de dichos resultados
        for(var i=0; i<result.length; i++){
            if(result[i].localName=="p"|| result[i].localName == "h1"|| result[i].localName == "h2"|| result[i].localName == "h3" || result[i].localName=="table"){
                searches.push(result[i].innerHTML);
                var location= window.location.toString().split("/")
                urls.push(location[location.length-1]);
            }
        }
        var searchesParsed="";
        var urlsParsed="";
        //Se pasan los resultados encontrados a una string separada por ; para poder parsearla posteriormente
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
        window.location.href = "resultado.html"; 
        */
    });
});