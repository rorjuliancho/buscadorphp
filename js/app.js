$(document).ready(function() {
  $( "#mostrarTodos" ).click(function(e) {
    var cad = "";
    $.ajax({
      url:'data-1.json',
      dataType:'json',
      success:function(data){
          for(d in data){
            // console.log(data[d].Direccion);
            // console.log(data[d].Ciudad);
            // console.log(data[d].Telefono);
            // console.log(data[d].Codigo_Postal);
            // console.log(data[d].Tipo);
            // console.log(data[d].Precio);
              cad+=("<div class='row'>"+
                      "<div class='col-sm-6 col-md-6 colorbackground'>" +
                          "<img class='imgforsale' src='http://localhost/proyecto%20nextu/buscadorphp/img/home.jpg'>"+
                        "</div>"+
                        "<div class='col-sm-6 col-md-6 colorbackground'>" +
                          "<div class='thumbnail'>"+
                            "<div class='caption'>"+
                              "</br>"+
                              "<p><b> Dirección: </b>"+data[d].Direccion+"</p>"+
                              "<p> " + data[d].Ciudad + "...</p>"+
                              "<p><a href='#' class='btn btn-success' role='button'>Ver post</a></p>"+
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
