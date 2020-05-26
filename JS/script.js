//index
function llena(){
    var id=document.getElementById('id').value;
    $.ajax({
       url:"https://jsonplaceholder.typicode.com/posts",
       type:'GET',
       dataType:'Json',
       success: function(respuesta){
           var salida=$('#salida');
           
           salida.append("<br>" +respuesta[id].id+'<br>'+respuesta[id].body+ "<br>" );
       },
       
       error:function(jqXHR,textStatus,errorThown){
           console.log("Error al realizar leer los datos");
       },
       complete:function(jqXHR, textStatus){
            alert("Funcion completada");
       }
    });
}

//index2
function llenarDatos(){
    var id=document.getElementById('id').value;
    $.ajax({
       url:" https://jsonplaceholder.typicode.com/albums",
       type:'GET',
       dataType:'Json',
       success: function(respuesta){
           var salida=$('#salida');
           
           salida.append("<br>" +respuesta[id].id+'<br>'+respuesta[id].title+ "<br>" );
       },
       
       error:function(jqXHR,textStatus,errorThown){
           console.log("Error al realizar leer los datos");
       },
       complete:function(jqXHR, textStatus){
            alert("Funcion completada");
       }
    });
}

//index3
function llenaJson(){
    var id=document.getElementById('id').value;
    $.ajax({
       url:"https://jsonplaceholder.typicode.com/photos", 
       type:'GET',
       dataType:'JSON',
     
      success: function(respuesta){
           var salida=$('#salida');
           
           salida.append("<br>" +respuesta[id].albumId+'<br>'+respuesta[id].id+ "<br>" 
                   +respuesta[id].title+ "<br>" +respuesta[id].url+ "<br><img src="+respuesta[id]
                   .thumbnailUrl+"/></div>");
       },
       
       error:function(jqXHR,textStatus,errorThown){
           console.log("Error a realizar leer los datos");
       },
       complete:function(jqXHR, textStatus){
            alert("Funcion completada");
       }
    });
  
}

//index4
function llenarJson(){
    var id=document.getElementById('id').value;
    $.ajax({
       url:"https://jsonplaceholder.typicode.com/users", 
       type:'GET',
       dataType:'JSON',
     
      success: function(respuesta){
           var salida=$('#salida');
           
           salida.append("<br>" +respuesta[id].id+'<br>'+respuesta[id].name+ "<br>" 
                   +respuesta[id].username+ "<br>" +respuesta[id].email);
       },
       
       error:function(jqXHR,textStatus,errorThown){
           console.log("Error a realizar leer los datos");
       },
       complete:function(jqXHR, textStatus){
            alert("Funcion completada");
       }
    });
  
}