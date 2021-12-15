$(document).ready(function(){
    var buttonBuscar = document.querySelector('.buttonBuscar');
    //Se añade el onClick al botón de buscar
    buttonBuscar.addEventListener('click', function () {
        var buscando = $('.buscar').val();
        var searches=[];
        var urls=[];
        var searchesParsed="";
        var urlsParsed="";
        //Se carga el xml con el contenido de la página
        $.get("https://sarav22.github.io/personalWebPage2/search.xml", function(data){
            var result= $(data).find(":contains("+buscando+")");
            var html="";
            for(var i=0; i<result.length; i++){
                if($(result[i]).attr("name") != undefined){
                    html=$(result[i]).attr("name");
                }
                if(result[i].localName=="p"|| result[i].localName == "h1"|| result[i].localName == "h2"|| result[i].localName == "h3" || result[i].localName=="th"  || result[i].localName=="td"){
                   console.log(result)
                    searches.push(result[i].innerHTML);
                    urls.push(html);
                }
            } 
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
        });
        
    });
});