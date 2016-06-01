var operacion;
var valor1;
$(document).ready(function(){
    
   $(".num").click(function(){
       var numero = $(this).val();
       if ($("#edit1").val() == "0"){
           $("#edit1").val(numero);
       } else {
           $("#edit1").val($("#edit1").val() + numero);
       }
   });

   $(".operacion").click(function(){
       valor1 = parseFloat($("#edit1").val());
       $("#edit1").val("0");
       operacion = $(this).val();
   });

   $("#igual").click(function(){
       if (operacion == "+"){
           var valor2 = parseFloat($("#edit1").val());
           $("#edit1").val(valor1 + valor2);
       } else if (operacion == "-"){
           var valor2 = parseFloat($("#edit1").val());
           $("#edit1").val(valor1 - valor2);
       } else if (operacion == "X"){
           var valor2 = parseFloat($("#edit1").val());
           $("#edit1").val(valor1 * valor2);
       } else if (operacion == "/"){
           var valor2 = parseFloat($("#edit1").val());
           if (valor2 == 0){
               alert("Math Error");
           } else {
               $("#edit1").val(valor1 / valor2);
           }
       } else if (operacion == "%"){
           var valor2 = parseFloat($("#edit1").val());
           $("#edit1").val(valor1 % valor2);
       }
   });

   $("#clear").click(function(){
       $("#edit1").val("0");
   }); 
    
   $("#delete").click(function(){
       var s = $("#edit1").val();
       if (((s.length == 2) && (parseFloat($("#edit1").val()) < 0)) || ((s.length == 1) && (!$("#edit1").val() == "0"))){
           $("#edit1").val("0");
       } else if (s.length >= 2){
           $("#edit1").val(s.substring(0, s.length - 1));
       }
   });
   
   $("#punto").click(function(){
       var control = $("#edit1").val().indexOf(".");
       if (control == -1){
           $("#edit1").val($("#edit1").val() + ".");
       }
   }); 

   $("#signo").click(function(){
       $("#edit1").val(parseFloat($("#edit1").val()) * -1);
   });
    
});