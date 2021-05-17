$('#formlogin').submit(function(e){
  e.preventDefault();
 var usuario = $.trim($("#usuario").val());
 var password =$.trim($("#password").val());
 
 if(usuario.length == "" || password == ""){
  Swal.fire({
      icon:'warning',
      title:'Ingrese Usuario y/o password',
  });
  return false;
}else{
    $.ajax({
        url:"bd/login.php",
        type:"POST",
        datatype: "json",
        data: {usuario:usuario, password:password},
        success:function(data){
            if(data == "null"){
             Swal.fire({
                 icon:'error',
                 title:'Usuario y/o password incorrecto',
             });
            }else{
                Swal.fire({
                    icon:'success',
                    title:'!Conexion exitosa¡',
                    confirmButtonColor:'#a5dc86',
                    confirmButtonText:'Ingresar'
              }).then((result) => {
                    window.location.href = "dash_2021/index.php";                          
              })
              }
        }
   });
}

});