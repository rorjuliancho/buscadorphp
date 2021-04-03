$(document).ready(function() {
  $( "#mostrarTodos" ).click(function(e) {
    var cad = "";
    $.ajax({
      url:'data-1.json',
      dataType:'json',
      success:function(data){
          for(d in data){
            console.log(data[d].Ciudad);
                  cad+=("<div class='row'>"+
                          "<div class='col-sm-6 col-md-6 colorbackground'>" +
                              "<img class='imgforsale' src='http://localhost/proyecto%20nextu/buscadorphp/img/home.jpg'>"+
                            "</div>"+
                            "<div class='col-sm-6 col-md-6 colorbackground'>" +
                              "<div class='thumbnail'>"+
                                "<div class='caption'>"+
                                  "</br>"+
                                  "<p><b> Dirección: </b>"+data[d].Direccion+"</p>"+
                                  "<p><b> ciudad: </b> " + data[d].Ciudad + "</p>"+
                                  "<p><b> Teléfono: </b> " + data[d].Telefono + "</p>"+
                                  "<p><b> Código Postal: </b> " + data[d].Codigo_Postal + "</p>"+
                                  "<p><b> Tipo: </b> " + data[d].Tipo + "</p>"+
                                  "<p><b> Precio: </b> " + data[d].Precio + "</p>"+
                                  "<hr>"+
                                  "<p class='alingright'><a href='#' class='btn btn-success' role='button'>Ver post</a></p>"+
                                "</div>"+
                              "</div>"+
                            "</div>"+
                        "</div>"
                      );
              }
               $('#contenedor').html(cad);
          }
      });
   });

   $( "form" ).submit(function( event ) {
      var dataArray = $( this ).serializeArray();
      dataObj = {};
      $(dataArray).each(function(i, field){
        dataObj[field.name] = field.value;
      });
     var cad = "";
     $.ajax({
       url:'data-1.json',
       dataType:'json',
       success:function(data){
        const datacity = data.filter((d => d.Ciudad === dataObj['ciudad']) || (d => d.Tipo === dataObj['Tipo']) || (d => d.precio === dataObj['precio']));
        console.log(datacity);
           for(d in datacity){
                   cad+=("<div class='row'>"+
                           "<div class='col-sm-6 col-md-6 colorbackground'>" +
                               "<img class='imgforsale' src='http://localhost/proyecto%20nextu/buscadorphp/img/home.jpg'>"+
                             "</div>"+
                             "<div class='col-sm-6 col-md-6 colorbackground'>" +
                               "<div class='thumbnail'>"+
                                 "<div class='caption'>"+
                                   "</br>"+
                                   "<p><b> Dirección: </b>"+datacity[d].Direccion+"</p>"+
                                   "<p><b> ciudad: </b> " + datacity[d].Ciudad + "</p>"+
                                   "<p><b> Teléfono: </b> " + datacity[d].Telefono + "</p>"+
                                   "<p><b> Código Postal: </b> " + datacity[d].Codigo_Postal + "</p>"+
                                   "<p><b> Tipo: </b> " + datacity[d].Tipo + "</p>"+
                                   "<p><b> Precio: </b> " + datacity[d].Precio + "</p>"+
                                   "<hr>"+
                                   "<p class='alingright'><a href='#' class='btn btn-success' role='button'>Ver post</a></p>"+
                                 "</div>"+
                               "</div>"+
                             "</div>"+
                         "</div>"
                       );
              }
               $('#contenedor').html(cad);
           }
       });
  });
});
